<script>
        // === JavaScript Features (Minimum 3 Required) ===
        
        // Feature 1: Smooth Scrolling for internal links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Calculate target position, accounting for fixed header height (4rem or 64px)
                    const headerHeight = 64; 
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
                        // Update icon back to bars
                        toggle.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });


        // Feature 2: Mobile Navigation Toggle (Hamburger Menu)
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const nav = document.getElementById('main-nav');
            const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
            
            nav.classList.toggle('active');
            this.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle between bars and close icon
            if (!isExpanded) {
                this.innerHTML = '<i class="fas fa-times"></i>'; // Close icon
            } else {
                this.innerHTML = '<i class="fas fa-bars"></i>'; // Hamburger icon
            }
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

        // Check for saved theme preference on load
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setMode(true);
        } else if (savedTheme === 'light') {
            setMode(false);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Check system preference if no theme is saved
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
