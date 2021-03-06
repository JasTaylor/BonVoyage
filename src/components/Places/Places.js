import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Layout from '../Common/Layout'
// import CardDeck from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
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
      .catch(err => this.setState({ error: err.message }))
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
      <Card
        border="dark"
        style={{ width: '17rem' }}
        className={filtered && !(user._id === place.owner) ? 'd-none' : ''}
        key={place._id}
        action={place.toString()}
        as={Link}
        to={`/places/${place._id}`}
      >
        <Card.Body>
          <Card.Img variant="top" src={place.url} width="200" height="200"/>
          <Card.Title><h3>{place.title}</h3></Card.Title>
          <Card.Text><h6>
            <br />{place.text}
            <br />
            <br />City: {place.city}
            <br />Country: {place.country}
          </h6>
          </Card.Text>
        </Card.Body>
      </Card>
    ))
    return (
      <Layout>
        <div>
          <h3>All Places</h3>
          <h6> Sort by Country or in Alphabetical Order, Click on Location for More</h6>
          <div>
            {
              <Fragment>
                <FormControl
                  placeholder="Search by Country"
                  aria-label="Search"
                  onChange={this.handleChange}
                />
              </Fragment>
            }
            <Button variant={sorted ? 'outline-dark' : 'outline-dark'} onClick={this.handleSort}>SORT ALL A-Z</Button>
          </div>
        </div>
        <div>
          <Container>
            <Row>
              {placeArray}
            </Row>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default Places
