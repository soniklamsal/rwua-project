@echo off
echo ================================
echo System Memory Check
echo ================================

echo.
echo Checking available system memory...
wmic OS get TotalVisibleMemorySize,FreePhysicalMemory /format:table

echo.
echo Checking Node.js processes...
tasklist /FI "IMAGENAME eq node.exe" /FO TABLE

echo.
echo Memory recommendations:
echo - If you have less than 8GB RAM, use scripts/dev-light.bat
echo - If you have 8GB+ RAM, use scripts/dev.bat
echo - If build fails, try: npm run build:safe
echo.

pause