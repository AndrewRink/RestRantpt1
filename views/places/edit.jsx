const React = require('react')
const places = require('../../models/places')
const Default = require('../default')

function edit_form(data) {
    return (
        <Default>
            <main>
                <h1>Edit a Place</h1>
                <form method="POST" action ={`/places/${data.place.id}?_method=PUT`}>
                    <div className='row'>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='name'>Place Name</label>
                        <input 
                        className='form-control' 
                        id='name' 
                        name='name' 
                        defaultValue ={data.place.name}
                        required/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='pic'>Place Picture</label>
                        <input 
                        className='form-control' 
                        type='url' 
                        id='pic'
                        name='pic'
                        defaultValue ={data.place.pic}/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='city'>City</label>
                        <input 
                        className='form-control' 
                        id='city' 
                        name='city' 
                        defaultValue ={data.place.city}/>
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='state'>State</label>
                        <input 
                        className='form-control' 
                        id='state' 
                        name='state'
                        defaultValue ={data.place.state} />
                    </div>
                    <div className='form-group col-sm-6'>
                        <label htmlFor='cuisines'>Cuisine</label>
                        <input 
                        className='form-control' 
                        id='cuisines' 
                        name='cuisines'
                        defaultValue ={data.place.cuisines} 
                        required/>
                    </div>
                    <div className="form-group col-sm-6">
                        <label for="founded">Founded Year</label>
                        <input 
                        className="form-control" 
                         id="founded" 
                         name="founded" 
                         defaultValue= {data.place.founded} />
                    </div>
                </div>
                    <input 
                    className='btn btn-primary' 
                    type = 'submit' 
                    value='Add Place' />
                </form>
            </main>
        </Default>
    )
}

module.exports = edit_form
