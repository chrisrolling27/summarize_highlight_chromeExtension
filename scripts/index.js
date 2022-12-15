
console.log('scripts index run');

if (window.getSelection) {

  console.log('window got selected');

  const text = window.getSelection().toString();

  // const badge = document.createElement("p");
  // // Use the same styling as the publish information in an article's header
  // badge.classList.add("color-secondary-text", "type--caption");
  // const summary = "hello this is test summary text";
  // badge.textContent = `Summary: ${summary}`;

  console.log(text);




  // Support for API reference docs and dates
  //const heading = article.querySelector("h1");
  //const date = article.querySelector("time")?.parentNode;

  //(date ?? heading).insertAdjacentElement("afterend", badge);

}


//server that takes text, sends it to node server
//node server sends to GTP and returns
