import React from 'react';
import {useParams} from 'react-router-dom';

function Item(){

    let {id} = useParams();

    return(
        <h1>Item {id}</h1>
    )

}
export default Item