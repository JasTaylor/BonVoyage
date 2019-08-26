import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

import PlaceForm from './PlaceForm'

class CreatePlace extends Component {
  state = {
    place: {
      title: '',
      author: ''
    }
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
    axios({
      method: 'POST',
      url: `${apiUrl}/places`,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        place: this.state.place
      }
    })
      .then(response => {
        this.props.alert({
          heading: 'Success!!!!',
          message: 'You created a place.',
          variant: 'success'
        })
        this.props.history.push(`/places/${response.data.place._id}`)
      })
      .catch(console.error)
  }

  render () {
    return (
      <PlaceForm
        place={this.state.place}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default withRouter(CreatePlace)
