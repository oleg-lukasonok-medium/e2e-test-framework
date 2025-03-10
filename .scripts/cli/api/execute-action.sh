#!/bin/bash
# -------------------------------------------------------------------------------------
#
#
#
# -------------------------------------------------------------------------------------

. ./.scripts/cli/lib/--index.sh

TERMINAL_ALL_ARGS=("$@")

# Filter out parameters that start with .env-
FILTERED_ARGS=()
for arg in "${TERMINAL_ALL_ARGS[@]}"; do
  if [[ $arg != .env-* ]]; then
    FILTERED_ARGS+=("$arg")
  fi
done

_cli_executeAction "${FILTERED_ARGS[@]}"
