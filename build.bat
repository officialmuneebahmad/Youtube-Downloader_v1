@echo off
echo ===================================================
echo   Compiling Vivid YouTube Downloader (GUI)...
echo ===================================================

echo.
echo [1/3] Compiling Application Resources...
windres src/resource.rc -O coff -o src/resource.res
if %errorlevel% neq 0 (
    echo [ERROR] Failed to compile resources.
    pause
    exit /b %errorlevel%
)

echo [2/3] Compiling C++ Source Code...
g++ -std=c++14 -O3 src/main.cpp src/Downloader.cpp src/History.cpp src/resource.res -o yt-downloader.exe -mwindows -lwininet -lcomctl32 -lole32 -lmsimg32
if %errorlevel% neq 0 (
    echo [ERROR] Compilation failed.
    pause
    exit /b %errorlevel%
)

echo [3/3] Build Completed Successfully!
echo Output executable: yt-downloader.exe
copy yt-downloader.exe web\yt-downloader.exe /Y
copy yt-downloader.exe docs\yt-downloader.exe /Y
echo.
echo Press any key to exit...
pause > null
del null
