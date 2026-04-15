"""
Prince Public School — FastAPI Application Entrypoint
Main module combining routers, middleware, and database initialization.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

from .config import settings
from .database import engine, Base
from .routers import admissions, notices, contacts

# Initialize database tables
# In a real app, use Alembic for migrations instead
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Backend API for Prince Public School Website",
)

# CORS Middleware for allowing frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API Routers
app.include_router(admissions.router)
app.include_router(notices.router)
app.include_router(contacts.router)


@app.get("/", tags=["Health"])
def root():
    """Health check endpoint"""
    return {"message": "Welcome to Prince Public School API", "status": "online"}
