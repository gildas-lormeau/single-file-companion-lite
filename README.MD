# SingleFile Companion Lite

SingleFile Companion Lite is a program that runs outside the browser. It allows
you to save pages in another folder than the browser download folder.

It uses the
[Native Messaging API](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
to communicate with SingleFile.

## Install

- Download from the [`install`](install/) folder the zip file corresponding to
  your OS and your browser. For example, if you're using Chome on Linux,
  download [`install/chromium-linux.zip`](install/chromium-linux.zip)

- Unzip the file in an empty folder somewhere on your disk an run `install`

- Enable the option `Destination > save with SingleFile Companion` in SingleFile

By default, pages are saved in the `./WebArchives/` folder.

## Options

The `options.json` file allows configuring SingleFile Companion Lite. Here are
the entries you can edit:

- `savePath`: path where to save files (default: `./WebArchives/`)
- `errorFilePath`: path of the file where errors are stored (default:
  `undefined`)
