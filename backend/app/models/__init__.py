"""
Prince Public School — SQLAlchemy Models
Database models for Admission Inquiries, Notices, and Contact Messages.
"""
from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime
from sqlalchemy.sql import func
from ..database import Base


class AdmissionInquiry(Base):
    """Model for storing admission enquiry submissions."""
    __tablename__ = "admission_inquiries"

    id = Column(Integer, primary_key=True, autoincrement=True)
    student_name = Column(String(100), nullable=False, index=True)
    parent_name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    phone = Column(String(15), nullable=False)
    class_applying = Column(String(20), nullable=False)
    previous_school = Column(String(200), nullable=True)
    address = Column(Text, nullable=True)
    message = Column(Text, nullable=True)
    status = Column(String(20), default="pending", index=True)  # pending, reviewed, contacted, admitted
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    def __repr__(self):
        return f"<AdmissionInquiry(id={self.id}, student='{self.student_name}', class='{self.class_applying}')>"


class Notice(Base):
    """Model for managing school notices and announcements."""
    __tablename__ = "notices"

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String(200), nullable=False)
    content = Column(Text, nullable=False)
    category = Column(String(50), default="general", index=True)  # general, exam, event, holiday, admission
    is_important = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True, index=True)
    published_at = Column(DateTime(timezone=True), server_default=func.now())
    expires_at = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    def __repr__(self):
        return f"<Notice(id={self.id}, title='{self.title[:30]}...')>"


class ContactMessage(Base):
    """Model for storing contact form submissions."""
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    phone = Column(String(15), nullable=True)
    subject = Column(String(200), nullable=False)
    message = Column(Text, nullable=False)
    is_read = Column(Boolean, default=False, index=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    def __repr__(self):
        return f"<ContactMessage(id={self.id}, from='{self.name}', subject='{self.subject[:30]}')>"
