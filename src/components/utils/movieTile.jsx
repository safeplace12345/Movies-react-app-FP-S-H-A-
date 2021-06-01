import React from 'react';
const MovieTile = ({item}) => {
    return (
      <div className="card col-md-5 mx-auto my-2" key={item.title}>
        <div className="card-body">
          <div className="video">
            <iframe
              title="frame"
              className="iframe"
              src={`https://www.youtube.com/embed/${item.url}`}
              frameBorder="0"
            />
          </div>
          <div className="captions">
            <h5 className="card-title">{item.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{item.info}</h6>
            <p className="card-text">{item.description}</p>
          </div>
        </div>
      </div>
    );
}
 
export default MovieTile;

