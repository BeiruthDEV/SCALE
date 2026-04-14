from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    # Projeto
    PROJECT_NAME: str = "IronLog API"
    VERSION: str = "0.1.0"
    API_V1_PREFIX: str = "/api/v1"

    # Banco de dados
    DATABASE_URL: str = "postgresql+asyncpg://postgres:postgres@localhost:5432/ironlog"

    # JWT
    SECRET_KEY: str = "troque-essa-chave-em-producao"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24        # 1 dia
    REFRESH_TOKEN_EXPIRE_DAYS: int = 30

    # CORS
    ALLOWED_ORIGINS: List[str] = [
        "http://localhost:5173",   # Vite dev server
        "http://localhost:3000",
    ]

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()