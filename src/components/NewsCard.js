import React from 'react'
// import { Information } from 'components/Information'

export const NewsCard = (props) => {

    return (
        <a href={props.anchor} className="news-card">
            <div>
                <img src={props.picture} alt={props.title}></img>
                <p>{props.title}</p>
            </div>
        </a>
    )
}