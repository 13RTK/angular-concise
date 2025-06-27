# Find all node_modules folders and delete them
find . -type d -name "node_modules" -exec rm -rf {} \;
