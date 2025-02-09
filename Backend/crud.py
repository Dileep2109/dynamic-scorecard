from sqlalchemy.orm import Session
from models import Score
from schemas import ScoreCreate

def create_score(db: Session, score: ScoreCreate):
    # Calculate the total score based on the input values (productivity, quality, timeliness)
    total_score = (score.productivity * 0.3) + (score.quality * 0.5) + (score.timeliness * 0.2)
    
    # Create a new Score object with the calculated total_score
    db_score = Score(**score.dict(), total_score=total_score)
    
    # Add the new score to the session
    db.add(db_score)
    db.commit()
    db.refresh(db_score)  # Refresh to get the updated score from the database
    return db_score

def get_scores(db: Session, skip: int = 0, limit: int = 10):
    # Fetch the list of scores from the database with pagination (skip, limit)
    scores = db.query(Score).offset(skip).limit(limit).all()
    
    # Return the list of scores (including total_score)
    return scores