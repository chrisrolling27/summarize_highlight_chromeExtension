
console.log('background.js run')

  chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action === "highlight") {
        console.log('highlighted text got!')
        const highlightedText = window.getSelection().toString();
        chrome.tabs.sendMessage(sender.tab.id, {action: "summarize", text: highlightedText});
    }
  });