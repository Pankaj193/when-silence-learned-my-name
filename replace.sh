#!/bin/bash

# Root directory (current folder)
ROOT_DIR="."

# Search for "Death App" with file name and line number
grep -rn --exclude-dir={node_modules,.git} "Death App" "$ROOT_DIR"
