import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ImageComponent = ({ mediaId }) => {
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        // Fetch the Base64-encoded media data from the backend
        // Fetch the Base64-encoded media data from the backend
        axios.get(`https://steadfast-benevolence-production.up.railway.app/whatsapp/media/${mediaId}`)
            .then((response) => {
                // Decode the nested JSON from the Base64 string
                const decodedData = JSON.parse(atob(response.data.mediaData));

                // Check if there's a direct URL or a media data field
                if (decodedData.url) {
                    // If there's a URL, use it as the image source
                    setImageSrc(decodedData.url);
                } else if (decodedData.mediaData) {
                    // If there's Base64 media data, use it with the media type
                    setImageSrc(`data:${response.data.mediaType};base64,${decodedData.mediaData}`);
                }
            })
            .catch((error) => {
                console.error('Error fetching media:', error);
            });
    }, [mediaId]);

    return imageSrc ? <img src={imageSrc} alt="Media message" /> : null;
};

export default ImageComponent;
