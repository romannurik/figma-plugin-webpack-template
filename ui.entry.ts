import './lib/figma-ui/figma-ui.min.js';
import './ui.scss';

// TODO
parent.postMessage({ pluginMessage: {}}, '*');

window.onmessage = async event => {
	let message = event.data.pluginMessage;
  // TODO
};
