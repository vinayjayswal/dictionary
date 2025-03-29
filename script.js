let searchInput=document.getElementById("searchInput");
let searchBtn=document.getElementById("searchBtn");

const getData=async (searchVal) =>{
    let data=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchVal}`);
    let jsonData=await data.json();

    document.querySelector(".text").innerHTML=""

    let div=document.createElement("div");
    div.classList.add("detail");
    div.innerHTML=`
            <h2> Word:<span>${jsonData[0].word}</span></h2>
            <p>${jsonData[0].meanings[0].partOfSpeech}</p>
            <p>Meaning:<span>${jsonData[0].meanings[0].definitions[0].definition} </span></p>
            <p>Example:<span>${jsonData[0].meanings[0].definitions[0].example==undefined?"Not found":jsonData[0].meanings[0].definitions[0].example}</span></p>
            <p>Synonyms:<span>${jsonData[0].meanings[0].synonyms}</span></p>
            <p><span></span></p>
            <a href=${jsonData[0].sourceUrls[0]}target="_blank">Read more</a>
    
    `
    document.querySelector(".text").appendChild(div);
    console.log(jsonData);
    console.log(jsonData[0].word);
    console.log(jsonData[0].meanings[0].definitions[0].definition);
}

searchBtn.addEventListener("click",function(){
    let searchVal=searchInput.value;
    if(searchVal==""){
        alert("First Enter word");
    }
    else{
        getData(searchVal)
    }
})
getData();