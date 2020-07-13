async function heapSort(arr) {
    var n = arr.length;
    for (var i = n / 2 - 1; i >= 0; i--)
        await heapify(arr, n, i);

    for (var i = n - 1; i > 0; i--) {
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        await heapify(arr, i, 0);
    }
}

async function heapify(arr, n, i) {
    await delay();
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2; 

    if (l < n && arr[l] > arr[largest])
        largest = l;

    if (r < n && arr[r] > arr[largest])
        largest = r;

    if (largest != i) {
        borderColor[i] = 'rgba(255, 159, 64,1)';
        borderColor[largest] = 'rgba(255, 159, 64,1)';
        backgroundColor[i] = 'rgba(255, 159, 64,0.2)';
        backgroundColor[largest] = 'rgba(255, 159, 64,0.2)';
        dispatcher(arr, backgroundColor, borderColor);
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;
        await delay();
        borderColor[i] = 'rgba(54, 162, 235, 1)';
        borderColor[largest] = 'rgba(54, 162, 235, 1)';
        backgroundColor[i] = 'rgba(54, 162, 235, 0.2)';
        backgroundColor[largest] = 'rgba(54, 162, 235, 0.2)';
        dispatcher(arr, backgroundColor, borderColor);
        await heapify(arr, n, largest);
    }
    dispatcher(arr, backgroundColor, borderColor);
} 