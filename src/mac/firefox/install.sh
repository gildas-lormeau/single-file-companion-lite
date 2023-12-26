#!/bin/sh

mkdir -p ~/Library/Application\ Support/Mozilla/NativeMessagingHosts/
sed -i '' -r 's+"path": "singlefile_companion_lite"+"path" :"'"$PWD"'\/singlefile_companion_lite"+' singlefile_companion.json
cp singlefile_companion.json ~/Library/Application\ Support/Mozilla/NativeMessagingHosts/singlefile_companion.json