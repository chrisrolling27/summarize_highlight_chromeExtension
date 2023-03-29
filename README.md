This Chrome extension allows you to summarize any highlighted text on a webpage with a single click using your own OpenAI API.

Prerequisites
Before installing the extension, you must obtain your own OpenAI API key:

Sign up for OpenAI: Visit OpenAI's website and sign up for an account if you don't already have one.

Get your API key: Once you have an account, go to the API Keys page to obtain your API key.

Update the extension code: Open the background.js file in the extension folder, locate the Authorization header, and replace YOUR_API_KEY with your actual OpenAI API key in the headers.authorization:

'Authorization': `Bearer YOUR_API_KEY`

Make sure to save the changes.

Installation Instructions
Download the files: Download the extension files from the Github repository and extract them to a folder on your computer if necessary.

Open the Extensions page: Open your Chrome or Brave browser, and navigate to the Extensions page by clicking on the three-dot menu in the upper right corner, then selecting "More Tools" > "Extensions".

Enable Developer Mode: On the Extensions page, locate the "Developer mode" toggle in the upper right corner and enable it by clicking on the toggle switch.

Load unpacked extension: Click on the "Load unpacked" button on the Extensions page and select the folder containing the extension files you downloaded in step 1 (the folder should contain the manifest.json file and other extension files).

Access the extension: The extension should now be visible on the Extensions page. To access it easily while browsing, click on the puzzle icon in the browser's toolbar, and find the extension in the list. Optionally, you can pin the extension by clicking the pin icon next to it, so it's always visible in the toolbar.

Usage
To use the extension and summarize text on a webpage, follow these steps:

Highlight text: Select and highlight the text on the webpage that you want to summarize.

Click the extension icon: Click on the extension icon in the toolbar (or the puzzle icon and then the extension in the list, if you didn't pin it).

View the summary: The summarized version of the highlighted text will be displayed in an alert box.

Now you can easily get summaries of text on webpages with just a single click!

