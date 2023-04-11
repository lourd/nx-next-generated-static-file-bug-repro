# Nx - Next.js generated static file bug reproduction

This is a bug reproduction for https://github.com/nrwl/nx/issues/16228.

## Execution

- `npm install`
- `npm run build regression-repro`
- `npm test regression-repro-e2e`

This will fail due to a 404 response for the `test.txt` file, where the test checks for a 200 response and specific text content in the body.

As part of the build, the `test.txt` file is copied from `apps/regression-repro/src/test.txt` and transformed to append a string. This is configured in [next.config.js](apps/regression-repro/next.config.js).

In `dist/apps/regression-repro/public` you see the correctly generated `test.txt` file. But this isn't what's served, by either the dev server or the built production server that's used as part of the end-to-end testing.
