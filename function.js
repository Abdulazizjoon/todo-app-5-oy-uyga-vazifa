function card(data) {
    return `
        <div class="card data-id="${data.id}">
          <p class="card_p">${data.name}</p>
          <button class="btntrash" type="button">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
    `;
}
function getData() {
  let data = [];
  if (localStorage.getItem("users")) {
    data = JSON.parse(localStorage.getItem("users")); 
  }
  return data; 
}

export{card,getData}