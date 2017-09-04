package api

import (
	"encoding/json"
	"net/http"
)

func serveError(w http.ResponseWriter, code int, err error) {
	w.WriteHeader(500)
	w.Write([]byte(err.Error()))
}

func serveAsJSON(w http.ResponseWriter, data interface{}) {
	b, err := json.Marshal(data)
	if err != nil {
		serveError(w, 500, err)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	_, err = w.Write(b)
	if err != nil {
		serveError(w, 500, err)
	}
}
