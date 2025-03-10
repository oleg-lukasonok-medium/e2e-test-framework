#!/bin/bash
# -------------------------------------------------------------------------------------
#
#
#
# -------------------------------------------------------------------------------------
#
#       --> passed parameters are read & exported environment variables
#
. ./.scripts/cli/lib/--env-vars-reader.sh
#
#       --> required environment variables are validated for existance
#
. ./.scripts/cli/lib/--env-vars-validator.sh
#
#       --> available functions are imported/exported
#
. ./.scripts/cli/lib/--index-api.sh
# -------------------------------------------------------------------------------------
