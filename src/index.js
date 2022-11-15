import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('all').addEventListener('click', async () => {
        //Bekérés
        let response = await fetch('./quotes.json');
        let eredmeny = await response.json();
    
        //Sorba rendezés
        let sorrend = eredmeny.quotes.sort(function(a, b){
            let elso = a.author.toUpperCase();
            let masodik = b.author.toUpperCase();
    
            if(elso < masodik){
                return -1;
            }else if( elso > masodik){
                return 1;
            }else{
                return 0;
            }
        });

        //Eltűntetés
        let adatok = document.getElementById('adatok');
        adatok.textContent = '';
    
        //Kiiratás felsorolásként
        for (let p of sorrend){
            let li = document.createElement('li');
            li.innerHTML = '<i>"' + p.quote + '"</i>'  + "&emsp;-&emsp;" +  p.author;
            adatok.appendChild(li);
        }
    });
})