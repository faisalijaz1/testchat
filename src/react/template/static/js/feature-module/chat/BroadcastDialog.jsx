import React, { useState, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './ProductService.jsx';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Rating } from 'primereact/rating';
import { Toolbar } from 'primereact/toolbar';
import { Tag } from 'primereact/tag';
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath.tsx";

// import './index.css'; 
// import './flags.css'; 
import 'primereact/resources/primereact.min.css';

// import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/themes/saga-blue/theme.css'; // Choose your preferred theme

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// Styles
const styles = {
    recipientsContainer: {
      border: '1px solid #ccc',
      padding: '10px',
      borderRadius: '5px',
      minHeight: '50px',
      maxHeight: '100px',
      overflowY: 'auto',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
    },
    recipientTag: {
      display: 'inline-block',
      padding: '5px 10px',
      margin: '5px',
      backgroundColor: 'whitesmoke',
      borderRadius: '15px',
      border: '1px solid #ccc',
      fontSize: '14px',
    },
    removeButton: {
      marginLeft: '8px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: 'black',
      fontSize: '15px',
      fontWeight:'800'
    },
    input: {
      padding: '5px',
      fontSize: '14px',
      width: '200px',
      marginRight: '10px',
    },
    addButton: {
      padding: '5px 10px',
      fontSize: '14px',
      cursor: 'pointer',
    },
    textarea: {
      width: '100%',
      marginTop: '10px',
      padding: '10px',
      fontSize: '14px',
    },
  };
  
