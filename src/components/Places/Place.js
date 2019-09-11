import React, { Component, Fragment } from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

class Place extends Component {
  state = {
    place: null,
    deleted: false
  }

  async componentDidMount () {
    try {
      const response = await axios(`${apiUrl}/places/${this.props.match.params.id}`)

      this.setState({
        place: response.data.place
      })
    } catch (err) { this.setState({ err }) }
  }

  destroy = () => {
    axios({
      url: `${apiUrl}/places/${this.props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => this.setState({ deleted: true }))
      .catch(err => this.setState({ error: err.message }))
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
            <Container>
              <Row>
                <Col>
                  <h1>{place.title}</h1>
                  <h2>{place.text}</h2>
                  <h5>City: {place.city}</h5>
                  <h5>Country: {place.country}</h5>
                  {<Button variant="danger" onClick={this.destroy}>Delete Place</Button>
                  }
                  {(this.props.user && place) && this.props.user._id === place.owner
                    ? <Button variant="dark" href={`#places/${place._id}/edit`}>Edit Place</Button>
                    : ''
                  }
                </Col>
                <Col>
                  {place.url && <img src={place.url} alt={place.title} width="400" height="400"/>}
                </Col>
              </Row>
            </Container>
            <Link to="/places">Back to all Places</Link>
          </Fragment>
        )}
      </div>
    )
  }
}

export default withRouter(Place)
