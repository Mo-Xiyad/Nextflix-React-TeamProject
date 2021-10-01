import { Component } from 'react'
import Container from 'react-bootstrap/Container'
class Galleries extends Component {


    componentDidMount() {
        console.log('something is habout to go down')
    }

    render() {
        return (
            <Container flued>
                movies
            </Container>
        )
    }
}

export default Galleries