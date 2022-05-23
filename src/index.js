/*
 * Copyright 2022 Gildas Lormeau
 * contact : gildas.lormeau <at> gmail.com
 * 
 * This file is part of SingleFile.
 *
 *   The code in this file is free software: you can redistribute it and/or 
 *   modify it under the terms of the GNU Affero General Public License 
 *   (GNU AGPL) as published by the Free Software Foundation, either version 3
 *   of the License, or (at your option) any later version.
 * 
 *   The code in this file is distributed in the hope that it will be useful, 
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of 
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero 
 *   General Public License for more details.
 *
 *   As additional permission under GNU AGPL version 3 section 7, you may 
 *   distribute UNMODIFIED VERSIONS OF THIS file without the copy of the GNU 
 *   AGPL normally required by section 4, provided you include this license 
 *   notice and a URL through which recipients can access the Corresponding 
 *   Source.
 */

/* global Deno, TextDecoder, TextEncoder */

import { resolve } from "https://deno.land/std/path/mod.ts";

const BASE_PATH = ".";
const BUFFER_SIZE = 1024 * 512;
const METHOD_SAVE = "save";
const DOWNLOADS_PATH = "./WebArchives/";
const OPTIONS_FILE_PATH = "./options.json";

main();

async function main() {
	const options = await parseOptions();
	try {
		const message = await parseMessage(options);
		if (message.method == METHOD_SAVE) {
			await savePage(message.pageData, options);
		}
	} catch (error) {
		await handleError(error, options);
	}
}

async function parseOptions() {
	try {
		return JSON.parse(await Deno.readTextFile(resolve(BASE_PATH, OPTIONS_FILE_PATH)));
	} catch (error) {
		return {};
	}
}

async function parseMessage() {
	const messageSizeBuffer = new Uint32Array(1);
	await Deno.stdin.read(messageSizeBuffer);
	const messageSize = messageSizeBuffer[0];
	const messageBuffer = new Uint8Array(messageSize);
	const chunk = new Uint8Array(BUFFER_SIZE);
	let result, bytesRead = 0;
	do {
		result = await Deno.stdin.read(chunk);
		if (result) {
			messageBuffer.set(chunk.slice(0, result), bytesRead);
			bytesRead += result;
		}
	} while (result && bytesRead < messageSize);
	if (bytesRead == messageSize) {
		return JSON.parse(new TextDecoder().decode(messageBuffer));
	}
}

async function savePage(pageData, options) {
	try {
		await Deno.mkdir(resolve(BASE_PATH, options.savePath || DOWNLOADS_PATH));
	} catch (error) {
		// ignored
	}
	await Deno.writeTextFile(resolve(BASE_PATH, options.savePath || DOWNLOADS_PATH, pageData.filename), pageData.content);
}

async function handleError(error, options) {
	const errorMessage = new TextEncoder().encode(error.message + "\n");
	if (options.errorFilePath) {
		const message = error.message + "\n" + error.stack + "\n";
		await Deno.writeTextFile(resolve(BASE_PATH, options.errorFilePath), message, { append: true });
	}
	await Deno.stdout.write(new Uint32Array([errorMessage.length]));
	await Deno.stdout.write(errorMessage);
}