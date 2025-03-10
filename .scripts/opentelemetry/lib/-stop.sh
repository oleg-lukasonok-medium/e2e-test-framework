#!/bin/bash
# -------------------------------------------------------------------------------------
#
#     TOBE ADDED - Licence & Copyright Disclaimer
#
# -------------------------------------------------------------------------------------

. ./.scripts/loggers/lib/--index-api.sh

_opentelemetry_stop() {
  local FUNCTION_NAME="_opentelemetry_stop"
  _loggers_info "${FUNCTION_NAME}" "Stopping open telemetry service"

  local TMP_FILE_DOCKER_COMPOSE_YAML=".scripts/opentelemetry/docker-compose.yaml"

  docker compose -f "${TMP_FILE_DOCKER_COMPOSE_YAML}" down

}
