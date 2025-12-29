@echo off
echo ================================
echo RWUA Project Deployment Script
echo ================================

echo.
echo Checking Git status...
git status

echo.
echo Building the project with memory optimization...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed! Trying with safe mode...
    call npm run build:safe
    if %errorlevel% neq 0 (
        echo Build failed! Please fix errors before deploying.
        pause
        exit /b 1
    )
)

echo.
echo Build successful! 
echo.
set /p commit_message="Enter commit message: "

echo.
echo Adding all changes...
git add .

echo.
echo Committing changes...
git commit -m "%commit_message%"

echo.
echo Pushing to GitHub...
git push origin main

echo.
echo ================================
echo Deployment completed successfully!
echo ================================
pause