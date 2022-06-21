import React from 'react';
import ImageGallery from 'react-image-gallery';
import './Product.css';

const images = [
  {
    original: 'https://trade-bid.ie/uploads/product/USW-S0BXS4Z9E4_03_XN0.png',
    thumbnail: 'https://trade-bid.ie/uploads/product/USW-S0BXS4Z9E4_03_XN0.png',
  },
  {
    original: 'https://trade-bid.ie/uploads/product/USW-S0BXS4Z9E4_10_0DU.png',
    thumbnail: 'https://trade-bid.ie/uploads/product/USW-S0BXS4Z9E4_10_0DU.png',
  }
];

const product = {
  "make": "Volkswagen",
  "year": "2020",
  "body_type": "Saloon",
  "engine": "Petrol",
  "doors": 4,
  "tax_expiry": "11/06/2022",
  "nct_expiry": "11/08/2022",
  "model": "Passat Comfortline 2.0 TDI ",
  "mileage": "258,002 KM",
  "transmission": "Manual",
  "seats": 4,
  "colour": "Silver",
  "registration": "161C6649",
  "model_light": "Passat",
  "item_bidding_type": "AS-IS"
}

const propertyLabel = {
  "make": "Make",
  "year": "Year",
  "body_type": "Body Type",
  "engine": "Engine",
  "doors": "Doors",
  "tax_expiry": "Tax Expiry",
  "nct_expiry": "NTC expiry",
  "model": "Model",
  "mileage": "Mileage",
  "transmission": "Transmission",
  "seats": "Seats",
  "colour": "Colour",
  "registration": "Registration"
}

const properties = ["make", "year", "body_type", "engine", "doors", "tax_expiry", "nct_expiry", "model", "mileage", "transmission", "seats", "colour", "registration"]



function Product() {
  return (
    <div className='flex product-wrapper'>
      <div className="images">
        <ImageGallery items={images} />
      </div>
      <div className="data">
        <div >
          <div className='title-wrapper'>
            <div className='title'>
              {product.make}
              &nbsp;
              {product.model_light}
            </div>
            <div className='subtitle flex flex-center'>
              <div>{product.model}</div>
              <div className='pill bidding-type'>{product.item_bidding_type}</div>
            </div>
          </div>
          <div className='properties'>
            {
              properties.map((property) => (
                <div className='property'>
                  <div className='label'>{propertyLabel[property]}</div>
                  <div className='value'>{product[property]}</div>
                </div>))
            }
          </div>
        </div>
      </div>
    </div>
  );
}


export default Product;