#ifndef GUI_THEME_H
#define GUI_THEME_H

#include <windows.h>

struct Theme {
    COLORREF bgWindow;
    COLORREF bgControl;
    COLORREF fgText;
    COLORREF bgEdit;
    COLORREF fgEdit;
    HBRUSH hbrWindow;
    HBRUSH hbrControl;
    HBRUSH hbrEdit;
};

inline Theme CreateDarkTheme() {
    Theme t;
    t.bgWindow = RGB(24, 24, 28);      // Dark slate
    t.bgControl = RGB(24, 24, 28);     // Same for labels
    t.fgText = RGB(230, 230, 235);     // Off-white
    t.bgEdit = RGB(35, 35, 40);        // Dark input field
    t.fgEdit = RGB(255, 255, 255);     // White text in inputs
    t.hbrWindow = CreateSolidBrush(t.bgWindow);
    t.hbrControl = CreateSolidBrush(t.bgControl);
    t.hbrEdit = CreateSolidBrush(t.bgEdit);
    return t;
}

inline Theme CreateLightTheme() {
    Theme t;
    t.bgWindow = RGB(245, 245, 247);    // Light off-white
    t.bgControl = RGB(245, 245, 247);
    t.fgText = RGB(33, 33, 33);        // Dark grey
    t.bgEdit = RGB(255, 255, 255);     // Pure white inputs
    t.fgEdit = RGB(0, 0, 0);           // Black text in inputs
    t.hbrWindow = CreateSolidBrush(t.bgWindow);
    t.hbrControl = CreateSolidBrush(t.bgControl);
    t.hbrEdit = CreateSolidBrush(t.bgEdit);
    return t;
}

inline void FreeTheme(Theme& t) {
    if (t.hbrWindow) DeleteObject(t.hbrWindow);
    if (t.hbrControl) DeleteObject(t.hbrControl);
    if (t.hbrEdit) DeleteObject(t.hbrEdit);
    t.hbrWindow = nullptr;
    t.hbrControl = nullptr;
    t.hbrEdit = nullptr;
}

#endif // GUI_THEME_H
