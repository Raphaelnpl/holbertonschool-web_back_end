#!/usr/bin/env python3
"""
A coroutine that collects random numbers from an async generator using
async comprehension.
"""

import importlib
from typing import List

# Dynamically import the module
async_generator = importlib.import_module('0-async_generator').async_generator

async def async_comprehension() -> List[float]:
    """
    Collect 10 random numbers from async_generator using async comprehension.

    Returns:
        List[float]: A list of 10 random float numbers.
    """
    return [number async for number in async_generator()]
