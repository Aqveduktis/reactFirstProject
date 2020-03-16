import React from 'react'
import { useLayoutEffect, useState } from 'react';
// import { Information } from 'components/Information'

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

export const NewsCard = (props) => {
    const [width, height] = useWindowSize();

    return (
        <a href={props.anchor} className="news-card">
            <div>
                <img src={props.picture} alt={props.title}></img>
                <p>{props.title}</p>
            </div>
        </a>
    )
}