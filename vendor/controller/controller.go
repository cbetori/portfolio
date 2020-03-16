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

func Resume(w http.ResponseWriter, r *http.Request) {
	x := routes.Resume(r)
	fmt.Fprintf(w, x)
}
