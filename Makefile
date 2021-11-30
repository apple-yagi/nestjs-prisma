.PHONY: init
init:
	@git config --local core.hooksPath .githooks && \
	docker compose build dev prod && \
	docker compose up dev psql -d && \
	make migrate

.PHONY: migrate
migrate:
	docker exec -it nestjs_api_dev ash -c "npm run migrate dev"

.PHONY: dev
dev:
	docker compose up dev psql -d

.PHONY: prod
prod:
	docker compose up prod psql -d
