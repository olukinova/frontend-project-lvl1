install:
	npm ci

brain-games:
	node src/bin/brain-games.js

publish:
	npm publish --dry-run

make lint:
	npx eslint 
