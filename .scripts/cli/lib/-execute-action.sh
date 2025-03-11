#!/bin/bash
# -------------------------------------------------------------------------------------
#
#
#
# -------------------------------------------------------------------------------------

. ./.scripts/loggers/lib/--index-api.sh


_cli_executeAction() {
  local FUNCTION_NAME="_cli_executeAction"

  export TMP="$1"
  export TERMINAL_ALL_ARGS=("$@")

  _loggers_debug "${FUNCTION_NAME}" "TERMINAL_ARGUMENTS: ${TERMINAL_ARGUMENTS[@]}"

  pnpm \
    --filter @lego-medium/cli run cli ${TERMINAL_ARGUMENTS[@]}

}
