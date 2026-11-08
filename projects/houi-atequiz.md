# Direction Quiz / 方位当てクイズ

## Overview

A local video-production experiment: turn geographic quiz data into short videos and covers. Published through [TikTok @houiatejp](https://www.tiktok.com/@houiatejp). There is no GitHub repository. It is presented as a media-processing prototype, not a hosted application.

## Pipeline and technical decisions

1. Read JSON containing the answer location and five reference locations, with bearings and distances prepared upstream.
2. Render the map and HTML/SVG overlays using bundled MapLibre GL 4.7.1 and OpenFreeMap Positron. Logarithmic distance scaling keeps near and distant references legible together.
3. Use local VOICEVOX narration, with the timeline based on voice duration. NumPy/SciPy generate BGM and effects from fixed seeds and scene-event timestamps.
4. Python controls Playwright/Chromium and calls `renderAt(time)` for each frame. Screenshots stream through FFmpeg `image2pipe` into H.264 video: 1080×1920, 30 fps, about 21 seconds.
5. Generate covers through browser screenshots, adapting label layouts and fitting them within TikTok safe areas.

Frame-by-frame time control supports reproducible scene timing; it is not a byte-identical video guarantee. Map tiles remain an external dependency.

## Changes during development

Concentrated reference directions made diagrams hard to read. The layout uses the mean direction vector to shift the circle center in the opposite direction and applies tangential label decluttering. Python and JavaScript use the same positioning formula.

Fixed station names and output names were replaced by data-driven handling. Cover clipping, duplicated ending segments, and label fit were corrected. Audio timing follows scene events instead of maintaining unrelated hard-coded timing tables.

Pronunciation remains a limitation: there is no dedicated place-name dictionary, so correct reading of every location is not guaranteed. Map label coverage is also external to the pipeline.

## Role and verification boundary

My role was the video concept, presentation requirements, and production-test acceptance, using AI-assisted development. Technical details come from the November 8, 2026 code/document review. This portfolio update did not rerender videos or perform fresh media inspection, and makes no measured audience-retention claim.

**Stack:** Python / Playwright / Chromium / HTML・SVG / MapLibre GL / OpenFreeMap / FFmpeg / VOICEVOX / NumPy / SciPy.

---

[Portfolio](../README.md) · [日本語](../ja/projects/houi-atequiz.md)
