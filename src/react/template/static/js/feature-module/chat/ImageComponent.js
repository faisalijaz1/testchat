import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { FaFileWord, FaFilePdf, FaFileImage, FaFileAlt } from 'react-icons/fa'; 
import { BsFileEarmarkPdf } from "react-icons/bs";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
// Import pdfjs from react-pdf
import { pdfjs } from 'react-pdf';

// Set the worker path globally for pdfjs (this should be done outside the component)
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;


// pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const ImageComponent = ({ mediaId,isClient }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const [caption, setCaption] = useState('');
    const [mediaType, setMediaType] = useState('');
    const [fileName, setFileName] = useState('');
    const [thumbnail, setThumbnail] = useState(null); // PDF thumbnail
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        axios.get(`https://steadfast-benevolence-production.up.railway.app/whatsapp/media/${mediaId}`)
            .then((response) => {
                const { mediaType: mimeType, mediaData, caption, filename } = response.data;
                setImageSrc(`data:${mimeType};base64,${mediaData}`);
                setMediaType(mimeType);
                setCaption(caption || '');
                setFileName(filename || '');
                
                if (mimeType === 'application/pdf') {
                    generatePdfThumbnail(`data:${mimeType};base64,${mediaData}`);
                }
            })
            .catch((error) => {
                console.error('Error fetching media:', error);
            });
    }, [mediaId]);

    const generatePdfThumbnail = async (pdfDataUrl) => {
        try {
            // Ensure the worker is set before accessing pdfjs
            const pdf = await pdfjs.getDocument(pdfDataUrl).promise;
            const page = await pdf.getPage(1);
            const scale = 0.5;
            const viewport = page.getViewport({ scale });

            const canvas = document.createElement('canvas');
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            const context = canvas.getContext('2d');
            await page.render({ canvasContext: context, viewport }).promise;

            setThumbnail(canvas.toDataURL());
        } catch (error) {
            console.error('Error generating PDF thumbnail:', error);
        }
    };
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

    const handleOpenDialog = () => setDialogOpen(true);
    const handleCloseDialog = () => setDialogOpen(false);

    const renderMedia = () => {
        if (mediaType.startsWith('image/')) {
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
            return (
                <div>
                <div  style={{ textAlign: 'center', padding: '2px', border: isClient ? '4px solid #FDF9FF' : '4px solid whitesmoke', borderRadius: '8px',maxHeight:'200px',overflow:'hidden' }}>
                    {thumbnail ? (
                        <img src={thumbnail} alt="PDF thumbnail" style={{ width: '100%', borderRadius: '5px',maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    ) : (
                        <BsFileEarmarkPdf size={80} color="#D9534F" />
                    )}
                    </div>
                       <div  style={isClient ? {
                          backgroundColor: '#FDF9FF'
                       
                         
                        
                        } : {
                          backgroundColor: '#F5F5F5'
                         
                        }}
                        //  style={{  background:'#F5F5F5' }}
                         >
                       <div style={{  padding: '10px', display: 'flex', alignItems: 'center' }}>
                    
                    
                       {getFileIcon(fileName)}
               
                    <p style={{ color: 'black', margin: '10px 0' }}>{fileName || 'Document.pdf'}</p>
                    </div>
                    <Button label="Open" style={{color:'black',marginBottom:'18px',borderRadius:'7px',background:'white',height:'30px',width:'100px',marginLeft: isClient ? '30%' : '30%'}} severity="secondary" text raised onClick={handleOpenDialog}>
                        
                    </Button>
                    </div>
                    <Dialog visible={dialogOpen} style={{ width: '50vw', left: '5px' }} onHide={handleCloseDialog}  maximizable>
                        <iframe
                            src={imageSrc}
                            type="application/pdf"
                            title="PDF Document"
                            style={{ width: '100%', height: '500px', border: 'none' }}
                        />
                    </Dialog>
             
                </div>
            );
        } else {
            return (
                <a
                    href={imageSrc}
                    download={fileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'rgb(66, 66, 66)', display: 'flex', alignItems: 'center' }}
                >
                    {getFileIcon(fileName)}
                    <span style={{ textDecoration: 'underline', color: 'rgb(66, 66, 66)' }}>
                        {fileName || 'Download file'}
                    </span>
                </a>
            );
        }
    };

    return (
        // <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <div style={{  justifyContent: 'center', marginBottom: '10px' }}>
   
            {imageSrc ? renderMedia() : <p>Loading media...</p>}
            {caption && <p style={{ marginTop: '9px', color: '#555', textAlign: 'left' }}>{caption}</p>}
        </div>
    );
};

export default ImageComponent;
