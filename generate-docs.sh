#!/bin/sh

cd /.github/workflows

echo "redoc-cli version: $(redoc-cli --version)"

redoc-cli $1