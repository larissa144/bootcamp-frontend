import React, { useState, useEffect } from 'react';
import { SocialMediaListContainer, SocialMediaListItem } from './styled';
import SocialMediaItem from './SocialMediaItem';

function SocialMediaList( { socialMedias } ) {
    return (
        <SocialMediaListContainer>
            {
                socialMedias.map(data => (
                    <SocialMediaItem data={data} />
                ))
            }
        </SocialMediaListContainer>
    )
}

export default SocialMediaList;