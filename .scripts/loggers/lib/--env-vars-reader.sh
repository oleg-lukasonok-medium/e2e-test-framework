#!/bin/bash
# -------------------------------------------------------------------------------------
#
#
#
# -------------------------------------------------------------------------------------
export LOGGER_TRAILING_NEW_LINE_ENABLED="TRUE"

export LOGGER_IS_ENABLED_ERROR=true
export LOGGER_IS_ENABLED_INFO=true
export LOGGER_IS_ENABLED_WARN=true
export LOGGER_IS_ENABLED_DEBUG=true
export LOGGER_IS_ENABLED_TRACE=false

export LOCAL_STRING_005_SPACES="          "
export LOCAL_STRING_010_SPACES="${LOCAL_STRING_005_SPACES}${LOCAL_STRING_005_SPACES}"
export LOCAL_STRING_050_SPACES="${LOCAL_STRING_010_SPACES}${LOCAL_STRING_010_SPACES}${LOCAL_STRING_010_SPACES}${LOCAL_STRING_010_SPACES}${LOCAL_STRING_010_SPACES}"
export LOCAL_STRING_070_SPACES="${LOCAL_STRING_050_SPACES}${LOCAL_STRING_010_SPACES}${LOCAL_STRING_010_SPACES}"
