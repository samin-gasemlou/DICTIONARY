let text=document.querySelector("#text");
let search=document.querySelector("#search");
let data=document.querySelector("#data");

let loadData=()=>{
    let api=` https://api.dictionaryapi.dev/api/v2/entries/en/${text.value}`;
    fetch(api).then(response=>response.json()).then(result=>{
        data.innerHTML=`<div class="detail"><h3 class="meaning">WORD</h3><p>${result[0].word}</p></div>
        <div class="detail"><h3 class="meaning">DEFINITION</h3><p>${result[0].meanings[0].definitions[0].definition}</p></div>
        <div class="detail"><h3 class="meaning">EXAMPLE</h3><p>${result[0].meanings[0].definitions[0].example}</p></div>
        <div class="detail"><h3 class="meaning">PART OF SPEECH</h3><p>${result[0].meanings[0].partOfSpeech}</p></div>
        <div class="detail"><h3 class="meaning">ORIGIN</h3><p>${result[0].origin}</p></div>`;
    }).catch(()=>{
        data.innerHTML=`<div id="error">Can't Find The Meaning Of <span>${text.value}</span>.Please Search Another Word.</div>`
    });
}

search.addEventListener("click",()=>{
    if(text.value!=""){
        loadData()
    }else{
        data.innerHTML=`<div id="impo">Type Any Word & Click The Search Button To Get Meaning.</div>`
    }
})