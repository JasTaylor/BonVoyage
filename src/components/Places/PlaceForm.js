import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const BookForm = ({ place, handleChange, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId="title">
      <Form.Label>Book Title</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter a title"
        value={place.title}
        onChange={handleChange}
        name="title"
        required
      />
    </Form.Group>

    <Form.Group controlId="author">
      <Form.Label>Author</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter an Author"
        value={place.author}
        onChange={handleChange}
        name="author"
        required
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
)

export default BookForm
