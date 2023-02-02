import "../style.css";
let input = document.querySelector(".query")
let form = document.querySelector(".search")
let p = document.querySelector(".display")

form.addEventListener("click", (e) => {
    e.preventDefault();
    let inputVal = input.value;
    display(inputVal)
});
async function callAPI(value) {
    let data = await fetch(`https://api.artic.edu/api/v1/artworks/search?q=${value}`);
    let returned = await data.json();
    return returned;
};
async function display(value) {
    let data = await callAPI(value);
    console.log(data)
    data.data.forEach(element => {
        p.insertAdjacentHTML('afterend', `<p class="yay">${element.title}</p>`)
    });
    p.innerHTML = data.data[0]
};
