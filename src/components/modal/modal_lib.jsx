import React, { useState } from 'react'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'

import './modal.css'

export const ModalLiveDemoExample = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Показать модальное окно
      </CButton>

      <CModal
        className='modal-block'
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader>
          <CModalTitle id="LiveDemoExampleLabel">Модальное окно</CModalTitle>
        </CModalHeader>
        <CModalBody>Контент модального окна</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Закрыть
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
