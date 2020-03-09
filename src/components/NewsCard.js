import React from 'react'


export const NewsCard = (props) => {

    return (
        <article>
            <div>
                <img src={props.image}></img>
                <a href={props.anchor}>{props.title}</a>
            </div>
        </article>
    )
}