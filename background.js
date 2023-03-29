console.log('background.js run');

async function alertHighlight() {
  let text = window.getSelection().toString();
  console.log(text);

  if (text != '') {
    try {
      const summary = await fetchGPTSummary(text);
      alert(summary);
    } catch(error) {
      alert(error);
    }
    } 
    if (text == '') {
      alert('ya need highlight');
    }
  }


  async function fetchGPTSummary(text) {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer sk-`,
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
    return data.choices[0].text.trim();
  }


  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: alertHighlight
    })})