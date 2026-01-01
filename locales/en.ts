export default {
  hello: {
    world: "Hello world!",
    nested: {
      translations: "Translations",
    },
  },
  welcome: "Hello {name}!",
  menubar: {
    pages: {
      title: "Pages",
      home: "Home",
      test: "Test",
    },
    languages: {
      title: "Languages",
    },
    themes: {
      title: "Toggle theme",
      light: "Light",
      dark: "Dark",
      system: "System",
    },
  },
  send: "Send",
  badge: "Badge",
  use: {
    usb: "Use USB",
    ble: "Use BLE",
  },
} as const;
