const React = require('react')
const Default = require('./default')

function error404 () {
    return (
      <Default>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
          <div>
            <img class = "homeImage" src ="/images/error.jpg" alt = "error"/>
            Photo by <a href ="https://unsplash.com/@sseeker">Stormseeker</a> on <a href="https://unsplash.com/photos/rX12B5uX7QM">Unsplash</a>
          </div>
      </Default>
    )
  }
  

module.exports = error404
