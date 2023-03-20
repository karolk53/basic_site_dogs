
async function wyswietlWyzel(){
    const resp = await fetch("http://localhost/testajax/dane/wyzel.json");
    const data = await resp.json();
    document.getElementById('dog_name').innerHTML = data.name;
    document.getElementById('dog_text').innerHTML = data.text;
}

async function wyswietlOwczarek(){
    const resp = await fetch("http://localhost/testajax/dane/owczarek.json");
    const data = await resp.json();
    document.getElementById('dog_name').innerHTML = data.name;
    document.getElementById('dog_text').innerHTML = data.text;
}

async function wyswietlGonczy(){
    const resp = await fetch("http://localhost/testajax/dane/gonczy.json");
    const data = await resp.json();
    document.getElementById('dog_name').innerHTML = data.name;
    document.getElementById('dog_text').innerHTML = data.text;
}