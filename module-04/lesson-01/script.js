// Task 1

const btn1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");

btn1.onclick = fn1;

const obj1 = {
  one: 15,
  two: 16,
  five: 20,
};

function fn1() {
  out1.innerHTML = obj1.two;
}

// Task 2
const btn2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");

btn2.onclick = fn2;

const obj2 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};

function fn2() {
  out2.innerHTML = obj2["five"];
}

// Task 3
const btn3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");

btn3.onclick = fn3;

const obj3 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

function fn3() {
  let res = "";
  for (const key in obj3) {
    if (obj3[key] === "hi") {
      if (res !== "") res += " ";
      res += obj3[key];
    }
  }
  out3.innerHTML = res;
}

// Task 4
const obj4 = {
  one: "hello",
  two: "mahai",
  five: "hi",
  test: 21,
  odd: "hi",
  mix: "mix",
};

// Task 5
const obj5 = {
  one: 1,
  two: 2,
};

function fn5(object, selector) {
  let res = "";
  for (const key in object) {
    const value = object[key];
    res += `${key} : ${value} <br>`;
  }
  selector.innerHTML = res;
}

// Task 6
const btn6 = document.querySelector(".b-6");
const out6 = document.querySelector(".out-6");
const input61 = document.querySelector(".i-61");
const input62 = document.querySelector(".i-62");
const obj6 = {
  b: 17,
  e: 22,
};
btn6.onclick = fn6;

function fn6() {
  const key = input61.value;
  const value = input62.value;
  obj6[key] = value;
  fn5(obj6, out6);
}

// Task 7
const btn7 = document.querySelector(".b-7");
const out7 = document.querySelector(".out-7");
const input7 = document.querySelector(".i-7");
const obj7 = {
  b: 17,
  e: 22,
};

btn7.onclick = fn7;

function fn7() {
  let result = 0;
  const searchKey = input7.value;
  for (const key in obj7) {
    if (searchKey === key) {
      result = 1;
      break;
    }
  }
  out7.innerHTML = result;
}

// Task 8
const btn8 = document.querySelector(".b-8");
const out8 = document.querySelector(".out-8");
const input8 = document.querySelector(".i-8");

const obj8 = {
  b: 17,
  e: 22,
};
btn8.onclick = fn8;

function fn8() {
  let result = 0;
  const searchKey = input8.value;
  for (const key in obj8) {
    if (searchKey === key) {
      result = obj8[key];
      break;
    }
  }
  out8.innerHTML = result;
}

// Task 9
const btn9 = document.querySelector(".b-9");
const out9 = document.querySelector(".out-9");
const input9 = document.querySelector(".i-9");

const obj9 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

btn9.onclick = fn9;

function fn9() {
  let result = "";
  const searchValue = +input9.value;
  for (const key in obj9) {
    if (obj9[key] === searchValue) {
      // if (result !== "") result += " ";
      result += `${key} `;
    }
  }
  out9.innerHTML = result;
}

// Task 10
const btn10 = document.querySelector(".b-10");
const out10 = document.querySelector(".out-10");
const test10 = 22;
const obj10 = {
  k: 22,
  d: 54,
  m: 22,
};

btn10.onclick = fn10;

function fn10() {
  let result = "";

  for (const key in obj10) {
    if (test10 === obj10[key]) {
      out10.innerHTML = true;
      return;
    }
  }
  out10.innerHTML = false;
}

// TODO: Значення для перевірки 22
// TODO: Виклик fn10(a10, 22)

// Task 11
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");
const input11 = document.querySelector(".i-11");

const obj11 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 54,
};

btn11.onclick = fn11;

function fn11() {
  delete obj11[input11.value];

  fn5(obj11, out11);
}

// Task 12
const btn12 = document.querySelector(".b-12");
const out12 = document.querySelector(".out-12");
const input12 = document.querySelector(".i-12");

const obj12 = {
  b: 17,
  e: 22,
  j: 17,
  k: 22,
  d: 17,
};

btn12.onclick = fn12;

function fn12() {
  const res = +input12.value;
  for (const key in obj12) {
    if (res === obj12[key]) {
      delete obj12[key];
    }
  }

  fn5(obj12, out12);
}

// Task 13
const btn13 = document.querySelector(".b-13");
const out13 = document.querySelector(".out-13");
const input13 = document.querySelector(".i-13");


const obj13 = {
  prim: "hello",
  one: 4,
  testt: "vodolii",
  mango: "6",
  two: 8,
  three: 5,
};

btn13.onclick = fn13;

function fn13() {
  let total = 0;
  for (const key in obj13) {
    if (typeof obj13[key] === "number") {
      total += obj13[key];
    }
  }
  out13.innerHTML = total;
}

// Task 14
const obj14 = {
  prim: [1, 2, 23],
  one: [3, 4, 5],
  test: [6, 7, 8],
  mango: [9, 10],
};

// Task 15
const obj15 = {
  prim: [1, 2, 23],
  one: [3, 5],
  testt: [6, 7, 8],
  mango: [9, 10],
};

// Task 16
const obj16 = {
  iis8sj: {
    name: "Ivan",
    age: 27,
  },
  iiss7j: {
    name: "Petr",
    age: 26,
  },
  s3s8sj: {
    name: "Serg",
    age: 47,
  },
};

// Task 17
const obj17 = {
  iis8sj: {
    name: "Mango",
    age: 27,
  },
  iiss7j: {
    name: "Poly",
    age: 26,
  },
  s3s8sj: {
    name: "Ajax",
    age: 47,
  },
};

// Task 18
const obj18 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

// Task 19
const obj19 = {
  red: ["Akademmistechko", "Nyvky", "Universytet", "Lisova"],
  blue: ["Minska", "Obolon", "Pochaina", "Holosiivska"],
  green: ["Syrets", "Zoloti Vorota", "Klovska", "Vidubichi"],
};

// Task 20
const obj20 = {
  red: [
    ["Akademmistechko", 1],
    ["Nyvky", 0],
    ["Universytet", 3],
    ["Lisova", 1],
  ],
  blue: [
    ["Minska", 1],
    ["Obolon", 0],
    ["Pochaina", 2],
    ["Holosiivska", 0],
  ],
  green: [
    ["Syrets", 1],
    ["Zoloti Vorota", 2],
    ["Klovska", 0],
    ["Vidubichi", 1],
  ],
};
