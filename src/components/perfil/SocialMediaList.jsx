import React from 'react';
import { SocialMediaListContainer } from './styled';
import SocialMediaItem from './SocialMediaItem';


function SocialMediaList( { socialMedias } ) {
    return (
        <SocialMediaListContainer>
            {
                socialMedias.map(data => {
                    return (
                        <SocialMediaItem key={data.id} data={data} />
                    )
                })
            }
        </SocialMediaListContainer>
    )
}

export default SocialMediaList;