1. Using golang migration repo: https://github.com/golang-migrate/migrate/tree/master/cmd/migrate
2. Read Config MAKEFILE for more details.
3. Migrate force command as I suggested above:
migrate -path db/migration -database "$(DB_URL)" force V
Ex:
`migrate -path db/migration -database "postgresql://root:123@localhost:5432/simple_bank?sslmode=disable" force 1`