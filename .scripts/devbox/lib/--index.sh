#!/bin/bash
# -------------------------------------------------------------------------------------
#
#
#
# -------------------------------------------------------------------------------------
#
#       --> passed parameters are read & exported environment variables
#
. ./.scripts/devbox/lib/--env-vars-reader.sh
#
#       --> required environment variables are validated for existance
#
. ./.scripts/devbox/lib/--env-vars-validator.sh
#
#       --> available functions are imported/exported
#
. ./.scripts/devbox/lib/--index-api.sh
# -------------------------------------------------------------------------------------
