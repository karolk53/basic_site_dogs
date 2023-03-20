function pokaz(id)
{
    var tresc="";
    switch (id)
    {   
        case 2: tresc += pokazGalerie();break;
        case 3: tresc += pokazPost(); break;
        case 4: tresc += pokazKontakt();break;
        default: tresc += pokazO();
        }
        //pobierz element o wskazanym id i ustaw jego nową zawartość:
    document.getElementById('blok').innerHTML = tresc;
}
function pokazO(){
    let tresc = '<div id="o_nas"><h1><br />Witaj na naszej stronie!</h1> '+
                '<article><h2>Kim jesteśmy?</h2><p>'+
                'Jesteśmy małą firmą gastronomiczną działającą na obrzerzach Lublina. Poza tym, że możecie zjeść u nas pyszny domowy obiad oferujemy również' +
                'dostawę posiłków do klienta. Możesz zapoznać się z naszą ofertą w zakładce "Przepisy" oraz złożyć zamówienie online w zakładce "Zamów"</p></article>'+
                '</div><div id="animContainer"></div>';
    return tresc;
}

function pokazGalerie()
{
    var tresc='<div id="rasy"><h1><br />Rasy, które hodujemy</h1><div class="but_rasy"><button id="owcz" onclick="wyswietlOwczarek()">Owczarek niemiecki</button><button id="wyz" onclick="wyswietlWyzel()">Wyżeł weimarski</button>'+
              '<button id="gon" onclick="wyswietlGonczy()">Gończy polski</button></div><div id="about_rasy"><div id="dog_img"><img src="https://www.look4dog.com/files/upload/images/Owczarek-niemiecki-dlugowlosy---charakter.jpeg">'+
              '</div><div id="dog_txt"><h3 id="dog_name">Owczarek niemiecki długowłosy</h3><p id="dog_text">Jako rasa dopuszczona do wystaw owczarek niemiecki długowłosy został uznany dopiero w 2011 roku. Te zwierzęta szybko zyskały popularność. Jeśli są dobrze wychowane, mają przyjacielski charakter, uwielbiają aktywnie spędzać czas z opiekunem, któremu są niezwykle oddane. Ich długa i miękka sierść wymaga starannej pielęgnacji, ale to nie wszystkie potrzeby, jakim musi sprostać opiekun długowłosego wilczura.</p>'+
              '</div></div></div>';
    return tresc;
}

function pokazKontakt(){
    var tresc='<h2><br />Kontakt</h2>';
    //uzupełnij treść:
    // tresc+= ...
    tresc += '<h1>tel: 123-456-789</h1>'+
             '<h1>e-mail: jan.kowalski@onet.pl</h1>'

    return tresc;
}

function pokazPost(){
  
    var tresc = '<div class="rej">'+
    '<h1>Zarezerwuj pieska:</h1>'+
    '<form>'+         
        '<div class="box">'+             
            'Imię: <input type="text" /></br>'+
            'Nazwisko: <input type="text" /></br>'+
            'Telefon: <input type="tel" /></br>'+
            'E-mail: <input type="email" /></br>'+
            '<p>Rasa:</p>'+
            '<div id="rej_rasa">'+
                '<section id="first" class="section">'+
                    '<div class="container">'+
                        '<input type="radio" name="group1" id="radio-1">'+
                        '<label for="radio-1"><span class="radio">Owczarek</span></label>'+
                    '</div>'+
                    '<div class="container">'+
                        '<input type="radio" name="group1" id="radio-2">'+
                        '<label for="radio-2"><span class="radio">Wyżeł</span></label>'+
                    '</div>'+
                    '<div class="container">'+
                        '<input type="radio" name="group1" id="radio-3">'+
                        '<label for="radio-3"><span class="radio">Gończy</span></label>'+
                    '</div>'+
                  '</section>'+  
            '</div>'+
            'Ilość: <input type="number"></br>'+
            '<p>Płeć:</p>'+
            '<div id="rej_plec">'+
                '<section id="second" class="section">'+
                    '<div class="container">'+
                        '<input type="radio" name="group1" id="radio-1">'+
                        '<label for="radio-1"><span class="radio">Piesek</span></label>'+
                    '</div>'+
                    '<div class="container">'+
                        '<input type="radio" name="group1" id="radio-2">'+
                        '<label for="radio-2"><span class="radio">Suczka</span></label>'+
                    '</div>'+
                  '</section>'+ 
            '</div>'+                       
        '</div>'+   
    '</form>'+
    '</div>';

    return tresc;
}

function pokazDane()
{
//Funkcja zbiera dane wpisane w pola formularza i wyświetla okienko
//typu confirm do zatwierdzenia przez użytkownika:
    var dane="Następujące dane zostaną wysłane:\n";
    dane+="Email: "+document.getElementById('email').value+"\n";
    dane+="Imie i nazwisko: "+document.getElementById('name').value+"\n";
    dane+="Telefon: "+document.getElementById('tel_nmb').value+"\n";
    // uzupełnij dane ...
    if (window.confirm(dane)) return true;
    else return false;
}