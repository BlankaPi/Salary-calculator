const form = document.getElementById("calc-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
});


// INPUT buttons
const salaryInput = document.querySelector("#salary");
const radioButtonsBruttoNetto = document.querySelectorAll('input[name="brutto-netto"]');
const radioButtonsContract = document.querySelectorAll('input[name="contract-type"]');
const submitButton = document.querySelector("#submit");

// OUTPUT table
const nettoOutput = document.querySelector(".amount-netto");
const bruttoOutput = document.querySelector(".amount-brutto");
const retirementOutput = document.querySelector(".retirement");
const disabilityOutput = document.querySelector(".disability");
const diseaseOutput = document.querySelector(".disease");
const healthOutput = document.querySelector(".health");
const taxOutput = document.querySelector(".tax");

// OUTPUT donut
const chart = document.querySelector("#piechart");
const resultSection = document.querySelector(".result-calculator")

submitButton.addEventListener("click", calculate);


function calculate(){
  console.log("Calculator working");
  let s = parseFloat(salaryInput.value);
  if (isNaN(s)) return;

  for (const button1 of radioButtonsBruttoNetto) { 

    // CONTRACT TYPE = UoP

    if(button1.checked && button1.value == "brutto") {

      for(const button2 of radioButtonsContract) {
        if(button2.checked && button2.value == "uop") {
          bruttoOutput.innerHTML = s.toFixed(2);
          nettoOutput.innerHTML = (s * 0.7476).toFixed(2);
          retirementOutput.innerHTML = (s * 0.0976).toFixed(2);
          disabilityOutput.innerHTML = (s * 0.015).toFixed(2);
          diseaseOutput.innerHTML = (s * 0.0245).toFixed(2);
          healthOutput.innerHTML = (s * 0.0776).toFixed(2);
          taxOutput.innerHTML = (s * 0.0376).toFixed(2);
        }
      }      
    } 

    if(button1.checked && button1.value == "netto") {

      for(const button2 of radioButtonsContract) {
        if(button2.checked && button2.value == "uop") {
          nettoOutput.innerHTML = s.toFixed(2);
          bruttoOutput.innerHTML = (s / 0.7476).toFixed(2);
          let b = (s / 0.7476).toFixed(2);
          retirementOutput.innerHTML = (b * 0.0976).toFixed(2);
          disabilityOutput.innerHTML = (b * 0.015).toFixed(2);
          diseaseOutput.innerHTML = (b * 0.0245).toFixed(2);
          healthOutput.innerHTML = (b * 0.0776).toFixed(2);
          taxOutput.innerHTML = (b * 0.0376).toFixed(2);
        }
      }
    } 

    // CONTRACT TYPE = UZ

    if(button1.checked && button1.value == "brutto") {

      for(const button2 of radioButtonsContract) {
        if(button2.checked && button2.value == "uz") {
          bruttoOutput.innerHTML = s.toFixed(2);
          nettoOutput.innerHTML = (s * 0.7223).toFixed(2);
          retirementOutput.innerHTML = (s * 0.0976).toFixed(2);
          disabilityOutput.innerHTML = (s * 0.015).toFixed(2);
          diseaseOutput.innerHTML = (s * 0).toFixed(2);
          healthOutput.innerHTML = (s * 0.08).toFixed(2);
          taxOutput.innerHTML = (s * 0.0852).toFixed(2);
        }
      }      
    } 

    if(button1.checked && button1.value == "netto") {

      for(const button2 of radioButtonsContract) {
        if(button2.checked && button2.value == "uz") {
          nettoOutput.innerHTML = s.toFixed(2);
          bruttoOutput.innerHTML = (s / 0.7223).toFixed(2);
          let b = (s / 0.7223).toFixed(2);
          retirementOutput.innerHTML = (b * 0.0976).toFixed(2);
          disabilityOutput.innerHTML = (b * 0.015).toFixed(2);
          diseaseOutput.innerHTML = (b * 0).toFixed(2);
          healthOutput.innerHTML = (b * 0.08).toFixed(2);
          taxOutput.innerHTML = (b * 0.0852).toFixed(2);
        }
      }
    } 

    // CONTRACT TYPE = UoD

    if(button1.checked && button1.value == "brutto") {

      for(const button2 of radioButtonsContract) {
        if(button2.checked && button2.value == "uod") {
          bruttoOutput.innerHTML = s.toFixed(2);
          nettoOutput.innerHTML = (s * 0.864).toFixed(2);
          retirementOutput.innerHTML = (0).toFixed(2);
          disabilityOutput.innerHTML = (0).toFixed(2);
          diseaseOutput.innerHTML = (0).toFixed(2);
          healthOutput.innerHTML = (0).toFixed(2);
          taxOutput.innerHTML = (s * 0.136).toFixed(2);
        }
      }      
    } 

    if(button1.checked && button1.value == "netto") {

      for(const button2 of radioButtonsContract) {
        if(button2.checked && button2.value == "uod") {
          nettoOutput.innerHTML = s.toFixed(2);
          bruttoOutput.innerHTML = (s / 0.864).toFixed(2);
          let b = (s / 0.864).toFixed(2);
          retirementOutput.innerHTML = (0).toFixed(2);
          disabilityOutput.innerHTML = (0).toFixed(2);
          diseaseOutput.innerHTML = (0).toFixed(2);
          healthOutput.innerHTML = (0).toFixed(2);
          taxOutput.innerHTML = (b * 0.136).toFixed(2);
        }
      }
    } 

    // CONTRACT TYPE = btob

    if(button1.checked && button1.value == "brutto") {

      for(const button2 of radioButtonsContract) {
        if(button2.checked && button2.value == "btob") {
          bruttoOutput.innerHTML = s.toFixed(2);
          nettoOutput.innerHTML = (s * 0.766).toFixed(2);
          retirementOutput.innerHTML = (0).toFixed(2);
          disabilityOutput.innerHTML = (0).toFixed(2);
          diseaseOutput.innerHTML = (0).toFixed(2);
          healthOutput.innerHTML = (s * 0.0542).toFixed(2);
          taxOutput.innerHTML = (s * 0.1798).toFixed(2);
        }
      }      
    } 

    if(button1.checked && button1.value == "netto") {

      for(const button2 of radioButtonsContract) {
        if(button2.checked && button2.value == "btob") {
          nettoOutput.innerHTML = s.toFixed(2);
          bruttoOutput.innerHTML = (s / 0.766).toFixed(2);
          let b = (s / 0.766).toFixed(2);
          retirementOutput.innerHTML = (0).toFixed(2);
          disabilityOutput.innerHTML = (0).toFixed(2);
          diseaseOutput.innerHTML = (0).toFixed(2);
          healthOutput.innerHTML = (b * 0.0542).toFixed(2);
          taxOutput.innerHTML = (b * 0.1798).toFixed(2);
        }
      }
    } 

  }
}; 

