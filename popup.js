document.getElementById('toggleButton').addEventListener('click', () => {
  chrome.storage.sync.get('enabled', (result) => {
    chrome.storage.sync.set({ enabled: !result.enabled });
    updateToggleButtonText();
  });
});

function updateToggleButtonText() {
  chrome.storage.sync.get('enabled', (result) => {
    document.getElementById('toggleButton').textContent = result.enabled ? 'Disable Session Clearing' : 'Enable Session Clearing';
  });
}

updateToggleButtonText();