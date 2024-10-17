1. Install PostgreSQL with Docker
- Go to hub.docker.com and search for `PostgreSQL`.
- Take the command to run PostgreSQL with Docker. Ex: docker pull postgres:12-alpine
2. Run PostgreSQL with Docker
```bash
docker run --name postgres12 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=123 -d postgres:12-alpine
```
3. Access PostgreSQL with Docker
```bash
docker exec -it postgres12 psql -U root
```
 - Check the version of PostgreSQL: `SELECT version();`
4. Quit PostgreSQL
```bash
\q
```