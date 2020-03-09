package controller

import (
	"fmt"
	"net/http"
	"routes"
)

func Start(w http.ResponseWriter, r *http.Request) {
	x := routes.Start(r)
	fmt.Fprintf(w, x)
}
