function findWords(input)
{
    let result = [];
    let currWord = '';

    for (let i = 0; i < input.length; i++)
    {
        let currCharCode = input.charCodeAt(i);

        if ((currCharCode >= 65 && currCharCode <= 90) || (currCharCode >= 97 && currCharCode <= 122))
        {
            currWord += input[i];
        }
        else
        {
            result.push(currWord);
            currWord = '';
        }
    }

    if (currWord) // because empty space is falsy
    {
        result.push(currWord);
    }

    let resultString = '';

    for (let i = 0; i < result.length; i++)
    {
        if (result[i] === '')
        {
            continue;
        }

        resultString += result[i].toUpperCase() + ', ';

    }

    resultString = resultString.substring(0, resultString.length - 2);

    console.log(resultString);
}

findWords('Hi, how are you?');
findWords('hello');