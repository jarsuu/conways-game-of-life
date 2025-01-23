import React from 'react'

interface ToolbarProps {
  onPlay: () => void;
  onPause: () => void;
  onStep: () => void;
  onReset: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onPlay, onPause, onStep, onReset}) => {
  return (
    <div>
      <button onClick={onPlay}>Play</button>
      <button onClick={onPause}>Pause</button>
      <button onClick={onStep}>Step</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default Toolbar