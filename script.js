// =============================================
// PROFILE WEBSITE - JavaScript DOM Operations
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // -----------------------------------------
    // 0. POPUP / MODAL FUNCTIONALITY
    // -----------------------------------------
    const modalOverlay = document.getElementById('profileModal');
    
    // Open modal function
    function openModal() {
        if (modalOverlay) {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Close modal function
    function closeModal() {
        if (modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
    
    // Click trigger button
    const popupTrigger = document.querySelector('.popup-trigger');
    if (popupTrigger) {
        popupTrigger.addEventListener('click', openModal);
    }
    
    // Close button click
    const modalClose = document.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Click outside modal to close
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
    
    // ESC key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) {
            closeModal();
        }
    });
    
    
    // -----------------------------------------
    // 1. ACTIVE NAVIGATION HIGHLIGHTING
    // -----------------------------------------
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);


    // -----------------------------------------
    // 2. FORM VALIDATION FOR HIRE ME
    // -----------------------------------------
    const hireMeForm = document.querySelector('.hiremeform form');

    if (hireMeForm) {
        hireMeForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameField = document.getElementById('yourname');
            const companyField = document.getElementById('company');
            const positionField = document.getElementById('position');
            const pesanField = document.getElementById('pesan');

            let isValid = true;
            let errorMessages = [];

            // Validate Name
            if (nameField.value.trim()) {
                nameField.style.borderColor = 'red';
                isValid = false;
                errorMessages.push('Nama Anda harus diisi');
            } else {
                nameField.style.borderColor = '#ccc';
            }

            // Validate Company
            if (companyField.value.trim()) {
                companyField.style.borderColor = 'red';
                isValid = false;
                errorMessages.push('Nama Perusahaan harus diisi');
            } else {
                companyField.style.borderColor = '#ccc';
            }

            // Validate Position
            if (positionField.value.trim()) {
                positionField.style.borderColor = 'red';
                isValid = false;
                errorMessages.push('Posisi harus diisi');
            } else {
                positionField.style.borderColor = '#ccc';
            }

            // Validate Message
            if (pesanField.value.trim() === '') {
                pesanField.style.borderColor = 'red';
                isValid = false;
                errorMessages.push('Pesan harus diisi');
            } else {
                pesanField.style.borderColor = '#ccc';
            }

            if (isValid) {
                alert('Terima kasih! Formulir berhasil dikirim.\n\nNama: ' + nameField.value + '\nPerusahaan: ' + companyField.value + '\nPosisi: ' + positionField.value);
                hireMeForm.reset();
            } else {
                alert('Mohon lengkapi semua field:\n• ' + errorMessages.join('\n• '));
            }
        });

        // Remove error styling on input
        const formInputs = hireMeForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = '#ccc';
            });
        });
    }


    // -----------------------------------------
    // 3. MOBILE MENU TOGGLE
    // -----------------------------------------
    const menu = document.querySelector('.menu');
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '&#9776;';
    hamburger.style.display = 'none';
    hamburger.style.position = 'fixed';
    hamburger.style.top = '1rem';
    hamburger.style.right = '1rem';
    hamburger.style.zIndex = '200';
    hamburger.style.background = 'var(--accent)';
    hamburger.style.border = 'none';
    hamburger.style.borderRadius = '5px';
    hamburger.style.padding = '0.5rem 0.8rem';
    hamburger.style.fontSize = '1.5rem';
    hamburger.style.cursor = 'pointer';
    hamburger.style.color = '#fff';
    
    document.body.appendChild(hamburger);

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('mobile-open');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                menu.classList.remove('mobile-open');
            }
        });
    });


    // -----------------------------------------
    // 4. SCROLL TO TOP BUTTON
    // -----------------------------------------
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.innerHTML = '&#8593;';
    scrollTopBtn.title = 'Kembali ke atas';
    scrollTopBtn.style.display = 'none';
    scrollTopBtn.style.position = 'fixed';
    scrollTopBtn.style.bottom = '2rem';
    scrollTopBtn.style.right = '2rem';
    scrollTopBtn.style.zIndex = '150';
    scrollTopBtn.style.background = 'var(--accent)';
    scrollTopBtn.style.border = 'none';
    scrollTopBtn.style.borderRadius = '50%';
    scrollTopBtn.style.width = '50px';
    scrollTopBtn.style.height = '50px';
    scrollTopBtn.style.fontSize = '1.5rem';
    scrollTopBtn.style.cursor = 'pointer';
    scrollTopBtn.style.color = '#fff';
    scrollTopBtn.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)';
    scrollTopBtn.style.transition = 'all 0.3s ease';
    
    document.body.appendChild(scrollTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    // Scroll to top on click
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // -----------------------------------------
    // 5. NAVBAR STICKY EFFECT
    // -----------------------------------------
    const menuElement = document.querySelector('.menu');
    const menuTitle = document.querySelector('.menu .title');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 50) {
            menuElement.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)';
            menuTitle.style.textShadow = '0 0 10px var(--accent)';
        } else {
            menuElement.style.boxShadow = 'none';
            menuTitle.style.textShadow = 'none';
        }
    });


    // -----------------------------------------
    // RESPONSIVE HANDLER
    // -----------------------------------------
    function handleResponsive() {
        const screenWidth = window.innerWidth;
        
        if (screenWidth <= 768) {
            hamburger.style.display = 'block';
            menu.classList.remove('mobile-open');
            menu.style.position = 'relative';
            menu.style.width = '100%';
            menu.style.height = 'auto';
            menu.style.borderRight = 'none';
            menu.style.borderBottom = '1px solid #334155';
        } else {
            hamburger.style.display = 'none';
            menu.style.position = 'fixed';
            menu.style.width = '280px';
            menu.style.height = '100vh';
            menu.style.borderRight = '1px solid #334155';
            menu.style.borderBottom = 'none';
            menu.classList.remove('mobile-open');
        }
    }

    window.addEventListener('resize', handleResponsive);
    handleResponsive(); // Initial check


    // -----------------------------------------
    // ADDITIONAL: SMOOTH SCROLL WITH OFFSET
    // -----------------------------------------
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offset = 80;
                    const targetPosition = targetSection.offsetTop - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // -----------------------------------------
    // ADDITIONAL: ANIMATE SECTIONS ON SCROLL
    // -----------------------------------------
    const animatedSections = document.querySelectorAll('.TENTANG, .PENDIDIKAN, .PENGALAMAN, .KETERAMPILAN, .HIREME');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    animatedSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });


    // -----------------------------------------
    // ADDITIONAL: HOVER EFFECTS FOR BUTTONS
    // -----------------------------------------
    const submitButton = document.querySelector('.button');
    if (submitButton) {
        submitButton.addEventListener('mouseenter', function() {
            this.style.background = 'var(--accent-hover)';
            this.style.color = '#fff';
        });
        submitButton.addEventListener('mouseleave', function() {
            this.style.background = '';
            this.style.color = '';
        });
    }


    // -----------------------------------------
    // ADDITIONAL: SCROLL PROGRESS INDICATOR
    // -----------------------------------------
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '4px';
    progressBar.style.background = 'var(--accent)';
    progressBar.style.zIndex = '1000';
    progressBar.style.width = '0%';
    progressBar.style.transition = 'width 0.1s ease';
    
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercentage + '%';
    });
});
