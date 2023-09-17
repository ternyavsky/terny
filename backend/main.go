package main

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/http"
	"time"

	"database/sql"

	"github.com/dgrijalva/jwt-go"
	"github.com/graphql-go/graphql"
	_ "github.com/mattn/go-sqlite3"
	"github.com/mitchellh/mapstructure"
	"github.com/rs/cors"
	"golang.org/x/crypto/acme/autocert"
)

type User struct {
	Id       string `json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
}

type jwtUserClaims struct {
	User
	jwt.StandardClaims
}

var jwtSecret []byte = []byte("golangbackend")

var accounts []User = []User{
	{
		Id:       "1",
		Username: "Admin",
		Password: "Admin123",
	},
	{
		Id:       "2",
		Username: "Diman",
		Password: "User123",
	},
}

var accountType *graphql.Object = graphql.NewObject(graphql.ObjectConfig{
	Name: "Account",
	Fields: graphql.Fields{
		"id": &graphql.Field{
			Type: graphql.String,
		},
		"username": &graphql.Field{
			Type: graphql.String,
		},
		"password": &graphql.Field{
			Type: graphql.String,
		},
	},
})

func validateJwt(t string) (interface{}, error) {
	if t == "" {
		return nil, errors.New("Token not must be empty!")
	}
	token, _ := jwt.Parse(t, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Error")
		}
		return jwtSecret, nil
	})
	fmt.Println(token)

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		var decodedToken User
		mapstructure.Decode(claims, &decodedToken)
		fmt.Println(decodedToken)
		return decodedToken, nil

	} else {
		return nil, errors.New("Invalid auth token!")
	}
}

func Registration(w http.ResponseWriter, r *http.Request){
	var user User 
	json.NewDecoder(r.Body).Decode(&user)

	RegUser(user.Username, user.Password)
	w.Header().Set("content-type", "application/json")
	w.Write([]byte("{'status' : 201} "))
}



func CreateTokenEndpoint(w http.ResponseWriter, r *http.Request) {
	var user User
	json.NewDecoder(r.Body).Decode(&user)

	claims := &jwtUserClaims{
		user,
		jwt.StandardClaims{
			ExpiresAt: time.Now().Add(time.Minute * 5).Unix(),
		},
	}

	fmt.Println(user.Username)
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenStr, err := token.SignedString(jwtSecret)
	if err != nil {
		fmt.Println(err)
	}
	w.Header().Set("content-type", "application/json")
	w.Write([]byte(`{ "token": "` + tokenStr + `"}`))

}



func main() {
	db, err := sql.Open("sqlite3", "users.db")
	if err != nil{
		panic(err)
	}
	defer db.Close()
	
	rootQuery := graphql.NewObject(graphql.ObjectConfig{
		Name: "Query",
		Fields: graphql.Fields{
			"account": &graphql.Field{
				Type: accountType,
				Resolve: func(p graphql.ResolveParams) (interface{}, error) {
					acc, err := validateJwt(p.Context.Value("token").(string))
					if err != nil {
						return nil, err
					}
					user := GetUser(acc.(User).Username, acc.(User).Password)
					return user, nil
					
				},
			},
		},
	})

	schema, _ := graphql.NewSchema(graphql.SchemaConfig{
		Query: rootQuery,
	})

	mux := http.NewServeMux()

	mux.HandleFunc("/graphql", func(w http.ResponseWriter, r *http.Request) {
		result := graphql.Do(graphql.Params{
			Schema:        schema,
			RequestString: r.URL.Query().Get("query"),
			Context:       context.WithValue(context.Background(), "token", r.URL.Query().Get("token")),
		})
		json.NewEncoder(w).Encode(result)

	})
	mux.HandleFunc("/reg", Registration)
	mux.HandleFunc("/login", CreateTokenEndpoint)
	handler := cors.Default().Handler(mux)
	// srv := &http.Server{
	// 	Addr: fmt.Sprintf(":%d", 8443),
	// 	Handler: handler,
	// }
	log.Fatal(http.Serve(autocert.NewListener("ternyavsky.ru"), handler))
}
