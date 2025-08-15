'use client';

import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import { responseApi } from './response_API/response_api';

// import { ModalLiveDemoExample } from './components/modal/modal_lib';
import Modal from './components/modal/modal';

import Slider from "react-slick";

function App() {
  const [products, setProducts] = useState([]);
  const [isload, setLoaded] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalContent, setModalContent] = useState({});

  // console.log(1);

  useEffect(() => {
    responseApi('products').then((data) => {
      setProducts(data);
      setLoaded(true);
    });
  }, []);

  // console.log(2);


  function logIdProduct(props) {
    // console.log(props.title);
    // console.log(props.price);
    // console.log(props.images);
    console.log(props);
    
  }


  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
<>

    <div className='Modal_block'>

      <button onClick={() => setIsModalOpen(true)}>
        Открыть модальное окно
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {!isload ?
        <div className='loader-box'>
          <div className='loader'></div>
        </div> :
        <>
          <h2>{isModalContent.title}</h2>
          <p>{isModalContent.price} $</p>



<Slider {...settings}>

            {!!isModalContent.images ? isModalContent.images.map((img => (
              <div>
              <img className='img-in-modal'
            src={img}
            alt={isModalContent.title} />
            </div>
            ))) : 'qwe'}

    </Slider>



          {/* <div>
            {!!isModalContent.images ? isModalContent.images.map((img => (
              <img className='img-in-modal'
            src={img}
            alt={isModalContent.title} />
            ))) : 'qwe'}

            <img className='img-in-modal'
            src={!!isModalContent.images ? isModalContent.images[1] : ''}
            alt={isModalContent.title} />
          </div> */}
            
          {/* <img className='img-in-modal'
            src={!!isModalContent.images ? isModalContent.images[1] : ''}
            alt={isModalContent.title} /> */}
          
        </>
        }
      </Modal>
    </div>

    <div className='App'>

      {!isload ?
      <div className='loader-box'>
        <div className='loader'></div>
      </div> :
        <div className='grid-card'>
        {products.map((product) => (
          <div key={product.id} className='card' onClick={() => {
              logIdProduct(product);
              setModalContent(product);
              setIsModalOpen(true);
            }}>
            <h3>{product.title}</h3>
            <p>{product.price} $</p>
            <img src={product.images[0]} alt={product.title} width='100' />
          </div>
        ))}
      </div>
      }
    </div>
</>
  );


}


// console.log(3);

export default App;