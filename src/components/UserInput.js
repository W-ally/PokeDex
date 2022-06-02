import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeUser } from "../store/slices/user.slice";
import { useDispatch } from "react-redux";
import pokedex from "../assets/img/pokedex.png";



const UserInput = () => {
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getName = () => {
    dispatch(changeUser(userName));
    navigate("/pokemon");
  };

  return (
    <div >
     
      <div className="trainer_ctn">
          <img src={pokedex} alt="pokedex" />
          
      </div>
      <h2 className="title">Hello trainer!</h2>
        <p>Give me your name to start</p>
      <form className="form_1">

        <input
       placeholder="Enter your name"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
         />
        <button onClick={getName} className="button_input" ><i class="fa-solid fa-share"></i></button>
      </form>

     <div className="rectangle__1">

     </div>
     <div className="rectangle__2">

     </div>
     <div className="img_poke">
          <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png"/>

     </div>
   </div>
    
  );
};

export default UserInput;