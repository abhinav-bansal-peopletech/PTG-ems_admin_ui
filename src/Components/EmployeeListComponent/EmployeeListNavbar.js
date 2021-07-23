import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

export default function EmployeeListNavbar() {
    return (
        <div>
                <Navbar bg="dark" variant="dark">
                    <Container className="navBar">
                        <Navbar.Brand >
                            KeyLogger
                        </Navbar.Brand>
                    </Container>
                </Navbar>
        </div>
    )
}
