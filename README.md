# Prince Public School – Official Website

A fully responsive, modern web application for Prince Public School located in Simari, Madhubani. This project features a React-based frontend built with Vite, styled with Tailwind CSS, and powered by a robust Python FastAPI backend with PostgreSQL.

## 🌟 Key Features

- **Modern & Beautiful UI**: Glassmorphism effects, dynamic gradients, and smooth page transitions using Framer Motion.
- **Fully Responsive**: Optimized for all devices (Mobile, Tablet, Desktop).
- **Core Pages**: 
  - Home, About Us, Academics, Admissions, Gallery, and Contact.
- **Administrative Pages**: 
  - **Mandatory Public Disclosure**: CBSE-compliant structured data tables and document repository.
  - **Notice Board**: Centralized hub for live school updates, important alerts, and holiday calendars.
- **RESTful API Backend**: Scalable backend data handling for Admission inquiries, Contact messages, and dynamic Notices.

## 🚀 Tech Stack

### Frontend
* **React 19** (Vite 6)
* **Tailwind CSS v3** (Utility-first styling & custom design tokens)
* **Framer Motion** (Micro-animations and Page Transitions)
* **React Router v6** (Client-side routing)
* **Lucide React** (Beautiful standardized icons)
* **Axios** (API Client configuration)
* **React Hot Toast** (Form validation and user feedback)

### Backend
* **FastAPI** (High-performance web framework for Python)
* **PostgreSQL** (Relational Database)
* **SQLAlchemy** (ORM mapped models)
* **Pydantic** (Data validation and parsing)
* **Uvicorn** (ASGI server)

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- Python (3.9 or higher)
- PostgreSQL running locally or remotely

### 1. Backend Setup

Open a terminal and navigate to the `backend` directory:
```bash
cd backend

# Create a virtual environment (optional but recommended)
python -m venv venv
.\venv\Scripts\activate   # On Windows

# Install the dependencies
pip install -r requirements.txt

# Run the development server
uvicorn app.main:app --reload --port 8000
```
*Note: Make sure to configure your `DATABASE_URL` appropriately if you want to use a specific PostgreSQL database instance. The default string usually maps to `postgresql://postgres:postgres@localhost:5432/prince_school_db`.*

### 2. Frontend Setup

Open a new terminal and navigate to the `frontend` directory:
```bash
cd frontend

# Install the necessary NPM packages
npm install

# Run the Vite development server
npm run dev
```

Enjoy exploring the website at `http://localhost:5173`!

---

## 📂 Project Structure

```text
School-Website/
├── backend/
│   ├── app/
│   │   ├── main.py               # FastAPI entry point
│   │   ├── database.py           # SQL DB Engine & Session setup
│   │   ├── config.py             # Environment configuration
│   │   ├── models/               # SQLAlchemy Models
│   │   ├── routers/              # API Route Controllers
│   │   └── schemas/              # Pydantic Schemas
│   └── requirements.txt
│
└── frontend/
    ├── src/
    │   ├── api/                  # Axios services (client.js)
    │   ├── components/           # Reusable UI React components
    │   ├── data/                 # schoolData.js (Centralized context)
    │   ├── pages/                # Route views (Home, About, Notices, Disclosure, etc)
    │   └── styles/               # Global Tailwind CSS configurations
    ├── tailwind.config.js
    └── package.json
```

## 📝 License
This project is proprietary and developed for Prince Public School. All rights reserved.
