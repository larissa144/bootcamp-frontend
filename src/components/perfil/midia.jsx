import React, { useState } from 'react';
import { OngImgMidiaContent, OngImgMidiaContainer, OngImgMidia, OngLi } from './styled';

function MidiaSocial({ img, user }) {
  return (
    <OngImgMidiaContent>
      <OngLi>
        <OngImgMidiaContainer>
          <OngImgMidia src={img} />
        </OngImgMidiaContainer>
        {/* <span>{user}</span> */}
      </OngLi>
    </OngImgMidiaContent>
  )
}

export default MidiaSocial;