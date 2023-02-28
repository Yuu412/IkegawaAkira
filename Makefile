# フロントエンドのサービス名
front=front

up:
	@echo "================================="
	@echo "コンテナの起動（dev環境）"
	@echo "================================="
	docker compose up

up-d:
	@echo "================================="
	@echo "コンテナの起動（dev環境・バックグラウンド実行）"
	@echo "================================="
	docker compose up -d

down:
	@echo "================================="
	@echo "コンテナを停止します（dev環境）"
	@echo "================================="
	docker compose down

build:
	@echo "================================="
	@echo "コンテナの構築 & 起動（dev環境）"
	@echo "================================="
	docker compose down
	docker compose up

build-d:
	@echo "================================="
	@echo "コンテナの構築 & 起動（dev環境・バックグラウンド実行）"
	@echo "================================="
	docker compose down
	docker compose up


in-front:
	@echo "================================="
	@echo "Reactのコンテナに入ります"
	@echo "================================="
	docker-compose run --rm $(front) sh
