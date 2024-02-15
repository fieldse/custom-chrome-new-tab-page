#!/bin/bash
# Builds style.css with Tailwind

set -e
source .env

# =============================== #
#           Functions             #
# =============================== #

# Confirm required commands exist
function sanityChecks() {
  executableExists "npx"
  fileExists .env
  notEmpty "${CSS_OUTFILE}"
}

# Build the css styles to /css/style.css
function build() {
  # source the env file
  echo -e "\nBuilding CSS to -> ${CSS_OUTFILE}. Watching for changes... Ctrl+C to exit"
  npx tailwindcss -i ./src/css/main.css -o ${CSS_OUTFILE} --watch
}

# ==================================== #
#           Util functions             #
# ==================================== #

# Confirm executable file exists in path or exit
function executableExists() {
  type -P ${1} >>/dev/null || exitFail "${1} not found in path! exiting"
}

# Confirm file exists or exit
function fileExists() {
  [ -f $1 ] || exitFail "file '${1}' not found. exiting"
}

# Confirm directory exists or exit
function dirExists() {
  [ -d $1 ] || exitFail "dir '${1}' not found. exiting"
}

# Validate a variable is not empty
function notEmpty() {
  [ ! -z $1 ] || exitFail "variable is empty"
}

# Exit with error message
function exitFail() {
  echo "error: ${1} -- exiting"
  exit 1
}

# =============================== #
#               Run               #
# =============================== #
function main() {
  sanityChecks
  build
}
main
