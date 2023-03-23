console.log('background.js run')

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
      name: "Emma"
  });
});

//To get our foreground script to actually embed into the users tab(s) we need to first monitor 
//their browsing experience with the tabs API. We do this monitoring in the backround script:
// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
//       chrome.scripting.executeScript({
//           target: { tabId: tabId },
//           files: ["./foreground.js"]
//       })
//           .then(() => {
//               console.log("INJECTED THE FOREGROUND SCRIPT.");
//           })
//           .catch(err => console.log(err));
//   }
// });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'get_name') {
      chrome.storage.local.get('name', data => {
          if (chrome.runtime.lastError) {
              sendResponse({
                  message: 'fail'
              });

              return;
          }

          sendResponse({
              message: 'success',
              payload: data.name
          });
      });

      return true;
  }})



  // chrome.runtime.onMessage.addListener(function(request, sender) {
  //   if (request.action === "highlight") {
  //       console.log('highlighted text got!')
  //       const highlightedText = window.getSelection().toString();
  //       chrome.tabs.sendMessage(sender.tab.id, {action: "summarize", text: highlightedText});
  //   }
  // });