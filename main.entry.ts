figma.showUI(__html__, {width: 500, height: 400});

figma.ui.onmessage = message => {
	// TODO
};


// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
// if you don't close this your UI will stay displayed
// figma.closePlugin(); 