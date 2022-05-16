var data_0 = {
  label: " ",
  backgroundColor: 'rgba(255,255,255,0)',
  borderColor: 'rgba(255,255,255,0)',
  pointRadius: 0,
  data: [0, 0, 0],
  borderWidth: 1,

};

var data_1 = {
  label: "나의 1차",
  data: [60, 48.25, 20, 30, 30, 45],
  fill: true,
  backgroundColor: 'rgb(0,121,228, 0.5)',
  borderColor: 'rgb(0,121,228, 0.5)',
  pointHoverBackgroundColor: 'rgb(0,121,228)',
  pointHoverBorderColor: 'rgb(0,121,228)'
};

var data_2 = {
  label: "평균 1차",
  data: [70.25, 55, 30, 32, 50, 35],
  fill: true,
  
  backgroundColor: 'rgb(0,61,114, 0.3)',
  borderColor: 'rgb(0,61,114, 0.3)',
  pointHoverBackgroundColor: 'rgb(0,61,114)',
  pointHoverBorderColor: 'rgb(0,61,114)'
};

var data_3 = {
  label: "나의 2차",
  data: [90, 50, 44, 50, 38, 75.75],
  fill: true,
  backgroundColor: 'rgb(0,184,169, 0.5)',
  borderColor: 'rgb(0,184,169, 0.5)',
  pointHoverBackgroundColor: 'rgb(0,184,169)',
  pointHoverBorderColor: 'rgb(0,184,169)'
};

var data_4 = {
  label: "평균 2차",
  data: [80, 35, 47, 60, 54, 86],
  fill: true,
  backgroundColor: 'rgb(0,138,127, 0.3)',
  borderColor: 'rgb(0,138,127, 0.3)',
  pointHoverBackgroundColor: 'rgb(0,138,127)',
  pointHoverBorderColor: 'rgb(0,138,127)'
};

var config1 = {
  type: "radar",
  data: {
    labels: ["D. 이해", "D. 기획", "D. 개발", "F. 이해", "F. 기획", "F. 개발"],
    datasets: [data_1, data_2, data_3, data_4],
  },

  options: {
    responsive: true,
    legend: {
      position: "bottom",
      display: false,
    },
    elements: {
        line: {
            borderWidth: 2
        }
    },
    scale: {
      ticks: {
        beginAtZero: true,
        max: 100
      },
    }
  },
};

$(function () {
  chart = new Chart($("#myRadar1"), config1);
  // console.log(chart);

  $("input#toggle1[type='checkbox']").click(function (event) {
    if ($(this).is(":checked")) {
      console.log(chart.data.datasets[0]);
      chart.data.datasets[0] = data_1;
    } else {
      chart.data.datasets[0] = data_0;
    }

    chart.update();
  });
  $("input#toggle2[type='checkbox']").click(function (event) {
    if ($(this).is(":checked")) {
      console.log(chart.data);
      // chart.data.datasets.pop();
      chart.data.datasets[1] = data_2;
    } else {
      chart.data.datasets[1] = data_0;
    }

    chart.update();
  });
  $("input#toggle3[type='checkbox']").click(function (event) {
    if ($(this).is(":checked")) {
      console.log(chart.data);
      chart.data.datasets[2] = data_3;
    } else {
      chart.data.datasets[2] = data_0;
    }

    chart.update();
  });$("input#toggle4[type='checkbox']").click(function (event) {
    if ($(this).is(":checked")) {
      console.log(chart.data);
      chart.data.datasets[3] = data_4;
    } else {
      chart.data.datasets[3] = data_0;
    }

    chart.update();
  });
});
