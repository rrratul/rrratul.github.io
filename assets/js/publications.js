document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('#publications-table tbody');
    if (!table) {
        return;
    }

    const rows = Array.from(table.querySelectorAll('tr'));
    const searchInput = document.querySelector('#pub-search');
    const themeFilter = document.querySelector('#pub-theme-filter');
    const categoryFilter = document.querySelector('#pub-category-filter');
    const sortSelect = document.querySelector('#pub-sort');
    const exportButton = document.querySelector('[data-export-bibtex]');

    function matchesFilters(row) {
        const search = (searchInput?.value || '').trim().toLowerCase();
        const theme = themeFilter?.value || '';
        const category = categoryFilter?.value || '';

        const text = row.innerText.toLowerCase();
        const rowTheme = row.dataset.theme || '';
        const rowCategory = row.dataset.category || '';

        const searchMatch = !search || text.includes(search);
        const themeMatch = !theme || rowTheme === theme;
        const categoryMatch = !category || rowCategory === category;

        return searchMatch && themeMatch && categoryMatch;
    }

    function sortRows(data) {
        if (!sortSelect) {
            return data;
        }

        const [key, direction] = sortSelect.value.split('-');
        const multiplier = direction === 'asc' ? 1 : -1;

        return [...data].sort((a, b) => {
            if (key === 'year') {
                return (Number(a.dataset.year) - Number(b.dataset.year)) * multiplier;
            }
            if (key === 'citations') {
                return (Number(a.dataset.citations) - Number(b.dataset.citations)) * multiplier;
            }
            return 0;
        });
    }

    function render() {
        const filtered = rows.filter(matchesFilters);
        const sorted = sortRows(filtered);
        table.replaceChildren(...sorted);
        return sorted;
    }

    [searchInput, themeFilter, categoryFilter, sortSelect]
        .filter(Boolean)
        .forEach(control => control.addEventListener('input', render));

    rows.forEach(row => {
        row.querySelectorAll('[data-copy-bibtex]').forEach(button => {
            button.addEventListener('click', async () => {
                const content = button.dataset.bibtex || row.dataset.bibtex || '';
                if (!content) {
                    return;
                }
                try {
                    await navigator.clipboard.writeText(content);
                    button.dataset.copied = 'true';
                    button.textContent = 'Copied';
                    setTimeout(() => {
                        button.dataset.copied = 'false';
                        button.textContent = 'Cite';
                    }, 2000);
                } catch (error) {
                    console.error('Clipboard write failed', error);
                }
            });
        });
    });

    if (exportButton) {
        exportButton.addEventListener('click', () => {
            const visible = render();
            const bibtex = visible
                .map(row => row.dataset.bibtex || '')
                .filter(Boolean)
                .join('\n\n');

            const blob = new Blob([bibtex], { type: 'application/x-bibtex' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'publications.bib';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        });
    }

    render();
});
