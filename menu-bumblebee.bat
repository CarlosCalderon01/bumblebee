@echo off
title Bumblebee Project Script Menu
:menu
echo ============================================================
echo                Bumblebee Project Script Menu
echo ============================================================
echo.
echo Select an option to run the corresponding npm script:
echo.
echo 1. Build Project (next build)
echo 2. Start Development Mode (next dev)
echo 3. Start Production Mode (next start)
echo 4. Lint Code (next lint)
echo 5. Esquema de carpetas (next lint)
echo 0. Exit
echo.
set /p choice="Enter your choice (0-4): "

if "%choice%"=="1" (
    npm run build
) else if "%choice%"=="2" (
    npm run dev
) else if "%choice%"=="3" (
    npm run start
) else if "%choice%"=="4" (
    npm run lint
) else if "%choice%"=="5" (
    node read-schema-folders.js
) else if "%choice%"=="0" (
    exit
) else (
    echo Invalid choice. Please try again.
    pause
    cls
    goto menu
)
