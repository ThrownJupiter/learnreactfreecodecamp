import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import cashewImage from "../img/cashew.jpg";

function MainContent() {
  const [cashewShow, setCashewShow] = useState(false);
  return (
    <div>
      <br></br>
      <h2>
        <span>Dogs 🐶</span>
      </h2>
      <ul>
        <li>
          <Button>Tesla</Button>
        </li>
        <li>
          <Button>Ludo</Button>
        </li>
        <li>
          <Button variant="primary" onClick={() => setCashewShow(true)}>
            Cashew
          </Button>
        </li>
      </ul>
      <h2>
        <span>Ferrets 🐭</span>
      </h2>
      <ul>
        <li>Rocket</li>
        <li>Astra</li>
      </ul>
      <h2>
        <span>Sugar Gliders 🐿</span>
      </h2>
      <ul>
        <li>Oliver</li>
      </ul>
      <Modal
        size="sm"
        show={cashewShow}
        onHide={() => setCashewShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Little Boi Cashew 💙
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={cashewImage} fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MainContent;
