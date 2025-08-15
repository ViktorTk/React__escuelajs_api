// Modal.jsx
import './modal.css';

import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <button className='modal-close' onClick={onClose}>
          &times;
        </button>
        <div className='modal-body'>
          {children}
        </div>
        <button className='btn-modal-close-custom' onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;