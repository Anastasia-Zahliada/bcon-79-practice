// Task 1

const out1 = document.querySelector(".out-1");
const btn1 = document.querySelector(".b-1");

btn1.onclick = fn1;

function fn1() {
  let sum = "";

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      sum += "*";
    }
    sum += "_";
  }
  out1.textContent = sum;
}

// Task 2

const out2 = document.querySelector(".out-2");
const btn2 = document.querySelector(".b-2");

btn2.onclick = fn2;

function fn2() {
  let sum = "";
  for (let i = 1; i <= 3; i++) {
    sum += i + "<br>";
    for (let j = 0; j < 3; j++) {
      sum += "*_";
    }
    sum += "<br>";
  }
  out2.innerHTML = sum;
}

// Task 3

const out3 = document.querySelector(".out-3");
const btn3 = document.querySelector(".b-3");

btn3.onclick = fn3;

function fn3() {
  let sum = "";
  for (let i = 1; i <= 4; i++) {
    for (let j = 0; j < 3; j++) {
      sum += "*_";
    }
    sum += "<br>";
  }
  out3.innerHTML = sum;
}

// Task 4

const out4 = document.querySelector(".out-4");
const btn4 = document.querySelector(".b-4");

btn4.onclick = fn4;

function fn4() {
  let sum = "";
  for (let i = 1; i <= 3; i++) {
    sum += `${i}_`;

    for (let j = 1; j <= 5; j++) {
      sum += `${j}*`;
    }
  }
  out4.textContent = sum;
}

// Task 5

const out5 = document.querySelector(".out-5");
const btn5 = document.querySelector(".b-5");

btn5.onclick = fn5;

function fn5() {
  let sum = "";
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 6; j++) {
      if (j % 2 === 0) {
        sum += "0";
      } else {
        sum += "1";
      }
    }
    sum += "<br>";
  }
  out5.innerHTML = sum;
}

// Task 6

const out6 = document.querySelector(".out-6");
const btn6 = document.querySelector(".b-6");

btn6.onclick = fn6;

function fn6() {
  let sum = "";
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j < 3; j++) {
      if (j % 2 !== 0) {
        sum += "10x";
      } else {
        sum += "01x";
      }
    }
    sum += "<br>";
  }
  out6.innerHTML = sum;
}


// Task 7

const out7 = document.querySelector(".out-7");
const btn7 = document.querySelector(".b-7");

btn7.onclick = fn7;

function fn7() {
  let sum = "";

  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
      sum += "*";
    }
   sum += "<br>";
  }
  out7.innerHTML = sum;
}

// Task 8

const out8 = document.querySelector(".out-8");
const btn8 = document.querySelector(".b-8");

btn8.onclick = fn8;

function fn8() {
  let sum = "";

  for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      sum += "*";
    }
   sum += "<br>";
  }
  out8.innerHTML = sum;
}

// Task 9

const out9 = document.querySelector(".out-9");
const btn9 = document.querySelector(".b-9");

btn9.onclick = fn9;

function fn9() {
  let sum = "";

  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      sum += `${j}_`;
    }
   sum += "<br>";
  }
  out9.innerHTML = sum;
}


// Task 10
const out10 = document.querySelector(".out-10");
const btn10 = document.querySelector(".b-10");

btn10.onclick = fn10;

function fn10() {
  let sum = "";

  for (let i = 0; i < 5; i++) {
    for (let j = 1; j <= 10; j++) {
      let n = i * 10 + j;
      if (n < 10) {
        sum += "0" + n + "_";
      } else {
        sum += n + "_";
      }
      
    }
    
      sum += "<br>";
  
   
  }
  out10.innerHTML = sum;
}
