import { useEffect } from "react";
import "./App.css";

function App() {
  // Crisp Widget SDK
  useEffect(() => {
    (function () {
      // If we inject Crisp Widget SDK in the app after a second, the button doesn't seems to be working and window.$crisp.widgetId is null
      // If we inject Crisp Widget SDK directly (without setTimeout), the button works and window.$crisp.widgetId is not null
      setTimeout(() => {
        var s = document.createElement("script");

        s.src = "https://assets.crisp.chat/widget/javascripts/sdk.min.js";
        document.getElementsByTagName("head")[0].appendChild(s);
      }, 1000);
    })();
  }, []);

  return (
    <div className="s-crisp-widget">
      <button
        onClick={() => {
          console.log(window.location.href);
          window.$crisp.setHeight(300);
          window.$crisp.showToast("success", "Hello from toast");
          console.log(window.$crisp);
        }}
      >
        Show toast
      </button>
    </div>
  );
}

export default App;
