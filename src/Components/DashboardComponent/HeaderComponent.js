import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
import './CSS/HeaderComponent.css'

export default function HeaderComponent() {
    return (
        <div className="header">
            <Navbar expand="lg" variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand href="#"></Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}
