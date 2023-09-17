
# Site
- https://ternyavsky.vercel.app/

![Снимок экрана от 2023-09-17 22-09-31](https://github.com/ternyavsky/terny/assets/105453132/6da68cf4-af92-4911-a28e-85f6c4caeeab)



## Tech
Frontend:
- SolidJS
- TypeScript

Backend:
- Golang
- GraphQL




## API Reference

#### Login
```bash
  POST /login 
```
```http
  { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}  
```

Upon successful authorization, the token is saved in the browser cookies 

#### Register

```bash
  POST /reg
```
Creates a user in the database

#### Get User
```bash
  GraphQL graphql?query={account{id,username}}&token=token
```

```json
  "account": {
    "id": 2,
    "username": "Alex"
  }
```
