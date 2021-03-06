package handlers

import (
	"net/http"

	"github.com/casperin/pg-amigo/internal/connection"
	"github.com/go-chi/chi"
)

func Database(w http.ResponseWriter, r *http.Request) {
	dbName := chi.URLParam(r, "db")
	db := connection.New(dbName)
	tables, err := connection.GetTablesOverview(db, dbName)
	c := Content{
		"dbName": db.DBName,
		"tables": tables,
	}
	MustServeOr500(w, err, c, "database")
}
