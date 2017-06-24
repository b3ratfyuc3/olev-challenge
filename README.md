# Olev Code Challenge

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/getAll | `GET` | Empty | List all drivers. |
| /api/add | `POST` | {'name':'foo', 'surname':'bar'} | Create a driver. |
| /api/get/:driver_id | `GET` | Empty | Get a driver. |
| /api/update/:driver_id | `PUT` | {'name':'foo', 'surname':'bar'} | Update a driver with new info. |
| /api/delete/:driver_id | `DELETE` | Empty | Delete a driver. |


### Run API
> npm install && npm start

### Run Tests
> npm test