// DONUT CHART  

// CONTRACT TYPE = UoP
let labelsUoP = [
  "Ubezpieczenie emerytalne", 
  "Ubezpieczenie rentowe", 
  "Ubezpieczenie chorobowe", 
  "Ubezpieczenie zdrowotne", 
  "Zaliczka na podatek",
  "Twoja wypłata"
];

let dataUoP = [
  9.76, 
  1.5,
  2.45,
  9,
  3.76,
  73.53
]

let colorsUoP = [
  "#ADD8E6",
  "#37AF65",
  "#FFC0CB",
  "#DAE75E",
  "#FFA500",
  "#1B75BC"
]

// CONTRACT TYPE = Uz
let labelsUz = [
  "Ubezpieczenie emerytalne", 
  "Ubezpieczenie rentowe", 
  "Ubezpieczenie zdrowotne", 
  "Zaliczka na podatek",
  "Twoja wypłata"
];

let dataUz = [
  9.76, 
  1.5,
  8,
  8.52,
  72.23
]

let colorsUz = [
  "#ADD8E6",
  "#37AF65",
  "#DAE75E",
  "#FFA500",
  "#1B75BC"
]

// CONTRACT TYPE = UoD
let labelsUoD = [
  "Zaliczka na podatek",
  "Twoja wypłata"
];

