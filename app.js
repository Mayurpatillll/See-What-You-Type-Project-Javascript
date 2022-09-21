document.querySelector("#input", update);

function update() {
    var text = document.querySelector("#input").value;
    document.querySelector("#output").innerHTML = text;
}