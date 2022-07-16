import React, { useState } from "react";
import styled from 'styled-components';

    const Container = styled.div`
    width: 30%; /* Full width */
    background-color: #ddd; /* Grey background */
    `;

    const Valence = styled.div`
        width: ${props => props.valence}%;
        background-color: ${props => props.color};
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
        if (val >= 0 && val < 0.25) {
            vl = "#fd0202";
          }
          if (val >= 0.25 && valence < 0.5) {
            vl = "#d3282c";
          }
          if (valence >= 0.50 && valence < 0.75) {
            vl = "#747c8b";
          }
          if (valence >= 0.75 && valence < 1) {
            vl = "2cbcd3";
          }
        return vl;
    };


      return (<Container>
            <Valence valence={valence} color={setValenceColor(valence)}>{setValenceColor(valence)}</Valence>
      </Container>);
    }
  
    export default MusicStats;