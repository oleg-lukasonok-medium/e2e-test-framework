#!/bin/bash
# -------------------------------------------------------------------------------------
#
#
#
# -------------------------------------------------------------------------------------

. ./.scripts/loggers/lib/--index-api.sh

_cucumber_scenariosNative() {
  local FUNCTION_NAME="_cucumber_scenariosNative"
  _loggers_info "${FUNCTION_NAME}"
  export TERMINAL_ARGUMENTS=("$@")

  local CUCUMBER_CUCUMBER_PATH_REGEX="src/cucumber/**/*.ts"
  local CUCUMBER_STEPS_PATH_REGEX="src/steps/**/*.ts"

  local TMP_CUCUMBER_TAGS="not @ignore"

  _loggers_info "${FUNCTION_NAME}" "TERMINAL_ARGUMENTS: ${TERMINAL_ARGUMENTS[@]}"
  _loggers_info "${FUNCTION_NAME}" "CUCUMBER_CUCUMBER_PATH_REGEX: ${CUCUMBER_CUCUMBER_PATH_REGEX}"
  _loggers_info "${FUNCTION_NAME}" "CUCUMBER_STEPS_PATH_REGEX: ${CUCUMBER_STEPS_PATH_REGEX}"
  _loggers_info "${FUNCTION_NAME}" "CUCUMBER_TAGS: ${TMP_CUCUMBER_TAGS}"

  NODE_OPTIONS="--experimental-specifier-resolution=node --import @lego-medium/opentelemetry" pnpm \
    --filter @lego-medium/scenarios-native run cucumber-js \
    --loader ts-node/esm \
    --import "${CUCUMBER_CUCUMBER_PATH_REGEX}" \
    --import "${CUCUMBER_STEPS_PATH_REGEX}" \
    --tags="${TMP_CUCUMBER_TAGS}" \
    --format @cucumber/pretty-formatter \
    --format-options "{\"snippetInterface\": \"async-await\"}" \
    --format ./src/cucumber/reporters/allure-reporter.ts:dummy.json \
    "${TERMINAL_ARGUMENTS[@]}"
}
