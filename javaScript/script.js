const informacion=document.querySelector("#information");
const pokeName=document.querySelector("#pokeName");
const pokeImg=document.querySelector("#pokeballImg");
const pokeartImg=document.querySelector("#imagePokemon");
const pokeId=document.querySelector("#pokemonId");
const pokeType=document.querySelector("#pokemonType");
const pokeStat=document.querySelector("#pokemonStats");

const fetchPokemon=event=>{
    event.preventDefault();
    const pokemon=document.getElementById("Nombre").value.toLowerCase();
    console.log(typeof(pokemon));
    fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(data=>data.json())
        .then(response=>dataPokemon(response))
        .catch(err=>failSearch())
}

const dataPokemon=data=>{
    const image=data.sprites.front_default;
    const {stats,types}=data;
    pokeName.textContent=data.name.toUpperCase();
    pokeImg.setAttribute('src',image);
    pokeId.textContent=`No. ${data.id}`;
    pokemonType(types);
    pokemonStat(stats)
}

const pokemonType=types=>{
    pokeType.innerHTML='';
    types.forEach(type => {
        const txtElement=document.createElement("p");
        txtElement.textContent=type.type.name.toUpperCase();
        pokeType.appendChild(txtElement);
    });
}

const pokemonStat=stats=>{
    pokeStat.innerHTML='';
    stats.forEach(stat=>{
        const statName=document.createElement("p");
        const statNum=document.createElement("p");
        statName.textContent=stat.stat.name.toUpperCase();
        statNum.textContent=stat.base_stat;
        pokeStat.appendChild(statName).appendChild(statNum);
    })
}

const failSearch=()=>{
    pokeName.textContent='¿Quien es ese pokemon?';
    pokeImg.setAttribute('src',"./img/whois.jpg");
    pokeType.innerHTML='';
    pokeStat.innerHTML='';
    pokeId.textContent='';
}
