.PHONY: init
init:
	@git config --local core.hooksPath .githooks && \
	docker compose build dev prod && \
	docker compose up dev psql -d
