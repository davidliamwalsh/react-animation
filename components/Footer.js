import React from 'react'
import TrackVisibility from 'react-on-screen';

const ComponentToTrack = ({ isVisible }) => {
  const style = {
      background: isVisible ? 'red' : 'blue'
  };
  return <div style={style} className="footer">
    Hello
    </div>;
}

export default function Footer() {
  return (
     
      <TrackVisibility>
        <ComponentToTrack />
      </TrackVisibility>
     
  );
}
