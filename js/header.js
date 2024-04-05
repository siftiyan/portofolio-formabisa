const header = `
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="/" class="logo d-flex align-items-center">
            <img src="../images/portofolio image/header-formabisa.png" alt="Formabisa Logo" />
        </a>
        <!-- .navbar -->
        <nav id="navbar" class="navbar">
            <ul>
                <li><a href="/" class="active">Home</a></li>
                <li><a href="./pages/about.html">About</a></li>
                <li><a href="./pages/our_event.html">Our Event</a></li>
                <li><a href="./pages/contact.html">Contact</a></li>
                <li><a href="./pages/blog.html">Blog</a></li>
            </ul>
        </nav>

        <!-- BurgerMenu -->
        <i class="mobile-nav-toggle mobile-nav-show bi bi-list">
            <span class="material-symbols-outlined"> menu </span>
        </i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x">
            <span class="material-symbols-outlined"> close </span>
        </i>

    </div>
`;

const headerPages = `
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="/" class="logo d-flex align-items-center">
          <img src="../images/portofolio image/header-formabisa.png" alt="FormabisaLogo" />
        </a>
        <nav id="navbar" class="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="./about.html" class="active">About</a></li>
            <li><a href="./our_event.html">Our Event</a></li>
            <li><a href="./contact.html">Contact</a></li>
            <li><a href="./blog.html">Blog</a></li>
          </ul>
        </nav>

        <!-- BurgerMenu -->
        <i class="mobile-nav-toggle mobile-nav-show bi bi-list">
            <span class="material-symbols-outlined"> menu </span>
        </i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x">
            <span class="material-symbols-outlined"> close </span>
        </i>

    </div>

`;

const headerDetailBlog = `
<div class="container-fluid container-xl d-flex align-items-center justify-content-between">
    <a href="/" class="logo d-flex align-items-center">
        <img src="../images/portofolio image/header-formabisa.png" alt="formabisa" />
    </a>
    <nav id="navbar" class="navbar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="../about.html">About</a></li>
            <li><a href="../our_event.html">Our Event</a></li>
            <li><a href="../contact.html">Contact</a></li>
            <li><a href="../blog.html" class="active" >Blog</a></li>
        </ul>
    </nav>
    <!-- BurgerMenu -->
    <i class="mobile-nav-toggle mobile-nav-show bi bi-list">
        <span class="material-symbols-outlined"> menu </span>
    </i>
    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x">
        <span class="material-symbols-outlined"> close </span>
    </i>
    <!-- . -->
</div>
`;

const headerHome = document.getElementById("header");
const headerPage = document.getElementById("headerPages");
const headerDetail = document.getElementById("headerDetail");

if (headerHome) {
    headerHome.innerHTML = header;
} else if (headerPage) {
    headerPage.innerHTML = headerPages;
} else if (headerDetail) {
    headerDetail.innerHTML = headerDetailBlog;
}

// Mendapatkan path saat ini
const path = window.location.pathname;

// Menghapus kelas 'active' dari semua tautan di header
document.querySelectorAll('.navbar a').forEach(function(element) {
    element.classList.remove('active');
});

// Menambahkan kelas 'active' ke tautan yang sesuai dengan path saat ini
document.querySelectorAll('.navbar a').forEach(function(element) {
    const href = element.getAttribute('href');
    if (path === href) {
        element.classList.add('active');
    }
});
