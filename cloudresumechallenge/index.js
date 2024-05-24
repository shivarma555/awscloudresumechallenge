const counter = document.querySelector(".counter-number");

async function updateCounter(){
    let response = await fetch("https://bpsjjex7syfu2fex4wbzndzvu40sheit.lambda-url.eu-north-1.on.aws/");
    let data = await response.json();
    Counter.innerHTML = ` Views: ${data}`;
}

updateCounter()