function findWords(input)
{
    return input.match(/\w+/g).join(", ").toUpperCase();
}

console.log(findWords('Hi, how are you?'));
console.log(findWords('hello'));