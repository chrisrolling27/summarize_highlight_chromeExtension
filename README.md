This Chrome extension allows you to summarize highlighted text on a webpage with a single click using your own OpenAI key. 


INSTRUCTIONS:

1) Get your OpenAI API Key. To do this you should sign up with the link below, click your account icon, and navigate to View API Keys to create and obtain your API key. 

https://platform.openai.com/account/api-keys

2) Download the extension files. You can do this by clicking the green CODE button in my Github project and downloading the ZIP. Extract the ZIP. 

3) Open "background.js" in any text editor. Navigate to line 12 where you should see the Authorization key/value pairing. Replace the capitalized words with your API key which should begin with "sk-". Save your changes. 

'Authorization': `Bearer YOUR_API_KEY`

4) Open your Chromium based browser of choice. Use the top right hamburger button to select Extensions. Enable Developer mode in the top right corner. Click the "Load Unpacked" button and give your file explorer the entire unzipped folder with the extension files. Enable the extension.

5) You should be able to access the extension now when navigating to your extensions (puzzle icon). Consider pinning this extension as a favorite. In any case, simply highlight an article or some text (the longer the better generally) and then click the extension button. You should receive an alert summarizing this text. 
