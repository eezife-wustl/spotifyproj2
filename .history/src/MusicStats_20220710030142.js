import React, { useState } from "react";
import styled from 'styled-components';

    const Container = styled.div`
    width: 100%; /* Full width */
    background-color: #ddd; /* Grey background */
    `;

    const Valence = styled.div`
        width: ${props => props.valence}%;
        background-color: #04AA6D;
    `;
function MusicStats({audiodata}) {

    let valence = audiodata[4]*100;
    let energy = audiodata[1]*100;
    let dance = audiodata[0]*100;


      return (<Container>
            <Valence valence={valence}></Valence>
            <p>{valence}</p>
      </Container>);
    }
  
    export default MusicStats;