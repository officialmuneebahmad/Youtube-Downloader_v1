# 🎬 Vivid YouTube Downloader

A high-performance, ultra-lightweight native Windows desktop application for downloading YouTube videos and extracting studio-grade MP3 audio.

![Windows](https://img.shields.io/badge/Platform-Windows%2010%2F11-blue?logo=windows)
![C++](https://img.shields.io/badge/Built%20with-C++-00599C?logo=cplusplus)
![Size](https://img.shields.io/badge/Size-~150KB-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- ⚡ **Lightning Fast** — Native C++ Win32 app, launches in milliseconds
- 🎵 **MP3 Extraction** — Convert to MP3 at 320kbps or 192kbps
- 📋 **Playlist Support** — Download entire playlists in one click
- 🌙 **Dark/Light Mode** — Toggle between beautiful dark and light themes
- 📜 **Download History** — Track all your past downloads
- 🔒 **Safe & Ad-Free** — No telemetry, no ads, no tracking
- 🚀 **Zero Install** — Portable executable, no setup wizard needed

## 📦 Quick Start

1. **Download** `yt-downloader.exe` from the [landing page](https://YOUR_USERNAME.github.io/vivid-yt-downloader/) or [Releases](../../releases)
2. **Run** the executable — no installation required
3. **First launch** auto-downloads `yt-dlp` and `ffmpeg` dependencies

## 🛠️ Building from Source

Requires MinGW (g++ with C++14 support):

```bash
# Compile resources
windres src/resource.rc -O coff -o src/resource.res

# Build executable
g++ -std=c++14 -O3 src/main.cpp src/Downloader.cpp src/History.cpp src/resource.res -o yt-downloader.exe -mwindows -lwininet -lcomctl32 -lole32 -lmsimg32
```

Or simply run `build.bat`.

## 📁 Project Structure

```
yt-downloader/
├── src/
│   ├── main.cpp          # Win32 GUI & window procedure
│   ├── Downloader.cpp    # Download engine (yt-dlp integration)
│   ├── Downloader.h      # Download API & custom messages
│   ├── GUITheme.h        # Dark/Light theme system
│   ├── History.cpp        # Download history management
│   ├── History.h          # History data structures
│   ├── resource.rc        # Windows resource definitions
│   └── app.ico           # Application icon
├── web/                  # Landing page (HTML/CSS/JS)
├── docs/                 # GitHub Pages deployment
├── build.bat             # Build script
└── README.md
```

## 📄 License

MIT License — free for personal and commercial use.
