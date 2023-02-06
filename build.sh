#!/bin/sh
rm -rf install/*

deno compile --allow-read --allow-write --target x86_64-unknown-linux-gnu --output ./src/linux/singlefile_companion_lite ./src/index.js
deno compile --allow-read --allow-write --target x86_64-pc-windows-msvc --output ./src/win/singlefile_companion_lite ./src/index.js
deno compile --allow-read --allow-write --target x86_64-apple-darwin --output ./src/mac/singlefile_companion_lite ./src/index.js

zip -j install/chromium-linux.zip ./src/linux/singlefile_companion_lite ./src/options.json ./src/linux/chromium/*
zip -j install/firefox-linux.zip ./src/linux/singlefile_companion_lite ./src/options.json ./src/linux/firefox/*
zip -j install/chromium-win.zip ./src/win/singlefile_companion_lite.exe ./src/options.json ./src/win/chromium/*
zip -j install/firefox-win.zip ./src/win/singlefile_companion_lite.exe ./src/options.json ./src/win/firefox/*
zip -j install/chromium-mac.zip ./src/mac/singlefile_companion_lite ./src/options.json ./src/mac/chromium/*
zip -j install/firefox-mac.zip ./src/mac/singlefile_companion_lite ./src/options.json ./src/mac/firefox/*
