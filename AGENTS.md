# Working on this Marin application

## Architecture

This is a static, zero-build MarinOS application. It uses the shared `marin-ui` brand bundle (vendored via `marin-ui/scripts/sync-consumer.sh`, version recorded in `BRAND_VERSION`) and follows `marin-digital-standards`. See `marin.yml` for this project's owner, status, and platform versions.

The core content is a fixed four-question decision tree in `assets/app.js` (the `steps` object) — there's no authoring UI, since this app has exactly one flow. Don't turn this into a WayMaker-style editable builder; if a second flow is ever needed, that's a signal to reconsider whether `marin-waymaker` is a better fit instead.

## Before making changes

1. Check `marin-ui/docs/components.md` for an existing pattern before writing new CSS or JS.
2. Prefer existing semantic tokens over raw values.
3. Keep the default view (`#check`) immediately functional — the full guidance text lives in About, not stacked into the live tool.
4. If the underlying guidance text changes, update both `assets/app.js` (the live tool) and the `#about` section (the full reference) — they currently repeat the same content by design, so they drift if only one is edited.

## Before finishing

There is no automated check command yet. Manually verify against the review checklist in `marin-skills/marin-app-builder/SKILL.md`: metadata placeholders replaced, nav includes About and Updates plus Home (this app's default view has no task-specific tab of its own), accessibility basics, no invented components.

## References

- `marin-ui` — shared components, tokens, app shell: https://github.com/marincountygov/marin-ui
- `marin-digital-standards` — accessibility, content, brand, and product-design requirements: https://github.com/marincountygov/marin-digital-standards
- `marin-skills` — AI workflows for building and reviewing Marin applications, including `marin-app-builder` and `app-maintainer`: https://github.com/marincountygov/marin-skills
- `marin-os` — the MarinOS app directory this project is registered in: https://github.com/marincountygov/marin-os
