#!/bin/sh

mkdir -p ~/.mozilla/native-messaging-hosts/
sed -i -r 's+"path": "singlefile_companion_lite"+"path" :"'"$PWD"'\/singlefile_companion_lite"+' singlefile_companion.json
cp singlefile_companion.json ~/.mozilla/native-messaging-hosts/singlefile_companion.json