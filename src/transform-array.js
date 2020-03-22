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

};
