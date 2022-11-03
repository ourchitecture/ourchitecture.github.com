site_path=./src/ionic-ng/

.DEFAULT_GOAL:=all

.PHONY: all
all:
	@cd $(site_path) && "$(MAKE)" $@

.PHONY: init
init:
	@cd $(site_path) && "$(MAKE)" $@

.PHONY: install
install:
	@rm -rf ./docs/ \
	&& cd $(site_path) \
	&& "$(MAKE)" init $@ \
	&& cp -r ./www/ ../../docs/

.PHONY: check
check:
	@cd $(site_path) && "$(MAKE)" init $@

.PHONY: start
start:
	@cd $(site_path) && "$(MAKE)" init $@
