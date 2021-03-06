#!/bin/bash

PATH=$PATH:$(npm bin)
set -x

BUILDFOLDER=www/

# clean up previous build
rm -fr $BUILDFOLDER

# Prod build
ionic-app-scripts build --prod \
                        --wwwDir $BUILDFOLDER

# remove unused css (~20% gain)
purifycss $BUILDFOLDER"build/main.css" \
          $BUILDFOLDER"build/*.js" \
          --info \
          --min \
          --out $BUILDFOLDER"build/main.css"