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
          if (val >= 0 && val < 0.05) {
            vl = random(222, 240);
          }
          if (val >= 0.05 && val < 0.10) {
            vl = random(204, 222);
          }
          if (val >= 0.10 && val < 0.15) {
            vl = random(186, 204);
          }
          if (val >= 0.15 && valence < 0.20) {
            vl = random(168, 186);
          }
          if (valence >= 0.20 && valence < 0.25) {
            vl = random(150, 168);
          }
          if (valence >= 0.25 && valence < 0.30) {
            vl = random(132, 150);
          }
          if (valence >= 0.30 && valence < 0.35) {
            vl = random(114, 132);
          }
          if (valence >= 0.35 && valence < 0.40) {
            vl = random(96, 114);
          }
          if (valence >= 0.40 && valence < 0.45) {
            vl = random(78, 96);
          }
          if (valence >= 0.45 && valence < 0.50) {
            vl = random(60, 78);
          }
          if (valence >= 0.50 && valence < 0.55) {
            vl = random(42, 60);
          }
          if (valence >= 0.55 && valence < 0.60) {
            vl = random(24, 42);
          }
          if (valence >= 0.60 && valence < 0.65) {
            vl = random(338, 360);
          }
          if (valence >= 0.65 && valence < 0.70) {
            vl = random(320, 338);
          }
          if (valence >= 0.70 && valence < 0.75) {
            vl = random(302, 320);
          }
          if (valence >= 0.75 && valence < 0.80) {
            vl = random(284, 302);
          }
          if (valence >= 0.80 && valence < 0.85) {
            vl = random(266, 284);
          }
          if (valence >= 0.85 && valence < 0.90) {
            vl = random(248, 266);
          }
          if (valence >= 0.90 && valence < 1) {
            vl = random(245, 248);
          }
        return vl;
    };


      return (<Container>
            <Valence valence={valence} color={setValenceColor(valence)}>Valence</Valence>
      </Container>);
    }
  
    export default MusicStats;