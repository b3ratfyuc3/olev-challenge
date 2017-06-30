# Olev Code Challenge

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/driver/getAll | `GET` | Empty | List all drivers. |
| /api/driver/add | `POST` | {'name':'foo', 'surname':'bar'} | Create a driver. |
| /api/driver/get/:driver_id | `GET` | Empty | Get a driver. |
| /api/driver/update/:driver_id | `PUT` | {'name':'foo', 'surname':'bar'} | Update a driver with new info. |
| /api/driver/delete/:driver_id | `DELETE` | Empty | Delete a driver. |
| /api/driver/ride | `GET` | Empty | It shows the three nearest drivers |

### Run API
> npm install && npm start

### Run Tests
> npm test

### Live Demo
[Live demo on Heroku](https://tranquil-hamlet-34506.herokuapp.com/api/driver/getAll)

