import React, { useState, useRef } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import { Dialog } from 'primereact/dialog';
import 'primereact/resources/themes/saga-blue/theme.css'; // Choose your preferred theme

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

Modal.setAppElement('#root'); // For accessibility when using Modal

const ImageComponentSend = ({ setMessages, recipientPhoneNumber }) => {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [caption, setCaption] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mediaId, setMediaId] = useState('');
    const [mediaType, setMediaType] = useState('');
    // const [selectedContactPhone, setSelectedContactPhone] = useState(''); // Replace with actual contact data
    const [fileName, setFileName] = useState('');
    // Open modal on file selection
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                // Upload media file to the backend to get media ID
                const fileName = file.name; // Get the file name here
                console.log("File name:", fileName);
                const formData = new FormData();
                formData.append('file', file);
                // formData.append('fileName', fileName); // Add filename as a separate parameter
                
                const url = `https://steadfast-benevolence-production.up.railway.app/whatsapp/upload-media`;

                const response = await axios.post(url, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                });

                const mediaId1 = response.data.mediaId; // Assuming backend returns mediaId
                const mediaType1 = file.type;

                setMediaId(mediaId1);
                setMediaType(mediaType1);
                setFileName(fileName)
                // Preview image in modal
                const reader = new FileReader();
                reader.onload = () => {
                    setSelectedImage(reader.result); // Set image data for modal preview
                    setIsModalOpen(true); // Open modal
                };
                reader.readAsDataURL(file);
            } catch (error) {
                console.error('Error uploading media:', error);
            }
        }
    };
    const convertTimestampToGMTPlus5 = (unixTimestamp) => {
        // Convert the timestamp to milliseconds
        const date = new Date(unixTimestamp * 1000);

        // Convert to GMT+5 by adding 5 hours (5 * 60 * 60 * 1000 milliseconds)
        const gmtPlus5Date = new Date(date.getTime() + 5 * 60 * 60 * 1000);

        // Format the time to 12-hour format with AM/PM
        const formattedTime = date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });

        return formattedTime.toString();
    }
    // Send media message with caption
    const handleSendmediaMessage = async () => {
        try {
            const payload = {
                templateName: 'media_message',
                recipientPhoneNumber: recipientPhoneNumber,
                // parameter: mediaId ? mediaId : encodeURIComponent(caption), // Use media ID if available
                parameter: '',
                mediaId: mediaId, // Use media ID if available

                mediaType,
                caption,
                fileName
            };

            const url = `https://steadfast-benevolence-production.up.railway.app/api/whatsapp/send-template-mediamessage`;
            const response = await axios.post(url, payload);

            if (response.status === 200 && recipientPhoneNumber) {
                const messageId = response.data; // Extract message ID from response
                const newMessage = {
                    id: messageId,
                    text: caption.trim(),
                    mediaUrl: mediaId ? `${url}/media/${mediaId}` : '', // Set URL if media is present
                    mediaType,
                    mediaId,
                    isDelivered: false,
                    isRead: false,
                    status: "sent",
                    fromClient: false,
                    timestamp: convertTimestampToGMTPlus5(Date.now() / 1000),
                    recipientPhoneNumber: recipientPhoneNumber,
                };
                setMessages((prevMessages) => [...prevMessages, newMessage]);
            }

            setIsModalOpen(false); // Close modal after sending
            setSelectedImage(null); // Clear selected image
            setCaption('');         // Clear caption input
            setMediaId('');         // Clear media ID
            setMediaType('');       // Clear media type

        } catch (error) {
            console.error('Error sending media message:', error);
        }
    };
    const footerContent = (
        <div className=" chat">
                    <div className="chat-footerdlg">
                        <form>

                            <div className="replay-forms">
                                <input
                                    type="text" className="form-control chat_form"
                                    value={caption}
                                    onChange={(e) => setCaption(e.target.value)}
                                    // onKeyDown={handleEnterPress}
                                    placeholder="Add a caption (optional)"
                                />
                                {/* <textarea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Add a caption (optional)"
                    style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem', resize: 'none' }}
                   /> */}
                            </div>
                            {/* <button onClick={handleSendmediaMessage} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Send</button>
                            <button onClick={() => setIsModalOpen(false)} style={{ padding: '0.5rem 1rem', cursor: 'pointer', marginLeft: '1rem' }}>Cancel</button> */}
                            <div className="form-buttons">
                                <button type="button" className="btn send-btn" onClick={handleSendmediaMessage}>
                                    <i className="bx bx-paper-plane" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
    );
    return (

        <div >

            <Link to="#" className="dropdown-item" onClick={() => {
                if (fileInputRef.current) {
                    fileInputRef.current.click();
                }
            }}>
                <span>
                    <i className="bx bx-image" />
                </span>
                Gallery
            </Link>

            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileUpload}
            />






























            {/* Modal for media preview and caption input */}
            <Dialog header="Media Preview" visible={isModalOpen} footer={footerContent} maximizable style={{ width: '50vw', left: '5px' }} onHide={() => { if (!isModalOpen) return; setIsModalOpen(false); }}>

                {/* <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                contentLabel="Media Preview"
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        width: '80%',
                        maxWidth: '500px',
                    },
                }}
            > */}
                {/* <h2>Media Preview</h2> */}
                {selectedImage && <img src={selectedImage} alt="Selected" style={{ width: '100%', marginBottom: '1rem' }} />}
              

            </Dialog>

        </div>
    );
};

export default ImageComponentSend;
