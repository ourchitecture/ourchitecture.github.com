.DEFAULT_GOAL:=all

.PHONY: all
all: init install check

.PHONY: nvm
nvm:
	@nvm use $(cat ./.nvmrc)
	@npm install --location=global npm yarn

.PHONY: init
init:
	@export CI=1 \
	&& yarn install --frozen-lockfile --immutable

.PHONY: install
install:
	@export CI=1 \
	&& yarn build \
	&& cp ./www/index.html ./www/404.html

.PHONY: check
check:
	@export CI=1 \
	&& yarn test \
		--code-coverage \
		--configuration=ci

.PHONY: start
start:
	@yarn start

.PHONY: dev
dev: start
