module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }

    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            i++;
        } else if (arr[i] === '--discard-prev') {
            if (arr1.length > 0) {
                arr1.pop();
            }
        } else if (arr[i] === '--double-next') {
            if (i < arr.length - 1) {
                arr1.push(arr[i + 1])
            }
        } else if (arr[i] === '--double-prev') {
            if (i > 0) {
                arr1.push(arr[i - 1]);
            }
        } else {
            arr1.push(arr[i]);
        }
    }
    return arr1;

    // arr.map((item, index) => {
    //     if (item === '--discard-next' && arr[index + 1]) {
    //         arr1.concat(arr.slice(0, arr[index]), arr.slice(arr[index + 2], arr.length));
    //     } else if (item === '--discard-prev' &&  arr[index - 1]) {
    //         arr1.concat(arr.slice(0, arr[index - 1]), arr.slice(arr[index + 1], arr.length));
    //     } else if (item === '--double-next' && arr[index + 1]) {
    //         arr1.concat(arr.slice(0, arr[index]), arr.slice(arr[index + 1],
    //              arr[index + 2]), arr.slice(arr[index + 2], arr.length))
    //     } else if (item === '--double-prev' &&  arr[index - 1]) {
    //         arr1.concat(arr.slice(0, arr[index - 1]), arr.slice(arr[index - 1], arr[index]),
    //          arr.slice(arr[index + 1], arr.length));
    //     } arr1 = arr;
    // })
    // return arr1;
};
