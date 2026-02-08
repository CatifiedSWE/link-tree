# PRD - MergeX Link Tree

## Problem Statement
Fix Vite `allowedHosts` error: "Blocked request. This host is not allowed."

## What Was Done
- Cloned repo from https://github.com/CatifiedSWE/link-tree
- Added `allowedHosts: 'all'` to `server` config in `vite.config.ts`
- Added `start` script to `package.json` for supervisor compatibility
- Set up platform structure (frontend/backend directories)

## Status
- **Fixed** - Site loads successfully (HTTP 200) on the preview domain

## Backlog
- No additional items
