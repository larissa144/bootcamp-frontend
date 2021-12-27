import React, { useState, useEffect } from 'react';

function SocialMediaList( { socialMedias } ) {
    return (
        <ul>
            {
                socialMedias.map(item => (
                    <li>{JSON.stringify(item)}</li>
                ))
            }
        </ul>
    )
}

export default SocialMediaList