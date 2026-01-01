export default {
	hello: {
		world: "Hallo Welt!",
		nested: {
			translations: "Übersetzungen",
		},
	},
	welcome: "Hallo {name}!",
	menubar: {
		pages: {
			title: "Seiten",
			home: "Startseite",
			test: "Test",
		},
		languages: {
			title: "Sprachen",
		},
		themes: {
			title: "Design auswählen",
			light: "Hell",
			dark: "Dunkel",
			system: "System",
		},
	},
	send: "Senden",
	badge: "Badge",
	use: {
		usb: "USB verwenden",
		ble: "BLE verwenden",
	},
} as const;
