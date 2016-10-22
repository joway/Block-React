#!/usr/bin/env bash
set -e
set -x

nginx -g 'daemon off;' -c $CODE/src/nginx.conf
nginx -c $CODE/src/nginx.conf