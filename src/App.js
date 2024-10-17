import { useEffect } from "react";
import "./App.css";

function App() {
  // Crisp Widget SDK
  useEffect(() => {
    (function () {
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
