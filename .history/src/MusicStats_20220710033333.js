import React, { useState } from "react";
import styled from 'styled-components';

    const Container = styled.div`
    width: 30%; /* Full width */
    background-color: #ddd; /* Grey background */
    `;

    const Valence = styled.div`
        width: ${props => props.valence}%;
        background-color: ${props => props.color};
        padding-top: 2rem;
        padding-bottom: 2rem;
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
            vl = "#fd0202";
          }
          if (val >= 25 && val < 50) {
            vl = "#d3282c";
          }
          if (val >= 50 && val < 75) {
            vl = "#6aefff";
          }
          if (val >= 75 && val < 100) {
            vl = "#6aefff";
          }
        return vl;
    };


      return (<Container>
            <Valence valence={valence} color={setValenceColor(valence)}>Valence</Valence>
      </Container>);
    }
  
    export default MusicStats;