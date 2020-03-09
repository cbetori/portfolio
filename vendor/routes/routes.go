package routes

import (
	"net/http"
)

func Start(r *http.Request) string {
	return "API Running"
}
