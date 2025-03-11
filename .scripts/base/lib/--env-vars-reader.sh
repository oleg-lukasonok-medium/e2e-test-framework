#!/bin/bash
# -------------------------------------------------------------------------------------
#
#
#
# -------------------------------------------------------------------------------------

. ./.scripts/loggers/lib/--env-vars-reader.sh
. ./.scripts/loggers/lib/--index-api.sh

TMP_BASE_LIB_ENV_VARS_READER=".scripts/base/lib/--env-vars-reader.sh"

TMP_BASE_FILE_ENV_VARS_CREDENTIALS=".env-${E2E_TF_ENVIRONMENT}-credentials"
TMP_BASE_FILE_ENV_VARS=".env-${E2E_TF_ENVIRONMENT}"

# if
#   [ ! -e "${TMP_BASE_FILE_ENV_VARS_CREDENTIALS}" ]
# then
#   _loggers_warn "${TMP_BASE_LIB_ENV_VARS_READER}" "Missing ${TMP_BASE_FILE_ENV_VARS_CREDENTIALS} file."
# else
#   _loggers_info "${TMP_BASE_LIB_ENV_VARS_READER}" "Reading ${TMP_BASE_FILE_ENV_VARS_CREDENTIALS} file."
#   export $(
#     grep -v '^#' "${TMP_BASE_FILE_ENV_VARS_CREDENTIALS}" | xargs
#   ) >/dev/null 2>&1
# fi

if
  [ ! -e "${TMP_BASE_FILE_ENV_VARS}" ]
then
  _loggers_error "${TMP_BASE_LIB_ENV_VARS_READER}" "Missing ${TMP_BASE_FILE_ENV_VARS} file."
  exit 1
else
  _loggers_info "${TMP_BASE_LIB_ENV_VARS_READER}" "Reading ${TMP_BASE_FILE_ENV_VARS} file."
  export $(
    grep -v '^#' "${TMP_BASE_FILE_ENV_VARS}" | xargs
  ) >/dev/null 2>&1
fi

ALL_ARGS=("$@")
while [[ "$#" -gt 0 ]]; do
  case $1 in
  *) ;;
  esac
  shift
done
set -- "${ALL_ARGS[@]}"
