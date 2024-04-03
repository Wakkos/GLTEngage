import { useEffect } from 'react';
import {X} from "../SvgComponents"
import './Modal.scss';

const Modal = ({ show, children, onClose }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content" onClick={e => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className='modal__close btn__icon'>
          <X aria-hidden="true" />
          <span className="visually-hidden">Close Modal</span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
