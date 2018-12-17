import React from "react";

// A stateless component since it doesnt require state, only props will do
export const Main = (props) => {
    return (
        <div>
            <div>
                <h1>The Main Page</h1>
            </div>
            <div className="row">
                <button className="btn btn-primary"
                        onClick={() => props.changeUsername('Anna')}>Change the Username
                    </button>
            </div>
        </div>
    );
};