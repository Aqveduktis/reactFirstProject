import React from 'react'
import { useLayoutEffect, useState, useEffect, useRef } from 'react';

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
    const [imageWidth, setImageWidth] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
        const width = ref.current ? ref.current.offsetWidth : 0;
        setImageWidth(width)
    }, [ref.current, width]);

    return (
        <a ref={ref} style={{height: imageWidth}} href={props.anchor} className="news-card">
            <div>
                <img src={props.picture} alt={props.title}></img>
                <p>{props.title}</p>
            </div>
        </a>
    )
}