import React from "react";


// A stateless component since it doesnt require state, only props will do
export const User = (props) => {
    return (
        <div>
            <div>
                    <h1>The User Page</h1>
            </div>
            <div>
                    <p>User Name: {props.username}</p>
            </div>
        </div>
    );
}