@echo off
echo ================================
echo RWUA Development Server (Light)
echo ================================

echo.
echo Installing dependencies...
call npm install

echo.
echo Starting lightweight development server...
echo This version uses less memory but may be slower
echo Open http://localhost:3000 in your browser
echo Press Ctrl+C to stop the server
echo.

set NODE_OPTIONS=--max-old-space-size=2048
call npm run dev:safe