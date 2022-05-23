#!/bin/sh

mkdir -p ~/.config/google-chrome/NativeMessagingHosts/
sed -i -r 's+"path": "singlefile_companion_lite"+"path" :"'"$PWD"'\/singlefile_companion_lite"+' singlefile_companion.json
cp singlefile_companion.json ~/.config/google-chrome/NativeMessagingHosts/singlefile_companion.json