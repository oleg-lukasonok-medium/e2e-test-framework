#!/bin/bash
# -------------------------------------------------------------------------------------
#
#
#
# -------------------------------------------------------------------------------------

. ./.scripts/loggers/lib/--index-api.sh

_cucumber_scenariosPlatform() {
  local FUNCTION_NAME="_cucumber_scenariosPlatform"
  _loggers_info "${FUNCTION_NAME}"
  export TERMINAL_ARGUMENTS=("$@")

  local CUCUMBER_CUCUMBER_PATH_REGEX="src/cucumber/**/*.ts"
  local CUCUMBER_STEPS_PATH_REGEX="src/steps/**/*.ts"

  _loggers_info "${FUNCTION_NAME}" "TERMINAL_ARGUMENTS: ${TERMINAL_ARGUMENTS[@]}"

  _loggers_info "${FUNCTION_NAME}" "CUCUMBER_CUCUMBER_PATH_REGEX: ${CUCUMBER_CUCUMBER_PATH_REGEX}"
  _loggers_info "${FUNCTION_NAME}" "CUCUMBER_STEPS_PATH_REGEX: ${CUCUMBER_STEPS_PATH_REGEX}"

  NODE_OPTIONS="--experimental-specifier-resolution=node" pnpm \
    --filter @lego-medium/scenarios-platform run cucumber-js \
    --loader ts-node/esm \
    --import "${CUCUMBER_CUCUMBER_PATH_REGEX}" \
    --import "${CUCUMBER_STEPS_PATH_REGEX}" \
    "src/features/**/*.feature"
}
