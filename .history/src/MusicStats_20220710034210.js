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
function MusicStats({audiodata}) {

    function random(min, max) {
        return Math.random() * (max - min) + min;
      };

    let valence = audiodata[4]*100;
    let energy = audiodata[1]*100;
    let dance = audiodata[0]*100;

    function setValenceColor(val) {
        let vl = 0;
        if (val >= 0 && val < 25) {
            vl = "linear-gradient(#d50000, #fd0202)";
          }
          if (val >= 25 && val < 50) {
            vl = "#linear-gradient(#d50000, #fd0202)";
          }
          if (val >= 50 && val < 75) {
            vl = "linear-gradient(#6aefff, #2cbcd3)"
            //vl = "#6aefff";
          }
          if (val >= 75 && val < 100) {
            vl = "linear-gradient(#53e5ff, #1be0ff)";
          }
        return vl;
    };


      return (<Container>
            <Valence valence={valence} color={setValenceColor(valence)}>Valence</Valence>
      </Container>);
    }
  
    export default MusicStats;