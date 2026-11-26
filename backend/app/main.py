"""MedAugment AI API.  Run:  uvicorn app.main:app --reload   (docs at /docs)"""
from __future__ import annotations

from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from . import APP_VERSION
from .config import Settings
from .api.deps import get_ctx, require_api_key
from .api.v1 import augmentation, benchmarks, datasets, exports, images, jobs
from .context import create_context
from .utils.common import AppError


@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.ctx = create_context()
    yield
    app.state.ctx.close()


app = FastAPI(title="MedAugment AI", version=APP_VERSION, lifespan=lifespan,
              description="Medical imaging dataset augmentation and export platform. Research data preparation only - not a diagnostic system.")

app.add_middleware(CORSMiddleware, allow_origins=list(Settings.from_env().cors_origins), allow_credentials=False,
                   allow_methods=["*"], allow_headers=["*"])


@app.exception_handler(AppError)
async def app_error_handler(_: Request, exc: AppError):
    return JSONResponse(status_code=exc.status, content={"error": {"code": exc.code, "message": exc.message, "details": exc.details}})


@app.get("/api/health", tags=["system"])
def health(ctx=Depends(get_ctx)):
    return {"status": "ok", "version": APP_VERSION, "db_backend": ctx.settings.db_backend, "auth_required": bool(ctx.settings.api_key)}


for module in (datasets, augmentation, jobs, exports, images, benchmarks):
    app.include_router(module.router, prefix="/api/v1", dependencies=[Depends(require_api_key)])
