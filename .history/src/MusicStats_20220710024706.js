import styled from 'styled-components;

function MusicStats({audiodata}) {

    let valence = audiodata[4];
    let energy = (audiodata[1]);
    let dance = audiodata[0];

    const Container = styled.div`
    width: 100%; /* Full width */
    background-color: #ddd; /* Grey background */
    `;
      return (<></>);
    }
  
    export default MusicStats;