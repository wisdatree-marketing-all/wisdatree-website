@echo off
title Push Wisdatree to GitHub
cls
echo ========================================================
echo   Pushing Wisdatree Website to GitHub...
echo   Repository: https://github.com/wisdatree-marketing-all/wisdatree-website
echo ========================================================
echo.

git push -u origin main

echo.
echo ========================================================
echo Done! If you were prompted, authenticate with GitHub in your browser.
echo ========================================================
pause
