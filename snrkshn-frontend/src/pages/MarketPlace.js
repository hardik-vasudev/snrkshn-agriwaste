import React, { useState } from 'react';
import './MarketPlace.css';

function MarketPlace() {
  const [items, setItems] = useState([
    {
      name: 'Wheat',
      quantity: '500',
      biddingPrice: '200',
      age: '6 months',
      location: 'Punjab',
      image: '/images/wheat-sample.jpeg'
    },
    {
      name: 'Rice',
      quantity: '300',
      biddingPrice: '150',
      age: '1 year',
      location: 'Haryana',
      image: '/images/rice-waste.jpg'
    },
    {
      name: 'Sugarcane',
      quantity: '200',
      biddingPrice: '2500',
      age: '8 months',
      location: 'Maharashtra',
      image: '/images/sugrcane-sample.jpeg'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    biddingPrice: '',
    age: '',
    location: '',
    image: null
  });

  const itemNames = [
    { name: 'Wheat', icon: '/icons/wheat.png' },
    { name: 'Rice', icon: '/icons/rice.png' },
    { name: 'Sugarcane', icon: '/icons/sugarcane.png' },
    { name: 'Manure', icon: '/icons/manure.png' },
    { name: 'Farm waste', icon: '/icons/farm-waste.png' }
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      image: name === 'image' ? files[0] : formData.image
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).every(field => field || field === formData.image)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setItems([...items, { ...formData, image: reader.result }]);
        setFormData({
          name: '',
          quantity: '',
          biddingPrice: '',
          age: '',
          location: '',
          image: null
        });
        setShowForm(false);
      };
      if (formData.image) {
        reader.readAsDataURL(formData.image);
      } else {
        setItems([...items, { ...formData, image: null }]);
        setFormData({
          name: '',
          quantity: '',
          biddingPrice: '',
          age: '',
          location: '',
          image: null
        });
        setShowForm(false);
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleViewImage = (imageSrc) => {
    setPreviewImage(imageSrc);
  };

  const handleClosePreview = () => {
    setPreviewImage(null);
  };

  const calculateTotalPrice = (quantity, pricePerKg) => {
    const quantityInKg = parseFloat(quantity);
    const price = parseFloat(pricePerKg);
    return (quantityInKg / 1000) * price;
  };

  return (
    <div className="marketplace">
      <h1>MarketPlace</h1>
      <button className="add-button" onClick={handleAddClick}>Add Item</button>
      {showForm && (
        <form className="item-form" onSubmit={handleSubmit}>
          <label>
            Name of the Item:
            <select
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            >
              <option value="">Select an item</option>
              {itemNames.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Quantity"
              required
            />
          </label>
          <label>
            Bidding Price:
            <input
              type="number"
              name="biddingPrice"
              value={formData.biddingPrice}
              onChange={handleChange}
              placeholder="Bidding Price"
              required
            />
          </label>
          <label>
            Age of Sample:
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age of Sample"
              required
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              required
            />
          </label>
          <label>
            Image:
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
      <div className="items-container">
        <h2>Ongoing Bids</h2>
        <div className="items-list">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div className="item-box" key={index}>
                <div className="item-header">
                  <img
                    src={itemNames.find(name => name.name === item.name)?.icon}
                    alt={item.name}
                    className="item-icon"
                  />
                  <h3>{item.name}</h3>
                </div>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                    onClick={() => handleViewImage(item.image)}
                  />
                )}
                <p>Quantity: {item.quantity} kg</p>
                <p>Bidding Price: ₹{parseFloat(item.biddingPrice).toFixed(2)} per 1000 kg</p>
                <p>Total Price: ₹{calculateTotalPrice(item.quantity, item.biddingPrice).toFixed(2)}</p>
                <p>Age of Sample: {item.age}</p>
                <p>Location: {item.location}</p>
                <div className="button-container">
                  <button className="view-button" onClick={() => handleViewImage(item.image)}>View</button>
                  <button className="bid-button">Bid Now</button>
                </div>
              </div>
            ))
          ) : (
            <p>No items available</p>
          )}
        </div>
      </div>
      {previewImage && (
        <div className="image-preview">
          <img
            src={previewImage}
            alt="Preview"
            className="preview-image"
          />
          <button className="close-preview" onClick={handleClosePreview}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default MarketPlace;
