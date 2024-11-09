import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ImageComponent = ({ mediaId }) => {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        // Fetch the Base64-encoded media data from the backend
        axios.get(`https://steadfast-benevolence-production.up.railway.app/whatsapp/media/${mediaId}`)
            .then((response) => {
                // Set imageSrc to include the media type and Base64 data
                setImageSrc(`data:${response.data.mediaType};base64,${response.data.mediaData}`);
            })
            .catch((error) => {
                console.error('Error fetching media:', error);
            });
    }, [mediaId]);

    return imageSrc ? <img src={imageSrc} alt="Media message" /> : null;
};

export default ImageComponent;
