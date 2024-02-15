#!/bin/bash
# Script utility functions

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
