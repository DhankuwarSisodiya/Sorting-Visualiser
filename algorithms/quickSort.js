async function quickSort(arr, low, high) {
    if (low < high) {
        /* pi is partitioning index, arr[pi] is  
          now at right place */
        var pi = await partition(arr, low, high);

        // Recursively sort elements before 
        // partition and after partition 
        await quickSort(arr, low, pi - 1);
        await quickSort(arr, pi + 1, high);
    }
}
async function partition(arr, low, high) {
    await delay();
    var pivot = arr[high];
    var i = (low - 1); // index of smaller element 
    for (var j = low; j < high; j++) {
        // If current element is smaller than the pivot 
        if (arr[j] < pivot) {
            i++;
            borderColor[i] = 'rgba(255, 159, 64,1)';
            borderColor[j] = 'rgba(255, 159, 64,1)';
            backgroundColor[i] = 'rgba(255, 159, 64,0.2)';
            backgroundColor[j] = 'rgba(255, 159, 64,0.2)';
            dispatcher(arr, backgroundColor, borderColor);
            // swap arr[i] and arr[j] 
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            await delay();
            borderColor[i] = 'rgba(54, 162, 235, 1)';
            borderColor[j] = 'rgba(54, 162, 235, 1)';
            backgroundColor[i] = 'rgba(54, 162, 235, 0.2)';
            backgroundColor[j] = 'rgba(54, 162, 235, 0.2)';
            dispatcher(arr, backgroundColor, borderColor);
        }
    }

    // swap arr[i+1] and arr[high] (or pivot) 
    borderColor[i] = 'rgba(255, 159, 64,1)';
    borderColor[high] = 'rgba(255, 159, 64,1)';
    backgroundColor[i] = 'rgba(255, 159, 64,0.2)';
    backgroundColor[high] = 'rgba(255, 159, 64,0.2)';
    dispatcher(arr, backgroundColor, borderColor);
    var temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    await delay();
    borderColor[i] = 'rgba(54, 162, 235, 1)';
    borderColor[high] = 'rgba(54, 162, 235, 1)';
    backgroundColor[i] = 'rgba(54, 162, 235, 0.2)';
    backgroundColor[high] = 'rgba(54, 162, 235, 0.2)';
    dispatcher(arr, backgroundColor, borderColor);
    return i + 1;

}