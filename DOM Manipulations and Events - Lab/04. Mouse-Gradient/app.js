function attachGradientEvents() {
    let gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', Calc);
    gradient.addEventListener('mouseout', gradientOut);

    function Calc(event) {
        let mousePosition = event.offsetX;
        let gradientWidth = event.target.clientWidth - 1;

        let persentage = Math.trunc((mousePosition / gradientWidth) * 100);

        document.getElementById('result').textContent = persentage + '%';
    }

    function gradientOut() {
        document.getElementById('result').textContent = "";
    }
}