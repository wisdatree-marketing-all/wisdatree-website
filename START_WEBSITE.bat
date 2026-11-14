@echo off
title Wisdatree Website Preview
cls
echo ========================================================
echo   Launching Wisdatree Website (WisdaSchool and WisdaCare)...
echo ========================================================
echo.
echo Starting local web server on port 3000...
echo Opening in your browser automatically...
echo.

node "%~dp0preview_server.cjs"

pause
