function sorting(arr) {
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b)); // Because if a.length - b.length = 0
// the statement will be falsy because 0 is falsy and will continue with the second half of the statement

    console.log(arr.join('\n'));
}

sorting(['alpha', 'beta', 'gamma']);