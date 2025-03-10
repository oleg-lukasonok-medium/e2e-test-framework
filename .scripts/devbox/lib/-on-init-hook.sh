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
    _loggers_info "${FUNCTION_NAME}" "Activating pnpm@10.0.0 version"
    corepack prepare pnpm@10.0.0 --activate
  } || {
    _loggers_error "${FUNCTION_NAME}" "Cought error - while activating pnpm@10.0.0 version"
    exit 1
  }
  {
    _loggers_info "${FUNCTION_NAME}" "Installing nodejs dependencies..."
    pnpm install
  } || {
    _loggers_error "${FUNCTION_NAME}" "Cought error - while installing nodejs dependencies"
    exit 1
  }
  {
    _loggers_info "${FUNCTION_NAME}" "Building dist"
    pnpm run build
  } || {
    _loggers_error "${FUNCTION_NAME}" "Cought error - Building dist..."
    exit 1
  }

}
