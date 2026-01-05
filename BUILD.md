# Portfolio Build Instructions

## Prerequisites

This project requires Node.js 18.x to build successfully due to dependency compatibility issues.

### Installing Node.js 18

On macOS using Homebrew:

```bash
brew install node@18
```

## Building the Project

### Option 1: Using the build script (Recommended)

```bash
./build.sh
```

### Option 2: Manual build with Node 18

```bash
PATH="/opt/homebrew/opt/node@18/bin:$PATH" CI='' npm run build
```

### Option 3: Installing dependencies from scratch

```bash
# Remove existing dependencies
rm -rf node_modules package-lock.json

# Install with Node 18
PATH="/opt/homebrew/opt/node@18/bin:$PATH" npm install --legacy-peer-deps

# Build
PATH="/opt/homebrew/opt/node@18/bin:$PATH" CI='' npm run build
```

## Changes Made

1. **Replaced `node-sass` with `sass`**: The deprecated `node-sass` package was replaced with the modern `sass` package for better compatibility with newer Node.js versions.

2. **Added `.nvmrc`**: Added a `.nvmrc` file specifying Node 18 for consistent builds across environments.

3. **Updated GitHub Workflow**: Updated `.github/workflows/main.yml` to use Node 18.x instead of 12.x and updated `actions/setup-node` to v3.

4. **Fixed dependency conflicts**: Added `ajv@6.12.6` and `ajv-keywords@3.5.2` as dev dependencies to resolve webpack compilation issues.

## GitHub Actions

The GitHub Actions workflow will automatically build and deploy to `gh-pages` branch when you push to the `main` branch. The workflow has been updated to use Node 18.x for compatibility.
