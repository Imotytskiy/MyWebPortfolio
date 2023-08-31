import { textTitles, prices, dataShop } from "./data.js";

const catContainer = document.getElementById("catContainer");
const prodContainer = document.getElementById("prodContainer");
const descrContainer = document.getElementById("descrContainer");
const formContainer = document.getElementById("formContainer");

catContainer.textContent = textTitles.categories;
prodContainer.textContent = textTitles.goodsList;
descrContainer.textContent = textTitles.arcticleInfo;

const applyStyles = (element) => {
  element.classList.add("block");
  if (element.tagName === "BUTTON") {
    element.classList.add("button");
  }
};

function createButton(container, text, clickHandler) {
  var buttonElement = document.createElement("button");
  buttonElement.textContent = text;
  applyStyles(buttonElement);
  container.appendChild(buttonElement);
  buttonElement.addEventListener("click", clickHandler);
}

const clearBlock = () => {
  prodContainer.innerHTML = textTitles.goodsList;
  descrContainer.innerHTML = textTitles.arcticleInfo;
};

const clearFirstBlock = () => {
  catContainer.innerHTML = textTitles.categories;
};

const createOrderElement = () => {
  const orderElement = document.createElement("div");
  applyStyles(orderElement);
  orderElement.classList.add("order");
  orderElement.textContent = textTitles.order;
  catContainer.appendChild(orderElement);
  return orderElement;
};

document
  .getElementById("alldelete") // button delete all
  .addEventListener("click", function (event) {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key.includes("order")) {
        localStorage.removeItem(key);
      }
    }
    location.reload();
  });

document.getElementById("reload").addEventListener("click", function (event) {
  location.reload();
});

const orderElement = createOrderElement();

const findStorageOrder = (count) => {
  for (let i = 0; i < count; i++) {
    if (localStorage.key(i).includes("order")) {
      return false;
    }
  }
  return;
};

orderElement.addEventListener("click", function (event) {
  if (findStorageOrder(localStorage.length)) {
    alert("Замовлення відсутні");
    return;
  }
  clearFirstBlock();
  catContainer.style.display = "none";
  const accordionContainer = document.getElementById("accordion-container");
  accordionContainer.style.display = "block";

  function createAccordionSection(sectionTitle, sectionContent) {
    const button = document.createElement("button");
    button.id = idButton;
    button.classList.add("accordion");
    button.textContent = sectionTitle;

    const innerButton = document.createElement("span");
    innerButton.classList.add("delete-button");
    innerButton.textContent = "ВИДАЛИТИ";

    const panel = document.createElement("div");
    panel.classList.add("panel");
    const paragraph = document.createElement("p");
    paragraph.textContent = sectionContent;
    panel.appendChild(paragraph);

    accordionContainer.appendChild(button);
    button.appendChild(innerButton);
    accordionContainer.appendChild(panel);

    innerButton.addEventListener("click", function () {
      const closestElement = innerButton.closest(".accordion");
      const closestElementId = closestElement.id;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      }
      localStorage.removeItem(closestElementId + "order");
      closestElement.remove();
    });
  }

  let idButton = "";
  function createAccordionSections(count) {
    for (let i = 0; i < count; i++) {
      if (localStorage.key.includes("order")) {
        let key = localStorage.key(i);
        const forValue = JSON.parse(localStorage.getItem(key));
        idButton = forValue.key;
        let orderInfo = `Замовлено ${localStorage
          .key(i)
          .slice(0, -11)} року. Ціна за одн. ${forValue.price}$. Кількість ${
          forValue.quantity
        } шт. Загальна сумма до сплати ${(
          Number(forValue.quantity) * Number(forValue.price)
        ).toString()} дол. США`;
        createAccordionSection(orderInfo, forValue.description);
      }
    }
  }

  createAccordionSections(localStorage.length);

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    // from w3schools.com + css + html accordion
    acc[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      try {
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      } catch (error) {
        console.log("Во время удаления order, при открытом аккардионе", error);
      }
    });
  }
});
dataShop.forEach((category) => {
  const categoryElement = document.createElement("div");
  applyStyles(categoryElement);
  categoryElement.textContent = category.name;
  catContainer.appendChild(categoryElement);
  categoryElement.addEventListener("click", makeCategory);
});

function makeCategory(event) {
  let currentCategory = dataShop.find(
    (category) => category.name === event.target.innerText
  );
  clearBlock();

  currentCategory.products.forEach((product) => {
    const productElement = document.createElement("div");
    applyStyles(productElement);
    productElement.textContent = product.name;
    prodContainer.appendChild(productElement);
    productElement.addEventListener("click", productSelect(product));
  });
}
let jsonProduct = "";
let jsonIdProduct = "";
let jsonDescription = "";
function productSelect(product) {
  return function (event) {
    descrContainer.innerHTML = textTitles.arcticleInfo;
    var descriptionElement = document.createElement("div");
    applyStyles(descriptionElement);
    descriptionElement.textContent = product.description;
    jsonDescription = product.description;
    jsonProduct = product.name;
    jsonIdProduct = product.id;
    descrContainer.appendChild(descriptionElement);
    createButton(descrContainer, textTitles.buy, function (event) {
      formContainer.style.display = "block";
      clearBlock();
    });
  };
}

