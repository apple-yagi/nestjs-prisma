.PHONY: init
init:
	@git config --local core.hooksPath .githooks && \
	docker compose build dev prod && \
	docker compose up dev psql -d && \
	make migrate

.PHONY: migrate
migrate:
	docker exec -it nestjs_api_dev ash -c "npm run migrate dev"
