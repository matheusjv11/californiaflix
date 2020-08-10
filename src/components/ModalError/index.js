import React from 'react';
import Modal from 'react-modal';
import './modalerror.css';

function ModalError({isActivate, hook}) {
  return (
    <Modal isOpen={isActivate} className="ModalError" overlayClassName="OverlayError" onRequestClose={() => hook(false)}>
      <div className="ModalError-Div">
        <h2>Ação bloqueada</h2>
        <p>Para fim de deixar a aplicação consistente, a inserção de novos dados encontra-se bloqueada.</p>
        <button className="ModalError-Button" onClick={() => hook(false)}>Fechar</button>
      </div>
    </Modal>
  );
}

export default ModalError;
