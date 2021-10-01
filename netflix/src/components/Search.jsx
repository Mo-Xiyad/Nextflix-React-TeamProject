import { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

class Search extends Component {

    state = {

        movies: {
            movies: []
        }
    }



    fetchMovies = async () => {


        let url = `http://www.omdbapi.com/?apikey=2470e3c&s=${this.props.query}`
        try {

            const response = await fetch(url)

            const data = await response.json()
            // console.log(data)
            console.log("right after the fetch")

            if (response.ok && data.Search) {

                this.setState({
                    movies: {
                        movies: data.Search
                    }
                })
                console.log(this.state.movies.movies.Search)

            } else {

                console.log("inside the else of Fetch")

            }

        } catch (e) {
            console.log(e)
            console.log("outside the try block")

        }
    }



    componentDidMount = async () => {
        this.fetchMovies()

    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.query !== this.props.query) {
            this.fetchMovies()
        }
    }

    render() {
        return (

            <>
                <Row className="mx-n1 my-3">
                    {
                        this.state.movies.movies.map(m => (
                            <Col xs={2} md={2} lg={2} className="px-1 py-2 d-flex ">

                                < Card Key={m.imdbID} className="card-gallery card-text-area">
                                    <Card.Img variant="top" src={m.Poster} className="card-img-gallery img-fluid w-100" />
                                    <Card.Body className="scroller">
                                        <Card.Title><small>{m.Title}</small></Card.Title>
                                    </Card.Body>
                                </Card >

                            </Col>
                        ))
                    }

                </Row>
            </>
        )
    }
}

export default Search
