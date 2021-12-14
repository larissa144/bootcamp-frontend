import React, { useState } from 'react';
import {OngInfos, OngImgMidiaContainer, OngImgMidia, OngLi} from './styled';

function MidiaSocial({ img, user }) {
  return (
    <OngLi>
      <OngImgMidiaContainer>
        <OngImgMidia src={img} />
      </OngImgMidiaContainer>
      <span>{user}</span>
    </OngLi>
  )
}

export default MidiaSocial;