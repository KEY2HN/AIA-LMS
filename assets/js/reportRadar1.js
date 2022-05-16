var data_0 = {
  label: " ",
  backgroundColor: 'rgba(255,255,255,0)',
  borderColor: 'rgba(255,255,255,0)',
  pointRadius: 0,
  data: [0, 0, 0],
  borderWidth: 1,

};

var data_1 = {
  label: "1차 점수",
  data: [7, 7, 4, 5, 5, 4],
  fill: true,
  backgroundColor: 'rgb(53,51,237, 0.5)',
  borderColor: 'rgb(53,51,237, 0.5)',
  pointHoverBackgroundColor: 'rgb(53,51,237)',
  pointHoverBorderColor: 'rgb(53,51,237)'
};

var data_2 = {
  label: "2차 점수",
  data: [7, 8, 4, 8, 8, 5],
  fill: true,
  
  backgroundColor: 'rgb(222,137,64, 0.5)',
  borderColor: 'rgb(222,137,64, 0.5)',
  pointHoverBackgroundColor: 'rgb(222,137,64)',
  pointHoverBorderColor: 'rgb(222,137,64)'
};

var config1 = {
  type: "radar",
  data: {
    labels: ["Web", "Mobile", "IoT", "Data", "Cloud", "Blockchain"],
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
  chart = new Chart($("#reportRadar1"), config1);
  // console.log(chart);

  $("input#toggle_1[type='checkbox']").click(function (event) {
    if ($(this).is(":checked")) {
      console.log(chart.data.datasets[0]);
      chart.data.datasets[0] = data_1;
    } else {
      chart.data.datasets[0] = data_0;
    }

    chart.update();
  });
  $("input#toggle_2[type='checkbox']").click(function (event) {
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
