import * as React from 'react';
import Modal from '../../src/components/Modal';
import Button from '../../src/components/Button';
import { FiX } from 'react-icons/fi';

const CloseButton: React.CSSProperties = {
  position: 'absolute',
  padding: '0.75rem',
  top: 0,
  right: 0,
};

export default class ModalTest extends React.PureComponent {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  }

  closeModal = () => {
    this.setState({ show: false });
  }

  render() {
    const title = (
      <header style={{ padding: '0.75rem 0.325rem', textAlign: 'center' }}>
        <h3>Modal Title</h3>
        <a style={CloseButton} onClick={this.closeModal}><FiX /></a>
      </header>
    );
    const footer = (
      <footer style={{ width: '100%', textAlign: 'center', padding: '0.325rem' }}>
        <Button style={{ width: '40%' }} onClick={this.closeModal}>close</Button>
        <Button style={{ width: '40%' }} color="primary">Save changes</Button>
      </footer>
    );
    return (
      <div>
        <Button onClick={this.showModal}>Show Modal</Button>
        <Modal
          title={title}
          show={this.state.show}
          closeModal={this.closeModal}
          size={4}
          footer={footer}
          style={{ padding: '1rem' }}
          closeOnOverlay
        >
          Modal body text goes here.
        </Modal>
      </div>
    );
  }
}