const RecipientTag = ({ recipient, onRemove }) => {
    return (
      <span style={styles.recipientTag}>
        {recipient}
        <button onClick={() => onRemove(recipient)} style={styles.removeButton}>
          &times;
        </button>
      </span>
    );
  };
  
  const RecipientsInput = ({ recipients, setRecipients, selectedProducts, setSelectedProducts, placeholder }) => {
    const handleRemoveRecipient = (recipient) => {
        // Remove the recipient from the recipients list
        const updatedRecipients = recipients.filter(r => r !== recipient);
        setRecipients(updatedRecipients);

        // Unselect the person in the DataTable
        const updatedSelectedProducts = selectedProducts.filter(product => product.name !== recipient);
        setSelectedProducts(updatedSelectedProducts);
    };

    return (
        <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            border: '1px solid #ccc', 
            padding: '5px', 
            minHeight: '40px', 
            alignItems: 'center',
            backgroundColor: '#fff' 
        }}>
            {recipients.length === 0 ? (
                <span style={{ color: '#999' }}>{placeholder}</span>
            ) : (
                recipients.map(recipient => (
                    <div key={recipient} style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        padding: '2px 5px', 
                        margin: '2px', 
                        border: '1px solid #ccc', 
                        borderRadius: '5px',
                        backgroundColor: '#f3f3f3'
                    }}>
                        <span>{recipient}</span>
                        <button 
                            onClick={() => handleRemoveRecipient(recipient)} 
                            style={{ 
                                marginLeft: '5px', 
                                cursor: 'pointer', 
                                border: 'none', 
                                backgroundColor: 'transparent' 
                            }}
                        >
                            &times;
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

  

const BroadcastDialog = ({  onSendMessage }) => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const buttonRef = useRef(null);
    const [recipientsText, setRecipientsText] = useState('');

    const [recipients, setRecipients] = useState([
      
      ]);
    
      const [newRecipient, setNewRecipient] = useState('');
    const [inputText, setInputText] = useState("");
    const emptyProduct = {
        id: null,
        name: '',
        image: null,
        department: '',
        email: '',
        phone: '',
        address: ''
    };
    // const [visible, setVisible] = useState(false);
    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    // const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const [showContent, setShowContent] = useState(false);
    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
        // if (!visible) {
        //     setSelectedProducts([]);
        //     setRecipientsText('');
        // }
    }, []);

    const handleAddRecipient = () => {
        if (newRecipient.trim() && !recipients.includes(newRecipient)) {
          setRecipients([...recipients, newRecipient.trim()]);
          setNewRecipient('');
        }
      }; 
      const representativesItemTemplate = (option) => {
        return (
            <div className="flex align-items-center gap-2">
                <img  src="../../../../assets/img/avatar/avatar-17.png" width="32" />
                <span>{option.name}</span>
            </div>
        );
    };  

    const header = (
        <div className="flex justify-content-between">
            <h4 className="m-0">Select Recepitents</h4>
            <span className="p-input-icon-left">
                <i className="pi pi-search" style={{ paddingLeft: '10px' }} />
                <InputText style={{ paddingLeft: '31px' }} type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search Keyword..." />
            </span>
        </div>
    );

    const handleSelectionChange = (e) => {
        const selectedItems = e.value; // Updated selection (after check/uncheck)
        const newSelection = selectedItems.filter(item => !selectedProducts.includes(item)); // Items that were newly checked
        const unselectedItems = selectedProducts.filter(item => !selectedItems.includes(item)); // Items that were unchecked
    
        setSelectedProducts(selectedItems); // Update selected products in state
    
        if (newSelection.length > 0) {
            // Add newly selected items to recipients
            updateRecipientsTextArea(newSelection);
        }
    
        if (unselectedItems.length > 0) {
            // Remove unchecked items from recipients
            const namesToRemove = unselectedItems.map(item => item.name);
            setRecipients(recipients.filter(recipient => !namesToRemove.includes(recipient)));
        }
    };
    
    const updateRecipientsTextArea = (selectedContacts) => {
        
        const newRecipients = selectedContacts
            .filter(contact => !recipients.includes(contact.name)) // Filter out already added recipients
            .map(contact => contact.name); // Map to just names
    
        // Update the recipients list by adding new recipients
        setRecipients([...recipients, ...newRecipients]);
    };
    

    const handleSendMessage = () => {
        onSendMessage(selectedProducts,inputText);
    };
    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault(); // Prevent default form submission behavior
          if (buttonRef.current) {
            buttonRef.current.click(); // Trigger button click event
          }
        }
      };

     
    

    return (
        // visible && (
            <div >
               
                <Toast ref={toast} />
                {/* <div className="card"> */}
                    {/* <Toolbar className="mb-4"  /> */}
                    <div className=" chat">
           <div className="chat-footerdlg">
              <form>
                <div className="smile-foot">
                  <div className="chat-action-btns">
                    <div className="chat-action-col">
                      <Link
                        className="action-circle"
                        to="#"
                        data-bs-toggle="dropdown"
                      >
                        <i className="bx bx-dots-vertical-rounded" />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link to="#" className="dropdown-item ">
                          <span>
                            <i className="bx bx-file" />
                          </span>
                          Document
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <span>
                            <i className="bx bx-camera" />
                          </span>
                          Camera
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <span>
                            <i className="bx bx-image" />
                          </span>
                          Gallery
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <span>
                            <i className="bx bx-volume-full" />
                          </span>
                          Audio
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <span>
                            <i className="bx bx-map" />
                          </span>
                          Location
                        </Link>
                        <Link to="#" className="dropdown-item">
                          <span>
                            <i className="bx bx-user-pin" />
                          </span>
                          Contact
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="smile-foot emoj-action-foot">
                  <Link to="#" className="action-circle">
                    <i className="bx bx-smile" onClick={() => setShowContent(!showContent)} />
                  </Link>
                  <div className="emoj-group-list-foot down-emoji-circle" style={{ display: showContent ? 'block' : 'none' }}>
                    <ul>
                      <li>
                        <Link to="#">
                          <ImageWithBasePath
                            src="/assets/img/icon/emoj-icon-01.svg"
                            alt="Icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/icon/emoj-icon-02.svg"
                            alt="Icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <ImageWithBasePath
                            src="/assets/img/icon/emoj-icon-03.svg"
                            alt="Icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <ImageWithBasePath
                            src="/assets/img/icon/emoj-icon-04.svg"
                            alt="Icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <ImageWithBasePath
                            src="/assets/img/icon/emoj-icon-05.svg"
                            alt="Icon"
                          />
                        </Link>
                      </li>
                      <li className="add-emoj">
                        <Link to="#">
                          <i className="feather-plus" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="smile-foot">
                  <Link to="#" className="action-circle">
                    <i className="bx bx-microphone-off" />
                  </Link>
                </div>
                <div className="replay-forms">
                  <div className="chats forward-chat-msg reply-div d-none">
                    <div className="contact-close_call text-end">
                      <Link to="#" className="close-replay">
                        <i className="bx bx-x" />
                      </Link>
                    </div>
                    <div className="chat-avatar">
                      <ImageWithBasePath
                        src="/assets/img/avatar/avatar-2.jpg"
                        className="rounded-circle dreams_chat"
                        alt="image"
                      />
                    </div>
                    <div className="chat-content">
                      <div className="chat-profile-name">
                        <h6>
                          Mark Villiams<span>8:16 PM</span>
                        </h6>
                        <div className="chat-action-btns ms-2">
                          <div className="chat-action-col">
                            <Link className="#" to="#" data-bs-toggle="dropdown">
                              <i className="bx bx-dots-horizontal-rounded" />
                            </Link>
                            <div className="dropdown-menu chat-drop-menu dropdown-menu-end">
                              <Link
                                to="#"
                                className="dropdown-item message-info-left"
                              >
                                <span>
                                  <i className="bx bx-info-circle" />
                                </span>
                                Message Info{" "}
                              </Link>
                              <Link to="#" className="dropdown-item reply-button">
                                <span>
                                  <i className="bx bx-share" />
                                </span>
                                Reply
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-smile" />
                                </span>
                                React
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#forward-message"
                              >
                                <span>
                                  <i className="bx bx-reply" />
                                </span>
                                Forward
                              </Link>
                              <Link to="#" className="dropdown-item">
                                <span>
                                  <i className="bx bx-star" />
                                </span>
                                Star Message
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#report-user"
                              >
                                <span>
                                  <i className="bx bx-dislike" />
                                </span>
                                Report
                              </Link>
                              <Link
                                to="#"
                                className="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete-message"
                              >
                                <span>
                                  <i className="bx bx-trash" />
                                </span>
                                Delete
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="message-content reply-content"></div>
                    </div>
                  </div>
         
                  <input
                    type="text" className="form-control chat_form"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleEnterPress}
                    placeholder="Type a message"
                  />
                </div>
                <div className="form-buttons">
                <button type="button" ref={buttonRef} className="btn send-btn" onClick={handleSendMessage}>
                    <i className="bx bx-paper-plane" />
                  </button>
                </div>
              </form>
            </div>
                </div>  
                {/* <textarea placeholder='Selected Recepitents will be Shown Here' style={{width:'100%'}} value={recipientsText} readOnly rows="2" cols="2" /> */}
                <div>
                <RecipientsInput 
    recipients={recipients} 
    setRecipients={setRecipients} 
    selectedProducts={selectedProducts}
    setSelectedProducts={setSelectedProducts}
    placeholder="No recipients selected yet"
 />
 </div> 
       {/* <div style={{ marginTop: '10px' }}>
        <input 
          type="text" 
          value={newRecipient}
          onChange={(e) => setNewRecipient(e.target.value)} 
          placeholder="Add a recipient" 
          style={styles.input}
        />
        <button onClick={handleAddRecipient} style={styles.addButton}>
          Add Recipient
        </button>
      </div>

      <textarea 
        placeholder="Type your message here" 
        style={styles.textarea} 
        rows="4" 
      />
    </div> */}
     
                    <DataTable
                        ref={dt}
                        value={products}
                        selection={selectedProducts}
                        stripedRows
                        dataKey="id"
                        paginator
                        rows={18}
                        onSelectionChange={handleSelectionChange} 
                        rowsPerPageOptions={[5, 10, 25]}
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter}
                        header={header}
                        className="p-datatable-custom"
                    >
                        <Column selectionMode="multiple" exportable={false}></Column>
                        {/* <Column field="name" header="Name" sortable style={{ minWidth: '12rem' }}></Column> */}
                        <Column header="Name" sortable  style={{ minWidth: '14rem' }}
                    body={representativesItemTemplate}  />     
                        {/* <Column header="Image" body={imageBodyTemplate}></Column> */}
                        {/* <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column> */}
                        <Column field="department" header="Department" sortable style={{ minWidth: '10rem' }}></Column>
                        <Column field="email" header="Email" sortable style={{ minWidth: '10rem' }}></Column>
                        <Column field="phone" header="Contact No#" sortable style={{ minWidth: '10rem' }}></Column>
                       
                       
                        {/* <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '10rem' }}></Column> */}
                        {/* <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '10rem' }}></Column> */}
                        {/* <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column> */}
                    </DataTable>
             
                {/* <button onClick={handleSendMessage} className="btn btn-primary">Send Broadcast</button>
                <button onClick={onClose} className="btn btn-secondary">Close</button> */}
            </div>
        // )
    );
};

export default BroadcastDialog;
