# Find all node_modules folders and delete them
find . -type d -name "node_modules" -exec rm -rf {} \;

# Find all pnpm-lock.json files and delete them
find . -type f -name "pnpm-lock.yaml" -exec rm -rf {} \;