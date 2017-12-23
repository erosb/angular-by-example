#!/usr/bin/env bash

rm -rf dist
ng build
cd dist
zip -r ngbex.zip *
scp ngbex.zip erosb@angular-by-example.tech:ngbex.zip
ssh erosb@angular-by-example.tech <<EOF
rm -rf /home/ngbex/public_html/*
unzip ngbex.zip -d /home/ngbex/public_html/
EOF
