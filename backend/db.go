package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

const typeDb = "sqlite3"
const DBname = "users.db"


func GetUser(username string, password string) User{
	db, err := sql.Open(typeDb, DBname)
	if err != nil{
		panic(err)
	}
	defer db.Close()
	var user User
	row := db.QueryRow("select * from users where username=$1 and password=$2", username, password)
	row.Scan(&user.Id, &user.Username, &user.Password)
	return user

}

func RegUser(username string, password string){
	db, err := sql.Open(typeDb, DBname)
	if err != nil{
		panic(err)
	}
	defer db.Close()
	db.Exec("insert into users(username, password) values ($1, $2)", username, password)
	defer db.Close()
}



