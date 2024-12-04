import { card, getData } from "./function.js";
let input = document.querySelector(".input");
let btn = document.querySelector(".btnplus");
let remove = document.querySelector(".remove");
let wraper = document.querySelector(".wraper");
btn.addEventListener("click", function () {
  let user = {
    name: input.value,
    id: Date.now(),
  };
  wraper.innerHTML += card(user);
  let users = getData() || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  input.value = "";
});
document.addEventListener("DOMContentLoaded", function () {
  let user = getData();
  user.forEach((value) => {
    let cards = card(value);
    wraper.innerHTML += cards;
  });

  let removebtn = document.querySelectorAll(".btntrash");
  removebtn.forEach(function (value) {
    value.addEventListener("click", function () {
      let chekked = confirm("siz rostanham taskni ochirmoqchimisiz");
      let id = this.parentNode.getAttribute("data-id")
      // console.log(id);

      if (chekked && id) {
        let users = getData();
        users=users.filter(function (value) {
          return value.id != id;
        });
        localStorage.setItem("users", JSON.stringify(users));
        this.parentNode.remove();
      }
    });
  });
  // let res = wraper.querySelectorAll(".card").length;
  // function card(data) {
  //   return `
  //   <p>You have ${res} pending tasks</p>
  //   `;
  // }
  // console.log(card(res));
});
