# Services API
Endpoints for managing user data in the system.

## Get All Services

Retrieve a paginated list of all registered services.

GET /dataservice


### Parameters
| Parameter | Type | Description |
| --- | --- | --- |
| name | string | The name of the service. |
| duration | string | The duration of the service. |
| fee | string | The fee for the service. |

### Response
    Response (Success: 200 OK)
"data": [
    {
        "service_id": "eccef049-37f1-4ace-a466-c36731bd3463",
        "name": "clean",
        "duration": "5",
        "fee": "9"
    },
    {
        "service_id": "f07bfe62-db3b-4a86-9d14-fe34520a347d",
        "name": "clean teeth",
        "duration": "50",
        "fee": "99"
    }
  ]
## Get a Single Service

Retrieve a single service by ID.

GET /dataservice/{id}

### Parameters
| Parameter | Type | Description |
| --- | --- | --- |
| id | string | The ID of the service to retrieve. |

### Response
    Response (Success: 200 OK)
"data": {
    "service_id": "eccef049-37f1-4ace-a466-c36731bd3463",
    "name": "clean",
    "duration": "5",
    "fee": "9"
}




## Update a Service

Update an existing service.

PUT /dataservice/{id}

### Parameters
| Parameter | Type | Description |
| --- | --- | --- |
| id | string | The ID of the service to update. |
| name | string | The name of the service. |
| duration | string | The duration of the service. |
| fee | string | The fee for the service. |

### Response
    Response (Success: 200 OK)
"data": {
    
        "service_id": "eccef049-37f1-4ace-a466-c36731bd3463",
        "name": "clean",
        "duration": "5",
        "fee": "9"
    }

## Delete a Service
Delete a service.

DELETE /dataservice/{id}

### Parameters
| Parameter | Type | Description |
| --- | --- | --- |
| id | string | The ID of the service to delete. |

### Response
    Response (Success: 200 OK) 


## Error Responses    
401	Unauthenticated	{"message": "Unauthenticated"}
404	User not found	{"error": "User not found"}
500	Internal server error	{"message": "Internal server error"}













  GET|HEAD  dataservice ......................................................................... ServiceController@index 

  POST      dataservice/create .......................................................................... ServiceController@store  

  PUT       dataservice/{id} ................................................................................ ServiceController@update  

  DELETE    dataservice/{id} ................................................................................. ServiceController@destroy  
  
  GET|HEAD  dataservice/{service_id} ......................................................................... ServiceController@show  

  GET|HEAD  dataservice/{service_id}/edit ....................................................................ServiceController@edit