# WobblyMaps

## Purpose and status

A local experiment in generating map-shape rolling videos from geographic data. Published through [TikTok @wobblymaps](https://www.tiktok.com/@wobblymaps). No GitHub repository; the focus is a data-to-video pipeline and presentation tests.

## Pipeline

1. Extract the largest outer ring from GeoJSON, apply latitude compensation, simplify it with Douglas–Peucker, and normalize its maximum span to 100. Landmarks use the same transform.
2. Animate the shape in Canvas 2D around successive contacting vertices. This is a designed rolling animation, not a physically accurate simulation.
3. Python/Playwright advances the stateful JavaScript `exportStep` at a fixed time step, captures frames, and sends them to FFmpeg.
4. Generate contact sounds with NumPy using the JavaScript pivot events and substeps, keeping sound and motion synchronized. Short macOS `say` narration is optional.
5. Export video and a separate 1080-square cover crop.

The current v3 TikTok layout is **1200×710**, with a 12-second sequence: 3-second title, 7.5-second rolling segment, 1.5-second outro. It should not be described as the older 9:16 layout. The X variant is also 1200×710 and silent.

## Changes and limitations

Pillow without raqm could not render the flag emoji as intended. Title rasterization was moved to Chromium rather than patching a broken text-rendering path.

Technical notes record early viewing drop-off as the motivation for removing zoom and extending the title to three seconds. They do not establish a measured retention improvement after the change.

The geometry intentionally omits islands and holes outside the selected outer ring. The animation and outline therefore simplify geography. A legacy wrapper still targets an older exporter; this is not presented as a fully unified turnkey workflow.

## Role and evidence

My contribution was the content concept, visual requirements, and acceptance of production tests, with AI-assisted implementation. Technical descriptions are based on the November 8, 2026 code/document review, not a fresh video render or new performance benchmark. The operational notes vault was outside that review.

**Stack:** Python / GeoJSON / JavaScript / Canvas 2D / Playwright / Chromium / FFmpeg / NumPy / Pillow.

---

[Portfolio](../README.md) · [日本語](../ja/projects/wobblymaps.md)
