console.log('background.js run');
async function alertHighlight() {
  let text = window.getSelection().toString();
  console.log(text);

  if (text != '') {
    try {
      const response = await fetch('https://api.openai.com/v1/engines/text-davinci-002/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer sk-XX`,
        },
        body: JSON.stringify({
          prompt: `Please summarize the following text: ${text}`,
          max_tokens: 50,
          n: 1,
          stop: null,
          temperature: 0.7,
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
        console.log(data);
        const summary = data.choices[0].text.trim();
        console.log(summary);
        alert(summary);
      } else {
        console.error("Unexpected API response format:", data);
        alert("Failed to fetch summary. Please try again.");
      }

    } catch (error) {
      alert(error);
    }
  } else {
    alert('you need to highlight text');
  }
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: alertHighlight
  });
});
