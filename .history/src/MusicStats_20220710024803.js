import React, { useState } from "react";
import styled from 'styled-components';

function MusicStats({audiodata}) {

    let valence = audiodata[4];
    let energy = (audiodata[1]);
    let dance = audiodata[0];

    const Container = styled.div`
    width: 100%; /* Full width */
    background-color: #ddd; /* Grey background */
    `;

    const Valence = styled.div`
        
    `
      return (<></>);
    }
  
    export default MusicStats;