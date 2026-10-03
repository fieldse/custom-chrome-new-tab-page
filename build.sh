#!/bin/bash
# Builds style.css with Tailwind
ARGS=($@)

set -e
# source .env
source ./script/util.sh

# Build dirs
BUILD_DIR=./dist
CSS_OUTFILE="${BUILD_DIR}/css/style.css"

# Confirm required source files and commands exist
function sanityChecks() {
  executableExists "npx"        # Ensure we have npm/npx command
  fileExists ./src/index.html   # HTML base templae
  fileExists ./src/css/main.css # CSS entrypoint
}

# Run sanity checks and build
function build() {
  sanityChecks

  # Clean the dist directory
  echo "[+] cleaning /dist"
  rm -rf "${BUILD_DIR}/*"
  mkdir -p "${BUILD_DIR}"

  # Copy all the static source files
  echo "[+] copying static files"
  cp -rf ./src/* "${BUILD_DIR}"

  # Build the CSS to /css/style.css
  echo "[+] building CSS to ${CSS_OUTFILE}"

  # Hacky way to check for --watch flag
  # TOOD -- add proper command-line flags
  if [ "${ARGS[0]}" == '--watch' ]; then
    echo "[+] watching for changes... Ctrl+C to exit"
  fi
  npx tailwindcss -i ./src/css/main.css -o ${CSS_OUTFILE} ${ARGS[@]}
}

# Run
build
