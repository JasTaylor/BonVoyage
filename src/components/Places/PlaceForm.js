import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const PlaceForm = ({ place, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="title">
      <Form.Label>PLACES</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter a title"
        value={place.title}
        onChange={handleChange}
        name="title"
        required
      />
    </Form.Group>

    <Form.Group controlId="text">
      <Form.Label>Description</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter an Description"
        value={place.text}
        onChange={handleChange}
        name="text"
        required
      />
    </Form.Group>
    <Form.Group controlId="city">
      <Form.Label>City</Form.Label>
      <Form.Control
        type="text"
        placeholder="City"
        value={place.city}
        onChange={handleChange}
        name="city"
        required
      />
    </Form.Group>
    <Form.Group controlId="country">
      <Form.Label>Country</Form.Label>
      <Form.Control
        type="text"
        placeholder="Country"
        value={place.country}
        onChange={handleChange}
        name="country"
        required
      />
    </Form.Group>
    <Form.Group controlId="file" encType="multipart/form-data">
      <Form.Label>{place._id ? place.url : 'PLACEPIC'}</Form.Label>
      <Form.Control
        type="file"
        name="file"
        onChange={handleChange}
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
)

export default PlaceForm
