import React, { Component, Fragment } from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import Button from 'react-bootstrap/Button'

class Place extends Component {
  state = {
    place: null,
    deleted: false
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

  destroy = () => {
    axios({
      url: `${apiUrl}/places/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render () {
    const { place, deleted } = this.state

    if (deleted) {
      return <Redirect to={
        { pathname: '/places', state: { msg: 'Place succesfully deleted!' } }
      } />
    }
    return (
      <div>
        { place && (
          <Fragment>
            <h1>{place.title}</h1>
            <h2>{place.text}</h2>
            <h2>{place.city}</h2>
            <h2>{place.country}</h2>
            <button onClick={this.destroy}>Delete Place</button>
            {(this.props.user && place) && this.props.user._id === place.owner
              ? <Button href={`#places/${place._id}/edit`}>Edit Place</Button>
              : ''
            }
            <Link to="/places">Back to all Places</Link>
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Place)
