package main

import (
	"fmt"

	"github.com/PabloCassio/ApiRestGo.git/database"
	"github.com/PabloCassio/ApiRestGo.git/models"
	"github.com/PabloCassio/ApiRestGo.git/routes"
)

func main() {

	models.Personalidades = []models.Personalidade{
		/* {Id: 1, Nome: "Nome 1", Historia: "Historia 1"},
		{Id: 2, Nome: "Nome 2", Historia: "Historia 2"}, */
	}

	database.ConectaComBancoDeDados()
	fmt.Println("Iniciando servidor Rest com Go")
	routes.HandleRequest()
}
