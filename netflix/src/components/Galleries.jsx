import { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class Galleries extends Component {

    state = {
        movies: {
            movies: []
        }
    }

    fetchMovies = async () => {


        let movie = "superman"

        let url = `http://www.omdbapi.com/?apikey=2470e3c&s=${movie}`
        try {

            const response = await fetch(url)

            const data = await response.json()
            // console.log(data)
            console.log("right after the fetch")

            if (response.ok) {
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
        console.log("this.state.movies.movies.Search")
        console.log(this.state.movies.movies.Search)
    }

    render() {
        return (

            <Row>
                {
                    this.state.movies.movies.map(m => (
                        <Col xs={6} md={4} lg={3}>

                            < Card style={{ width: '18rem' }} Key={m.imdbID}>
                                <Card.Img variant="top" src={m.Poster} />
                                <Card.Body>
                                    <Card.Title>{m.Title}</Card.Title>
                                </Card.Body>
                            </Card >

                        </Col>
                    ))
                }

            </Row>
        )
    }
}

export default Galleries

// this.state.movies.movies.Search.map(m => (
                //     <Col xs={6} md={4} lg={3}>

                //         < Card style={{ width: '18rem' }} Key={m.imdbID}>
                //             <Card.Img variant="top" src={m.Poster} />
                //             <Card.Body>
                //                 <Card.Title>{m.Title}</Card.Title>
                //             </Card.Body>
                //         </Card >

                //     </Col>
    // ))
