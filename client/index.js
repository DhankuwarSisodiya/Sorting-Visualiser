var arraySize = 2;
var newArray = [];
var sortingAlgorithm = "merge";
var myChart;
var backgroundColor = [];
var borderColor = [];

function generateNewArray() {
  newArray = [];
  for (var i = 0; i < arraySize; i++) {
    newArray[i] = Math.floor(((Math.random() * arraySize) + 1));
    backgroundColor[i] = 'rgba(54, 162, 235, 0.2)';
    borderColor[i] = 'rgba(54, 162, 235, 1)';
  }
}

function showArray() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var dataSet = [];
  if (myChart != undefined) {
    myChart.data.datasets = [] //Desired Data
    myChart.update();
  }
  for (var i = 0; i < newArray.length; i++) {
    dataSet.push(newArray[i]);
    backgroundColor[i] = 'rgba(54, 162, 235, 0.2)';
    borderColor[i] = 'rgba(54, 162, 235, 1)';
  }

  myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: dataSet,
      datasets: [{
        label: '',
        data: dataSet,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1
      }]
    },
    options: {
      legend: {
        display: false
      },
      animation: {
        duration: 0 // general animation time
      },
      responsiveAnimationDuration: 0,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

function changeArraySize() {
  arraySize = document.getElementById("customRange").value;
}

function changeSortAlgo() {
  sortingAlgorithm = document.getElementById("sortingAlgorithm").value;
}

async function sortArray() {
  setFunctionButtonsdeActive();
  switch (sortingAlgorithm) {
    case 'merge': await mergeSort(newArray, 0, newArray.length - 1);
                  // setFunctionButtonsActive();
                  break;

    case 'quick': await quickSort(newArray,0,newArray.length-1);
                  // setFunctionButtonsActive();
                  break;

    case 'heap': await heapSort(newArray);
                //  setFunctionButtonsActive();
                 break;

    case 'bubble': await bubbleSort(newArray);
                  //  setFunctionButtonsActive();
                   break;

    case 'insertion': await insertionSort(newArray);
                      // setFunctionButtonsActive();
                      break;

    case 'selection': await selectionSort(newArray);
                      // setFunctionButtonsActive();
                      break;

    default: break;
  }
  setFunctionButtonsActive();
}
