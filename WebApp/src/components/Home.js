import React from "react";
import img from '../images/home.png'
import '../styles/Home.css'
const Home = () => {
    return(
        <section>
        <h2>Your blood donation can be the reason someone smiles again :)</h2>
        <img src={img} alt="error"></img>
        </section>
    );
}

export default Home;