let s = window.getSelection();

let range = s.getRangeAt(0);
let rect = range.getBoundingClientRect();
let text = s.toString();
clearSelection();

// Remove old menu if it exists
if (document.getElementById("WBK-menuwrapper")) {
  document.getElementById("WBK-menuwrapper").remove();
}

// Create a floating menu wrapper
let pickerWrapper = document.createElement("div");
pickerWrapper.id = "WBK-menuwrapper";
pickerWrapper.style.position = "absolute";
pickerWrapper.style.left = `${rect.left + window.scrollX}px`;
pickerWrapper.style.top = `${rect.top + window.scrollY - 60}px`; // 60px above selection
pickerWrapper.style.zIndex = "9999";

let picker = document.createElement("div");
picker.style =
  "display: flex; height: 50px; background-color: #8a89ab; align-content: center; border-radius: 9999px; padding: 10px; gap: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);";

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
    src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/47eff9950162ac58cff4f60967fba1d0bf1fd8fe_mail-logomark-transparent.png"
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
    src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/81e18895ae664aee60638f32e12a93f8f5b231b9_ecosia_app_icon_tree-e_circle.png"
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
    id="WBK-ecosia"
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
    src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/d3b7cdb8c3380abb7d134e4dcdd5bed70b2eff97_wikipedia-logo-v2.svg.png"
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
    id="WBK-wikipedia"
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
    src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/a75c1cf299277629558f758c50183b230626e820_dictionary.png"
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
    id="WBK-define"
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
    src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/49adc5c17dfd0906371b91a07f19c36bf9f1e915_icons8-clipboard-48.png"
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
    id="WBK-copy"
  />
</div>


<div style="width: 1px; background: white;"></div>

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
<span id="WBK-character-count" style="color: white; font-size: small; align-self: center;"></span>`;

pickerWrapper.appendChild(picker);
document.body.appendChild(pickerWrapper);

// Add listeners
document.getElementById("WBK-protonmail").addEventListener("click", () => {
  window.location =
    "https://mail.proton.me/u/0/almost-all-mail#keyword=" + text;
});
document.getElementById("WBK-wikipedia").addEventListener("click", () => {
  window.location =
    "https://en.wikipedia.org/w/index.php?title=Special:Search&search=" +
    text;
});
document.getElementById("WBK-ecosia").addEventListener("click", () => {
  window.location = "https://www.ecosia.org/search?q=" + text;
})
document.getElementById("WBK-define").addEventListener("click", () => {
  window.location = "https://merriam-webster.com/dictionary/" + text;
})
document.getElementById("WBK-copy").addEventListener("click", () => {
  navigator.clipboard.writeText(text);
  pickerWrapper.remove();
})
document.getElementById("WBK-closemenu").addEventListener("click", () => {
  pickerWrapper.remove();
});
document.getElementById("WBK-character-count").innerText =
  text.length.toString() + " chars, " + countWords(text).toString() + " words";

function clearSelection() {
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  } else if (document.selection) {
    document.selection.empty();
  }
}


function countWords(s) {
  return s.split(" ").length
}