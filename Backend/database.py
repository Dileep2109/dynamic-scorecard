from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "sqlite:///./scorecard.db"  # Path to your SQLite database file

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Dependency to get the database session
def get_db():
    db = SessionLocal()  # Create a new database session
    try:
        yield db  # Yield the session to be used in route functions
    finally:
        db.close()  # Close the session after use. init_db.py from database import Base, engine

print("Initializing database...")
Base.metadata.create_all(bind=engine)
print("Database initialized successfully!")