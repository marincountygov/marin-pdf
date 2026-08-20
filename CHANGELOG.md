# Changelog

Tracks changes to `marin-app-template` itself — repository structure, starter shell, scaffolding, and documentation. This is separate from `BRAND_VERSION`, which tracks the vendored `marin-ui` bundle.

Existing applications do not automatically inherit these changes. Template changes only affect projects created after the change; see `TEMPLATE_VERSION` and the README's "Template versioning" note.

## 1.1.0

- Add `marin.yml`, a machine-readable project manifest (owner, status, `marin-ui`/template versions) using the same `APP_NAME`/`APP_DESCRIPTION`/`APP_OWNER`/`APP_REPO` placeholder convention as `index.html` and `README.md`.
- Add `AGENTS.md`, documenting the template repo itself for anyone or any agent working on the template directly. New apps get their own app-shaped `AGENTS.md` as part of the build workflow, not a copy of this one — see `marin-skills/marin-app-builder/SKILL.md`.

## 1.0.0

- Initial template: starter `index.html` shell, `assets/app.css` and `assets/app.js`, vendored `marin-ui` bundle, `docs/development.md`, PR template.
