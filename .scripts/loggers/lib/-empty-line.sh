#!/bin/bash
# -------------------------------------------------------------------------------------
#
#
#
# -------------------------------------------------------------------------------------

. ./.scripts/loggers/lib/-enable-trailing-new-line.sh

_loggers_emptyLine() {
  _loggers_enableLoggerTrailingNewLine
  echo -e "" >&2
}
