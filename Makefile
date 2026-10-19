# Every team fills in the commands for their own stack.
# The CI pipeline calls these targets, so the names must not change.

.PHONY: install test build run docker-build docker-up

install:
	@echo "Verifying project dependencies..."

test:
	node tests/test.js

build:
	@echo "Production web assets ready."

run:
	npx serve .

# Needed from M4 onwards
docker-build:
	docker build -t ghcr.io/skit-devops-2026/devops-24eskcs131:latest .

docker-up:
	docker compose up --build -d
