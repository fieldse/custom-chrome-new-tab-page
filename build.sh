#!/bin/bash
# Builds style.css with Tailwind
ARGS=($@)

set -e
source .env
source ./script/util.sh

CSS_OUTFILE="${CSS_BUILD_DIR}/style.css"

# Confirm required commands exist
function sanityChecks() {
  executableExists "npx"
  fileExists .env
  fileExists ./src/index.html
  notEmpty "${CSS_BUILD_DIR}"
  fileExists "${CSS_OUTFILE}"
}

# Run sanity checks and build
function build() {
  # Copy the HTML stuff
  cp -f ./src/index.html "${HTML_BUILD_DIR}/"

  # Copy the JS stuff
  mkdir -p "${JS_BUILD_DIR}"
  cp -rf ./src/js/* "${JS_BUILD_DIR}/"

  # Build the CSS to /css/style.css
  echo -e "\nBuilding CSS to -> ${CSS_OUTFILE}"
  sanityChecks

  # Hacky way to check for --watch flag
  if [ "${ARGS[0]}" == '--watch' ]; then
    echo "Watching for changes... Ctrl+C to exit"
  fi
  npx tailwindcss -i ./src/css/main.css -o ${CSS_OUTFILE} ${ARGS[@]}
}

# Run
build
