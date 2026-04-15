"""
Prince Public School — Admissions API Router
CRUD endpoints for managing admission inquiries.
"""
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from typing import Optional

from ..database import get_db
from ..models import AdmissionInquiry
from ..schemas import AdmissionInquiryCreate, AdmissionInquiryResponse, AdmissionStatusUpdate

router = APIRouter(prefix="/api/admissions", tags=["Admissions"])


@router.post(
    "/inquiries",
    response_model=AdmissionInquiryResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Submit a new admission enquiry",
)
def create_inquiry(data: AdmissionInquiryCreate, db: Session = Depends(get_db)):
    """
    Public endpoint — Allows parents to submit an admission enquiry
    from the website's Admission page form.
    """
    inquiry = AdmissionInquiry(
        student_name=data.student_name,
        parent_name=data.parent_name,
        email=data.email,
        phone=data.phone,
        class_applying=data.class_applying,
        previous_school=data.previous_school,
        address=data.address,
        message=data.message,
    )
    db.add(inquiry)
    db.commit()
    db.refresh(inquiry)
    return inquiry


@router.get(
    "/inquiries",
    response_model=list[AdmissionInquiryResponse],
    summary="List all admission inquiries (Admin)",
)
def list_inquiries(
    status_filter: Optional[str] = Query(None, alias="status", description="Filter by status"),
    skip: int = Query(0, ge=0),
    limit: int = Query(50, ge=1, le=100),
    db: Session = Depends(get_db),
):
    """
    Admin endpoint — Returns a paginated list of all admission inquiries.
    Optionally filtered by status (pending, reviewed, contacted, admitted).
    """
    query = db.query(AdmissionInquiry).order_by(AdmissionInquiry.created_at.desc())

    if status_filter:
        query = query.filter(AdmissionInquiry.status == status_filter)

    return query.offset(skip).limit(limit).all()


@router.get(
    "/inquiries/{inquiry_id}",
    response_model=AdmissionInquiryResponse,
    summary="Get a specific admission inquiry (Admin)",
)
def get_inquiry(inquiry_id: int, db: Session = Depends(get_db)):
    """Admin endpoint — Returns details of a specific admission inquiry."""
    inquiry = db.query(AdmissionInquiry).filter(AdmissionInquiry.id == inquiry_id).first()
    if not inquiry:
        raise HTTPException(status_code=404, detail="Inquiry not found")
    return inquiry


@router.patch(
    "/inquiries/{inquiry_id}",
    response_model=AdmissionInquiryResponse,
    summary="Update inquiry status (Admin)",
)
def update_inquiry_status(
    inquiry_id: int,
    data: AdmissionStatusUpdate,
    db: Session = Depends(get_db),
):
    """Admin endpoint — Updates the status of an admission inquiry (e.g., pending → reviewed)."""
    inquiry = db.query(AdmissionInquiry).filter(AdmissionInquiry.id == inquiry_id).first()
    if not inquiry:
        raise HTTPException(status_code=404, detail="Inquiry not found")

    inquiry.status = data.status
    db.commit()
    db.refresh(inquiry)
    return inquiry
