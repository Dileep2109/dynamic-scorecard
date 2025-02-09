from sqlalchemy import Column, Integer, String, Float
from database import Base

class Score(Base):
    __tablename__ = "scores"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    productivity = Column(Float)
    quality = Column(Float)
    timeliness = Column(Float)
    total_score = Column(Float)