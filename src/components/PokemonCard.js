import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const PokemonCard = ({ pokemonUrl }) => {
  const [pokemon, setPokemon] = useState({});
  const navigate=useNavigate();

  useEffect(() => {
    axios.get(pokemonUrl).then((res) => setPokemon(res.data));
  }, [pokemonUrl]);

  console.log(pokemon);

  return (


    <div onClick={()=>navigate(`/pokemon/${pokemon.id}`)} className={`${pokemon.types?.[0].type.name} ` } >
      
      <div className="card">
  
        <div className="card-img">
           <img src={pokemon.sprites?.other.dream_world.front_default} alt="pokemon" width="50%" />
         </div>

         

        <div className="card-text" >
          <ul>
            <li><h3>{pokemon.name}</h3></li>
            <li>Type: <h3>{pokemon.types?.[0].type.name} </h3></li>
            <li>HP: <h3>{pokemon.stats?.[0]["base_stat"]} </h3></li>
            <li>Attack: <h3>{pokemon.stats?.[1]["base_stat"]} </h3></li>
            <li>Defense: <h3>{pokemon.stats?.[2]["base_stat"]} </h3></li>
            <li>Speed: <h3>{pokemon.stats?.[5]["base_stat"]} </h3></li>
          </ul>
      </div>

    </div>



    </div>
  );
};

export default PokemonCard;