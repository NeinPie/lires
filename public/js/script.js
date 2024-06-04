document.addEventListener('DOMContentLoaded', (event) => {
    //splitleft Growing
    let ended = false;
    const ListBut = document.getElementById('ListBut');
    const listArea = document.getElementById('listArea');

     ListBut.onclick = function() {
        if (ended) {
            listArea.classList.remove('growing');
        } else {
            listArea.classList.add('growing');
        }
        ended = !ended; 
     } 
     //growing input
     const recTitle = document.getElementById('recTitle');
     recTitle.addEventListener('input', function() {
         const inputWidth = recTitle.scrollWidth; // Breite des Inhalts des Textfelds
         recTitle.style.width = inputWidth + "px"; // Setzt die Breite des Textfelds auf die Breite des Inhalts
     });
    //slider
    const maxDauer = document.getElementById('maxDauer');
    const maxMin = document.getElementById('maxMin');
    maxMin.textContent = maxDauer.value;
    maxDauer.oninput = function() {
        maxMin.textContent = this.value;
    }
    //redirectHome
    /*const logo = document.getElementById('logo');
    logo.onclick = function() {
        window.location.href = '/';
    }*/
    const butaddres = document.getElementById('addRec');

    butaddres.onclick = function() {
        console.log('addres');
        window.location.href = '/addres';
    }

    //Input beim Titel von Rezept (autom. Anpassen der Textfeldgröße) funktioniert nich

    
});

function filBut(){
    const filOptionPage = document.getElementById('filOptionPage');
    if (filOptionPage.style.display === 'none' || filOptionPage.style.display === '') {
        filOptionPage.style.display = 'grid';
    } else{
        filOptionPage.style.display = 'none';
    }
}
