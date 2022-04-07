import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

const DropDownComponent = (props) => {
    const [value, setValue] = useState("United states");
    const handleSelect = (e) => {
        console.log(e);
        setValue(e)
    }
    return (
        <div>
            <h1>React-Bootstrap Dropdown Component - technostuf.com</h1>
            <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle variant="success">
                    {value}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item eventKey="United states">
                        United states
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Canada">
                        Canada
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Japan">
                        Japan
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <h4>Selected Country {value}</h4>
        </div>
    );
}

export default DropDownComponent;