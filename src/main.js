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

// 이벤트를 처리하는 함수 on
function onButtonClick(event, items) {
  // html에서 작성한아이가 어떻게 event에 추가되어서 나오는지
  // event에있는 클릭이된 타겟
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;
  // console.log(event.target.dataset.key);
  // console.log(event.target.dataset.value);
  if (key == null || value == null) {
    return;
  }
  // 오브젝트는 배열처럼 키를이용해서 데이터에접근
  displayItems(items.filter((item) => item[key] === value));
  // 배열에서 특정한데이터만 다시추출해서 새로운배열 filter
}

function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  // event 위임
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => displayItems(items));
  // 이벤트가 발생한아이를 인자로전달해주고, items도 전달
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

// main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
