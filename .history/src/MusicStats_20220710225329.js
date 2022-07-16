import React, { useState } from "react";
import styled from 'styled-components';

    const Container = styled.div`
    width: 30%; /* Full width */
    background-color: #ddd; /* Grey background */
    margin: 2rem;
    `;

    const Valence = styled.div`
        width: ${props => props.valence}%;
        padding-top: 2rem;
        padding-bottom: 2rem;
        background-image: ${props => props.color};
    `;

    const Danceability = styled.div`
    width: ${props => props.dance}%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-image: linear-gradient(#89D4CF, #734AE8);
    `;

    const Energy = styled.div`
    width: ${props => props.energy}%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-image: linear-gradient(#AFF1DA, #F9EA8F);
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
        
        //very sad = blue
          if (val >= 0 && val < 5) {
            vl = "linear-gradient(hsl(222, 80%, 50%), hsl(240, 80%, 50%))";
          }
          if (val >= 5 && val < 10) {
            vl = "linear-gradient(hsl(204, 80%, 50%), hsl(222, 80%, 50%))";
          }
          if (val >= 10 && val < 15) {
            vl = "linear-gradient(hsl(186, 80%, 50%), hsl(206, 80%, 50%))";
          }
          if (val >= 15 && val < 20) {
            vl = "linear-gradient(hsl(168, 80%, 50%), hsl(186, 80%, 50%))";
          }

          //sad
          if (val >= 20 && val < 25) {
            vl = "linear-gradient(hsl(150, 80%, 50%), hsl(168, 80%, 50%))";
          }
          if (val >= 25 && val < 30) {
            vl = "linear-gradient(hsl(132, 80%, 50%), hsl(150, 80%, 50%))";
          }
          if (val >= 30 && val < 35) {
            vl = "linear-gradient(hsl(114, 80%, 50%), hsl(132, 80%, 50%))";
          }
          if (val >= 35 && val < 40) {
            vl = "linear-gradient(hsl(96, 80%, 50%), hsl(114, 80%, 50%))";
          }

          //balanced
          if (val >= 40 && val < 45) {
            vl = "linear-gradient(hsl(78, 80%, 50%), hsl(96, 80%, 50%))";
          }
          if (val >= 45 && val < 50) {
            vl = "linear-gradient(hsl(60, 80%, 50%), hsl(78, 80%, 50%))";
          }
          if (val >= 50 && val < 55) {
            vl = "linear-gradient(hsl(42, 80%, 50%), hsl(60, 80%, 50%))";
          }
          if (val >= 55 && val < 60) {
            vl = "linear-gradient(hsl(24, 80%, 50%), hsl(42, 80%, 50%))";
          }

          //happy
          if (val >= 60 && val < 65) {
            vl = "linear-gradient(hsl(24, 80%, 50%), hsl(42, 80%, 50%))";
          }
          if (val >= 65 && val < 70) {
            vl = "linear-gradient(hsl(6, 80%, 50%), hsl(24, 80%, 50%))";
          }
          if (val >= 70 && val < 75) {
            vl = "linear-gradient(hsl(342, 80%, 50%), hsl(360, 80%, 50%))";
          }
          if (val >= 75 && val < 80) {
            vl = "linear-gradient(hsl(324, 80%, 50%), hsl(342, 80%, 50%))";
          }

          //very happy
          if (val >= 80 && val < 85) {
            vl = "linear-gradient(hsl(306, 80%, 50%), hsl(324, 80%, 50%))";
          }
          if (val >= 85 && val < 90) {
            vl = "linear-gradient(hsl(288, 80%, 50%), hsl(306, 80%, 50%))";
          }
          if (val >= 90 && val < 100) {
            vl = "linear-gradient(hsl(270, 80%, 50%), hsl(288, 80%, 50%))";
          }
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

    function setEnergyMusicTaste(val) {
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


      return (<>
            <span> Valence describes musical positivity. To create your musiac, 
                valence aligns to the color wheel. 
                Listening to more negative music will produce a more blue-ish hue, 
                while the most positive music will produce a more purple hue. 
                The music you listen to tends to be <b>{setValenceMusicTaste(valence)}</b>.  </span>
        <Container>
                <Valence valence={valence} color={setValenceColor(valence)}>Valence</Valence>
        </Container>

        <span> The danceability  
                Listening to more negative music will produce a more blue-ish hue, 
                while the most positive music will produce a more purple hue. 
                The music you listen to tends to be <b>{setValenceMusicTaste(valence)}</b>.  </span>
        <Container>
                <Danceability dance={dance}>Danceability</Danceability>
        </Container>

        <span> Valence describes musical positivity. To create your musiac, 
                valence aligns to the color wheel. 
                Listening to more negative music will produce a more blue-ish hue, 
                while the most positive music will produce a more purple hue. 
                The music you listen to tends to be <b>{setValenceMusicTaste(valence)}</b>.  </span>
        <Container>
                <Energy energy={energy}>Energy</Energy>
        </Container>
      </>
      );
    }
  
    export default MusicStats;