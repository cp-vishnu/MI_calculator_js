
let lastvalue = '';
let isOpeningBracket = true;
let calculationValue = 0;
let inputValue = 0;

function calclick(val) {
  const text = document.querySelector(".input");
  const lastChar = lastvalue.slice(-1);
  if (isNaN(val)) {
    if (isNaN(lastChar)) {
      console.log("Invalid input: operator cannot follow another operator.");
      text.innerHTML = text.innerHTML.slice(0, -1) + val;
      lastvalue = lastvalue.slice(0, -1) + val;
      return false;
    } else {
      lastvalue += val;
      text.innerHTML += val;
    }
  } else {
    lastvalue += val;
    text.innerHTML += val;
  }
}

function clearScreen() {
  var output = document.querySelector(".input")
  var in_put = document.querySelector(".output")
  output.innerHTML = ""
  in_put.innerHTML = "0"
  output.style.animation = ""
  in_put.style.animation = ""
}

function backSpace() {
  text = document.querySelector(".input")
  text.innerHTML = text.innerHTML.slice(0, -1)
}


// function percentage() {
//   const input = document.querySelector('.input');
//   const output = document.querySelector('.output');
//   input.innerHTML += "%";
//   // Get the current input value
//   let value = input.innerHTML;
//   console.log(value)
//   if (value.endsWith('%')) {
//     const percentage = value.split('%')[0].split('+')[1].trim();
//     const number = parseFloat(percentage);
//     if (isNaN(number)) return;
//     // Apply the percentage calculation to the first value
//     const firstValue = value.split('+')[0].trim();
//     value = parseFloat(firstValue) + (number / 100) * parseFloat(firstValue);
//   } else {
//     // Convert the value to a number
//     value = parseFloat(value);
//   }

//   // Update the input and output
//   input.innerHTML = value;
//   output.innerHTML = `= ${eval(value)}`;
// }

// function percentage() {
//   const input = document.querySelector('.input');
//   const output = document.querySelector('.output');
//   input.innerHTML += "%";
//   // Get the current input value
//   let value = input.innerHTML.replace(/×/g, "*").replace(/÷/g, "/");
  
//   // Check if the input ends with a percentage sign
//   if (value.endsWith('%')) {
//     // Remove the percentage sign and convert the value to a number
//     const number = parseFloat(value.replace('%', ''));
    
//     // Check if the percentage sign is preceded by an operator and a number
//     const operatorRegex = /[+\-*/]/;
//     const matches = value.match(new RegExp(`(\\d+\\.?\\d*(${operatorRegex.source})\\s*)+\\d+\\.?\\d*%`));
//     if (matches !== null) {
//       const [match] = matches;
//       const percentage = value.split('%')[0].split('+')[1].trim();
//       const number1 = parseFloat(percentage);


//       // Extract the operator and first value from the match
//       const operatorMatch = match.match(new RegExp(`(${operatorRegex.source})`));
//       const operator = operatorMatch[0];
//       const firstValue = match.split(operator)[0];
//       console.log(operator)
//       console.log(number1)
//       console.log(firstValue)
//       // Apply the appropriate operation based on the operator
//       switch (operator) {
//         case '+':
//           value = parseFloat(firstValue) + number1 / 100 * parseFloat(firstValue);
//           break;
//         case '-':
//           value = parseFloat(firstValue) - number1 / 100 * parseFloat(firstValue);
//           break;
//         case '*':
//           value = parseFloat(firstValue) * ( number1 / 100);
//           break;
//         case '/':
//           value = parseFloat(firstValue) / (number1 / 100);
//           break;
//       }

//       // Add the percentage sign back to the end of value
//       value = `${value}`;
//     } else {
//       // Divide the number by 100 and add the percentage sign back to the end of value
//       value = `${number / 100}`;
//     }
//   }

//   // Update the input and output
//   input.innerHTML = value;
//   output.innerHTML = `= ${eval(value)}`;
// }

function percentage() {
  const input = document.querySelector('.input');
  const output = document.querySelector('.output');
  input.innerHTML += "%";
  // Get the current input value
  let value = input.innerHTML.replace(/×/g, "*").replace(/÷/g, "/");
  
  // Check if the input ends with a percentage sign
  if (value.endsWith('%')) {
    // Remove the percentage sign and convert the value to a number
    const number = parseFloat(value.replace('%', ''));
    
    // Check if the percentage sign is preceded by an operator and a number
    const operatorRegex = /[+\-*/]/;
    const percentageMatch = value.match(/([\d.]+)\s*([+\-*/])\s*([\d.]+)%/);
    if (percentageMatch !== null) {
      const [, firstValue, operator, percentage] = percentageMatch;
      const number1 = parseFloat(percentage);

      // Apply the appropriate operation based on the operator
      switch (operator) {
        case '+':
          value = parseFloat(firstValue) + number1 / 100 * parseFloat(firstValue);
          break;
        case '-':
          value = parseFloat(firstValue) - number1 / 100 * parseFloat(firstValue);
          break;
        case '*':
          value = parseFloat(firstValue) * ( number1 / 100);
          break;
        case '/':
          value = parseFloat(firstValue) / (number1 / 100);
          break;
      }

      // Add the percentage sign back to the end of value
      value = `${value}`;
    } else {
      // Divide the number by 100 and add the percentage sign back to the end of value
      value = `${number / 100}`;
    }
  }

  // Update the input and output
  input.innerHTML = value;
  output.innerHTML = `= ${eval(value)}`;
}


function btnEqual() {
  const text = document.querySelector(".input");
  let expression = text.innerHTML.replace(/×/g, "*").replace(/÷/g, "/");
  let res = eval(expression);
  document.querySelector(".output").innerHTML = "= " + res;

 calculationValue = res;
 inputValue = text.innerHTML;
 sendData()
  let output = document.querySelector(".output")
  let in_put = document.querySelector(".input")
  output.style.animation = "big 0.5s ease-in-out"
  in_put.style.animation = "small 0.5s ease-in-out"
  output.style.animationFillMode = "forwards"
  in_put.style.animationFillMode = "forwards"
}




function btnBracket() {
  const text = document.querySelector(".input").innerHTML;
  const lastChar = lastvalue.slice(-1);

  if (!isNaN(lastChar)) {
    if (isOpeningBracket) {
      document.querySelector(".input").innerHTML += "(";
      lastvalue += "(";
      isOpeningBracket = false;
    } else {
      document.querySelector(".input").innerHTML += ")";
      lastvalue += ")";
      isOpeningBracket = true;
    }
  }
}



limit = document.querySelectorAll("button")
for (let i = 0; i < limit.length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelectorAll("button")[i].classList.add("press")
    setTimeout(function () {
      document.querySelectorAll("button")[i].classList.remove("press")
    }, 200)
  })
}


function sendData() {
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  var data = {
    "result": calculationValue,
    "input": inputValue
  };
  
  // Convert the JSON object to a string
  var jsonData = JSON.stringify(data);
  // Set up the request
  xhr.open("POST", "save_data.php", true);
  // xhr.setRequestHeader("Content-Type", "application/json");
  



  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // Request was successful and response was received
        console.log(xhr.responseText);
    }
}
  

  
  // Send the data
  xhr.send(jsonData);
}