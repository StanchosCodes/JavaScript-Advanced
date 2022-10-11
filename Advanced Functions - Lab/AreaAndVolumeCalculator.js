function calc(area, vol, input) {
    input = JSON.parse(input);
    let result = [];

    for (let data of input) {
        let resultArea = area.call(data);
        let resultVolume = vol.call(data);

        result.push(
            {
                area: resultArea,
                volume: resultVolume
            }
        );
    }

    return result;
}

function area() {

    return Math.abs(this.x * this.y);
    
};

function vol() {

    return Math.abs(this.x * this.y * this.z);
    
};

let input = '[{"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"}]';

console.log(calc(area, vol, input));