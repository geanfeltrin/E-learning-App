import React, { useRef, useEffect, useState, useCallback } from 'react';
import { View } from 'react-native';

import YouTubePlayer from 'react-native-youtube-sdk';

// import { Container } from './styles';

function randomNum(min, max) {
  let n = [];
  for (let i = 0; i < 3; i++) {
    n.push(Math.floor(Math.random() * max) + min);
  }
  return n;
}

export default function VideoPlayer({ videoId }) {
  const youTubePlayer = useRef('');

  const [currentCheck, setCurrentCheck] = useState(false);
  const [stateVideo, setStateVideo] = useState('');
  const [durationVideo, setDurationVideo] = useState('');
  const [randomTime, setRandomTime] = useState([]);

  async function getDuration() {
    const duration = await youTubePlayer.current.getVideoDuration();
    setDurationVideo(duration);
    const random = randomNum(1, 10);
    const v = Array.from(random).sort((a, b) => a - b);

    setRandomTime(v);
  }

  const getTime = useCallback(async () => {
    const currentTime = await youTubePlayer.current.getCurrentTime();

    if (String(currentTime) === randomTime[0]) {
      console.log()
    }
  }



  useEffect(() => {

  }, []);

  return (
    <View>
      <YouTubePlayer
        ref={youTubePlayer}
        videoId={videoId}
        autoPlay={false}
        fullscreen={false}
        showFullScreenButton
        showSeekBar
        showPlayPauseButton
        startTime={5}
        style={{ width: '100%', height: 200 }}
        onReady={e => console.log('onReady', e.type)}
        onError={e => console.log('onError', e.error)}
        onChangeState={e => {
          if (currentCheck === false && e.state === 'PLAYING') {
            getDuration();
            console.log('foi');
            setCurrentCheck(true);
          }
          setStateVideo(e.state);
        }}
        onChangeFullscreen={e =>
          console.log('onChangeFullscreen', e.isFullscreen)
        }
      />
    </View>
  );
}
