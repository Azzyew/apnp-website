import React from "react";
import autorImg from "../../img/autorImg.png";
import podcast from "../../audio/podcast.mp3";

const Literature = () => {
    return(
        <div className="content">
            <h1>Parnasianismo</h1>
            <img src={autorImg} alt="autor parnasiano" className="autor"/>
            <br/>

            <h1>Podcast Simbolismo</h1>
            <audio controls>
                <source src={podcast} type="audio/mpeg"/>
                Este navegador não possui suporte para áudio.
            </audio>
        </div>
    );
}

export default Literature;
