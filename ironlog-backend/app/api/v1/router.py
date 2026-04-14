from fastapi import APIRouter
from app.api.v1.endpoints import auth

api_router = APIRouter()
api_router.include_router(auth.router)

# Futuros módulos:
# from app.api.v1.endpoints import workouts, exercises, diet
# api_router.include_router(workouts.router)
# api_router.include_router(exercises.router)
# api_router.include_router(diet.router)