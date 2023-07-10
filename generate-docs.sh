#!/bin/sh

cd /github/workspace

echo "redoc-cli version: $(redoc-cli --version)"

chmod +x generate-docs.sh

redoc-cli $1