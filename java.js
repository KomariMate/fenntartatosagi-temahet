function calculateCO2() {
    const distance = document.getElementById("distance").value;
    const carEmission = document.getElementById("carEmission").value;

    if (distance && carEmission) {
        const totalCO2 = distance * carEmission;
        document.getElementById("result").innerText = `A napi szén-dioxid kibocsátásod: ${totalCO2} g CO₂`;
    } else {
        document.getElementById("result").innerText = "Kérlek, töltsd ki az összes mezőt!";
    }
}
calculateCO2()