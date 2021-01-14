function getIndexToIns(arr, num) {
    let count = 0;
    arr.forEach(function (index) {
            count = index < num ? count + 1 : count
            console.log(count)
        }
    )
    return (count)
}

getIndexToIns([40, 60], 50);
getIndexToIns([10, 20, 30, 40, 50], 35)