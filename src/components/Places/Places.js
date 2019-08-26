import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import ListGroup from 'react-bootstrap/ListGroup'
import Spinner from 'react-bootstrap/Spinner'

class Places extends Component {
  constructor () {
    super()

    this.state = {
      places: [],
      isLoading: true
    }
  }

  async componentDidMount () {
    try {
      // await the response from API call
      const response = await axios(`${apiUrl}/places`)

      // do something with response
      this.setState({ places: response.data.places, isLoading: false })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const placesJsx = this.state.places.map(place => (
      <ListGroup.Item key={place._id}>
        <Link to={`/places/${place._id}`} >{place.title}</Link>
        <h6>{place.text}</h6><h6>{place.ci}</h6>
      </ListGroup.Item>
    ))

    if (this.state.isLoading) {
      return (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )
    }

    return (
      <div>
        <ListGroup>
          {this.state.places.length
            ? placesJsx
            : <ListGroup.Item>No places found</ListGroup.Item>
          }
        </ListGroup>
      </div>
    )
  }
}

export default Places
