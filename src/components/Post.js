import React from 'react';
import axios from "axios";
import '../App.css';
const { useState, useEffect, useRef } = React;
export default function PostComponenet(){
    const [page, setPage] = useState(1);
    const [passengers, setPassengers] = useState([]);
    const bottomRef = useRef(null); // *** Not `createRef`

    const scrollCallback = (entries) => {
        if (entries[0].isIntersecting) {
          axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`).then(res => setPassengers(prevState => [...prevState, ...res.data.data]));
        }
      }; 

    useEffect(() => {
        const { current } = bottomRef;
        const observer = new IntersectionObserver(scrollCallback, {
            root: null,
            threshold: 1,
        });
        observer.observe(current);
        return () => {
            observer.disconnect(current); 
        }
    }, [bottomRef.current]); 

    // function handleScroll() {
    //     if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    //     console.log('Fetch more list items!');
    //   }
    return (
        <div className="container">
            <div className="lists">
                {
                    passengers.map((passenger, idx) => {
                        
                        const { airline, name, trips } = passenger;
                        return (
                            <div className="list" key={idx}>
                            <ul>User Info
                                <li>name: {name}</li>
                                <li>trips: {trips}</li>
                                <li>Airline Info</li>
                                <li>name: {airline.name}</li>
                                <li>country: {airline.country}</li>
                                <li>established: {airline.established}</li>
                                <li>head quarter: {airline.head_quarters}</li>
                                <li>website: {airline.website}</li>
                            </ul>
                            </div>
                        )
                        })
                }
            </div>
            <div ref={bottomRef} />
        </div>
    );
}





