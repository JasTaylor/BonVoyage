import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import Button from 'react-bootstrap/Button'

class Place extends Component {
  state = {
    place: null
  }

  async componentDidMount () {
    console.log(this.props.user)
    try {
      const response = await axios(`${apiUrl}/places/${this.props.match.params.id}`)

      this.setState({
        place: response.data.place
      })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { place } = this.state

    return (
      <div>
        { place && (
          <Fragment>
            <h1>{place.title}</h1>
            <h2>{place.author}</h2>
            {(this.props.user && place) && this.props.user._id === place.owner
              ? <Button href={`#places/${place._id}/edit`}>Edit Place</Button>
              : ''
            }
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Place)
