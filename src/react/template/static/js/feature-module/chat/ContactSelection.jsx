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
// import { Dialog } from 'primereact/dialog';
export default function ContactSelection() {
    const emptyProduct = {
        id: null,
        name: '',
        image: null,
        department: '',
        email: '',
        phone: '',
        address: ''
    };
    const [visible, setVisible] = useState(false);
    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const [showContent, setShowContent] = useState(false);
    useEffect(() => {
        ProductService.getProducts().then((data) => setProducts(data));
    }, []);

    const formatCurrency = (value) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    };

    const sendMessage = () => {
        console.log("Selected Products:", selectedProducts);
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    };

    const hideDialog = () => setProductDialog(false);
    const hideDeleteProductDialog = () => setDeleteProductDialog(false);
    const hideDeleteProductsDialog = () => setDeleteProductsDialog(false);

    const saveProduct = () => {
        setSubmitted(true);

        if (product.name.trim()) {
            let _products = [...products];
            let _product = { ...product };

            if (product.id) {
                const index = findIndexById(product.id);
                _products[index] = _product;
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                _product.id = createId();
                _product.image = 'product-placeholder.svg';
                _products.push(_product);
                toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            setProducts(_products);
            setProductDialog(false);
            setProduct(emptyProduct);
        }
    };

    const editProduct = (product) => {
        setProduct({ ...product });
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = () => {
        let _products = products.filter((val) => val.id !== product.id);
        setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    };

    const findIndexById = (id) => products.findIndex(product => product.id === id);

    const createId = () => {
        return Math.random().toString(36).substr(2, 9);
    };

    const exportCSV = () => dt.current.exportCSV();

    const confirmDeleteSelected = () => setDeleteProductsDialog(true);

    const deleteSelectedProducts = () => {
        let _products = products.filter((val) => !selectedProducts.includes(val));
        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
    };

    const onInputChange = (e, name) => {
        const val = e.target.value;
        setProduct((prevState) => ({ ...prevState, [name]: val }));
    };

    const onInputNumberChange = (e, name) => {
        const val = e.value || 0;
        setProduct((prevState) => ({ ...prevState, [name]: val }));
    };

    const leftToolbarTemplate = () => (
        <div className=" chat">
            <div className="chat-footer">
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

                            placeholder="Type a message"
                        />
                    </div>
                    <div className="form-buttons">
                        <button type="button" className="btn send-btn" >
                            <i className="bx bx-paper-plane" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

    const rightToolbarTemplate = () => <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />;

    const imageBodyTemplate = (rowData) => (
        <img src={`https://primefaces.org/cdn/primereact/images/product/${rowData.image}`} alt={rowData.image} className="product-image" />
    );

    const priceBodyTemplate = (rowData) => formatCurrency(rowData.price);

    const ratingBodyTemplate = (rowData) => <Rating value={rowData.rating} readOnly cancel={false} />;

    const statusBodyTemplate = (rowData) => (
        <Tag value={rowData.inventoryStatus} severity={getSeverity(rowData.inventoryStatus)} />
    );

    const actionBodyTemplate = (rowData) => (
        <div>
            <Button icon="pi pi-pencil" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} />
            <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} />
        </div>
    );

    const getSeverity = (status) => {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return null;
        }
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

    const productDialogFooter = (
        <div>
            <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
        </div>
    );

    const deleteProductDialogFooter = (
        <div>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
        </div>
    );

    const deleteProductsDialogFooter = (
        <div>
            <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
        </div>
    );

    return (
        <div>
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

                                placeholder="Type a message"
                            />
                        </div>
                        <div className="form-buttons">
                            <button type="button" className="btn send-btn" >
                                <i className="bx bx-paper-plane" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <DataTable
                ref={dt}
                value={products}
                selection={selectedProducts}
                onSelectionChange={(e) => setSelectedProducts(e.value)}
                dataKey="id"
                paginator
                rows={18}
                rowsPerPageOptions={[5, 10, 25]}
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                globalFilter={globalFilter}
                header={header}
                className="p-datatable-custom"
            >
                <Column selectionMode="multiple" exportable={false}></Column>
                <Column field="name" header="Name" sortable style={{ minWidth: '12rem' }}></Column>
                {/* <Column header="Image" body={imageBodyTemplate}></Column> */}
                {/* <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ minWidth: '8rem' }}></Column> */}
                <Column field="department" header="Department" sortable style={{ minWidth: '10rem' }}></Column>
                <Column field="email" header="Email" sortable style={{ minWidth: '10rem' }}></Column>
                <Column field="phone" header="Contact No#" sortable style={{ minWidth: '10rem' }}></Column>


                {/* <Column field="rating" header="Reviews" body={ratingBodyTemplate} sortable style={{ minWidth: '10rem' }}></Column> */}
                {/* <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} sortable style={{ minWidth: '10rem' }}></Column> */}
                {/* <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column> */}
            </DataTable>
            {/* </div> */}

            <Dialog visible={productDialog} style={{ width: '450px' }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                {product.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.image} className="product-image" />}
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <InputText id="name" value={product.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus className={classNames({ 'p-invalid': submitted && !product.name })} />
                    {submitted && !product.name && <small className="p-error">Name is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="description">Description</label>
                    <InputText id="description" value={product.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
                </div>
                <div className="field">
                    <label className="mb-3">Category</label>
                    <InputText id="category" value={product.category} onChange={(e) => onInputChange(e, 'category')} required className={classNames({ 'p-invalid': submitted && !product.category })} />
                    {submitted && !product.category && <small className="p-error">Category is required.</small>}
                </div>
                <div className="field">
                    <label htmlFor="price">Price</label>
                    <InputText id="price" value={product.price} onChange={(e) => onInputNumberChange(e, 'price')} required className={classNames({ 'p-invalid': submitted && !product.price })} />
                    {submitted && !product.price && <small className="p-error">Price is required.</small>}
                </div>
            </Dialog>

            <Dialog visible={deleteProductDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && (
                        <span>
                            Are you sure you want to delete <b>{product.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog visible={deleteProductsDialog} style={{ width: '450px' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {product && <span>Are you sure you want to delete the selected products?</span>}
                </div>
            </Dialog>
        </div>
    );
}
