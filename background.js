console.log('background.js run')

function alertHighlight() {
  let text = window.getSelection().toString();
  console.log(text);

  if (text != '') {
    alert(text)
  }

}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: alertHighlight
    });
});

