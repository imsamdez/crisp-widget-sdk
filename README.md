## About

This repo illustrate a weird behavior in Crisp Widget SDK initialization after some delay.

```bash
# Start the app
npm start
```

You can check the integration code in `App.js`

### With delay

```javascript
// Crisp Widget SDK (with delay)
useEffect(() => {
  (function () {
    setTimeout(() => {
      var s = document.createElement("script");

      s.src = "https://assets.crisp.chat/widget/javascripts/sdk.min.js";
      document.getElementsByTagName("head")[0].appendChild(s);
    }, 1000);
  })();
}, []);
```

If we load the Crisp Widget SDK with some delay, it's not initialized correctly. The button is not working and the window.$crisp.widgetId is null.

### Without delay

```javascript
// Crisp Widget SDK (without delay)
useEffect(() => {
  (function () {
    var s = document.createElement("script");

    s.src = "https://assets.crisp.chat/widget/javascripts/sdk.min.js";
    document.getElementsByTagName("head")[0].appendChild(s);
  })();
}, []);
```

If we load the Crisp Widget SDK without delay, it's initialized correctly. The button is working and the window.$crisp.widgetId is not null.
