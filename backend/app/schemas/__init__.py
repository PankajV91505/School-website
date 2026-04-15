"""
Prince Public School — Pydantic Schemas
Request/Response schemas for API validation.
"""
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime


# ─── Admission Inquiry Schemas ────────────────────────────────────────────────

class AdmissionInquiryCreate(BaseModel):
    """Schema for creating a new admission inquiry."""
    student_name: str = Field(..., min_length=2, max_length=100, description="Student's full name")
    parent_name: str = Field(..., min_length=2, max_length=100, description="Parent/Guardian full name")
    email: EmailStr = Field(..., description="Contact email address")
    phone: str = Field(..., min_length=10, max_length=15, description="10-digit phone number")
    class_applying: str = Field(..., max_length=20, description="Class applying for")
    previous_school: Optional[str] = Field(None, max_length=200, description="Previous school name")
    address: Optional[str] = Field(None, description="Residential address")
    message: Optional[str] = Field(None, description="Additional message or query")


class AdmissionInquiryResponse(BaseModel):
    """Schema for admission inquiry response."""
    id: int
    student_name: str
    parent_name: str
    email: str
    phone: str
    class_applying: str
    previous_school: Optional[str]
    address: Optional[str]
    message: Optional[str]
    status: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class AdmissionStatusUpdate(BaseModel):
    """Schema for updating admission inquiry status."""
    status: str = Field(..., pattern="^(pending|reviewed|contacted|admitted)$")


# ─── Notice Schemas ───────────────────────────────────────────────────────────

class NoticeCreate(BaseModel):
    """Schema for creating a new notice."""
    title: str = Field(..., min_length=3, max_length=200)
    content: str = Field(..., min_length=10)
    category: str = Field("general", pattern="^(general|exam|event|holiday|admission)$")
    is_important: bool = False
    expires_at: Optional[datetime] = None


class NoticeResponse(BaseModel):
    """Schema for notice response."""
    id: int
    title: str
    content: str
    category: str
    is_important: bool
    is_active: bool
    published_at: datetime
    expires_at: Optional[datetime]
    created_at: datetime

    class Config:
        from_attributes = True


class NoticeUpdate(BaseModel):
    """Schema for updating a notice."""
    title: Optional[str] = Field(None, max_length=200)
    content: Optional[str] = None
    category: Optional[str] = None
    is_important: Optional[bool] = None
    is_active: Optional[bool] = None
    expires_at: Optional[datetime] = None


# ─── Contact Message Schemas ──────────────────────────────────────────────────

class ContactMessageCreate(BaseModel):
    """Schema for creating a contact message."""
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=15)
    subject: str = Field(..., min_length=3, max_length=200)
    message: str = Field(..., min_length=10)


class ContactMessageResponse(BaseModel):
    """Schema for contact message response."""
    id: int
    name: str
    email: str
    phone: Optional[str]
    subject: str
    message: str
    is_read: bool
    created_at: datetime

    class Config:
        from_attributes = True
