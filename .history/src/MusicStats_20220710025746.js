import React, { useState } from "react";
import styled from 'styled-components';

function MusicStats({audiodata}) {

    let valence = audiodata[4]*100;
    let energy = audiodata[1]*100;
    let dance = audiodata[0]*100;


      return (<Container>
            <Valence/>
      </Container>);
    }
  
    export default MusicStats;