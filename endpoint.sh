#!/usr/bin/env bash
set -e
set -x

nginx -g 'daemon off;' -c $CODE/nginx.conf
nginx -c $CODE/nginx.conf