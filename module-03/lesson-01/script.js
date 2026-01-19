// Task-1

// Task-2

// Task-3

// Task-4

// Task-5

// Task-6

// Task-7

// Task-8

// Task-9

// Task-10

const ar10 = [100, 200, 300, 400, 700, 121];
const out10 = document.querySelector(".out-10");
  const btn10 = document.querySelector(".out-10");

  btn10.onclick = fn10;

  function fn10() {
   for (const element of ar10) {
    
   }
    out10.textContent = ;
  }

// Task-11

const ar11 = [2,3,4,5,6,7];
const btn11 = document.querySelector(".b-11");
const out11 = document.querySelector(".out-11");

btn11.onclick = fn11;

function fn11() {
  
}

// Task-12

// Task-13

// Task-14

// Task-15

// Task-16

// Task-17

// Task-18

const ar18 = [15,24,13,78,21,4,45,67];
const btn18 = document.querySelector(".b-18");
const out18 = document.querySelector(".out-18");

btn18.onclick = fn18;
console.log("🚀 ~ fn18 ~ ar18:", ar18.length)
function fn18() {
  let max = ar18[0]; // 78
  for (let i = 1; i < ar18.length; i++) { //step 4: i=4 i < 8
    
    const element = ar18[i]; // ar18[5] = 4
    if (element > max) {
      max = element;

    }
  }
  out18.textContent = max;
}

// Task-19

const ar19 = [15, 424, 313, 78, 241, 4, 45, 67]
const btn19 = document.querySelector(".b-19");
const out19 = document.querySelector(".out-19");

btn19.onclick = fn19;

function fn19() {
  let min = ar19[0]; // min = 15
  for (let i = 1; i < ar19.length; i++) { //step 1: i=1 i < 8
    
    const element = ar19[i]; // ar19[1] = 424
    if (element < min) {
      min = element;

    }
  }
  out19.textContent = min;
}

// Task-20

const ar20 = [4, 5, 6, 7, 8, 9, 10];
const btn20 = document.querySelector(".b-20");
const out20 = document.querySelector(".out-20");

btn20.onclick = fn20;

function fn20() {
  let sum = 0;

  for (let i = 0; i < ar20.length; i++) {
    const element = ar20[i];
    sum += element;
    
  }
  out20.textContent = sum;
}
