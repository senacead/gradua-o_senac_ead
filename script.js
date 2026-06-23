document.addEventListener('DOMContentLoaded', () => {
    
    // --- MENU SANFONA (SIDEBAR ACCORDION) ---
    const collapseBtns = document.querySelectorAll('.collapse-btn');

    collapseBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parentItem = btn.parentElement;
            
            // Fecha outros menus abertos se quiser um comportamento estrito (opcional)
            // document.querySelectorAll('.nav-item-collapsible').forEach(item => {
            //     if(item !== parentItem) item.classList.remove('active');
            // });

            parentItem.classList.toggle('active');
        });
    });

    // --- RESPONSIVIDADE SIDEBAR (MOBILE TOGGLE) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('open');
        
        const icon = menuToggle.querySelector('i');
        if (sidebar.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fecha a barra lateral ao clicar fora dela (no mobile)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 992) {
            if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
                sidebar.classList.remove('open');
                menuToggle.querySelector('i').className = 'fas fa-bars';
            }
        }
    });

    // --- INTERAÇÃO DE ABAS (PROVA FÁCIL) ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            document.getElementById(`tab-${targetTab}`).classList.add('active');
        });
    });

    // --- DESTAQUE DE LINK ATIVO CONFORME O SCROLL DA TELA ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= (sectionTop - 180)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            // Ativa o link correspondente à seção atual
            if (href === `#${currentSectionId}`) {
                link.classList.add('active');
            }
            // Regra para manter o "Início" aceso no topo
            if (window.pageYOffset < 200 && href === '#home') {
                link.classList.add('active');
            }
        });
    });
});