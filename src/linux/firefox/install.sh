#!/bin/sh

mkdir -p ~/.mozilla/native-messaging-hosts/
mkdir -p ~/.singlefile/WebArchives

sed -i 's@singlefile_companion_lite@'/home/$USER'/.singlefile/singlefile_companion_lite@' singlefile_companion.json 
cp singlefile_companion.json ~/.mozilla/native-messaging-hosts/singlefile_companion.json

cp singlefile_companion_lite ~/.singlefile/singlefile_companion_lite
cp options.json ~/.singlefile/options.json

chmod 755 ~/.singlefile/singlefile_companion_lite


