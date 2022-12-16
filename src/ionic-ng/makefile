.DEFAULT_GOAL:=all

.PHONY: all
all: init check search-index install

.PHONY: nvm
nvm:
	@nvm use $(cat ./.nvmrc)
	@npm install --location=global npm yarn

.PHONY: init
init:
	@export CI=1 \
	&& yarn install --frozen-lockfile --immutable

.PHONY: check-unit
check-unit:
ifdef name
	@yarn test \
		--configuration=ci \
		--watch=false \
		--include=**/$(name).spec.ts
else
	@export CI=1 \
	&& yarn test \
		--code-coverage \
		--configuration=ci
endif

.PHONY: check-e2e
check-e2e:
	@export CI=1 \
	&& yarn e2e \
		--browser=chrome \
		--headless \
		--watch=false \
		--exit

.PHONY: check
check: check-unit check-e2e

.PHONY: test
test: check-unit

.PHONY: e2e
e2e: check-e2e

.PHONY: install
install:
	@export CI=1 \
	&& yarn build \
	&& cp ./www/index.html ./www/404.html

.PHONY: search-index
search-index:
	@export CI=1 \
	&& yarn e2e \
		--spec="**/search-index**" \
		--browser=chrome \
		--headless \
		--watch=false \
		--exit

.PHONY: start
start:
	@yarn start

.PHONY: dev
dev: start

.PHONY: dev-test
dev-test:
	@yarn test

.PHONY: dev-e2e
dev-e2e:
	@yarn e2e
