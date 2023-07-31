"""System router."""
from typing import Annotated

from fastapi import APIRouter, Depends
from openbb_core.api.dependency.system import get_system_settings
from openbb_core.app.model.system_settings import SystemSettings

router = APIRouter(prefix="/system", tags=["System"])


@router.get("")
async def get_system_model(
    system_settings: Annotated[SystemSettings, Depends(get_system_settings)],
) -> SystemSettings:
    """Get system model."""
    return system_settings
