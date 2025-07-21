import React, { useState } from 'react';
import './Homecss.css';
import makhana_pool from '../assets/Phool-Makhana.jpg';
import makhana_1 from '../assets/makhana.jpg';
import makhana_2 from '../assets/makhana-2.webp';
import makhana_3 from '../assets/makhana-3.jpg';
import makhana_4 from '../assets/Phool-Makhana.jpg';
import fruits from '../assets/fruits.jpg';
import vegitables from '../assets/vegitables.jpg';

import { Modal, Button } from 'react-bootstrap';


const products = [
  {
    id: 2,
    name: 'Fresh Fruits',
    image: fruits,
    description: 'Nature’s Sweetest Gift – Fresh Fruits',
  },
  {
    id: 1,
    name: 'Makhana',
    image: makhana_3,
    description: 'Crunch Made Healthy – Premium Roasted Makhana.',
  },
  {
    id: 3,
    name: 'Vegitable',
    image: vegitables,
    description: 'Farm Fresh Goodness – Daily Picked Veggies',
  },

];

const Product = () => {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEnquiryModal, setshowEnquiryModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleShowEnquery = () => {
    setshowEnquiryModal(true);
  }

  const handleCloseEnquiry = () => setshowEnquiryModal(false);

  // for send data on whatsapp
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const phone = '+918467917533';
    const text = `Product: ${selectedProduct?.title}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const WaLink = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(WaLink, "_blank");
    console.log("data is passed to WhatsApp");
  };

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  }


  return (
    <>
      <section className="py-5 product-section bg-product">
        <div className="container ">
          <h2 className="text-center fw-bold">Our Products</h2>
          <p className='text-center py-3'>Discover the perfect blend of taste and nutrition with our Premium Roasted Makhana. Made from handpicked lotus seeds, these light and crunchy fox nuts are roasted to perfection without any added preservatives or artificial flavors. </p>
          <div className="row justify-content-center align-items-center g-4">
            {products.map((product, index) => (
              <div className="col-md-4 text-center" key={product.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card product-card h-100 shadow-sm border-0">
                  <img src={product.image} className="card-img-top" alt={product.name} height={'200px'} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-muted">{product.description}</p>
                    <div className='gap-2'>
                      <button className="btn btn-outline-primary me-3 mt-2" onClick={() => handleShowDetails(product)}>Details</button>
                      <button className="btn btn-outline-primary me-2 mt-2" onClick={() => handleShowEnquery(product)}>Enquery</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Modal
        show={!!selectedProduct} onHide={() => setSelectedProduct(null)} centered size="md"
      >
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>

        {selectedProduct && (
          <Modal.Body>
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6 text-center">
                <img src={selectedProduct.image} alt={selectedProduct.name} height="250px" width="250px" className="img-fluid border-rounded" />
              </div>
              <div className="col-md-6">
                <h5>{selectedProduct.name}</h5>
                <p>{selectedProduct.description}</p>
              </div>
            </div>
          </Modal.Body>
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setSelectedProduct(null)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* This is for enquery modal */}
      <Modal show={showEnquiryModal} onHide={handleCloseEnquiry} size="lg" centered>
        <Modal.Body className="p-4">
          <h4 className="text-center mb-4 text-primary fw-bold">Send Us Your Enquiry</h4>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-semibold">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-semibold">Message</label>
              <textarea
                className="form-control" id="message" rows="4" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>

            <div className="text-center">
              <Button variant="success" type='submit'>
                Send via WhatsApp
              </Button>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEnquiry}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Product;
