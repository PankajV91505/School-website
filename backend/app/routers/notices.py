"""
Prince Public School — Notices API Router
CRUD endpoints for managing school notices and announcements.
"""
from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from sqlalchemy import and_
from typing import Optional
from datetime import datetime, timezone

from ..database import get_db
from ..models import Notice
from ..schemas import NoticeCreate, NoticeResponse, NoticeUpdate

router = APIRouter(prefix="/api/notices", tags=["Notices"])


@router.get(
    "",
    response_model=list[NoticeResponse],
    summary="List active notices (Public)",
)
def list_notices(
    category: Optional[str] = Query(None, description="Filter by category"),
    skip: int = Query(0, ge=0),
    limit: int = Query(20, ge=1, le=50),
    db: Session = Depends(get_db),
):
    """
    Public endpoint — Returns a list of active, non-expired notices
    ordered by published date (newest first).
    """
    now = datetime.now(timezone.utc)
    query = db.query(Notice).filter(
        and_(
            Notice.is_active == True,
            # Include notices without expiry or ones that haven't expired
            (Notice.expires_at == None) | (Notice.expires_at > now),
        )
    ).order_by(Notice.is_important.desc(), Notice.published_at.desc())

    if category:
        query = query.filter(Notice.category == category)

    return query.offset(skip).limit(limit).all()


@router.post(
    "",
    response_model=NoticeResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Create a new notice (Admin)",
)
def create_notice(data: NoticeCreate, db: Session = Depends(get_db)):
    """Admin endpoint — Creates a new notice/announcement."""
    notice = Notice(
        title=data.title,
        content=data.content,
        category=data.category,
        is_important=data.is_important,
        expires_at=data.expires_at,
    )
    db.add(notice)
    db.commit()
    db.refresh(notice)
    return notice


@router.patch(
    "/{notice_id}",
    response_model=NoticeResponse,
    summary="Update a notice (Admin)",
)
def update_notice(notice_id: int, data: NoticeUpdate, db: Session = Depends(get_db)):
    """Admin endpoint — Partially updates a notice."""
    notice = db.query(Notice).filter(Notice.id == notice_id).first()
    if not notice:
        raise HTTPException(status_code=404, detail="Notice not found")

    update_data = data.model_dump(exclude_unset=True)
    for field, value in update_data.items():
        setattr(notice, field, value)

    db.commit()
    db.refresh(notice)
    return notice


@router.delete(
    "/{notice_id}",
    status_code=status.HTTP_204_NO_CONTENT,
    summary="Delete a notice (Admin)",
)
def delete_notice(notice_id: int, db: Session = Depends(get_db)):
    """Admin endpoint — Permanently deletes a notice."""
    notice = db.query(Notice).filter(Notice.id == notice_id).first()
    if not notice:
        raise HTTPException(status_code=404, detail="Notice not found")

    db.delete(notice)
    db.commit()
    return None
