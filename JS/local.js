

function dodajZamowienie(){
    let item = {};
    item.imie = document.getElementById('imie').value;
    item.nazwisko = document.getElementById('nazwisko').value;
    item.telefon = document.getElementById('telefon').value;
    item.email = document.getElementById('email').value;
    if(document.getElementById('radio-1').checked == true){
        item.rasa = 'Owczarek'
    }
    if(document.getElementById('radio-2').checked == true){
        item.rasa = 'Wyżeł'
    }
    if(document.getElementById('radio-3').checked == true){
        item.rasa = 'Gończy'
    }
    item.ilosc = document.getElementById('ilosc').value;
    if(document.getElementById('radio-4').checked){
        item.plec = 'Piesek'
    }
    if(document.getElementById('radio-5').checked){
        item.plec = 'Suczka'
    }
        

    console.log(JSON.stringify(item))

    localStorage.setItem(localStorage.length.toString(), JSON.stringify(item));
}



function wyswietlZamowienia(){
    const zam = document.getElementById('zam');
    zam.innerHTML = ''
    for(var i=0;i<localStorage.length;i++) { 
        let k = localStorage.key(i);
        let sz_zam = JSON.parse(localStorage.getItem(k));
        let imie = sz_zam.imie;
        let nazwisko = sz_zam.nazwisko;
        let telefon = sz_zam.telefon;
        let email = sz_zam.email;
        let rasa = sz_zam.rasa;
        let ilosc = sz_zam.ilosc;
        let plec = sz_zam.plec;
        let el = document.createElement('div');
        let p = document.createElement('p');
        p.innerText = 'Imie:' + imie + ", Nazwisko: " + nazwisko + ", Telefon: " + telefon + ", E-mail: " + email +
                        ', Rasa: ' + rasa + ", Ilosc: " + ilosc + ", Płeć: " + plec;
        let usun = document.createElement('button');
        usun.className = 'rounded-button';
        usun.innerHTML = '<ion-icon name="close-outline" size="large"></ion-icon>';
        el.appendChild(p);
        el.appendChild(usun);

        zam.appendChild(el);
    }

}

function usunWszystko(){
    localStorage.clear();
}


let usun_butts = document.getElementsByClassName('rounded-button');

for(let i=0;i<usun_butts.length;i++){
    usun_butts[i].addEventListener("click", function(){
        localStorage.clear();
    });
}

