import React, { useState } from "react";
import Art from './Art';
import MusicStats from './MusicStats';
import './submit.css';

function Submit(props) {
    // Declare a new state variable, which we'll call "count"
    const [submitted, notSubmitted] = useState("");
    const status = new URLSearchParams(window.location.search).get("status")
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
   // const [audio, setAudio] = useState([]);
    let trackIDS = ""
    let audio = [];
    const [sound, setSound] = useState([]);
    const [parsedData, setData] = useState([]);
    let danceability;
    let energy;
    let acousticness;
    let valence;
    let tempo;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //fetch the top tracks
        //get the response as a json object
        //testing using ready-made playlist (for debugging purposes)
        // console.log("test1")
        fetch('/playlisttracks/?playlist=37i9dQZF1DXaXB8fQg7xif')
        .then(function(tracksResponse) {
          console.log("test2")
          tracksResponse = tracksResponse.json();
          //console.log(tracksResponse);
          return tracksResponse
        })
        .then(function(parseTracks) {
          //console.log(parseTracks.tracks[0].track.id);
          parseTracks.tracks.map((track, index) => (
            trackIDS = trackIDS + "tracks=" + track.track.id + '&'
            //console.log(track.track.id)
            ))
            trackIDS = trackIDS.substring(0, trackIDS.length-1)
            return trackIDS
        })
        .then(
            function(needtrackdata) {
              return fetch('/trackdata/?' + needtrackdata)
            }
          ).then(function(audiodata) {
              audiodata = audiodata.json();
              console.log(audiodata)
              return audiodata;
          },
          function(error) {
            setError(error);
          }
          ).then(function(useaudiodata) {
            audio = useaudiodata.audioFeatures;
            //console.log(audio);
            setSound(sound => [ ...sound, ...audioData(audio)]);
            // audioData(sound)
            
            //console.log(sound[0]);
            setIsLoaded(true);
            //console.log(useaudiodata.audioFeatures[0].danceability);
          });
        console.log("test1")

        //login 
        // fetch('/usertoptracks')
        // .then(function(tracksResponse) {
        //   console.log("test2")
        //   tracksResponse = tracksResponse.json();
        //   return tracksResponse
        // })
        // .then(function(parseTracks) {
        //   parseTracks.topTracks.map((track, index) => (
        //     trackIDS = trackIDS + "tracks=" + track.id + '&'
        //     //console.log(track.id)
        //     ))
        //     trackIDS = trackIDS.substring(0, trackIDS.length-1)
        //     return trackIDS
        // })
        // .then(
        //     function(needtrackdata) {
        //       return fetch('/trackdata/?' + needtrackdata)
        //     }
        //   ).then(function(audiodata) {
        //       audiodata = audiodata.json();
        //       console.log(audiodata)
        //       return audiodata;
        //   },
        //   function(error) {
        //     setError(error);
        //   }
        //   ).then(function(useaudiodata) {
        //     audio = useaudiodata.audioFeatures;
        //     //console.log(audio);
        //     setSound(sound => [ ...sound, ...audioData(audio)]);
        //     // audioData(sound)
            
        //     //console.log(sound[0]);
        //     setIsLoaded(true);
        //     //console.log(useaudiodata.audioFeatures[0].danceability);
        //   });
      };

      function audioData(data) {
        //danceability
        //energy
        //loudness
        //acousticness
        //valence
        //tempo
        //speechiness

        let audioData = [];
        let DB = 0;
        let EN = 0;
        let LOUD = 0;
        let AC = 0;
        let VAL = 0;
        let TEMP = 0;
        let SPE = 0;
        data.map((track, index) => (
          DB = DB + track.danceability,
          EN = EN + track.energy,
          LOUD = LOUD + track.loudness,
          AC = AC + track.acousticness,
          VAL = VAL + track.valence,
          TEMP = TEMP + track.tempo,
          SPE = SPE + track.speechiness
          //console.log(DB)
           ))
        audioData.push(DB/data.length) //0
        audioData.push(EN/data.length) //1
        audioData.push(LOUD/data.length) //2
        audioData.push(AC/data.length) //3
        audioData.push(VAL/data.length) //4
        audioData.push(TEMP/data.length) //5
        audioData.push(SPE/data.length) //6
        return audioData;
      }
      //https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
      const hideButton = () => {
        submitted(true);
        console.log("test");
      }

    return (
      <div className="main">
          {/* <a id="startButton" className="start" onClick={hideButton}>Start Here</a>  */}
          {status ?  
          <>
          <a id="startButton" className="start" href="http://localhost:3001/login" onClick={hideButton}>Login to Spotify</a>
          <form className="toAlignStuff" onSubmit={handleSubmit}>
           <input type="submit" value="Generate Musiac!" className="submitbutton"/>
          </form> 
          </>
          : 
          <a id="startButton" className="start" href="http://localhost:3001/login" onClick={hideButton}>Login to Spotify</a> }

          {/* {error} */}
          {/* {items.map((track, index) => (
              trackIDS = "tracks=" + track.id + '&'
           ))}
           {trackIDS = trackIDS.substring(0, trackIDS.length-1)} */}
           {/* {fetch('/trackdata/' + trackIDS)
                   .then(res => res.json())
                   .then(
                     (result) => {
                       setIsLoaded(true);
                       setAudio(result.audioFeatures);
                     },
                     (error) => {
                       setIsLoaded(true);
                       setError(error);
                     }
                     )
           } */}
          {/* <div > {items} </div> */}
          {/* {items.map((track, index) => (
               <div  key={track.id}>
                    <p>{track.id}</p> 
                </div>
            ))} */}
            <div className="toAlignStuff">
              <p>higher valence (happy) = more red, lower valence (sad) = more blue</p>
              <p>more danceability = higher base case = more triangles</p>
              <p>more energetic music = more chaotic triangles</p>
              <p>danceability: {isLoaded ? sound[0] : 'not calculated'}</p>
              <p>energy: {isLoaded ? sound[1] : 'not calculated'}</p>
              <p>loudness: {isLoaded ? sound[2] : 'not calculated'}</p>
              <p>acousticness: {isLoaded ? sound[3] : 'not calculated'}</p>
              <p>valence: {isLoaded ? sound[4] : 'not calculated'}</p>
              <p>tempo: {isLoaded ? sound[5] : 'not calculated'}</p>
            </div>
            <div>
              <div className="toAlignStuff">  {isLoaded ? <MusicStats audiodata={sound}/> : 'not calculated'}</div>
              <div className="toAlignStuff">{isLoaded ? <Art audiodata={sound}/> : 'not calculated'} </div> 
            </div>
      </div>
    );
  }

  export default Submit;