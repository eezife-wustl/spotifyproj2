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
          if (val >= 55 && val < 60) {
            vl = "linear-gradient(hsl(24, 80%, 50%), hsl(42, 80%, 50%))";
          }
          if (val >= 60 && val < 65) {
            vl = "linear-gradient(hsl(338, 80%, 50%), hsl(360, 80%, 50%))";
          }
          if (val >= 65 && val < 70) {
            vl = "linear-gradient(hsl(320, 80%, 50%), hsl(338, 80%, 50%))";
          }
          if (val >= 70 && val < 75) {
            vl = "linear-gradient(hsl(302, 80%, 50%), hsl(320, 80%, 50%))";
          }
          if (val >= 75 && val < 80) {
            vl = "linear-gradient(hsl(284, 80%, 50%), hsl(302, 80%, 50%))";
          }
          if (val >= 80 && val < 85) {
            vl = "linear-gradient(hsl(266, 80%, 50%), hsl(284, 80%, 50%))";
          }
          if (val >= 85 && val < 90) {
            vl = "linear-gradient(hsl(248, 80%, 50%), hsl(266, 80%, 50%))";
          }
          if (val >= 90 && val < 100) {
            vl = "linear-gradient(hsl(245, 80%, 50%), hsl(248, 80%, 50%))";
          }
        return vl;
    };


      return (<Container>
            <h1>Happiness corresponds to the color wheel in the creation of the musiac. The most happy music will produce a more purple/pink color, while the saddest music will produce    </h1>
            <Valence valence={valence} color={setValenceColor(valence)}>Valence</Valence>
      </Container>);
    }
  
    export default MusicStats;