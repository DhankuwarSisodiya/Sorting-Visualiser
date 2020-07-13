async function mergeSort(arr,left,right) {
  if (left < right) { 
    var mid = Math.floor((left + right) / 2); 

    await mergeSort(arr, left, mid); 
    await mergeSort(arr, mid + 1, right); 
    await merge(arr, left, mid, right); 
}
await delay();
return arr;
  }
  
  async function merge(arr, left, mid, right) {
    
    var n1 = mid - left + 1; 
    var n2 = right - mid; 
    var L = [n1]; 
    var R = [n2]; 

    for (var i = 0; i < n1; ++i) 
        L[i] = arr[left + i]; 
    for (var j = 0; j < n2; ++j) 
        R[j] = arr[mid + 1 + j]; 

    var i = 0, j = 0; 
    var k = left; 
    while (i < n1 && j < n2) { 
        if (L[i] <= R[j]) { 
            arr[k] = L[i]; 
            i++; 
        } 
        else { 
            arr[k] = R[j]; 
            j++; 
        } 
        k++; 
    } 

    while (i < n1) { 
        arr[k] = L[i]; 
        i++; 
        k++; 
    } 

    while (j < n2) { 
        arr[k] = R[j]; 
        j++; 
        k++; 
    } 

    dispatcher(arr, backgroundColor, borderColor);
  }