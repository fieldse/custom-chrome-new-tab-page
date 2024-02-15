#!/bin/bash
# Builds style.css with Tailwind
ARGS=($@)

set -e
source .env
source ./script/util.sh

# Confirm required commands exist
function sanityChecks() {
  executableExists "npx"
  fileExists .env
  notEmpty "${CSS_BUILD_DIR}"
  fileExists "${CSS_OUTFILE}"
}

# Run sanity checks and build
function build() {
  CSS_OUTFILE="${CSS_BUILD_DIR}/style.css"
  echo -e "\nBuilding CSS to -> ${CSS_OUTFILE}"
  sanityChecks

  # hacky way to check for --watch flag
  if [ "${ARGS[0]}" == '--watch' ]; then
    echo "Watching for changes... Ctrl+C to exit"
  fi
  npx tailwindcss -i ./src/css/main.css -o ${CSS_OUTFILE} ${ARGS[@]}
}

# Run
build
