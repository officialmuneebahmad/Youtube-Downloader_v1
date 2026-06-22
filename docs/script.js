document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // Theme Toggling
    // ----------------------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Load saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // ----------------------------------------------------
    // FAQ Accordion
    // ----------------------------------------------------
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            
            // Close other items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });

            // Toggle current item
            faqItem.classList.toggle('active');
        });
    });

    // ----------------------------------------------------
    // Interactive Win32 App Simulator
    // ----------------------------------------------------
    const mockUrlInput = document.getElementById('mock-url-input');
    const mockPasteBtn = document.getElementById('mock-paste-btn');
    const mockQualityDropdown = document.getElementById('mock-quality-dropdown');
    const mockQualitySelected = document.getElementById('mock-quality-selected');
    const mockDropdownList = document.getElementById('mock-dropdown-list');
    const mockAudioChk = document.getElementById('mock-audio-chk');
    const mockPlaylistChk = document.getElementById('mock-playlist-chk');
    const mockStartBtn = document.getElementById('mock-start-btn');
    const mockCancelBtn = document.getElementById('mock-cancel-btn');
    const mockStatusText = document.getElementById('mock-status-text');
    const mockProgressBar = document.getElementById('mock-progress-bar');
    const mockHistoryList = document.getElementById('mock-history-list');

    let simInterval = null;
    let isSimulating = false;

    // Dropdown toggle inside simulator
    mockQualityDropdown.addEventListener('click', (e) => {
        if (isSimulating) return;
        e.stopPropagation();
        mockDropdownList.style.display = mockDropdownList.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown on click outside
    document.addEventListener('click', () => {
        mockDropdownList.style.display = 'none';
    });

    // Handle dropdown item click
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            mockQualitySelected.textContent = item.textContent;
            mockDropdownList.style.display = 'none';
            
            const val = parseInt(item.getAttribute('data-val'));
            if (val >= 4) {
                mockAudioChk.checked = true;
            } else {
                mockAudioChk.checked = false;
            }
        });
    });

    // Handle Paste Button Click
    mockPasteBtn.addEventListener('click', () => {
        if (isSimulating) return;
        mockUrlInput.value = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    });

    // Simulator Sequence
    mockStartBtn.addEventListener('click', () => {
        if (isSimulating) return;
        runSimulatorSequence();
    });

    function runSimulatorSequence() {
        isSimulating = true;
        
        // Disable inputs
        mockStartBtn.disabled = true;
        mockPasteBtn.disabled = true;
        mockCancelBtn.disabled = false;
        
        // Step 1: Simulated URL Typing (if empty)
        if (!mockUrlInput.value) {
            let urlText = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            let index = 0;
            mockUrlInput.value = "";
            
            const typeInterval = setInterval(() => {
                mockUrlInput.value += urlText[index];
                index++;
                if (index >= urlText.length) {
                    clearInterval(typeInterval);
                    // Proceed to select format
                    setTimeout(selectFormatStep, 500);
                }
            }, 30);
        } else {
            selectFormatStep();
        }
    }

    function selectFormatStep() {
        // Step 2: Simulated drop selection (MP3 320k)
        mockQualitySelected.textContent = "MP3 Audio (High 320kbps)";
        mockAudioChk.checked = true;
        
        setTimeout(bootstrapDependenciesStep, 600);
    }

    function bootstrapDependenciesStep() {
        // Step 3: Show dependency setup (Simulating first run)
        mockStatusText.textContent = "Status: Downloading dependency: yt-dlp.exe... (0%)";
        mockProgressBar.style.width = "0%";
        
        let progress = 0;
        const depInterval = setInterval(() => {
            progress += 10;
            mockProgressBar.style.width = `${progress}%`;
            mockStatusText.textContent = `Status: Downloading dependency: yt-dlp.exe... (${progress}%)`;
            
            if (progress >= 100) {
                clearInterval(depInterval);
                
                setTimeout(() => {
                    mockStatusText.textContent = "Status: Connecting to YouTube...";
                    mockProgressBar.style.width = "0%";
                    
                    setTimeout(downloadVideoStep, 800);
                }, 400);
            }
        }, 80);
    }

    function downloadVideoStep() {
        // Step 4: Simulate downloading file
        mockStatusText.textContent = "Status: Downloading: 0% | Speed: --- | ETA: ---";
        
        let progress = 0;
        const downloadInterval = setInterval(() => {
            progress += 5;
            mockProgressBar.style.width = `${progress}%`;
            
            let speed = (10 + Math.random() * 5).toFixed(1);
            let eta = Math.ceil((100 - progress) / 12);
            let etaStr = eta < 10 ? `00:0${eta}` : `00:${eta}`;
            
            mockStatusText.textContent = `Status: Downloading: ${progress}% | Speed: ${speed}MiB/s | ETA: ${etaStr}`;
            
            if (progress >= 100) {
                clearInterval(downloadInterval);
                
                // Step 5: Convert Audio
                mockStatusText.textContent = "Status: Extracting audio and converting to MP3...";
                mockProgressBar.style.width = "95%";
                
                setTimeout(completeDownloadStep, 1500);
            }
        }, 120);
    }

    function completeDownloadStep() {
        // Step 6: Complete
        mockStatusText.textContent = "Status: Download complete! Saved to downloads\\";
        mockProgressBar.style.width = "100%";
        
        // Add to history listbox
        const now = new Date();
        const dateStr = now.toISOString().slice(0, 10) + " " + now.toTimeString().slice(0, 8);
        
        const historyItem = document.createElement('div');
        historyItem.className = "history-item";
        historyItem.textContent = `${dateStr}  |  Rick Astley - Never Gonna Give You Up  [MP3 (320k)]  -  Success`;
        mockHistoryList.insertBefore(historyItem, mockHistoryList.firstChild);

        // Reset visual state
        isSimulating = false;
        mockStartBtn.disabled = false;
        mockPasteBtn.disabled = false;
        mockCancelBtn.disabled = true;
    }
});
