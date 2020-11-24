import React, { useEffect, useState } from "react";
import api from "../../services/api";
import {
  Container,
  Card,
  Col,
  Row,
  Form,
  Button,
  Modal,
} from "react-bootstrap";

import { FaTrashAlt } from "react-icons/fa";

import musiImage from "../../assets/music.jpg";
import "./style.css";

function Musics() {
  const [musics, setMusics] = useState([]);
  const [show, setShow] = useState(false);

  const [name, setName] = useState("");
  const [fileMusic, setFileMusic] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function loadMusics() {
    try {
      const response = await api.get("musics");
      setMusics(response.data);
    } catch {
      alert("Algo deu errado");
    }
  }

  function handlePlayMusic(id) {
    musics.map((music) => {
      if (id !== music.id) {
        handlePauseMusic(music.id);
      }
    });
    var audio = document.getElementById(id);
    audio.play();
  }
  function handlePauseMusic(id) {
    var audio = document.getElementById(id);
    audio.pause();
  }

  async function handleAddMusic(e) {
    e.preventDefault();

    const uploadData = new FormData();

    uploadData.append("name", name);
    uploadData.append("music", fileMusic);

    try {
      await api.post("musics/", uploadData);
      handleClose();
      loadMusics();
    } catch {
      alert("OOOOPS, algo deu errado :( ");
    }
  }

  async function handleDeleteMusic(id) {
    try {
      await api.delete(`musics/${id}`);
      loadMusics();
    } catch {
      alert("Algo deu errado.");
    }
  }

  useEffect(() => {
    loadMusics();
  }, []);

  return (
    <Container className="container">
      <Button
        style={{ justifyContent: "center" }}
        variant="outline-light"
        onClick={handleShow}
      >
        Adicionar musica
      </Button>

      <Row>
        {musics.map((music) => (
          <Col sm={12} md={6} lg={4}>
            <Card key={music.id} className="card">
              <Card.Img className="card-img" variant="top" src={musiImage} />
              <Card.Body>
                <Card.Title>
                  {music.name}
                  <FaTrashAlt
                    onClick={(e) => handleDeleteMusic(music.id)}
                    className="fa-trash"
                  />
                </Card.Title>

                <audio
                  id={music.id}
                  controls
                  style={{ width: "100%" }}
                  type="audio/ogg"
                  onPlay={(e) => handlePlayMusic(music.id)}
                  onPause={(e) => handlePauseMusic(music.id)}
                >
                  <source src={music.music} />
                  Your browser does not support the audio element.
                </audio>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar musica</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddMusic} encType="multipart/form-data">
            <Form.Group>
              <Form.Control
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome da Musica"
                type="text"
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.File
                id="music-file"
                onChange={(e) => setFileMusic(e.target.files[0])}
                label="Escolha uma musica"
                required
              />
            </Form.Group>
            <Button
              type="submit"
              variant="dark"
              style={{ width: 130, float: "right" }}
            >
              Salvar
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Musics;
