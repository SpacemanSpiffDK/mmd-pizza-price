// JS by Dan Høegh
// UCN MMD 2019

function calculate() {
    let normalDiameter = document.querySelector("#normalDiameter").value;
    let normalPrice = document.querySelector("#normalPrice").value;
    let largeDiameter = document.querySelector("#largeDiameter").value;
    let largePrice = document.querySelector("#largePrice").value;

    // Area of circle = PI*r^2
    let normalArea = Math.PI * Math.pow(normalDiameter / 2, 2);
    let normalPricePerArea = normalPrice / normalArea;

    let largeArea = Math.PI * Math.pow(largeDiameter / 2, 2);
    let largePricePerArea = largePrice / largeArea;

    // % Decrease = Decrease / Original Number × 100
    let percentDecrease = 100 - (largePricePerArea / normalPricePerArea * 100);

    let resultStr = `
    <p>
        Normal pizza diameter ${normalDiameter} cm<br/>
        Normal pizza area ${normalArea.toFixed(2)} cm<sup>2</sup><br/>
        Normal pizza price ${normalPrice} DKK<br/>
        <strong>Normal pizza price per area: ${normalPricePerArea.toFixed(4)} DKK/cm<sup>2</sup></strong>
    </p>
    <p>
        Large pizza diameter ${largeDiameter}<br/>
        Large pizza area ${largeArea.toFixed(2)} cm<sup>2</sup><br/>
        Large pizza price ${largePrice}<br/>
        <strong>Large pizza price per area: ${largePricePerArea.toFixed(4)} DKK/cm<sup>2</sup></strong>
    </p>
    <p>
        <strong>You save: ${percentDecrease.toFixed(2)}%</strong>
    </p>`;
    // insert result string in the element in the HTML
    document.querySelector("#result-text").innerHTML = resultStr;
    // Show result block
    document.querySelector("#result-block").classList.add("active");
}