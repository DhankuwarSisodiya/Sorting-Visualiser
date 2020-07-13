async function selectionSort(array) {
    let length = array.length;
    for (var i = 0; i < length; i++) {
        var minIndex = i;
        for (var j = i+1; j < length; j++)   {
            minIndex = await compareAndSwap(array,minIndex,j);
        }
        await swap(array,minIndex,i);
    }
    return array;
}

async function compareAndSwap(array,minIndex,j){
    await delay();
    if (array[j] < array[minIndex]) 
        minIndex = j;
    return minIndex;
}

async function swap(array,minIndex,i){
    await delay();
    if (minIndex !== i) {
        borderColor[i] = 'rgba(255, 159, 64,1)';
        borderColor[minIndex] = 'rgba(255, 159, 64,1)';
        backgroundColor[i] = 'rgba(255, 159, 64,0.2)';
        backgroundColor[minIndex] = 'rgba(255, 159, 64,0.2)';
        dispatcher(array, backgroundColor, borderColor);
        var temp = array[minIndex]; 
        array[minIndex] = array[i]; 
        array[i] = temp; 
        await delay();
        borderColor[i] = 'rgba(54, 162, 235, 1)';
        borderColor[minIndex] = 'rgba(54, 162, 235, 1)';
        backgroundColor[i] = 'rgba(54, 162, 235, 0.2)';
        backgroundColor[minIndex] = 'rgba(54, 162, 235, 0.2)';
        dispatcher(array, backgroundColor, borderColor);
        }
        
}