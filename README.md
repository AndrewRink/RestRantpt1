# Project REST-Rant

REST-Rant is an app where users can review restaurants.

|Method|Path            |Purpose                                    |
|:----:|:----------------------:|:----------------------------------|
|GET   | /                      | Home Page                         |
|GET   | /places                | Index Page listing all places     |
|POST  | /places                | Create new Place                  |
|GET   | /places/new            | New form for a place              |
|GET   |/places/:id             | Details about a particular place  |
|PUT   |/places/:id             | Update a particular place         |
|GET   |/places/:id/edit        | Form page for editing existing    |
|DELETE|/places/:id             | Delete a particular place         |
|POST  |/places/:id/rant        | Create a comment                  |
|DELETE|/places/:id/rant/:rantId| Delete a comment                  |
|GET   | *                      | 404 page                          |
|------|------------------------|-----------------------------------|

|Field   | Type     |
|:------:|:--------:|
|_id     | Object ID|
| name   |  String  |
|city    |  String  |
|state   | String   |
|cuisines| String   |
|pic     | String   |
|--------|----------|