console.log('dist index js initiated');

const tabs = await chrome.tabs.query({
  url: [
    "https://developer.chrome.com/docs/webstore/*",
    "https://developer.chrome.com/docs/extensions/*",
  ],
});

const collator = new Intl.Collator();
tabs.sort((a, b) => collator.compare(a.title, b.title));

const template = document.getElementById("li_template");

const elements = new Set();
for (const tab of tabs) {
  const element = template.content.firstElementChild.cloneNode(true);

  const title = tab.title.split("-")[0].trim();
  const pathname = new URL(tab.url).pathname.slice("/docs".length);

  element.querySelector(".title").textContent = title;
  element.querySelector(".pathname").textContent = pathname;
  element.querySelector("a").addEventListener("click", async () => {
    // need to focus window as well as the active tab
    await chrome.tabs.update(tab.id, { active: true });
    await chrome.windows.update(tab.windowId, { focused: true });
  });

  elements.add(element);
}
document.querySelector("ul").append(...elements);
 

const button = document.querySelector("button");

button.addEventListener("click", async () => {
  const tabIds = tabs.map(({ id }) => id);
  const group = await chrome.tabs.group({ tabIds });
  await chrome.tabGroups.update(group, { title: "DOCS" });
});

// if (window.getSelection) {

//   console.log('window got selected');

//   const text = window.getSelection().toString();

//   // const badge = document.createElement("p");
//   // // Use the same styling as the publish information in an article's header
//   // badge.classList.add("color-secondary-text", "type--caption");
//   // const summary = "hello this is test summary text";
//   // badge.textContent = `Summary: ${summary}`;

//   console.log(text);




//   // Support for API reference docs and dates
//   //const heading = article.querySelector("h1");
//   //const date = article.querySelector("time")?.parentNode;

//   //(date ?? heading).insertAdjacentElement("afterend", badge);

// }


// //server that takes text, sends it to node server
// //node server sends to GTP and returns
