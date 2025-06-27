#!/bin/bash
cd /home/kavia/workspace/code-generation/recipeexplorer-92250-61fa5ca0/web_frontend_workspace/web_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

