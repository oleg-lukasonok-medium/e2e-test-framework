#!/bin/bash
# -------------------------------------------------------------------------------------
#
#     TOBE ADDED - Licence & Copyright Disclaimer
#
# -------------------------------------------------------------------------------------

. ./.scripts/loggers/lib/--index-api.sh

_opentelemetry_start() {
  local FUNCTION_NAME="_opentelemetry_start"
  _loggers_info "${FUNCTION_NAME}" "Starting open telemetry service"

  local TMP_FILE_DOCKER_COMPOSE_YAML=".scripts/opentelemetry/docker-compose.yaml"

  docker compose -f "${TMP_FILE_DOCKER_COMPOSE_YAML}" up -d

}
