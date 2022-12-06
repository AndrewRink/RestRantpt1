const React = require('react')
const Default = require('./default')

function Home () {
    return (
      <Default>
          <main>
              <h1>HOME</h1>
              <div>
                <img id = "homeImage" src = "/images/food.jpg" alt = 'food'/>
                <div>
                  Photo by <a href = "https://unsplash.com/@thomasble">Thomas Le</a> on <a href = "https://unsplash.com/photos/pRJhn4MbsMM"> Unsplash</a>
                </div>
              </div>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Default>
    )
  }
  

module.exports = Home
