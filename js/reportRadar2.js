var data_0 = {
  label: " ",
  backgroundColor: 'rgba(255,255,255,0)',
  borderColor: 'rgba(255,255,255,0)',
  pointRadius: 0,
  data: [0, 0, 0],
  borderWidth: 1,

};

var data_1 = {
  label: "자기 인식",
  data: [7, 7, 4, 5, 5],
  fill: true,
  backgroundColor: 'rgb(53,51,237, 0.5)',
  borderColor: 'rgb(53,51,237, 0.5)',
  pointHoverBackgroundColor: 'rgb(53,51,237)',
  pointHoverBorderColor: 'rgb(53,51,237)'
};

var data_2 = {
  label: "평가 결과",
  data: [7, 8, 4, 8, 8],
  fill: true,
  
  backgroundColor: 'rgb(222,137,64, 0.5)',
  borderColor: 'rgb(222,137,64, 0.5)',
  pointHoverBackgroundColor: 'rgb(222,137,64)',
  pointHoverBorderColor: 'rgb(222,137,64)'
};

var config2 = {
  type: "radar",
  data: {
    labels: ["Web-Fundarmental", "Web-Frontend", "Web-Backend", "Program Language", "DevOps"],
    datasets: [data_1, data_2],
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
        max: 10
      },
    }
  },
};

$(function () {
  chart = new Chart($("#reportRadar2"), config2);
  // console.log(chart);

  $("input#toggle_3[type='checkbox']").click(function (event) {
    if ($(this).is(":checked")) {
      console.log(chart.data.datasets[0]);
      chart.data.datasets[0] = data_1;
    } else {
      chart.data.datasets[0] = data_0;
    }

    chart.update();
  });
  $("input#toggle_4[type='checkbox']").click(function (event) {
    if ($(this).is(":checked")) {
      console.log(chart.data);
      // chart.data.datasets.pop();
      chart.data.datasets[1] = data_2;
    } else {
      chart.data.datasets[1] = data_0;
    }

    chart.update();
  });

});
