import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import pokedex from "../assets/img/pokedex.png";



const PokemonDetail = () => {

  const [ pokemons, setPokemons]=useState([]);
  const {id} =useParams();

  useEffect(()=>{
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res=>setPokemons(res.data))
  },[id]);
  console.log(pokemons)

  return (
    <div className={`${pokemons.types?.[0].type.name} ` } style={{
      width:"80%", height:"20vh", position:"relative", top:"200px", backgroundColor:"rgb(225, 232, 239)"
      
    }} >
       <div className="rectangle_3" ></div>
     <div className="rectangle_4" ></div>

     <div className="img-pokedex-2"><img src={pokedex} alt="brand-pokedex"/></div>
     
     <div className="pokeDetail__card">

      <div className="detail-img">
       <img src={pokemons.sprites?.other.dream_world.front_default} alt="pokemon" width="20%" />
      </div>

      <div className="rectangle_5"></div>

      
      <div className="text-1">
      <h4># {pokemons.id}</h4>
      <h3>-------------{pokemons.name}-------------</h3>
      
      </div>

      <div className="text-2">
        <div><h3>Weight: {pokemons.weight}</h3></div>
        <div> <h3>Height: {pokemons.height}</h3></div>
      
      </div>


    
      <div className="text-3">

        <div className="type">
          <h1>Type</h1>
          <h3> {pokemons.types?.[0].type.name}</h3>
           <h3>{pokemons.types?.[1].type.name} </h3>
        </div>
        

        <div className="ability"> 
          <h1>abilities</h1>
          <h3>{pokemons.abilities?.[0].ability.name} </h3>
          <h3>{pokemons.abilities?.[0].ability.name} </h3>
        </div>
      </div>

      

      <div className="stats">
        <h1>Stats</h1>
      <h3>HP: {pokemons.stats?.[0]["base_stat"]} </h3>
      <div class="progress-bar-container">
    <div class="progress-bar stripes">
      <span class="progress-bar-inner"></span>
    </div>
    
  </div>
      <h3>Attack: {pokemons.stats?.[1]["base_stat"]} </h3>
      <div class="progress-bar-container">
    <div class="progress-bar stripes">
      <span class="progress-bar-inner"></span>
    </div>
    
  </div>
      <h3>Defense: {pokemons.stats?.[2]["base_stat"]} </h3>
      <div class="progress-bar-container">
    <div class="progress-bar stripes">
      <span class="progress-bar-inner"></span>
    </div>
      <h3>Speed: {pokemons.stats?.[5]["base_stat"]} </h3>
      <div class="progress-bar stripes">
      <span class="progress-bar-inner"></span>
    </div>
    
    </div>
      
      
      
  </div>

      <div className="moves">
        <h1>Movements</h1>
        <h3>
         {pokemons.moves?.[0].move.name}
        </h3>
        <h3> {pokemons.moves?.[1].move.name}
         </h3>
         <h3>{pokemons.moves?.[2].move.name}
         </h3>
         <h3>{pokemons.moves?.[3].move.name}
         </h3>
         <h3>{pokemons.moves?.[4].move.name}
         </h3>
         <h3>{pokemons.moves?.[5].move.name}
         </h3>
         <h3>{pokemons.moves?.[6].move.name}
         </h3>
         <h3>{pokemons.moves?.[7].move.name}
         </h3>
         <h3>{pokemons.moves?.[8].move.name}
         </h3>
         <h3>{pokemons.moves?.[9].move.name}
         </h3>
         <h3>{pokemons.moves?.[10].move.name}</h3>
      </div>


     </div>
      

      
    </div>
  );
};

export default PokemonDetail;
