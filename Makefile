.PHONY: init
init:
	@git config --local core.hooksPath .githooks && \
	docker compose up -d --build && \
	make migrate

.PHONY: migrate
migrate:
	docker exec -it dev ash -c "npm run migrate dev"
