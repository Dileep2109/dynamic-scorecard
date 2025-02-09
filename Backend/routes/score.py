from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
import crud
from schemas import ScoreCreate, ScoreResponse

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/scores/", response_model=ScoreResponse)
def create_score(score: ScoreCreate, db: Session = Depends(get_db)):
    if score.productivity < 0 or score.quality < 0 or score.timeliness < 0:
        raise HTTPException(status_code=400, detail="Scores must be non-negative")
    return crud.create_score(db, score)

@router.get("/scores/")
def read_scores(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return crud.get_scores(db, skip=skip, limit=limit) 
