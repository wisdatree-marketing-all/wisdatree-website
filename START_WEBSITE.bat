@echo off
title Wisdatree Website Preview
cls
echo ========================================================
echo   Launching Wisdatree Website (WisdaSchool and WisdaCare)...
echo ========================================================
echo.
echo Starting local web server...
echo.

node "%~dp0preview_server.cjs"

pause
