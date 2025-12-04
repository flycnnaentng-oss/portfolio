<script>
        // === JavaScript Features ===
        
        // Feature 1: Smooth Scrolling & Header Offset
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Header height is 4.5rem (approx 72px)
                    const headerHeight = 72; 
                    const targetPosition = targetElement.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu after clicking a link
                    const nav = document.getElementById('main-nav');
                    const toggle = document.getElementById('menu-toggle');
                    if (nav.classList.contains('active')) {
                        nav.classList.remove('active');
                        toggle.setAttribute('aria-expanded', 'false');
                        toggle.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });


        // Feature 2: Mobile Navigation Toggle (Hamburger Menu)
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const nav = document.getElementById('main-nav');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            nav.classList.toggle('active');
            this.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle between bars and close icon
            this.innerHTML = isExpanded 
                ? '<i class="fas fa-bars"></i>' 
                : '<i class="fas fa-times"></i>';
        });


        // Feature 3: Dark Mode Toggle
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const body = document.body;
        const icon = darkModeToggle.querySelector('i');

        // Function to set the mode
        function setMode(isDark) {
            if (isDark) {
                body.classList.add('dark-mode');
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-mode');
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
                localStorage.setItem('theme', 'light');
            }
        }

        // Initialize theme based on storage or system preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setMode(savedTheme === 'dark');
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setMode(true);
        } else {
            setMode(false);
        }

        // Event listener for the toggle button
        darkModeToggle.addEventListener('click', function() {
            const isDark = body.classList.contains('dark-mode');
            setMode(!isDark);
        });
        
    </script>
</body>
</html>
