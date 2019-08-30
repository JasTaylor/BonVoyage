import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import PlaceForm from './PlaceForm'

class UpdatePlace extends Component {
  state = {
    place: null
  }

  componentDidMount () {
    axios(`${apiUrl}/places/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ place: response.data.place })
      })
      .catch(() => this.props.alert({
        heading: 'Error',
        message: 'Something went wrong',
        variant: 'danger'
      }))
  }

  handleChange = event => {
    // const updatedField = {
    //   [event.target.name]: event.target.value
    // }
    // const editedPlace = Object.assign(this.state.place, updatedField)
    // this.setState({ place: editedPlace })

    this.setState({
      place: {
        ...this.state.place,
        [event.target.name]: event.target.value
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    axios({
      method: 'PATCH',
      url: `${apiUrl}/places/${this.state.place._id}`,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: formData
    })
      .then(response => {
        this.props.alert({
          heading: 'Success!!!!',
          message: 'You updated a place.',
          variant: 'success'
        })
        this.props.history.push(`/places/${this.state.place._id}`)
      })
      .catch(err => this.setState({ error: err.message }))
  }

  render () {
    if (!this.state.place) {
      return (
        <h1>Loading... </h1>
      )
    }
    return (
      <PlaceForm
        place={this.state.place}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default withRouter(UpdatePlace)
