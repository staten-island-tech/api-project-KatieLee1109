import "../style.css";
const URL = "http://dog-api.kinduff.com/api/facts";
async function getData(URL) {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        document.getElementById("api-response").textContent = data.content;
    } catch (error) {
        console.log(error);
    }
}
getData(URL);

