#!/bin/bash
# -------------------------------------------------------------------------------------
#
#
#
# -------------------------------------------------------------------------------------

. ./.scripts/loggers/lib/-enable-trailing-new-line.sh

_loggers_waitingDot() {
  echo -n "." >&2
  export LOGGER_TRAILING_NEW_LINE_DISABLED=""
}
