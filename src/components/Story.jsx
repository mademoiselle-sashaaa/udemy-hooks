import React from 'react';
import { useFetch } from '../hooks';

function Story() {
    const url = 'https://news-proxy-server.appspot.com/topstories';
    const stories = useFetch(url, []);

    return (
        <div className="Stories">
            <h3>Stories</h3>
            {stories.map(story => {
                const { id, by, title, score, url, time } = story;
                return (
                    <div key={id}>
                        <a href={url}>{title}</a>
                        <div>{by} - {new Date(time * 1000).toLocaleString()}</div>
                        <div>{score}</div>
                    </div>
                );
            })}
        </div>

    );
}

export default Story;
