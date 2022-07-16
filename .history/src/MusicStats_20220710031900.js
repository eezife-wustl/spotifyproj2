import React, { useState } from "react";
import styled from 'styled-components';

    const Container = styled.div`
    width: 30%; /* Full width */
    background-color: #ddd; /* Grey background */
    `;

    const Valence = styled.div`
        width: ${props => props.valence}%;
        background-color: #04AA6D;
    `;
function MusicStats({audiodata}) {

    function random(min, max) {
        return Math.random() * (max - min) + min;
      };

    let valence = audiodata[4]*100;
    let energy = audiodata[1]*100;
    let dance = audiodata[0]*100;

    function setValenceColor() {
        let vl = 0;
        if (valence >= 0 && valence < 0.05) {
            vl = "#fd0202";
          }
          if (valence >= 0.05 && valence < 0.10) {
            vl = "d3282c";
          }
          if (valence >= 0.10 && valence < 0.15) {
            vl = random(186, 204);
          }
          if (valence >= 0.15 && valence < 0.20) {
            vl = random(168, 186);
          }
          return vl;
    };


      return (<Container>
            <Valence valence={valence}>{valence}</Valence>
      </Container>);
    }
  
    export default MusicStats;