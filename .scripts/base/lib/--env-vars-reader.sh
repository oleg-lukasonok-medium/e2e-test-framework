#!/bin/bash
# -------------------------------------------------------------------------------------
#
#
#
# -------------------------------------------------------------------------------------

if
  [ -e .env-local ]
then
  export $(grep -v '^#' .env-local | xargs) >/dev/null 2>&1
fi
if
  [ -e .env ]
then
  export $(grep -v '^#' .env | xargs) >/dev/null 2>&1
fi

. ./.scripts/loggers/lib/--env-vars-reader.sh

ALL_ARGS=("$@")
while [[ "$#" -gt 0 ]]; do
  case $1 in
  *) ;;
  esac
  shift
done
set -- "${ALL_ARGS[@]}"
