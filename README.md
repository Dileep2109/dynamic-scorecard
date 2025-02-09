Dynamic Scorecard Backend (FastAPI) & Frontend (React)

This is a full-stack Dynamic Scorecard application with a FastAPI backend and a React frontend.

* Features
 Add new scores
 Retrieve all scores
 Compare scores
 Delete all scores
 Data visualization with charts
 Export score data (CSV/PDF)

* Backend - FastAPI
Installation & Setup

1. Clone the Repository

git clone
cd scorecard/backend

2. Create a Virtual Environment

python -m venv venv
source venv/bin/activate.bat

3. Install Dependencies

pip install -r requirements.txt

4. Run the FastAPI Server

python -m uvicorn main:app --reload

* Frontend - React
Installation & Setup

1. Navigate to Frontend Folder

cd ../frontend

2. Install Dependencies

npm install

3. Start React App

npm start

* Running the Full Application

Start the backend (python -m uvicorn main:app --reload)

Start the frontend (npm start)

Open http://localhost:3000 in the browser

