

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "highlight") {
        const highlightedText = window.getSelection().toString();
        chrome.tabs.sendMessage(sender.tab.id, {action: "summarize", text: highlightedText});
    }
  });