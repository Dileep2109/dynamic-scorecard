from database import Base, engine

print("Initializing database...")
Base.metadata.create_all(bind=engine)
print("Database initialized successfully!")
