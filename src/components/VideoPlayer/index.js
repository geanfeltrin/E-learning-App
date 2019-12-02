import React, { useRef, useEffect, useState, useCallback } from 'react';

import { View, Alert } from 'react-native';
import YouTubePlayer from 'react-native-youtube-sdk';

function randomNum(min, max) {
  const n = [];
  for (let i = 0; i < 3; i++) {
    n.push(Math.floor(Math.random() * max) + min);
  }
  return n;
}

export default function VideoPlayer({ videoId }) {
  const youTubePlayer = useRef('');
  const idInterval = useRef('');

  const [currentCheck, setCurrentCheck] = useState(false);
  const [check, setCheck] = useState(200);

  const [stateVideo, setStateVideo] = useState('');
  const [durationVideo, setDurationVideo] = useState('');
  const [randomTime, setRandomTime] = useState([]);

  async function getDuration() {
    const duration = await youTubePlayer.current.getVideoDuration();
    setDurationVideo(duration);

    const random = randomNum(100000, duration * 1000);
    const value = Array.from(random).sort((a, b) => a - b);

    setRandomTime(value);
  }

  const getTime = useCallback(async () => {
    const currentTime = await youTubePlayer.current.getCurrentTime();
    const v = String(currentTime);
    return v;
  }, []);

  const timeAlert = useCallback(() => {
    console.log(randomTime);
    idInterval.current = setTimeout(() => {
      youTubePlayer.current.pause();
      Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {
            text: 'Ask me later',
            onPress: () => console.log('Ask me later pressed'),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
      setCheck(check + 1);
    }, randomTime[check]);
  }, [randomTime, idInterval, check]);

  const timeAlertStop = useCallback(() => {
    clearTimeout(idInterval.current);
  }, []);

  useEffect(() => {
    if (stateVideo === 'PLAYING' && check <= 2) {
      timeAlert();
    }
    if (stateVideo === 'PAUSED') {
      timeAlertStop();
    }
  }, [check, stateVideo, timeAlert, timeAlertStop]);

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
