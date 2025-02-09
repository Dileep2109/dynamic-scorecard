from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import database, schemas, crud

router = APIRouter()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/score/", response_model=schemas.ScoreResponse)
def add_score(score: schemas.ScoreCreate, db: Session = Depends(get_db)):
    return crud.create_score(db, score)