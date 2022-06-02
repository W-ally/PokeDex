import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";
import pokedex from "../assets/img/pokedex.png";


const Pokemon = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [pokemons, setPokemons] = useState([]);
  const [types ,setTypes] = useState([]);
  const [searchPokemon,setSearchPokemon] = useState("");


  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126`)
      .then(res => setPokemons(res.data.results));
    axios
    .get("https://pokeapi.co/api/v2/type/")
    .then((res) => setTypes(res.data.results));

  }, []);

  const allPokemon =()=>{
    axios
    .get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1126`)
    .then(res => setPokemons(res.data.results));
  }
  console.log(types)

  const search = () => {
    
    navigate(`/pokemon/${searchPokemon.toLowerCase()}`);
  };

  const filterPokemon = (e) => {
    if (e.target.value!== "") {
      axios
      .get(e.target.value)
      .then((res) => setPokemons(res.data.pokemon));
    }else{
     allPokemon()
    }
      
    }

 const[ page, setPage] = useState(1);

    const pokemonNumber = 15;
    
     
    const lastIndex = pokemonNumber*page;
    const firstIndex = lastIndex-pokemonNumber;
    const pokemonPag = pokemons.slice(firstIndex,lastIndex);

    const lastPage = pokemons.length / pokemonNumber

    const numbers=[];
    for(let i = 1; i<=lastPage;i++){
      numbers.push(i);
    } 
 
  return (
  <div>
   
     
       
       <div className="img-pokedex-2"><img src={pokedex} alt="brand-pokedex"/></div>

     <div className="rectangle_3" ></div>
     <div className="rectangle_4" ></div>

     <div className="user-welcome">
     <p> Welcome  <b>{user}</b>, here you can find your favorite pokemon</p>
     </div>
      
      
     
     <div className="bar-search">
     <div className="search">
        <input
          type="text"
          value={searchPokemon}
          onChange={(e) => setSearchPokemon(e.target.value)}
          placeholder="search pokemon"
        />
        <button  onClick={search}>
          Search
        </button>
      </div>

      <div className="filter-pokemon" >


      <select onChange={filterPokemon}>
      <option>
        Show all Pokemons
      </option>
        {
        types.map(type => (
          <option key={type.name} value={type.url} >{type.name}</option>
        ))
      }
      </select>

      </div>
     </div>
     
      <div className="show-pokemon">
     {pokemonPag.map(pokemon  => (
        <PokemonCard key={pokemon.url!== undefined ? pokemon.url : pokemon.pokemon.url}  pokemonUrl={pokemon.url !== undefined ? pokemon.url : pokemon.pokemon.url} />
      ))}
   </div>

   <div className="btn__pagination">

<button 
  onClick={()=>setPage(page-1)}
  disabled={page === 1}
  >
    
    Prev</button>
    {
      numbers.map(number=>(
        <button onClick={()=>setPage(number)} >{number} </button>
      ))
    }
  <button 
  onClick={()=>setPage(page+1)}
  disabled={page === lastPage}
  >
    
    Next</button>
  
</div>
      
  </div>
  );
};

export default Pokemon;