//  script for form

function formWarehouse() {
  const checkBox = document.getElementById("warehouse");
  const wareHouse = document.getElementById("newPost");
  checkBox.addEventListener("input", () => {
    if (!checkBox.checked) {
      wareHouse.disabled = false;
      wareHouse.placeholder = "Введіть номер складу";
      wareHouse.value = "";
    } else {
      wareHouse.disabled = true;
      wareHouse.placeholder = "Заблоковано";
      wareHouse.value = "";
    }
  });
}

formWarehouse(); // check box для склада Новой почты

const inputName = document.getElementById("name");
const inputSurname = document.getElementById("surname");
const inputFatherName = document.getElementById("father-name");

function makeUpperCaseForName(input) {
  input.addEventListener("input", () => {
    input.value = input.value.toUpperCase();
  });
}

makeUpperCaseForName(inputName); // uppercase для ФИО
makeUpperCaseForName(inputSurname);
makeUpperCaseForName(inputFatherName);

(function () {
  const rangeInput = document.getElementById("customRange2");

  rangeInput.addEventListener("input", () => {
    document.getElementById("rangeValue").textContent = rangeInput.value; // бегунок формы обновляем realtime value
  });

  const actualForm = document.getElementById("buyerform");
  actualForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(actualForm);
    let string = "";
    formData.forEach((value, key) => {
      string += `<div class="formarray">${key}:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${value}</div>`;
    });

    document.getElementById(
      "formPost"
    ).innerHTML = `<div class="formarray">Iнформація про товар та про доставку<br>${string} </div>`;
    deleteButtons();
    createButton(formContainer, textTitles.edit, () => {
      enableFormElements();
    });

    const dateForJson = function () {
      let now = new Date();

      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();

      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      hour = hour < 10 ? "0" + hour : hour;
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      let formattedDate = `${day} ${month} ${year}${hour}${minute}${second}order`;
      console.log(formattedDate);
      return formattedDate;
    };

    const createJsonFormData = () => {
      const jsonFormData = {};

      jsonFormData.key = dateForJson();
      jsonFormData.id = jsonIdProduct;
      jsonFormData.quantity = actualForm["quantity"].value;
      jsonFormData.product = jsonProduct;
      jsonFormData.date = jsonFormData.key.slice(0, -11);
      jsonFormData.price = prices[jsonIdProduct].toString();

      jsonFormData.description = `Замовник: ${actualForm["name"].value} ${actualForm["surname"].value} ${actualForm["father-name"].value}. 
        Місто доставки: ${actualForm["city"].value}. Спосіб оплати: ${actualForm["paymentmethod"].value}. Товар: ${jsonDescription}`;

      if (actualForm["number-of-post"].value) {
        jsonFormData.description += ` Склад Нової пошти для надсилання № ${actualForm["number-of-post"].value}.`;
      }

      if (actualForm["comment"].value) {
        jsonFormData.description += ` Коментар:  ${actualForm["comment"].value}.`;
      }

      return jsonFormData;
    };

    createButton(formContainer, textTitles.confirm, () => {
      const jsonFormData = createJsonFormData();
      localStorage.setItem(jsonFormData.key, JSON.stringify(jsonFormData));
      document.getElementById("buyerform").reset();
      location.reload();
    });
    for (let i = 0; i < actualForm.elements.length; i++) {
      //   все elements form Off
      actualForm.elements[i].disabled = true;
    }
  });

  function deleteButtons() {
    // button edit and approve for form
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      if (
        button.textContent.trim() === "РЕДАГУВАТИ" ||
        button.textContent.trim() === "ПІДТВЕРДИТИ"
      ) {
        button.remove();
      }
    });
  }

  function createButton(container, text, clickHandler) {
    var buttonElement = document.createElement("button");
    buttonElement.textContent = text;
    applyStyles(buttonElement);
    container.appendChild(buttonElement);
    buttonElement.addEventListener("click", clickHandler);
  }

  function enableFormElements() {
    // все elements form ON
    for (let i = 0; i < actualForm.elements.length; i++) {
      actualForm.elements[i].disabled = false;
    }
  }
})();
////////////////////////////////////////////////////////////////
// function setCookie(name, surname) {
//   var expirationDate = new Date();
//   expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000); // 24 hours in milliseconds
//   var expires = "expires=" + expirationDate.toUTCString();
//   document.cookie = name + "=" + surname + ";" + expires + ";path=/";
// }

// if (getCookie("cookieKey")) {
//   const cookieValue = getCookie("cookieKey");
//   const surnameInput = document.getElementById("validationCustom01");
//   console.log(cookieValue.substring(0, cookieValue.indexOf(" ")));
//   surnameInput.value = cookieValue.substring(0, cookieValue.indexOf(" "));

//   const nameInput = document.getElementById("validationCustom02");
//   console.log(cookieValue.substring(cookieValue.indexOf(" ") + 1));
//   nameInput.value = cookieValue.substring(cookieValue.indexOf(" ") + 1);
// }
// function deleteCookie(name) {
//   document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
// }
// deleteCookie("myCookie");
