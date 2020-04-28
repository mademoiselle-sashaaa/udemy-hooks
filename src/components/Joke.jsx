import React, { Fragment } from 'react';
import {useFetch} from '../hooks';

function Joke() {
    const url = 'https://official-joke-api.appspot.com/jokes/random';
    const joke = useFetch(url, {});
    const { setup, punchline } = joke;

    return (
        <Fragment>
            <h3>Joke</h3>
            <p>{setup}</p>
            <p><em>{punchline}</em></p>
        </Fragment>

    );
}

export default Joke;
