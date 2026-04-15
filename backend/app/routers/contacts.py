"""
Prince Public School — Contacts API Router
Endpoints for managing contact form submissions.
"""
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session

from ..database import get_db
from ..models import ContactMessage
from ..schemas import ContactMessageCreate, ContactMessageResponse

router = APIRouter(prefix="/api/contact", tags=["Contact"])


@router.post(
    "/messages",
    response_model=ContactMessageResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Submit a contact message (Public)",
)
def create_message(data: ContactMessageCreate, db: Session = Depends(get_db)):
    """
    Public endpoint — Allows visitors to submit a contact form message
    from the website's Contact page.
    """
    message = ContactMessage(
        name=data.name,
        email=data.email,
        phone=data.phone,
        subject=data.subject,
        message=data.message,
    )
    db.add(message)
    db.commit()
    db.refresh(message)
    return message


@router.get(
    "/messages",
    response_model=list[ContactMessageResponse],
    summary="List all contact messages (Admin)",
)
def list_messages(
    is_read: bool | None = Query(None, description="Filter by read status"),
    skip: int = Query(0, ge=0),
    limit: int = Query(50, ge=1, le=100),
    db: Session = Depends(get_db),
):
    """Admin endpoint — Returns a paginated list of contact messages."""
    query = db.query(ContactMessage).order_by(ContactMessage.created_at.desc())

    if is_read is not None:
        query = query.filter(ContactMessage.is_read == is_read)

    return query.offset(skip).limit(limit).all()


@router.patch(
    "/messages/{message_id}/read",
    response_model=ContactMessageResponse,
    summary="Mark message as read (Admin)",
)
def mark_as_read(message_id: int, db: Session = Depends(get_db)):
    """Admin endpoint — Marks a contact message as read."""
    message = db.query(ContactMessage).filter(ContactMessage.id == message_id).first()
    if not message:
        raise HTTPException(status_code=404, detail="Message not found")

    message.is_read = True
    db.commit()
    db.refresh(message)
    return message
