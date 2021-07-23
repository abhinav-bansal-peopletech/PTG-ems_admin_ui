import React from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap'

export default function EmployeeListSearch() {
    return (
        <div className="search">
            <InputGroup className="mb-3">
                <Button variant="outline-secondary" id="button-addon1">
                    Search
                </Button>
                <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
        </div>
    )
}
