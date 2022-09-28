function solve(jsonInput) {
    let parsedJson = JSON.parse(jsonInput);
    let result = '';

    function tableHeading(parsedJson) {
        result = "<table>\n<tr>";

        for (let key of Object.keys(parsedJson[0])) {
            result += `<th>${escape(key)}</th>`;
        }

        result += "</tr>\n";
    }

    function tableValues(parsedJson) {
        parsedJson.forEach(object => {
            result += "    <tr>";
            for (let value of Object.values(object)) {
                result += `<td>${escape(value)}</td>`;
            }
            result += "</tr>\n"
        });

        result += "</table>";
    }

    function escape(text) {
        return text.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    tableHeading(parsedJson);
    tableValues(parsedJson);

    console.log(result);
}

solve(`[{"Name":"Stamat", "Score":5.5}, {"Name":"Rumen", "Score":6}]`);

solve(`[{"Name":"Pesho", "Score":4, "Grade":8}, {"Name":"Gosho", "Score":5, "Grade":8}, 
{"Name":"Angel", "Score":5.50, "Grade":10}]`);