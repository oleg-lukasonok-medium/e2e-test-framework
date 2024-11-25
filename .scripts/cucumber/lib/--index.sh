#!/bin/bash
# -------------------------------------------------------------------------------------
#
#
#
# -------------------------------------------------------------------------------------
#
#       --> passed parameters are read & exported environment variables
#
. ./.scripts/cucumber/lib/--env-vars-reader.sh
#
#       --> required environment variables are validated for existance
#
. ./.scripts/cucumber/lib/--env-vars-validator.sh
#
#       --> available functions are imported/exported
#
. ./.scripts/cucumber/lib/--index-api.sh
# -------------------------------------------------------------------------------------
