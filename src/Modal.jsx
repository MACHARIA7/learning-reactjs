import { React, useState } from "react";
import { Button, ButtonToolbar, Placeholder, Modal } from "rsuite";

import 'rsuite/dist/rsuite.min.css';

const SimpleModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="modal-container">
            <ButtonToolbar>
                <Button appearance="primary" color="green" onClick={handleOpen}>OPEN</Button>
            </ButtonToolbar>

            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>CONFIRM DELETE</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Placeholder.Paragraph></Placeholder.Paragraph>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button appearance="primary" color="green">Ok</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default SimpleModal;