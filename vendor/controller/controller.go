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
	w.Header().Set("Content-Type", "application/pdf")
	x := routes.Resume(r)
	http.ServeFile(w, r, x)
}
