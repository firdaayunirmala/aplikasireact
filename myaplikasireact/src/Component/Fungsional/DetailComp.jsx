import React from 'react'
import { Jumbotron } from 'reactstrap';

function DetailComp(props) {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">{props.location.state.judul}</h1>
            </Jumbotron>
        </div>
        
    )
}

export default DetailComp;