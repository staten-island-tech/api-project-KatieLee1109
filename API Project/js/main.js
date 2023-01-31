import "../style.css";
const URL = "https://api.lyrics.ovh/v1/artist/title";
async function getData(URL) {
    try {
      const response = await fetch(URL);
      const {} = await response.json();
  
      function display() {
        forEach((word) => {
          document.getElementById("api-response").insertAdjacentElement(
            "afterbegin",
            `<div class="card"
            id="${word.name}">
            <div class="songname"
            id=${word.artist}">
            <div class="artistname"
            id="${word.lyrics}
            </div>
            `
          );
        });
      }
      display();
    } catch (error) {
      console.log(error);
      alert("An error has occured");
    }
  }
  getData(URL);
