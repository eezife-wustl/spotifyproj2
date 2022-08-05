import React, { useState } from "react";
import styled from 'styled-components';

    const Container = styled.div`
    width: 50%; /* Full width */
    background-color: #ddd; /* Grey background */
    margin: 2rem;
    `;

    const Valence = styled.div`
        width: ${props => props.valence}%;
        padding-top: 2rem;
        padding-bottom: 2rem;
        background-image: ${props => props.color};
        color: black;
        text-align: center;
    `;

    const Danceability = styled.div`
    width: ${props => props.dance}%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-image: linear-gradient(#89D4CF, #734AE8);
    color: black;
    text-align: center;
    `;

    const Energy = styled.div`
    width: ${props => props.energy}%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-image: linear-gradient(#AFF1DA, #F9EA8F);
    color: black;
    text-align: center;
    `;

function MusicStats({audiodata}) {

    function random(min, max) {
        return Math.random() * (max - min) + min;
      };

    let valence = audiodata[4]*100;
    let energy = audiodata[1]*100;
    let dance = audiodata[0]*100;

    function setValenceColor(val) {
        let vl = 0;
        
        if (valence >= 0 && valence < 7.5) {
          vl = "linear-gradient(hsl(235, 80%, 50%), hsl(240, 80%, 50%))";
        }
        if (valence >= 7.5 && valence < 15) {
          vl = "linear-gradient(hsl(230, 80%, 50%), hsl(235, 80%, 50%))";
        }
        if (valence >= 15 && valence < 22.5) {
          vl = "linear-gradient(hsl(225, 80%, 50%), hsl(230, 80%, 50%))";
          vl = random(225, 230);
        }
        if (valence >= 22.5 && valence < 30) {
          vl = "linear-gradient(hsl(220, 80%, 50%), hsl(225, 80%, 50%))";
        }
    
        //sad = lighter blues 0.3 - 0.4
        if (valence >= 30 && valence < 32.5) {
          vl = "linear-gradient(hsl(197.5, 80%, 50%), hsl(210, 80%, 50%))";
        }
        if (valence >= 32.5 && valence < 35.75) {
          vl = "linear-gradient(hsl(185, 80%, 50%), hsl(197.5, 80%, 50%))";
        }
        if (valence >= 35.75 && valence < 38.25) {
          vl = "linear-gradient(hsl(172.5, 80%, 50%), hsl(185, 80%, 50%))";
        }
        if (valence >= 38.25 && valence < 40) {
          vl = "linear-gradient(hsl(160.5, 80%, 50%), hsl(172.5, 80%, 50%))";
        }
    
    
        //slightly less sad = greens 0.4 -0.5
        if (valence >= 40 && valence < 42.5) {
          vl = "linear-gradient(hsl(135, 80%, 50%), hsl(150, 80%, 50%))";
        }
        if (valence >= 42.5 && valence < 43.75) {
          vl = "linear-gradient(hsl(120, 80%, 50%), hsl(135, 80%, 50%))";
        }
        if (valence >= 43.75 && valence < 48.25) {
          vl = "linear-gradient(hsl(105, 80%, 50%), hsl(120, 80%, 50%))";
        }
        if (valence >= 48.25 && valence < 50) {
          vl = "linear-gradient(hsl(90, 80%, 50%), hsl(105, 80%, 50%))";
        }
    
        //balanced yellow 0.5 - 0.6
        if (valence >= 50 && valence < 52.5) {
          vl = "linear-gradient(hsl(55, 80%, 50%), hsl(60, 80%, 50%))";
        }
        if (valence >= 52.5 && valence < 53.75) {
          vl = "linear-gradient(hsl(50, 80%, 50%), hsl(55, 80%, 50%))";
        }
        if (valence >= 53.75 && valence < 58.25) {
          vl = "linear-gradient(hsl(45, 80%, 50%), hsl(50, 80%, 50%))";
        }
        if (valence >= 58.25 && valence < 60) {
          vl = "linear-gradient(hsl(40, 80%, 50%), hsl(45, 80%, 50%))";
        }
    
    
        //happy 0.6 - 0.7 orange reds
        if (valence >= 60 && valence < 62.5) {
          vl = "linear-gradient(hsl(32.5, 80%, 50%), hsl(40, 80%, 50%))";
        }
        if (valence >= 62.5 && valence < 63.75) {
          vl = "linear-gradient(hsl(25, 80%, 50%), hsl(32.5, 80%, 50%))";
        }
        if (valence >= 63.75 && valence < 68.25) {
          vl = "linear-gradient(hsl(17.5, 80%, 50%), hsl(25, 80%, 50%))";
        }
        if (valence >= 68.25 && valence < 70) {
          vl = "linear-gradient(hsl(10, 80%, 50%), hsl(17.5, 80%, 50%))";
        }
    
        //slighty more happy 0.7 - 0.8 red
        if (valence >= 70 && valence < 72.5) {
          vl = "linear-gradient(hsl(355, 80%, 50%), hsl(360, 80%, 50%))";
        }
        if (valence >= 72.5 && valence < 73.75) {
          vl = "linear-gradient(hsl(350, 80%, 50%), hsl(355, 80%, 50%))";
        }
        if (valence >= 73.75 && valence < 78.25) {
          vl = "linear-gradient(hsl(345, 80%, 50%), hsl(350, 80%, 50%))";
        }
        if (valence >= 0.7825 && valence < 0.80) {
          vl = "linear-gradient(hsl(340, 80%, 50%), hsl(345, 80%, 50%))";
        }
    
        //very happy super RED
        if (valence >= 80 && valence < 85) {
          vl = "linear-gradient(hsl(341.25, 80%, 50%), hsl(345, 80%, 50%))";
        }
        if (valence >= 85 && valence < 90) {
          vl = "linear-gradient(hsl(337.5, 80%, 50%), hsl(341.25, 80%, 50%))";
        }
        if (valence >= 90 && valence <= 100) {
          vl = "linear-gradient(hsl(333.75, 80%, 50%), hsl(337.5, 80%, 50%))";
        }

        //very sad = blue 0 to 20
        //sad 20 - 40
        //balanced 40 to 60
        //happy 60 to80
        //very happy 80 to 100

        // if (val >= 0 && val < 5) {
        //   vl = "linear-gradient(hsl(222, 80%, 50%), hsl(240, 80%, 50%))";
        // }
        // if (val >= 5 && val < 10) {
        //   vl = "linear-gradient(hsl(204, 80%, 50%), hsl(222, 80%, 50%))";
        // }
        // if (val >= 10 && val < 15) {
        //   vl = "linear-gradient(hsl(186, 80%, 50%), hsl(206, 80%, 50%))";
        // }
        // if (val >= 15 && val < 20) {
        //   vl = "linear-gradient(hsl(168, 80%, 50%), hsl(186, 80%, 50%))";
        // }

        // //sad
        // if (val >= 20 && val < 25) {
        //   vl = "linear-gradient(hsl(150, 80%, 50%), hsl(168, 80%, 50%))";
        // }
        // if (val >= 25 && val < 30) {
        //   vl = "linear-gradient(hsl(132, 80%, 50%), hsl(150, 80%, 50%))";
        // }
        // if (val >= 30 && val < 35) {
        //   vl = "linear-gradient(hsl(114, 80%, 50%), hsl(132, 80%, 50%))";
        // }
        // if (val >= 35 && val < 40) {
        //   vl = "linear-gradient(hsl(96, 80%, 50%), hsl(114, 80%, 50%))";
        // }

        // //balanced
        // if (val >= 40 && val < 45) {
        //   vl = "linear-gradient(hsl(78, 80%, 50%), hsl(96, 80%, 50%))";
        // }
        // if (val >= 45 && val < 50) {
        //   vl = "linear-gradient(hsl(60, 80%, 50%), hsl(78, 80%, 50%))";
        // }
        // if (val >= 50 && val < 55) {
        //   vl = "linear-gradient(hsl(42, 80%, 50%), hsl(60, 80%, 50%))";
        // }
        // if (val >= 55 && val < 60) {
        //   vl = "linear-gradient(hsl(24, 80%, 50%), hsl(42, 80%, 50%))";
        // }

        // //happy
        // if (val >= 60 && val < 65) {
        //   vl = "linear-gradient(hsl(24, 80%, 50%), hsl(42, 80%, 50%))";
        // }
        // if (val >= 65 && val < 70) {
        //   vl = "linear-gradient(hsl(6, 80%, 50%), hsl(24, 80%, 50%))";
        // }
        // if (val >= 70 && val < 75) {
        //   vl = "linear-gradient(hsl(342, 80%, 50%), hsl(360, 80%, 50%))";
        // }
        // if (val >= 75 && val < 80) {
        //   vl = "linear-gradient(hsl(324, 80%, 50%), hsl(342, 80%, 50%))";
        // }

        // //very happy
        // if (val >= 80 && val < 85) {
        //   vl = "linear-gradient(hsl(306, 80%, 50%), hsl(324, 80%, 50%))";
        // }
        // if (val >= 85 && val < 90) {
        //   vl = "linear-gradient(hsl(288, 80%, 50%), hsl(306, 80%, 50%))";
        // }
        // if (val >= 90 && val < 100) {
        //   vl = "linear-gradient(hsl(270, 80%, 50%), hsl(288, 80%, 50%))";
        // }
      return vl;
    };



    function setValenceMusicTaste(val) {
        if (val >= 0 && val < 20) {
            return "very negative";
        }
        if (val >= 20 && val < 40) {
            return "negative";
        }
        if (val >= 40 && val < 60) {
            return "balanced between positive and negative"
        }
        if (val >= 60 && val < 80) {
            return "positive"
        }
        if (val >= 80 && val < 100) {
            return "very positive"
        }
    };

    function setDanceMusicTaste(val) {
        if (val >= 0 && val < 20) {
            return "not very danceable";
        }
        if (val >= 20 && val < 40) {
            return "slightly danceable";
        }
        if (val >= 40 && val < 60) {
            return "moderately danceable"
        }
        if (val >= 60 && val < 80) {
            return "very danceable"
        }
        if (val >= 80 && val < 100) {
            return "extremely danceable"
        }
    };

    function setEnergyMusicTaste(val) {
        if (val >= 0 && val < 20) {
            return "not very energetic";
        }
        if (val >= 20 && val < 40) {
            return "slightly energetic";
        }
        if (val >= 40 && val < 60) {
            return "moderately energetic"
        }
        if (val >= 60 && val < 80) {
            return "very energetic"
        }
        if (val >= 80 && val < 100) {
            return "extremely energetic"
        }
    };


      return (<>
            <span> Valence describes musical positivity. To create your musiac, 
                valence produces a color that ranges between blue and red. 
                Listening to more negative music will produce a more blue-ish hued musiac, 
                while the most positive music will produce a more reddish hued musiac. 
                The music you listen to tends to be <i>{setValenceMusicTaste(valence)}</i>.  </span>
        <Container>
                <Valence valence={valence} color={setValenceColor(valence)}>Valence</Valence>
        </Container>

        <span> The danceability of a track is calculated using tempo, rhythm, stability, beat strength and more. 
                Listening to more danceable music will produce more triangles in the musiac, 
                while to less danceable music will produce less individual triangles. 
                The music you listen to tends to be <i>{setDanceMusicTaste(dance)}</i>.  </span>
        <Container>
                <Danceability dance={dance}>Danceability</Danceability>
        </Container>

        <span> Energy describes musics intensity and activity. More energetic music is fast, loud, and noisy.
                Listening to more energetic music creates a more chaotic musiac, 
                while less energetic music produces a more structured musiac. 
                The music you listen to tends to be <i>{setEnergyMusicTaste(energy)}</i>.  </span>
        <Container>
                <Energy energy={energy}>Energy</Energy>
        </Container>
      </>
      );
    }
  
    export default MusicStats;