async function insertionSort(arr) {
    var n = arr.length;
    for (var i = 1; i < n; ++i) {
        await delayedLog(arr, i);
    }
}

async function delayedLog(arr, i) {
    await delay();
    var key = arr[i];
    var j = i - 1;
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        borderColor[j] = 'rgba(255, 159, 64,1)';
        backgroundColor[j] = 'rgba(255, 159, 64, 0.2)';
        dispatcher(arr, backgroundColor, borderColor);
        await delay();
        borderColor[j] = 'rgba(54, 162, 235, 1)';
        backgroundColor[j] = 'rgba(54, 162, 235, 0.2)';
        dispatcher(arr, backgroundColor, borderColor);
    }
    arr[j + 1] = key;


}