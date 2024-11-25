#!/bin/bash
# -------------------------------------------------------------------------------------
#
#
#
# -------------------------------------------------------------------------------------

. ./.scripts/loggers/lib/--index-api.sh

_devbox_onInitHook() {
  local FUNCTION_NAME="_devbox_onInitHook"
  _loggers_info "${FUNCTION_NAME}"
  _loggers_info "${FUNCTION_NAME}" "Activated python virtual environment"
  _loggers_info "${FUNCTION_NAME}" "VENV_DIR: ${VENV_DIR}"
  {
    _loggers_info "${FUNCTION_NAME}" "Installing extra dependencies..."
  } || {
    _loggers_error "${FUNCTION_NAME}" "Unable install extra dependencies..."
    exit 1
  }
}
