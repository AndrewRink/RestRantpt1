const React = require('react')
const Default = require('../default')


function show (data) {
    return (
        <Default>
          <main>
            <h1>{data.place.name}</h1>
          </main>
          <div>
            <img src={data.place.pic} alt={data.place.name} />
            <h3>Located in {data.place.city}, {data.place.state}</h3>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines} </h4>
          </div>
          <div>
            <h2>Rating</h2>
            <p>Not Rated</p>
          </div>
          <div>Comments
          <p>No Comments Yet!</p>
          </div>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning"> Edit
          </a>  
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
          <button type="submit" className="btn btn-danger">Delete
          </button>
          </form>     

        </Default>
    )
}

module.exports = show
