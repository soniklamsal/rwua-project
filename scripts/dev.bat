@echo off
echo ================================
echo RWUA Development Server
echo ================================

echo.
echo Installing dependencies...
call npm install

echo.
echo Starting development server with increased memory...
echo Open http://localhost:3000 in your browser
echo Press Ctrl+C to stop the server
echo.

call npm run dev