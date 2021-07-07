const arr = [1,9,19,8,7,11, 200, 24, 6, 4, 57, 8, 9, 106, -12]
const target = 12;

const algo = (arr, target) => {
    const targetArray = []
    const newArr = sorted(arr)
    for(let i = 0; i < newArr.length; i++) {
        for(let k = i + 1; k < newArr.length; k++) {
            if(newArr[i] + newArr[k] == target) {
                targetArray.push([newArr[i], newArr[k]])
                k++
            }
        }
    }
    return targetArray;
}


const sorted = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let k = i + 1; k < arr.length; k++) {
            if(arr[i] < arr[k]) {
                let temp = arr[i]
                arr[i] = arr[k];
                arr[k] = temp
            }
        }
    }
    return arr
}
//console.log(algo(arr, target));
console.log(sorted(arr))