let dataUoD = [
  13.6,
  86.4
]

let colorsUoD = [
  "#FFA500",
  "#1B75BC"
]

// CONTRACT TYPE = btob
let labelsBtoB = [
  "Ubezpieczenie zdrowotne", 
  "Zaliczka na podatek",
  "Twoja wypłata"
];

let dataBtoB = [
  5.42,
  17.98,
  76.6
]

let colorsBtoB = [
  "#DAE75E",
  "#FFA500",
  "#1B75BC"
]


const options1 = {
  type: 'doughnut',
  data: {
    labels: labelsUoP,
    datasets: [
      {
        backgroundColor: colorsUoP,
        data: dataUoP
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Procentowy udział:"
    },
    legend: {
      display: false
    }
  }
};

const options2 = {
  type: 'doughnut',
  data: {
    labels: labelsUz,
    datasets: [
      {
        backgroundColor: colorsUz,
        data: dataUz
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Procentowy udział:"
    },
    legend: {
      display: false
    }
  }
};

const options3 = {
  type: 'doughnut',
  data: {
    labels: labelsUoD,
    datasets: [
      {
        backgroundColor: colorsUoD,
        data: dataUoD
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Procentowy udział:"
    },
    legend: {
      display: false
    }
  }
};

const options4 = {
  type: 'doughnut',
  data: {
    labels: labelsBtoB,
    datasets: [
      {
        backgroundColor: colorsBtoB,
        data: dataBtoB
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Procentowy udział:"
    },
    legend: {
      display: false
    }
  }
};



submitButton.addEventListener("click", () => {
  resultSection.classList.remove("unvisible");

   /*  SWITCH NOT WORKING - SHOWING ONLY LAST CHART
   
   for(const button2 of radioButtonsContract) {
   let donut;
    switch (button2.value) {
      case "uop":
        donut = new Chart(document.getElementById("doughnut-chart"), options1);
        break;
      case "uz":
        donut = new Chart(document.getElementById("doughnut-chart"), options2);
        break;
      case "uod":
        donut = new Chart(document.getElementById("doughnut-chart"), options3);
        break;
      case "btob":
        donut = new Chart(document.getElementById("doughnut-chart"), options4);
        break;
    }
  } 

  IF ELSE NOT WORKING - SHOWING ONLY LAST CHART
  for(const button2 of radioButtonsContract) {
    if (button2.value == "uop") {
      let donut = new Chart(document.getElementById("doughnut-chart"), options1);
    } else if (button2.value == "uz") {
      let donut = new Chart(document.getElementById("doughnut-chart"), options2);
    } else if (button2.value == "uod") {
      let donut = new Chart(document.getElementById("doughnut-chart"), options3);
    } else if (button2.value == "btob") {
      let donut = new Chart(document.getElementById("doughnut-chart"), options4);
    }
  } 

  */

  for(const button2 of radioButtonsContract) {
    if(button2.checked && button2.value == "uop") {
      let donut = new Chart(document.getElementById("doughnut-chart"), options1);
    }
  } 

  for(const button2 of radioButtonsContract) {
    if(button2.checked && button2.value == "uz") {
      let donut = new Chart(document.getElementById("doughnut-chart"), options2);
    }
  } 

  for(const button2 of radioButtonsContract) {
    if(button2.checked && button2.value == "uod") {
      let donut = new Chart(document.getElementById("doughnut-chart"), options3);
    }
  } 

  for(const button2 of radioButtonsContract) {
    if(button2.checked && button2.value == "btob") {
      let donut = new Chart(document.getElementById("doughnut-chart"), options4);
    }
  } 

});




