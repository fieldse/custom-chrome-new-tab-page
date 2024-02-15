#!/bin/bash
# Builds style.css with Tailwind

set -e
source .env
source ./script/util.sh

CSS_OUTFILE="${CSS_BUILD_DIR}/style.css"

# Confirm required commands exist
function sanityChecks() {
  executableExists "npx"
  fileExists .env
  notEmpty "${CSS_BUILD_DIR}"
  fileExists "${CSS_OUTFILE}"
}

# Build the css styles to /css/style.css with TailwindCSS
function build() {
  echo -e "\nBuilding CSS to -> ${CSS_OUTFILE}. Watching for changes... Ctrl+C to exit"
  npx tailwindcss -i ./src/css/main.css -o ${CSS_OUTFILE} --watch
}

function main() {
  sanityChecks
  echo -e "all good"
  # build
}
main
