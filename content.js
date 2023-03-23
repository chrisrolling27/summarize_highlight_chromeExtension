







// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.action === "summarize") {
//       fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": ""
//         },
//         body: JSON.stringify({
//           prompt: "Summarize this text: " + request.text,
//           max_tokens: 50,
//           temperature: 0.7
//         })
//       })
//       .then(response => response.json())
//       .then(data => {
//         const summary = data.choices[0].text;
//         // Display the summary to the user
//         alert(summary);
//       });
//     }
//   });
  