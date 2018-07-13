import * as React from 'react';
import Modal from '../../src/components/Modal';
import Button from '../../src/components/Button';

export default class ModalTest extends React.PureComponent {
  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
  }

  closeModal = () => {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <Button onClick={this.showModal}>Show Modal</Button>
        <Modal
          title="Modal title"
          show={this.state.show}
          closeModal={this.closeModal}
          footer={(
            <div style={{ width: '100%', textAlign: 'right' }}>
              <Button onClick={this.closeModal}>close</Button>
              <Button color="link">Save changes</Button>
            </div>
          )}
        >
          Modal body text goes here.
        </Modal>
      </div>
    );
  }
}
