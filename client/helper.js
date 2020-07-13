function delay() {
  return new Promise(resolve => setTimeout(resolve, 10));
}

function dispatcher(array, backgroundColor, borderColor) {
  myChart.data = {
    labels: array,
    datasets: [{
      label: '',
      data: array,
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 1
    }]
  };
  myChart.update();
}

function setFunctionButtonsActive() {
  document.getElementById("generateNewArrayBtn").disabled = false;
  document.getElementById("customRange").disabled = false;
  document.getElementById("sortArrayBtn").disabled = false;
  document.getElementById("showArrayBtn").disabled = false;
  document.getElementById("sortingAlgorithm").disabled = false;
}

function setFunctionButtonsdeActive() {
  document.getElementById("generateNewArrayBtn").disabled = true;
  document.getElementById("customRange").disabled = true;
  document.getElementById("sortArrayBtn").disabled = true;
  document.getElementById("showArrayBtn").disabled = true;
  document.getElementById("sortingAlgorithm").disabled = true;
}

function barsHighlight(array,borderColor, backgroundColor, i, j = null) {
  borderColor[i] = 'rgba(255, 159, 64,1)';
  backgroundColor[i] = 'rgba(255, 159, 64,0.2)';
  if (j != null) {
    borderColor[j] = 'rgba(255, 159, 64,1)';
    backgroundColor[j] = 'rgba(255, 159, 64,0.2)';
  }
  dispatcher(array, backgroundColor, borderColor);
}

function barsUnHighlight(array,borderColor, backgroundColor, i, j = null) {
  borderColor[i] = 'rgba(54, 162, 235, 1)';
  backgroundColor[i] = 'rgba(54, 162, 235, 0.2)';
  if (j != null) {
    borderColor[j] = 'rgba(54, 162, 235, 1)';
    backgroundColor[j] = 'rgba(54, 162, 235, 0.2)';
  }
  dispatcher(array, backgroundColor, borderColor);
}