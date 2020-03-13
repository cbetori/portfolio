package routes

import (
	"net/http"
)

func Start(r *http.Request) string {
	return "API Running"
}

func Resume(r *http.Request) string {
	return "./pdfs/resume.pdf"
}
