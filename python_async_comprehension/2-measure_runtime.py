#!/usr/bin/env python3
"""
Measure the runtime of an asynchronous function.
"""

import asyncio
import time
import importlib

# Dynamically import async_comprehension
async_comprehension = importlib.import_module('1-async_comprehension').async_comprehension

async def measure_runtime() -> float:
    """
    Measure the total runtime of executing async_comprehension four times in parallel.

    Returns:
        float: The total runtime in seconds.
    """
    start_time = time.perf_counter()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end_time = time.perf_counter()
    return end_time - start_time
