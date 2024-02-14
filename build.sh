#!/bin/bash
# Builds style.css with Tailwind

set -e

# Builds styles to this location
CSS_OUTFILE="src/css/style.css"

# Confirm required commands exist
# credit: https://www.andreinc.net/2011/09/04/bash-scripting-best-practice
function sanityChecks() {
  declare -r T_CMDS="npx"
  for t_cmd in $T_CMDS; do
    type -P ${t_cmd} >>/dev/null
    if [ ! $? ]; then
      echo -e "${t_cmd} not installed! exiting"
      exit 1
    fi
  done
}

# Build the css styles to /css/style.css
function build() {
  echo -e "\nBuilding CSS to -> ${CSS_OUTFILE}. Watching for changes... Ctrl+C to exit"
  npx tailwindcss -i ./src/css/main.css -o ${CSS_OUTFILE} --watch
}

# Run
sanityChecks
build
