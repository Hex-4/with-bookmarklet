let s = window.getSelection();

if (s) {
  // window.location = "https://mail.proton.me/u/0/almost-all-mail#keyword=" + s.toString()
  let range = s.getRangeAt(0);
  let text = s.toString();
  clearSelection();

  let pickerWrapper = document.createElement("div");
  pickerWrapper.style = "display: inline;";

  range.insertNode(pickerWrapper);

  let picker = document.createElement("div");
  picker.style =
    "display: flex; height: 50px; background-color: #8a89ab; position: absolute; bottom: calc(1em + 10px); align-content: center; border-radius: 9999px; padding: 10px;";

  picker.innerHTML = `<div
  onMouseOver="this.style.translate='0px -10px'"
  onMouseOut="this.style.translate='0px 0px'"
  style="
    transition: all 0.1s ease-out;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  "
>
  <img
    src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/5c4bcaae72a9fc09a423ece58760070a3c1ec9ee_mail-logomark-transparent.png"
    style="
      width: 30px;
      height: 30px;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none;
    "
    id="WBK-protonmail"
  />
</div>
<div
  onMouseOver="this.style.translate='0px -10px'"
  onMouseOut="this.style.translate='0px 0px'"
  style="
    transition: all 0.1s ease-out;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  "
>
  <img
    src="https://img.icons8.com/sf-black/128/delete-sign.png"
    style="
      width: 30px;
      height: 30px;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none;
    "
    id="WBK-closemenu"
  />
</div>

`;

  pickerWrapper.appendChild(picker);

  setTimeout(() => {
    pickerWrapper.style.position = "relative";
  }, 50);

  document.getElementById("WBK-protonmail").addEventListener("click", () => {
    window.location =
      "https://mail.proton.me/u/0/almost-all-mail#keyword=" + text;
  });
  document.getElementById("WBK-closemenu").addEventListener("click", () => {
    pickerWrapper.remove()
  });
}

// https://stackoverflow.com/questions/6562727/is-there-a-function-to-deselect-all-text-using-javascript
function clearSelection() {
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else if (document.selection) {
    document.selection.empty();
  }
}
