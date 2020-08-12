// Fetch the items from the JSON file
function loadItems() {
  return fetch("data/data.json") //resoponse라는 오브젝트 전달해줌
    .then((response) => response.json())
    .then((json) => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector(".items");
  //   한가지의배열형태에서 다른형태의배열로 변환하는것 mapping
  //   const html = items.map((item) => createHTMLString(item)).join("");
  //   console.log(html);
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
  // 문자열이 들어있는 배열을 한가지의 문자열로 join
}

// Create HTML list item from the given data item
function createHTMLString(item) {
  return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
  // 문자열의 배열을 한가지의큰 문자열로 즉li들이 반복해서 들어가있는 문자열로변환
}

// main
loadItems()
  .then((items) => {
    displayItems(items);
    // setEventListeners(items);
  })
  .catch(console.log);
