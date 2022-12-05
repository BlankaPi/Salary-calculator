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
    
    if(button1.checked && button1.value == "brutto"){
      bruttoOutput.innerHTML = s.toFixed(2);
      for(const button2 of radioButtonsContract) {
        if(button2.checked) {
          switch(button2.value) {
            case "uop":
              nettoOutput.innerHTML = (s * 0.7476).toFixed(2);
            break;
            case "uz":
              nettoOutput.innerHTML = (s * 0.7223).toFixed(2);
              break;
           case "uod":
              nettoOutput.innerHTML = (s * 0.864).toFixed(2);
              break;
            case "btob":
              nettoOutput.innerHTML = (s * 0.766).toFixed(2);
              break;
          }
        }
      }
    };

    if(button1.checked && button1.value == "netto"){
      nettoOutput.innerHTML = s.toFixed(2);
      for(const button2 of radioButtonsContract) {
        if(button2.checked) {
          switch(button2.value) {
            case "uop":
              bruttoOutput.innerHTML = (s / 0.7476).toFixed(2);
            break;
            case "uz":
              bruttoOutput.innerHTML = (s / 0.7223).toFixed(2);
              break;
           case "uod":
              bruttoOutput.innerHTML = (s / 0.864).toFixed(2);
              break;
            case "btob":
              bruttoOutput.innerHTML = (s / 0.766).toFixed(2);
              break;
          }
        }
      }
    };
  };

  for (const button2 of radioButtonsContract) {
    if(button2.checked) {
      let v = bruttoOutput.innerHTML;
      switch(button2.value) {
        case "uop":
          retirementOutput.innerHTML = (v * 0.0976).toFixed(2);
          disabilityOutput.innerHTML = (v * 0.015).toFixed(2);
          diseaseOutput.innerHTML = (v * 0.0245).toFixed(2);
          healthOutput.innerHTML = (v * 0.0776).toFixed(2);
          taxOutput.innerHTML = (v * 0.0376).toFixed(2);
          break;
        case "uz":
          retirementOutput.innerHTML = (v * 0.0976).toFixed(2);
          disabilityOutput.innerHTML = (v * 0.015).toFixed(2);
          diseaseOutput.innerHTML = (v * 0).toFixed(2);
          healthOutput.innerHTML = (v * 0.08).toFixed(2);
          taxOutput.innerHTML = (v * 0.0852).toFixed(2);
          break;
        case "uod":
          retirementOutput.innerHTML = (0).toFixed(2);
          disabilityOutput.innerHTML = (0).toFixed(2);
          diseaseOutput.innerHTML = (0).toFixed(2);
          healthOutput.innerHTML = (0).toFixed(2);
          taxOutput.innerHTML = (v * 0.136).toFixed(2);
          break;
        case "btob":
          retirementOutput.innerHTML = (0).toFixed(2);
          disabilityOutput.innerHTML = (0).toFixed(2);
          diseaseOutput.innerHTML = (0).toFixed(2);
          healthOutput.innerHTML = (v * 0.0542).toFixed(2);
          taxOutput.innerHTML = (v * 0.1798).toFixed(2);
          break;
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
];

let colorsUoP = [
  "#ADD8E6",
  "#37AF65",
  "#FFC0CB",
  "#DAE75E",
  "#FFA500",
  "#1B75BC"
];

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
];

let colorsUz = [
  "#ADD8E6",
  "#37AF65",
  "#DAE75E",
  "#FFA500",
  "#1B75BC"
];

// CONTRACT TYPE = UoD
let labelsUoD = [
  "Zaliczka na podatek",
  "Twoja wypłata"
];

let dataUoD = [
  13.6,
  86.4
];

let colorsUoD = [
  "#FFA500",
  "#1B75BC"
];

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
];

let colorsBtoB = [
  "#DAE75E",
  "#FFA500",
  "#1B75BC"
];

let donut = new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: undefined,
    datasets: [
      {
        backgroundColor: undefined,
        data: undefined
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
});


submitButton.addEventListener("click", () => {
  resultSection.classList.remove("unvisible");
   
    for(const button2 of radioButtonsContract) {
      if(button2.checked) {
        switch (button2.value) {
          case "uop":
            donut.data.labels = labelsUoP;
            donut.data.datasets = [{backgroundColor: colorsUoP, data: dataUoP}];
            donut.update();
            break;
          case "uz":
            donut.data.labels = labelsUz;
            donut.data.datasets = [{backgroundColor: colorsUz, data: dataUz}];
            donut.update();
            break;
          case "uod":
            donut.data.labels = labelsUoD;
            donut.data.datasets = [{backgroundColor: colorsUoD, data: dataUoD}];
            donut.update();
            break;
          case "btob":
            donut.data.labels = labelsBtoB;
            donut.data.datasets = [{backgroundColor: colorsBtoB, data: dataBtoB}];
            donut.update();
            break;
        }
      }
    } 
});
