from pydantic import BaseModel

class ScoreCreate(BaseModel):
    name: str
    productivity: float
    quality: float
    timeliness: float

class ScoreResponse(ScoreCreate):
    total_score: float

    class Config:
        from_attributes = True