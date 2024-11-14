import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { FaFileWord, FaFilePdf, FaFileImage, FaFileAlt } from 'react-icons/fa'; // Example icons for file types
// import { FaFilePdf } from 'react-icons/fa';


const ImageComponent = ({ mediaId }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const [caption, setCaption] = useState(''); // Add a state for the caption
    const [mediaType, setMediaType] = useState('');
   
    const [fileName, setFileName] = useState('');
    const [fileSize, setFileSize] = useState('');

    useEffect(() => {
        // Fetch the Base64-encoded media data from the backend
        axios.get(`https://steadfast-benevolence-production.up.railway.app/whatsapp/media/${mediaId}`)
            .then((response) => {
                // Set imageSrc to include the media type and Base64 data
            //     setImageSrc(`data:${response.data.mediaType};base64,${response.data.mediaData}`);
            //   // Set the caption if it exists in the response
            //   if (response.data.caption) {
            //     setCaption(response.data.caption);
            // }

            const { mediaType: mimeType, mediaData, caption, filename } = response.data;
            setImageSrc(`data:${mimeType};base64,${mediaData}`);
            setMediaType(mimeType);
            setCaption(caption || '');
            setFileName(filename || '');
            // setFileSize(size ? formatFileSize(size) : ''); // Format size if available
       
           
            })
            .catch((error) => {
                console.error('Error fetching media:', error);
            });
    }, [mediaId]);

     // Helper function to format file size in a readable way
//   const formatFileSize = (sizeInBytes) => {
//     if (sizeInBytes < 1024) return `${sizeInBytes} bytes`;
//     if (sizeInBytes < 1024 * 1024) return `${(sizeInBytes / 1024).toFixed(1)} KB`;
//     return `${(sizeInBytes / (1024 * 1024)).toFixed(1)} MB`;
//   };

    // Determine the icon based on the file type
    const getFileIcon = (fileName) => {
        const fileExtension = fileName.split('.').pop().toLowerCase();
        switch (fileExtension) {
            case 'pdf':
                return <FaFilePdf style={{ color: '#d9534f', marginRight: '5px' }} />;
            case 'doc':
            case 'docx':
                return <FaFileWord style={{ color: '#337ab7', marginRight: '5px' }} />;
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif':
                return <FaFileImage style={{ color: '#5bc0de', marginRight: '5px' }} />;
            default:
                return <FaFileAlt style={{ color: '#5a5a5a', marginRight: '5px' }} />;
            }
        };
const renderMedia = () => {
    if (mediaType.startsWith('image/')) {
      // Image handling
      return (
        <Zoom zoomMargin={40}>
          <img
            style={{ width: '300px', cursor: 'pointer' }}
            src={imageSrc}
            alt="Media message"
          />
        </Zoom>
      );
    } else if (mediaType === 'application/pdf') {
      // PDF handling
    //   return (
    //     <iframe
    //       src={imageSrc}
    //       type="application/pdf"
    //       title="PDF Document"
    //       style={{ width: '300px', height: '400px', border: 'none' }}
    //     />
    //   );

      // Render the PDF icon, file name, and Open button
      return (
        <div style={{ textAlign: 'center', padding: '10px', border: '1px solid #ccc', borderRadius: '8px', width: '300px' }}>
          <FaFilePdf size={50} color="#D9534F" /> {/* PDF Icon */}
          <p style={{ color: 'blue', margin: '10px 0', fontWeight: 'bold' }}>{fileName || 'Document.pdf'}</p>
          <button
            style={{
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
            onClick={() => window.open(imageSrc, '_blank')}
          >
            Open
          </button>
        </div>
      );
    } else {

         // For documents and other unsupported types, display a download link
      return (
        <a
        href={imageSrc}
        download={fileName}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', color: '#337ab7', display: 'flex', alignItems: 'center' }}
    >
        {getFileIcon(fileName)}
        <span style={{ textDecoration: 'underline', color: '#337ab7' }}>
            {fileName || 'Download file'}
        </span>
    </a>
      );
      // For unsupported types, display filename and size
    //   return (
    //     <div>
    //           <p>{fileName} </p>
          {/* <p>{fileName} ({mediaType})</p> */}
          {/* <p>Size: {fileSize}</p> */}


    //     </div>
    //   );
    }
  };

    return (
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>

{imageSrc ? renderMedia() : <p>Loading media...</p>}
{caption && <p style={{ marginTop: '5px', color: '#555',textAlign:'left' }}>{caption}</p>}


        {/* {imageSrc && (
            <Zoom zoomMargin={40}>
                <img
                    style={{ width: '300px', cursor: 'pointer' }}
                    src={imageSrc}
                    alt="Media message"
                />
            </Zoom>
        )}
        {caption && <p style={{ marginTop: '5px', color: '#555',textAlign:'left' }}>{caption}</p>} */}
    </div>
    );
};

export default ImageComponent;
