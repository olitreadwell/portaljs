# datopian/portaljs context
> refreshed 2026-09-30 | upstream default: main @ d5c096aa6a4c24c19f28d112400d0489b18aeaf8

## Identity & policies
- upstream: datopian/portaljs, default branch `main`, primary language TypeScript, English-first (yes — README, CONTRIBUTING, all issues/docs in English).
- CLA/DCO: none. `CONTRIBUTING.md` asks contributors to fork + open a PR; no CLA bot or DCO sign-off found in CONTRIBUTING, `.github/`, or PR history.
- AI-assisted PR policy: allowed (unstated). No `AI_POLICY.md`, no AI/disclosure wording in CONTRIBUTING, `.github/`, root `AGENTS.md`/`CLAUDE.md`, or repo labels.
- signed commits required: no — `GET repos/datopian/portaljs/branches/main/protection` returns 404 (no branch protection).
- PR template: none. Repo `.github/` holds only `workflows/`; root and `.github/` have no `PULL_REQUEST_TEMPLATE*`; org `datopian/.github` has only `LICENSE`, `README.md`, `profile/`. Pipeline 3-section body is the fallback.
- external tracker: GitHub only.
- other: no `CODE_OF_CONDUCT`; CI = GitHub Actions (`.github/workflows/ci.yml`: build packages, lint `@portaljs/ckan`, build catalog template, build site, scaffold-e2e).

## Conventions (verified from merged PRs)
- branch naming: `fix/<kebab>`, `docs/<kebab>`, `chore/<kebab>`, `blog/<kebab>`; some internal agent branches are `bead/<id>` or `polecat/<...>/<bead>@<hash>`. Use `type/kebab-description` for human-style PRs.
- commit/PR titles: Conventional Commits; internal work also carries a bead suffix in parentheses, e.g. `fix(site): repoint Arc-labeled homepage CTAs off legacy Cloud signup (po-dru)`. Human-facing PRs are plain `fix(...)`/`docs(...)`.
- branch names + commits land as a single squash-merge commit on `main`; the PR title becomes the commit subject.
- tests: `npm ci` + `npm run build -w @portaljs/...`; repo-wide gate is `npm run verify` (`scripts/verify.sh`); site builds separately under `site/` (`npm ci` + `npm run build`).
- how outside PRs merge: maintainers (anuveyatsu is by far the most active, then demenech) review and squash-merge. Recent external-ish merges seen; repo is active (pushed 2026-09-07).

## Maintainer picture
- anuveyatsu — dominant committer/merger (35 of last 40 commits).
- demenech — occasional committer.
- Recent in-flight work (avoid): hero/CTA rewrite, Arc/Cloud messaging sweep, blog redesign, giftless/R2 data-scaling, blog segment vocabulary (PR #1652 open), issue #1663 open ("Two code comments still call the Studio tab Visual builder").

## Issue-area health
- Docs/site are actively edited by maintainers; small docs/typo/link fixes are low-contention.
- No open issue claims any of the doc typo/dead-link items found on 2026-09-30.

## Gap ledger (dedupe — READ FIRST, never re-pick)
- `2026-08-05` self-found — bug-fix `fix/restore-validation-error-fallback` (CkanRequest dead validation-error fallback) — pr-opened (fork PR #9, still open).
- `2026-08-05` self-found — a11y `fix/pagination-buttons-screen-reader` (Pagination aria-label/aria-current) — pr-opened (fork PR #10, still open).
- `2026-08-12` self-found — CI/scaffold `fix/scaffold-template-repo-aware` (giget template repo + `--repo` flag) — pr-opened (fork PR #8, still open; older PR #7 closed as duplicate).
- `2026-09-25`/`2026-09-26`/`2026-09-27` engine failures — `engine/run.sh` exited 1 with no trace (loop-trivial/loop log) — no work done.
- `2026-09-30` self-found — trivial docs cleanup (typos + one dead example link) — pr-opened (fork PR #21, branch `docs/typo-and-dead-link-cleanup`, 10 files, 15 fixes; substantive fork CI green, only the known fork-artifact scaffold-e2e jobs red).

## Mined gaps (discovered, not yet attempted)
- `2026-09-30` trivial cleanup pass: misspellings in `packages/ckan-api-client-js/README.md` (`environemnt`, `avoing`), `site/content/opensource/docs/searching-datasets.md` (`everytime`), `examples/github-backed-catalog/README.md` + `examples/openspending/README.md` (`exaple`), `examples/turing/content/index.mdx` (`avaliable`), `examples/turing/content/datasets/abusive-eval-v1-0.md` (`IMPLICT` x2), `site/content/docs/skills/portaljs-connect-ckan.md` + `.claude/commands/portaljs-connect-ckan.md` (`browseable`), `CONTRIBUTING.md` ("do discuss" -> "to discuss"), `site/content/opensource/developers/create-data-catalog-portaljs-ckan.md` ("If yo go" -> "If you go"); dead link `github.com/datopian/datahub/tree/main/examples/ckan-example` (404; dir renamed to `examples/ckan`) in 3 places in `site/content/opensource/developers/create-data-catalog-portaljs-ckan.md` (`create-next-app --example` cmd, Vercel clone button, `[Repo]` link). — status: done (fork PR #21).
- `2026-09-30` (not attempted, held over) `packages/ckan/src/lib/utils.ts:24` code-comment typos (`porpuse`, `functoin`, "form o a dictionary") — not user-facing text; excluded from the docs pass.
- `2026-09-30` (not attempted) `examples/ckan-ssg/.eslintrc.json` still globs `examples/ckan-example/pages` — config, not a doc line; excluded (and the trivial PR is at the 10-file cap).
- `2026-09-30` (not attempted) expired Discord-CDN screenshot links in `examples/ckan-ssg/README.md` + `site/content/opensource/developers/create-data-catalog-portaljs-ckan.md` — no replacement asset; needs maintainer input.
- `2026-09-30` (not attempted) `examples/ckan-ssg/README.md` Vercel deploy button points at the old `examples/ckan-example` path; intended target ambiguous (`examples/ckan` vs `examples/ckan-ssg`) — needs maintainer input.
- `2026-09-30` (not attempted) stale-but-redirecting `datopian/datahub` / `datopian/portal.js` URLs across example READMEs (301 -> portaljs; not dead, out of scope for a dead-link pass).
- `2026-09-30` (not attempted) `CONTRIBUTING.md` lists a `packages/components` workspace that no longer exists (`@portaljs/components` is published but not built in this repo) — substantive doc restructure, not trivial.
