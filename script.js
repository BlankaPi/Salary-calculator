const form = document.getElementById("calc-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});


class SalaryCalculator {

  constructor(salaryInput) {
    this.salaryInput = salaryInput;
  }

  updateValue(salaryValue) {
    this.salaryValue = salaryValue.currentTarget.value
    console.log(this.salaryValue);
  }

  chooseSalaryType(salary) {
    this.salary = salary;
    console.log(salary);
  }

  chooseContractType(contract) {
    this.contract = contract;
    console.log(contract);
  }

  clear() {
    bruttoOutput.innerHTML = 0;
    nettoOutput.innerHTML = 0;
    retirementOutput.innerHTML = 0;
    disabilityOutput.innerHTML = 0;
    diseaseOutput.innerHTML = 0;
    healthOutput.innerHTML = 0;
    taxOutput.innerHTML = 0;
  }

  updateTable() {
    if (!this.salaryValue) {
      return;
    }
    if (this.salary == "brutto") {
      bruttoOutput.innerHTML = this.salaryValue;
      this.secondUpdateTable();
    } else if (this.salary == "netto") {
      switch (this.contract) {
        case "uop":
          bruttoOutput.innerHTML = (this.salaryValue / 0.7476).toFixed(2);
          break;
        case "uz":
          bruttoOutput.innerHTML = (this.salaryValue / 0.7223).toFixed(2);
          break;
        case "uod":
          bruttoOutput.innerHTML = (this.salaryValue / 0.864).toFixed(2);
          break;
        case "btob":
          bruttoOutput.innerHTML = (this.salaryValue / 0.766).toFixed(2);
          break;
      }
      this.secondUpdateTable();
    }
  }

  secondUpdateTable() {
    const values = {
      uop: [0.7476, 0.0976, 0.015, 0.0245, 0.0776, 0.0376],
      uz: [0.7223, 0.0976, 0.015, 0, 0.08, 0.0852],
      uod: [0.864, 0, 0, 0, 0, 0.136],
      btob: [0.766, 0, 0, 0, 0.0542, 0.1798]
    };

    function calculate([a, b, c, d, e, f]) {
      const v = bruttoOutput.innerHTML;
      if (v != 0) {
        nettoOutput.innerHTML = (v * a).toFixed(2);
        retirementOutput.innerHTML = (v * b).toFixed(2);
        disabilityOutput.innerHTML = (v * c).toFixed(2);
        diseaseOutput.innerHTML = (v * d).toFixed(2);
        healthOutput.innerHTML = (v * e).toFixed(2);
        taxOutput.innerHTML = (v * f).toFixed(2);
      }
    };

    if (this.contract == "uop") {
      calculate(values.uop);
    } else if (this.contract == "uz") {
      calculate(values.uz);
    } else if (this.contract == "uod") {
      calculate(values.uod);
    } else if (this.contract == "btob") {
      calculate(values.btob);
    };
  }

  piechart() {

    switch (this.contract) {
      case "uop":
        donutChart(donutChartLabels.uop);
        break;
      case "uz":
        donutChart(donutChartLabels.uz);
        break;
      case "uod":
        donutChart(donutChartLabels.uod);
        break;
      case "btob":
        donutChart(donutChartLabels.btob);
        break;
    }
  }
}

const salaryInput = document.getElementById("salary");

const bruttoOutput = document.querySelector(".amount-brutto");
const nettoOutput = document.querySelector(".amount-netto");

const salaryType = document.querySelectorAll('input[name="brutto-netto"]');
const contractType = document.querySelectorAll('input[name="contract-type"]');

const retirementOutput = document.querySelector(".retirement");
const disabilityOutput = document.querySelector(".disability");
const diseaseOutput = document.querySelector(".disease");
const healthOutput = document.querySelector(".health");
const taxOutput = document.querySelector(".tax");

const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");
const resultSection = document.querySelector(".result-calculator");


const salaryCalculator = new SalaryCalculator(salaryInput, salaryType, contractType);

salaryInput.addEventListener("input", e => {
  salaryCalculator.updateValue(e);
});

salaryType.forEach((radio) => {
  radio.addEventListener("click", () => {
    salaryCalculator.chooseSalaryType(radio.value);
  })
});

contractType.forEach((radio) => {
  radio.addEventListener("click", () => {
    salaryCalculator.chooseContractType(radio.value);
  })
});

submitButton.addEventListener("click", () => {
  salaryCalculator.updateTable();
  salaryCalculator.piechart();
  resultSection.classList.remove("unvisible");
});

resetButton.addEventListener("click", () => {
  salaryCalculator.clear();
  if(resultSection.classList.contains("unvisible") == false) {
    resultSection.classList.add("unvisible");    
  } else {
    console.log("hejka");
    return;
  };
});


// DONUT CHART DATA

function donutChart(data) {

  let donut = new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: data.labels,
      datasets: data.datasets
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

  return donut;
};



let donutChartLabels = {
  uop: {
    labels: ["Ubezpieczenie emerytalne", "Ubezpieczenie rentowe", "Ubezpieczenie chorobowe", "Ubezpieczenie zdrowotne", "Zaliczka na podatek", "Twoja wypłata"],
    datasets: [
      {
        backgroundColor: ["#ADD8E6", "#37AF65", "#FFC0CB", "#DAE75E", "#FFA500", "#1B75BC"],
        data: [9.76, 1.5, 2.45, 9, 3.76, 73.53]
      }
    ]
  },

  uz: {
    labels: ["Ubezpieczenie emerytalne", "Ubezpieczenie rentowe", "Ubezpieczenie zdrowotne", "Zaliczka na podatek", "Twoja wypłata"],
    datasets: [
      {
        backgroundColor: ["#ADD8E6", "#37AF65", "#DAE75E", "#FFA500", "#1B75BC"],
        data: [9.76, 1.5, 8, 8.52, 72.23]
      }
    ]
  },

  uod: {
    labels: ["Zaliczka na podatek", "Twoja wypłata"],
    datasets: [
      {
        backgroundColor: ["#FFA500", "#1B75BC"],
        data: [13.6, 86.4]
      }
    ]
  },

  btob: {
    labels: ["Ubezpieczenie zdrowotne", "Zaliczka na podatek", "Twoja wypłata"],
    datasets: [
      {
        backgroundColor: ["#DAE75E", "#FFA500", "#1B75BC"],
        data: [5.42, 17.98, 76.6]
      }
    ]
  },
};






