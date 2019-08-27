import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Layout from '../Common/Layout'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
// import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class Places extends Component {
  constructor (props) {
    super(props)
    this.state = {
      places: [],
      displayPlacesList: [],
      filtered: false,
      sorted: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/places`)
      .then(res => this.setState({ places: res.data.places, displayPlacesList: res.data.places }))
      .catch(console.error)
  }

  handleSort = event => {
    const { places, sorted } = this.state
    const sortedPlaceArray = sorted ? [...places.sort((a, b) => (a.title > b.title) ? 1 : -1)] : [...places.sort((a, b) => (a.title < b.title) ? 1 : -1)]
    this.setState({ displayPlacesList: sortedPlaceArray, sorted: !sorted })
  }

  handleFilter = event => {
    event.preventDefault()
    this.setState({ filtered: !this.state.filtered })
  }

  handleChange = event => {
    const searchString = event.target.value.toLowerCase()
    const queryLength = searchString.length
    const prevQueryLength = this.state.queryLength || 0
    const places = queryLength > prevQueryLength ? this.state.displayPlacesList : this.state.places

    const searchResults = places.filter(place => place.country.toLowerCase().includes(searchString))

    this.setState({ displayPlacesList: searchResults, queryLength: queryLength })
  }

  render () {
    const { displayPlacesList, filtered, sorted } = this.state
    const { user } = this.props

    const placeArray = displayPlacesList.map(place => (
      <ListGroup.Item
        className={filtered && !(user._id === place.owner) ? 'd-none' : ''}
        key={place._id}
        action
        as={Link}
        to={`/places/${place._id}`}
      >
        <h4>{place.title}</h4>
        <h6>{place.text}</h6>
        <h6>{place.city}</h6>
        <h6>{place.country}</h6>
      </ListGroup.Item>
    ))

    return (
      <Layout md="12" lg="8">
        <div className="d-flex justify-content-between mb-2">
          <h3>Places</h3>
          <div className="flex-grow-1 d-flex align-items-center justify-content-end">
            {
              <Fragment>
                <FormControl
                  placeholder="Search by Country"
                  aria-label="Search"
                  onChange={this.handleChange}
                  className="border-secondary d-inline mx-lg-5 mx-md-3 mx-1"
                />
              </Fragment>
            }
            <Button variant={sorted ? 'outline-primary' : 'outline-secondary'} onClick={this.handleSort}>
              <i className="icofont-sort" />
            </Button>
          </div>
        </div>
        <ListGroup>
          {placeArray}
        </ListGroup>
      </Layout>
    )
  }
}

export default Places
