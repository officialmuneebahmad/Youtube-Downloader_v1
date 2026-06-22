#ifndef HISTORY_H
#define HISTORY_H

#include <string>
#include <vector>

struct HistoryEntry {
    std::string dateTime;
    std::string title;
    std::string quality;
    std::string status;
};

std::vector<HistoryEntry> LoadHistory();
void SaveHistory(const std::vector<HistoryEntry>& history);
void AddHistoryEntry(const std::string& title, const std::string& quality, const std::string& status);
void ClearHistoryFile();

#endif // HISTORY_H
