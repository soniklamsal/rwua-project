@echo off
echo Setting up GitHub push for RWUA project...

REM Navigate to desktop
cd C:\Users\dell\OneDrive\Desktop\

REM Clone repository if it doesn't exist
if not exist "rwua-project" (
    echo Cloning repository...
    git clone https://github.com/soniklamsal/rwua-project.git
)

REM Navigate to repository
cd rwua-project

REM Switch to branch
git checkout success_story+vacancy_contact_us

echo Repository ready! Now copy your files and run git commands.
echo.
echo Next steps:
echo 1. Copy files from rwua-website-clone to rwua-project
echo 2. Run: git add .
echo 3. Run: git commit -m "Add three pages"
echo 4. Run: git push origin success_story+vacancy_contact_us
pause