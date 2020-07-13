async function bubbleSort(array) {
    var i, j;
    var swapped;
    for (i = 0; i < array.length ; i++) {
        for (j = 0; j < array.length - i ; j++) {
            await delayedLog(array, i, j);
        }
    }
}

async function delayedLog(array, i, j) {
    await delay();

    if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        borderColor[i] = 'rgba(255, 159, 64,1)';
        borderColor[j] = 'rgba(255, 159, 64,1)';
        backgroundColor[i] = 'rgba(255, 159, 64,0.2)';
        backgroundColor[j] = 'rgba(255, 159, 64,0.2)';
        dispatcher(array, backgroundColor, borderColor);
        await delay();
        borderColor[i] = 'rgba(54, 162, 235, 1)';
        borderColor[j] = 'rgba(54, 162, 235, 1)';
        backgroundColor[i] = 'rgba(54, 162, 235, 0.2)';
        backgroundColor[j] = 'rgba(54, 162, 235, 0.2)';
        dispatcher(array, backgroundColor, borderColor);
    }
}