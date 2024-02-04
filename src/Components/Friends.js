import React, { useState, useEffect } from 'react';
import './Friends.css'; // Import your CSS file

const Friends = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=8")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);
      })
      .catch((err) => console.log(err.toString()));
  }, []);

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
      </head>

      <div className='body-friends'>
        <div id="root">
          <h1 className="greeting"></h1>
          <div className="container">
            {people.map((person, index) => (
              <div className="card" key={index}>
                <div className="textContainer">
                  <p className="name">{person.name.first}</p>
                  <p className="location">🏡 {person.location.state}</p>
                </div>
                <div className="imgContainer">
                  <img src={person.picture.medium} alt={person.name.first} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <script src="scripts.js"></script>
        </div>
    </>
  );
};

export default Friends;
