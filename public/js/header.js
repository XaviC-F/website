// Shared header component
document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
        <div class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle dark mode">
            <div class="toggle-track">
                <div class="toggle-thumb">
                    <svg class="sun-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="5"/>
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                    </svg>
                    <svg class="moon-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                </div>
            </div>
        </div>
        <h1>Xavi Costafreda-Fu</h1>
        <p align="center">
            <a href="/">Home</a> |
            <a href="/work">Work</a> |
            <a href="/vibes">Vibes</a> |
            <a href="https://xavicf.substack.com/">Writing</a> |
            <a href="https://garden.xavicf.com/">Garden</a> |
            <a href="https://garden.xavicf.com/now">Now</a> |
            <a href="https://x.com/xavicfu">Twitter</a>
        </p>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
