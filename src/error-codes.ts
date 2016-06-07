const error = {
	/** No package.json error message */
	NO_PACKAGE_JSON: 'No package.json found in the workspace root',
	UNHANDLED_ERROR: 'unhandled error happened - please report to liebigsv@gmail.com',
	REGEX_ERROR: 'ClassName Regex Error: Should match (^[A-Z][A-Za-z]*$), you can disable the regex check in your settings'
}

const info = {
	/** No directory selected from context menu */
	SELECT_DIRECTORY: 'Please select a directory as root for the new component.',
	/** Call from context menu */
	PLEASE_CONTEXT: 'Please call this extension from the context menu in the explorer sidebar.',
	FILE_SYSTEM_UNDEFINED: 'The Node Package FileSystem is undefined.',
	MKDIR_UNDEFINED: 'The Node Package FileSystem is undefined.'
}

export { info as info };
export { error as error };