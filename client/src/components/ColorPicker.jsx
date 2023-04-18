import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
          "#417505",
          "#80C670",
          "#2CCCE4",
          "#7098DA",
          "#726DE8",
          "#EFBD48",
          "#F17F0A",
          "#FF8A65",
          "#FF96AD",
          "#512314",
          "#666666",
          "#353934"
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker