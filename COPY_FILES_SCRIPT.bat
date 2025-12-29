@echo off
echo Copying files to GitHub repository...

REM Set source and destination paths
set SOURCE=C:\Users\dell\OneDrive\Desktop\rwua-svc\rwua-website-clone
set DEST=C:\Users\dell\OneDrive\Desktop\rwua-project

REM Create directories if they don't exist
mkdir "%DEST%\app\success-story" 2>nul
mkdir "%DEST%\app\vacancy" 2>nul
mkdir "%DEST%\app\contact" 2>nul
mkdir "%DEST%\components\ui" 2>nul
mkdir "%DEST%\lib" 2>nul
mkdir "%DEST%\public\images" 2>nul

REM Copy page files
copy "%SOURCE%\app\success-story\page.tsx" "%DEST%\app\success-story\"
copy "%SOURCE%\app\vacancy\page.tsx" "%DEST%\app\vacancy\"
copy "%SOURCE%\app\contact\page.tsx" "%DEST%\app\contact\"

REM Copy UI components
copy "%SOURCE%\components\ui\SearchBox.tsx" "%DEST%\components\ui\"
copy "%SOURCE%\components\ui\SearchSidebar.tsx" "%DEST%\components\ui\"
copy "%SOURCE%\components\ui\StoryCard.tsx" "%DEST%\components\ui\"
copy "%SOURCE%\components\ui\StoryHeading.tsx" "%DEST%\components\ui\"
copy "%SOURCE%\components\ui\VacancyCard.tsx" "%DEST%\components\ui\"
copy "%SOURCE%\components\ui\ContactForm.tsx" "%DEST%\components\ui\"

REM Copy lib files
copy "%SOURCE%\lib\types.ts" "%DEST%\lib\"
copy "%SOURCE%\lib\utils.ts" "%DEST%\lib\"

REM Copy images
copy "%SOURCE%\public\images\success1.jpg" "%DEST%\public\images\"
copy "%SOURCE%\public\images\success2.jpg" "%DEST%\public\images\"
copy "%SOURCE%\public\images\vacancy1.jpeg" "%DEST%\public\images\"
copy "%SOURCE%\public\images\vacancy2.jpeg" "%DEST%\public\images\"
copy "%SOURCE%\public\images\vacancy3.jpg" "%DEST%\public\images\"

REM Copy configuration files
copy "%SOURCE%\package.json" "%DEST%\"
copy "%SOURCE%\tsconfig.json" "%DEST%\"
copy "%SOURCE%\next.config.ts" "%DEST%\"
copy "%SOURCE%\tailwind.config.ts" "%DEST%\"
copy "%SOURCE%\postcss.config.mjs" "%DEST%\"
copy "%SOURCE%\app\globals.css" "%DEST%\app\"
copy "%SOURCE%\README.md" "%DEST%\"

echo Files copied successfully!
echo Now run the git commands to push to GitHub.
pause