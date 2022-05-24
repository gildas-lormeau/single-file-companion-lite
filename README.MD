# SingleFile Companion Lite

SingleFile Companion Lite is a program that runs outside the browser. It allows
you to save pages in another folder than the browser's download folder.

It uses the
[Native Messaging API](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/Native_messaging)
to communicate with [SingleFile](https://github.com/gildas-lormeau/SingleFile).

## Install

- Download the zip file corresponding to your OS and your browser:

  - Chrome, Linux: [`chromium-linux.zip`](install/chromium-linux.zip)
  - Chrome, Windows: [`chromium-win.zip`](install/chromium-win.zip)
  - Chrome, macOS: [`chromium-mac.zip`](install/chromium-mac.zip)
  - Firefox, Linux: [`firefox-linux.zip`](install/firefox-linux.zip)
  - Firefox, Windows: [`firefox-win.zip`](install/firefox-win.zip)
  - Firefox, macOS: [`firefox-mac.zip`](install/firefox-mac.zip)

- Unzip the file in an empty folder somewhere on your disk an run `install`

- Enable the option `Destination > save with SingleFile Companion` in SingleFile

By default, pages are saved in the `./WebArchives/` folder.

## Options

The `options.json` file allows configuring SingleFile Companion Lite. Here are
the entries you can edit:

- `savePath`: path where to save files (default: `./WebArchives/`)
- `errorFilePath`: path of the file where errors are stored (default:
  `undefined`)
