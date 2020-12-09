import React from "react";
import autorImg from "../../img/autorImg.png";
import podcast from "../../audio/podcast.mp3";

const Literature = () => {
    return(
        <div className="content">
            <h1>Parnasianismo</h1>
            <img src={autorImg} alt="autor parnasiano"/>
            <br/>

            <h1>Podcast Simbolismo</h1>
            <audio className="podcast">
                <source src={podcast}></source>
            </audio>
        </div>
    );
}

export default Literature;