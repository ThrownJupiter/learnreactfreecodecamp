import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import cashewImage from "../img/cashew.jpg";
import ludoImage from "../img/ludo.jpg";
import teslaImage from "../img/tesla.jpg";
import oliverImage from "../img/oliver.jpg";
import rocketImage from "../img/rocket.jpg";
import astraImage from "../img/astra.jpg";

function MainContent() {
  const [cashewShow, setCashewShow] = useState(false);
  const [ludoShow, setLudoShow] = useState(false);
  const [teslaShow, setTeslaShow] = useState(false);
  const [rocketShow, setRocketShow] = useState(false);
  const [astraShow, setAstraShow] = useState(false);
  const [oliverShow, setOliverShow] = useState(false);

  return (
    <div>
      <br></br>
      <h2>
        <span>Dogs 🐶</span>
      </h2>
      <ul>
        <li>
          <Button variant="primary" onClick={() => setTeslaShow(true)}>
            Tesla
          </Button>
        </li>
        <li>
          <Button variant="primary" onClick={() => setLudoShow(true)}>
            Ludo
          </Button>
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
        <li>
          <Button variant="primary" onClick={() => setRocketShow(true)}>
            Rocket
          </Button>
        </li>
        <li>
          <Button variant="primary" onClick={() => setAstraShow(true)}>
            Astra{" "}
          </Button>
        </li>
      </ul>
      <h2>
        <span>Sugar Gliders 🐿</span>
      </h2>
      <ul>
        <li>
          <Button variant="primary" onClick={() => setOliverShow(true)}>
            Oliver
          </Button>
        </li>
      </ul>
      <Modal
        size="lg"
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
      <Modal
        size="lg"
        show={ludoShow}
        onHide={() => setLudoShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Big Boi Ludo 💙
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={ludoImage} fluid />
        </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={teslaShow}
        onHide={() => setTeslaShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            BBY Girl Tesla 💜
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={teslaImage} fluid />
        </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={rocketShow}
        onHide={() => setRocketShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Bigg Boii Rocket 💙
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={rocketImage} fluid />
        </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={astraShow}
        onHide={() => setAstraShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Little Girl Astra 💜
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={astraImage} fluid />
        </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={oliverShow}
        onHide={() => setOliverShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Little Boi Oliver 💙
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={oliverImage} fluid />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MainContent;
