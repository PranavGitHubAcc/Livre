import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import '../style/Journal.css';
import MapIcon from '@mui/icons-material/Map';

function Journal() {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [isPublic, setIsPublic] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAddEntry = (e) => {
    e.preventDefault();
    const newEntry = { title, location, description, images, isPublic };
    setEntries([...entries, newEntry]);
    setTitle('');
    setLocation('');
    setDescription('');
    setImages([]);
    setIsPublic(false);
    setShowModal(false);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  return (
    <div className="journal">
      <div className="title">
        <h2><strong>JOURNAL</strong></h2>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Add Entry
        </Button>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} >
        <Modal.Header closeButton className='form'>
          <Modal.Title>New Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body className='form'>
          <Form onSubmit={handleAddEntry}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Images</Form.Label>
              <Form.Control type="file" multiple onChange={handleImageUpload} />
            </Form.Group>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Public"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Entry
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <div className="entries">
        {entries.map((entry, index) => (
          <div key={index} className="entry">
            <div className='left'>
              <h3>{entry.title}</h3>
              <p><MapIcon /> {entry.location}</p>
              <p>{entry.description}</p>
           
              <p><strong>Public:</strong> {entry.isPublic ? 'Yes' : 'No'}</p>
            </div>
            <div className='right'>
              {entry.images.length > 0 && (
                <div className="images">
                  {entry.images.map((image, imgIndex) => (
                    <img key={imgIndex} src={URL.createObjectURL(image)} alt={`Entry ${index} - ${imgIndex}`} />
                  ))}
            </div>
          
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Journal;
