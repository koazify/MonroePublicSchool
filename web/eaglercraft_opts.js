window.eaglercraftXOpts = () => ({
	lang: "en_US",
  // joinServer: "ws" + window.location.href.slice(4),
  // assetsURI: "custom.epk",
	servers: [
		{ addr: "ws" + window.location.href.slice(4), name: "Monroe Minecraft Server" },
		{ addr: "wss://otherserveraddress.here", name: "EaglercraftX Server"}
	]
});
// document.title = "My Original Server Name:tm:";
// document.querySelector("link[rel=\"shortcut icon\"]").href = "https://www.google.com/favicon.ico";