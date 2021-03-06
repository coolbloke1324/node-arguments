var Args = exports;

Args.process = function (argArray, options) {
	// Define our local variables
	var separator = options.separator,
		startFrom = options.startFrom,
		sourceArgString = '',
		curSepIndex = null,
		finalArgs = [];
	
	if (typeof(startFrom) == 'undefined') {
		// The startFrom is undefined so read from the third (array index 2) parameter
		// because the first and second are usually "node" and the name of the script
		// being executed like "/something/whatever.js"
		startFrom = 2;
	}
	
	// Loop through the arguments array and extract the arguments
	for (i in argArray) {
		if (argArray.hasOwnProperty(i)) {
			// Check we are dealing with a string
			if (typeof(argArray[i]) === 'string') {
				// Check if we have found a separator string
				if (argArray[i].substr(0, separator.length) === separator) {
					curSepIndex = argArray[i];
					finalArgs[argArray[i]] = '';
				} else {
					if (curSepIndex) {
						if (finalArgs[curSepIndex]) { finalArgs[curSepIndex] += ' '; }
						finalArgs[curSepIndex] += argArray[i];
					}
				}
			}
		}
	}
	return finalArgs;
};