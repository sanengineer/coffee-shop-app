const remote = require("electron").remote;
const button = document.createElement("button");

const MinimizeButton = function () {
  function init() {
    button
      .setAttribute("class", "minimize-button")
      .addEventListener("click", (e) => {
        const window = remote.getCurrentWindow();
        window.minimize();
      });
  }

  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      init();
    }
  };
};

module.exports = MinimizeButton;
