const tabSelects = document.querySelectorAll('.tabs-select');

  tabSelects.forEach(tabSelect => {
    // Ambil grup tab dari atribut data-tabs-group
    const group = tabSelect.getAttribute('data-tabs-group');
    
    // Set default selected value, contohnya filesTab untuk grup 1
    if (group === 'group1') {
      tabSelect.value = 'filesTab';
    } else if (group === 'group2') {
      tabSelect.value = 'tocTab';
    }

    tabSelect.addEventListener('change', function() {
      const selectedTab = tabSelect.value;
      const tabContents = tabSelect.closest('.tabs-nav-wrapper').querySelectorAll('.tab-content');

      // Sembunyikan semua tab dalam grup yang sama
      tabContents.forEach(content => {
        content.classList.remove('active');
      });

      // Tampilkan tab yang dipilih dalam grup yang sama
      const selectedTabContent = Array.from(tabContents).find(content => content.dataset.tab === selectedTab);
      if (selectedTabContent) {
        selectedTabContent.classList.add('active');
      }
    });
  });

// COLLAPSE
document.addEventListener('DOMContentLoaded', function () {
    const collapseButtons = document.querySelectorAll('.btn-collapse');

    collapseButtons.forEach((button, index) => {
        const collapseContent = button.nextElementSibling;

        // Set the first collapse content to be open by default
        if (index === 0) {
            collapseContent.style.display = "block";
        }

        button.addEventListener('click', function() {
            if (collapseContent.style.display === "block") {
                collapseContent.style.display = "none";
            } else {
                collapseContent.style.display = "block";
            }
        });
    });
});

function toggleAllCollapse(action) {
    const collapseContents = document.querySelectorAll('.collapse-content');
    collapseContents.forEach(content => {
        if (action === 'open') {
            content.style.display = 'block';
        } else if (action === 'close') {
            content.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleCollapseAllButton = document.getElementById('toggleCollapseAll');
    toggleCollapseAllButton.setAttribute('data-action', 'close');
    
    toggleCollapseAllButton.addEventListener('click', function() {
        const action = this.getAttribute('data-action');
        toggleAllCollapse(action);
        this.setAttribute('data-action', action === 'close' ? 'open' : 'close');
    });
});

document.addEventListener('DOMContentLoaded', function() {
  function updateCounts() {
    const contentElement = document.getElementById('contentArticle');
    const content = contentElement.innerText || contentElement.textContent;
    const wordCount = content.trim().split(/\s+/).length;
    const charCount = content.length;
    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('charCount').textContent = charCount;
  }

  updateCounts();
  document.getElementById('contentArticle').addEventListener('input', updateCounts);
});