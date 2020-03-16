package routes

import (
	"net/http"
	"os"

	_ "github.com/joho/godotenv/autoload"
)

func Start(r *http.Request) string {
	return "API Running"
}

func Resume(r *http.Request) string {
	return string(os.Getenv("RESUME"))

}
