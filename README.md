# Should This Be a PDF?

Check whether a PDF is the right format before you build one.

A remediated (accessibility-fixed) PDF is expensive to maintain — any edit can break its accessibility formatting, which then has to be manually re-checked and fixed. This tool walks through four yes/no questions and points to the right alternative (a webpage, JotForm/Microsoft Form) when a PDF isn't actually the best format, or confirms a PDF is appropriate and what to do next.

## The four questions

1. **Will the PDF be updated regularly?** — Yes: don't use a PDF, consider a webpage.
2. **Can this content be a webpage instead?** — Yes: move it to a webpage on your department site.
3. **Is this a fillable form?** — Yes: use JotForm or Microsoft Forms instead; submit a helpdesk ticket if you need help.
4. Answering "no" to all three confirms a PDF meets requirements, and gives the remediation and submission steps.

## Tabs

- **Home** — the live check.
- **About** — the full guidance as reference, for anyone who wants to read all four steps at once instead of stepping through them.
- **Updates** — latest commits to this repo.

## Technical notes

Static HTML/CSS/JS, no build step. Uses the vendored MarinOS brand bundle (`shared/`, `vendor/`, `BRAND_VERSION`) — see `docs/development.md` for how to update it from a new `marin-ui` release. The question/outcome flow is a small fixed state machine in `assets/app.js`; there's no authoring UI since this app has exactly one flow.

## Project manifest

`marin.yml` records this project's owner, status, and the `marin-ui`/template versions it's built on. Update `platform.marin-ui` after every `sync-consumer.sh` run, and `project.status` as this moves prototype → active → maintenance.

## Testing with WAVE

Prefer testing a locally served HTTP URL such as `http://localhost:8000/` (`python3 -m http.server 8000`) instead of opening the page with `file://`. Firefox extensions, including WAVE, generally cannot evaluate `file://` pages unless "Allow access to file URLs" is enabled for the extension in `about:addons`.

## Related resources

- [marin-digital-standards](https://github.com/marincountygov/marin-digital-standards) — accessibility, content, brand, and product-design requirements.
- [marin-ui](https://github.com/marincountygov/marin-ui) — the implemented components, tokens, and app shell this project is built on.
- [marin-skills](https://github.com/marincountygov/marin-skills) — AI workflows for building, reviewing, and maintaining Marin applications, including `marin-app-builder` and `app-maintainer`.

## License

County of Marin
