function sumSequance(length, numCount) {
    let sequence = [1];

    for (let i = 1; i < length; i++) {
        let currSum = 0;

        if (sequence.length < numCount)
        {
            for (let num of sequence) {
                currSum += num;
            }
            sequence.push(currSum);
        }
        else
        {
            for (let i = 1; i <= numCount; i++) {
                currSum += sequence[sequence.length - i];
            }
         
            sequence.push(currSum);
        }
    }

   return sequence;
}

console.log(sumSequance(6, 3));
console.log(sumSequance(8, 2));