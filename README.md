
# Health Tracker

## Description: 

Web application to help our elderly/dependents. Allows you to create a family group. Once done, as the creator of the group you can add your family once they have registered.  From the application you can create medical appointments, reminders and medication as well as consult, modify or delete them depending on the user role you have.



## Team:

- [@Natxafav](https://www.github.com/natxafav)
- [@AlbertOR0994](https://www.github.com/AlbertOR0994)

## Controls:
Backend of the application where the endpoints are managed to access the different options of our application.



## Tech Stack

### Server: 
    
    - NodeJs 
    - ExpressJs 
    - Mysql 
    - Sequelize



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- API: 
    -  `PORT`
- Mysql:
    - DB_URI=`mysql://usuario:contraseña@localhost:3306/nombre_basedatos`
- Bcrypt: 
    - `BCRYPT_SALT`
- Jsonwebtoken:
    - `JWT_SECRET`

## Installation

Fork this project and clone it in your workspace (it is only the backend :) )

```bash
$ cd appmayores
$ npm i 
```

#### - remenber create a .env to configure the variables of database.
    
## API Reference
![Screenshot from 2024-03-11 11-53-52](https://github.com/Natxafav/AppMayores/assets/110979479/5918d8c6-bc05-452f-a5c1-23962fbd5317)

#### AUTH

#### - MAINT ROUTE: /api

```http
    : /api/auth
```


| Method    | Endpoint  | token  |  description                | Post Params  | Return |
| :-------- | :---------| :------|:----------------------------|:-------|:-------------|
| `GET`     | `/signup`    | **NO** | register a user |   -    |  `token`     |
| `GET`     | `/login`    | **NO** | login a user |   -    |  `token`     |


#### USERS

   - MAIN ROUTE : /api
```http
     : /api/user
```

| Method    | Endpoint  | token  |  description                | Post Params  | Return |
| :-------- | :---------| :------|:----------------------------|:-------|:-------------|
| `GET`     | `/get`    | **YES** | get all users of your family|   -    | ` {Users}`     |
| `GET`     | `/one/:id`| **YES** | get one user of your family|    `user_id`   | ` {User} `     |
| `PUT`    | `/mod/:id` | **YES** | update a user of your family|   `user_id`   |  `User updated`|
| `DELETE`     | `/rm/:id`    | **YES** | delete a user| id        | `User deleted`|
| `PUT`     | `/fm/:id/:fmid`    | **YES** | add relation between one user to one family| `user_id - family_id`| `User added to family`|
| `GET`     | `/fm/:id/:fmid`    | **YES** | remove relation between one user to one family| `user_id - family_i`        | `User removed from family`|


#### FAMILY 

- MAIN ROUTE : /api

```http
     : /api/family
```


| Method    | Endpoint  | token  |  description                 | Post Params  | Return |
| :-------- | :---------| :------|:-----------------------------|:-------------|:-------------|
| `GET`     | `/get`    | **YES** | get my family |   -       |  `{family}`    |
| `POST`     | `/create`    | **YES** | create my family |   -   |  `family created`   | 
| `DELETE`     | `/rm/:id`    | **YES** | delete my family| `family_id`        | `family removed`|
| `PUT`     | `/mod/id`    | **YES** | update my family |  ` family_id  `   |  `Family updated`    |


### ROLE 

**ONLY FOR ADMIN DEVELOPER**

#### - MAIN ROUTE : /api

```http
        :/api/role
```

| Method    | Endpoint  | token  |  description     | Post Params  | Return |
| :-------- | :---------| :------|:-----------------|:-------|:-------------|
| `GET`     | `/admget`    | **YES** | get all roles|   -    |  `{roles} `    |
| `GET`     | `/admone/:id`    | **YES** | get one role|  ` role_id `   |  `{role} ` |
| `POST`     | `/admcreate`    | **YES** | create a new role|   -    |  `{roles}`     |
| `PUT`     | `/admmod/:id`    | **YES** | get all roles|  ` role_id`    |  `Role updated`    |
| `DELETE`     | `/admrm/:id`    | **YES** | get all roles|   -    |  `Role removed`     |



### APPOINTMENT

#### - MAIN ROUTE: /api
```http
    :/api/meet
```

| Method    | Endpoint  | token  |  description     | Post Params  | Return |
| :-------- | :---------| :------|:-----------------|:-------|:-------------|
| `GET`     | `/get`    | **YES** | get all appointments of your family|   -    |  `{appointments}`     |
| `GET`     | `/one/:id`    | **YES** | get one appointments of your family|   req.params    |  `{appointment}`     |
| `POST`     | `/create`    | **YES** | create a new appointment for one user of your family |  ` {req.body}`    |  `{appointment}`     |
| `PUT`     | `/mod/:id`    | **YES** | update a appointment of one user in your family |   `{req.body} `   |  `appointment updated by {user.name}`     |
| `DELETE`     | `/rm/:id`    | **YES** | remove one appointment of one user in your family|   `{req.body} `   |  `{appointment}`     |
| `POST`     | `/:id/:aid`    | **YES** | add the relatión of one appointment with a user of your family |   `req.params`    |  `{appointment} `    |
| `DELETE`     | `/arm/rm/:id`    | **YES** | remove the relation of one appointment with a user of your family  |   `{req.body}`    |  `{appointment}`     |


### REMINDER 

#### - MAIN ROUTE: /api
```http
    :/api/reminder
```


| Method    | Endpoint  | token  |  description     | Post Params  | Return |
| :-------- | :---------| :------|:-----------------|:-------|:-------------|
| `GET`     | `/get`    | **YES** | get all reminders of your family|   -    |  `{reminders}`     |
| `GET`     | `/one/:id`    | **YES** | get one reminders of your family|  ` req.params `   |  `{reminder}`     |
| `POST`     | `/create`    | **YES** | create a new reminder for one user of your family |  ` {req.body}`    | ` {reminder}`     |
| `PUT`     | `/mod/:id`    | **YES** | update a reminder of one user in your family |   `{req.body} `   |  `reminder updated by {user.name}`     |
| `DELETE`     | `/rm/:id`    | **YES** | remove one reminder of one user in your family|   `{req.body} `   |  `{reminder}`     |
| `POST`     | `/:id/:aid`    | **YES** | add the relatión of one reminder with a user of your family |   `req.params`    |  `{reminder} `    |
| `DELETE`     | `/arm/rm/:id`    | **YES** | remove the relation of one reminder with a user of your family  |   `{req.body}`    |  `{reminder}`     |


### MEDICATIONS 

#### - MAIN ROUTE: /api
```http
    :/api/meds
```

| Method    | Endpoint  | token  |  description     | Post Params  | Return |
| :-------- | :---------| :------|:-----------------|:-------|:-------------|
| `GET`     | `/get`    | **YES** | get all medications of your family|   -    |  `{medications}`     |
| `GET`     | `/one/:id`    | **YES** | get one medications of your family|   req.params    |  `{medication}`     |
| `POST`     | `/create`    | **YES** | create a new medication for one user of your family |  ` {req.body}`    |  `{medication}`     |
| `PUT`     | `/mod/:id`    | **YES** | update a medication of one user in your family |   `{req.body} `   |  `medication updated by {user.name}`     |
| `DELETE`     | `/rm/:id`    | **YES** | remove one medication of one user in your family|   `{req.body} `   |  `{medication}`     |
| `POST`     | `/:id/:aid`    | **YES** | add the relatión of one medication with a user of your family |   `req.params`    |  `{medication}`     |
| `DELETE`     | `/arm/rm/:id`    | **YES** | remove the relation of one medication with a user of your family  |   `{req.body}`    |
  `{medication}`     |




### ADMIN 

### *this router gonna be diferent when gonna affected specify other.*

```
    http
    :/api/*/adm*
```

|Routes| Method    | Endpoint  | token  |  description     | Post Params  | Return |
|:-| :-------- | :---------| :------|:-----------------|:-------|:-------------|
| [All routes]  | `GET`     | `*/admget`    | **YES** | get all data of the table|   -    |  `{medications}`     |
| [All routes except family]  | `GET`     | `*/admone/:id`    | **YES** | get one from the data|   req.params    |  `{medication}`     |
|[roles,reminder,medication,appointmnet]  | `POST`     | `/admcreate`    | **YES** | create one row in this routes |  ` {req.body}`    |  `{medication}`     |
|  [roles] | `PUT`     | `/admmod/:id`    | **YES** | update a role |   `{req.body} `   |  `medication updated by {user.name}`     |
| [roles,Family]  | `DELETE`     | `/admrm/:id`    | **YES** | remove a row by primary key|   `{req.body} `   |  `{medication}`     |


## License

[MIT](https://choosealicense.com/licenses/mit/)

## other 
