#!/bin/bash
# -------------------------------------------------------------------------------------
#
#
#
# -------------------------------------------------------------------------------------
#
#       --> passed parameters are read & exported environment variables
#
. ./.scripts/opentelemetry/lib/--env-vars-reader.sh
#
#       --> required environment variables are validated for existance
#
. ./.scripts/opentelemetry/lib/--env-vars-validator.sh
#
#       --> available functions are imported/exported
#
. ./.scripts/opentelemetry/lib/--index-api.sh
# -------------------------------------------------------------------------------------
