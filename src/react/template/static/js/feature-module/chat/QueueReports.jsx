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
import { Dropdown } from 'primereact/dropdown';
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
    fontWeight: '800'
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
        <span style={{ color: '#999', paddingLeft: '10px' }}>{placeholder}</span>
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



const QueueReports = ({ }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const buttonRef = useRef(null);
  const [recipientsText, setRecipientsText] = useState('');
  const [statuses] = useState(['VERIFIED', 'UNDER-PROCESS']);
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
    ProductService.getreports().then((data) => setProducts(data));
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
        <img src="../../../../assets/img/avatar/avatar-17.png" width="32" />
        <span>{option.name}</span>
      </div>
    );
  };

  const header = (
    <div className="flex justify-content-between">
      <h4 className="m-0">Select Recepitents</h4>
      <span className="p-input-icon-left">
        <i className="pi pi-search" style={{ paddingLeft: '10px' }} />
        <InputText style={{ paddingLeft: '46px' }} type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search Keyword..." />
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



  const handleEnterPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission behavior
      if (buttonRef.current) {
        buttonRef.current.click(); // Trigger button click event
      }
    }
  };
  const getSeverity = (value) => {
    switch (value) {
        case 'VERIFIED':
            return 'success';

        case 'UNDER-PROCESS':
            return 'warning';

      

        default:
            return null;
    }
};

const onRowEditComplete = (e) => {
    let _products = [...products];
    let { newData, index } = e;

    _products[index] = newData;
    ProductService.updatereports(newData.recipientPhoneNumber,newData.status).then(() => console.log("success"));
    setProducts(_products);
};

const textEditor = (options) => {
    return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
};

const statusEditor = (options) => {
    return (
        <Dropdown
            value={options.value}
            options={statuses}
            onChange={(e) => options.editorCallback(e.value)}
            placeholder="Select a Status"
            itemTemplate={(option) => {
                return <Tag value={option} severity={getSeverity(option)}></Tag>;
            }}
        />
    );
};



const statusBodyTemplate = (rowData) => {
    return <Tag value={rowData.status} severity={getSeverity(rowData.status)}></Tag>;
};



  return (
    // visible && (
    <div >

      <Toast ref={toast} />
      {/* <div className="card"> */}
      {/* <Toolbar className="mb-4"  /> */}
     
    

      <DataTable value={products} editMode="row" dataKey="id" onRowEditComplete={onRowEditComplete} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="id"  style={{ width: '0%',display:'none' }}></Column>
                <Column field="reportName" header="Test Name"  style={{ width: '20%' }}></Column>
                <Column field="recipientPhoneNumber" header="Contact Number" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                <Column field="googleDrivePath" header="Drive File ID"  style={{ width: '20%' }}></Column>
               
                <Column field="status" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
                {/* <Column field="price" header="Price" body={priceBodyTemplate} editor={(options) => priceEditor(options)} style={{ width: '20%' }}></Column> */}
                <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
            </DataTable>
      {/* <button onClick={handleSendMessage} className="btn btn-primary">Send Broadcast</button>
                <button onClick={onClose} className="btn btn-secondary">Close</button> */}
    </div>
    // )
  );
};

export default QueueReports;
