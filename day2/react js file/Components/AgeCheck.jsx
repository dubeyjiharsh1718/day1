import React from 'react';

function AgeCheck(props) {
    const { age } = props;

    return (
        <div>
            {age >= 18 ? (
                <p>You are an adult</p>
            ) : (
                <p>You are not an adult</p>
            )}
        </div>
    );
}

export default AgeCheck;
