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
          if (val >= 40 && val < 45) {
            vl = "linear-gradient(hsl(78, 80%, 50%), hsl(96, 80%, 50%))";
          }
          if (val >= 45 && val < 50) {
            vl = "linear-gradient(hsl(60, 80%, 50%), hsl(78, 80%, 50%))";
          }
          if (val >= 50 && val < 55) {
            vl = "linear-gradient(hsl(42, 80%, 50%), hsl(60, 80%, 50%))";
          }
          if (val >= 0.55 && val < 0.60) {
            vl = random(24, 42);
          }
          if (val >= 0.60 && val < 0.65) {
            vl = random(338, 360);
          }
          if (val >= 0.65 && val < 0.70) {
            vl = random(320, 338);
          }
          if (val >= 0.70 && val < 0.75) {
            vl = random(302, 320);
          }
          if (val >= 0.75 && val < 0.80) {
            vl = random(284, 302);
          }
          if (val >= 0.80 && val < 0.85) {
            vl = random(266, 284);
          }
          if (val >= 0.85 && val < 0.90) {
            vl = random(248, 266);
          }
          if (val >= 0.90 && val < 1) {
            vl = random(245, 248);
          }
        return vl;
    };


      return (<Container>
            <Valence valence={valence} color={setValenceColor(valence)}>Valence</Valence>
      </Container>);
    }
  
    export default MusicStats;