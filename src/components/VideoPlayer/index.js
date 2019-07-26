import React from 'react';
import { View } from 'react-native';

import YouTubePlayer from 'react-native-youtube-sdk';

// import { Container } from './styles';

export default function VideoPlayer({ videoId }) {
  return (
    <View>
      <YouTubePlayer
        ref={ref => (this.youTubePlayer = ref)}
        videoId={videoId}
        autoPlay={true}
        fullscreen={false}
        showFullScreenButton={true}
        showSeekBar={true}
        showPlayPauseButton={true}
        startTime={5}
        style={{ width: '100%', height: 200 }}
        onReady={e => console.log('onReady', e.type)}
        onError={e => console.log('onError', e.error)}
        onChangeState={e => console.log('onChangeState', e.state)}
        onChangeFullscreen={e =>
          console.log('onChangeFullscreen', e.isFullscreen)
        }
      />
    </View>
  );
}
