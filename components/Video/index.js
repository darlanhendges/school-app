import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Container } from './styles';

export default function Video({ videoId }) {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  return (
    <Container>
      <YoutubePlayer
        height='100%'
        width='90%'
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
      />
    </Container>
  );
}
