#!/bin/bash
# -------------------------------------------------------------------------------------
#
#
#
# -------------------------------------------------------------------------------------

. ./.scripts/loggers/lib/-enable-trailing-new-line.sh

_loggers_info() {
  _loggers_enableLoggerTrailingNewLine
  if
    [ "${LOGGER_IS_ENABLED_INFO}" = true ]
  then
    local TMP_1ST_PARAM="${1}${LOCAL_STRING_070_SPACES}"
    TMP_1ST_PARAM="${TMP_1ST_PARAM:0:70}"
    local TMP_LINE="# INFO  # ${TMP_1ST_PARAM} #     ${2}"
    echo -e "${TMP_LINE}" >&2
  fi
}
