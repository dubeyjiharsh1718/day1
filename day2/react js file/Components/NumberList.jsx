import React, { Component } from 'react';

class NumberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: Array.from({ length: 10 }, (_, index) => index + 1),
        };
    }

    render() {
        const { numbers } = this.state;

        return (
            <div>
                <h2>List of Numbers from 1 to 10</h2>
                <ul>
                    {numbers.map((number) => (
                        <li key={number}>{number}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default NumberList;
