---
'create-portaljs': patch
---

Add an optional `--repo` flag (and `PORTALJS_TEMPLATE_REPO` env var) so the scaffold's
template source repo is no longer hardcoded to `datopian/portaljs`. Defaults stay the
same, so `npm create portaljs@latest` is unaffected. This lets CI point the scaffold at
whichever repo the workflow is actually running in — needed so the "Scaffold end-to-end"
job works on fork PRs, where the PR branch exists on the fork but not upstream.
