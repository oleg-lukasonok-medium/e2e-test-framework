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
  local CUCUMBER_FORMAT_OPTIONS="{\"snippetInterface\": \"async-await\"}"
  local CUCUMBER_FORMAT_REPORTERS_ALURE_PATH="./src/cucumber/reporters/allure-reporter.ts:dummy.json"

  _loggers_info "${FUNCTION_NAME}" "TERMINAL_ARGUMENTS: ${TERMINAL_ARGUMENTS[@]}"

  _loggers_info "${FUNCTION_NAME}" "CUCUMBER_CUCUMBER_PATH_REGEX: ${CUCUMBER_CUCUMBER_PATH_REGEX}"
  _loggers_info "${FUNCTION_NAME}" "CUCUMBER_STEPS_PATH_REGEX: ${CUCUMBER_STEPS_PATH_REGEX}"

  NODE_OPTIONS="--experimental-specifier-resolution=node" pnpm \
    --filter @lego-medium/scenarios-native run cucumber-js \
    --loader ts-node/esm \
    --import "${CUCUMBER_CUCUMBER_PATH_REGEX}" \
    --import "${CUCUMBER_STEPS_PATH_REGEX}" \
    "src/scenarios/**/*.feature"

  # cucumber-js \
  #   --tags="${CUCUMBER_TAGS}" \
  #   --require-module "ts-node/register" \
  #   --require "${CUCUMBER_STEPS_PATH_REGEX}" \
  #   --require "${CUCUMBER_HOOKS_PATH_REGEX}" \
  #   --format-options "${CUCUMBER_FORMAT_OPTIONS}" \
  #   --format "@cucumber/pretty-formatter" \
  #   --format "${CUCUMBER_FORMAT_REPORTERS_ALURE_PATH}" \
  #   "${TERMINAL_ARGUMENTS[@]}"
}
