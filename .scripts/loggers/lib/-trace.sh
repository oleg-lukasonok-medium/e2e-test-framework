#!/bin/bash
# -------------------------------------------------------------------------------------
#
#
#
# -------------------------------------------------------------------------------------

. ./.scripts/loggers/lib/-enable-trailing-new-line.sh

_loggers_trace() {
  _loggers_enableLoggerTrailingNewLine
  if
    [ "${LOGGER_IS_ENABLED_TRACE}" = true ]
  then
    local TMP_1ST_PARAM="${1}${LOCAL_STRING_070_SPACES}"
    TMP_1ST_PARAM="${TMP_1ST_PARAM:0:70}"
    local TMP_LINE="# TRACE # ${TMP_1ST_PARAM} #     $2"
    echo -e "\033[0;94m${TMP_LINE}\033[0m" >&2
  fi

}
