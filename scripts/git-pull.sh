#!/bin/bash
set -e
cd /vercel/share/v0-project
git fetch origin
git pull origin v0/junman140-231cb0e4 --rebase
echo "Pull complete."
git log --oneline -5
