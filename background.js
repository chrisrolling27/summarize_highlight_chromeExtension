
console.log('background.js run')


chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
      chrome.scripting.executeScript({
          target: { tabId: tabId },
          files: ["./foreground.js"]
      })
          .then(() => {
              console.log("INJECTED THE FOREGROUND SCRIPT.");
          })
          .catch(err => console.log(err));
  }
});





  // chrome.runtime.onMessage.addListener(function(request, sender) {
  //   if (request.action === "highlight") {
  //       console.log('highlighted text got!')
  //       const highlightedText = window.getSelection().toString();
  //       chrome.tabs.sendMessage(sender.tab.id, {action: "summarize", text: highlightedText});
  //   }
  // });