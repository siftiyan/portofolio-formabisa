document.addEventListener("DOMContentLoaded", () => {
    "use strict";
  
    function playVideo(videoId) {
      var video = document.getElementById(videoId);
      video.play();
  }
  
    /**
     * Preloader
     */
    const preloader = document.querySelector("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }
  
    /**
     * Sticky Header on Scroll
     */
    const selectHeader = document.querySelector("#header");
    if (selectHeader) {
      let headerOffset = selectHeader.offsetTop;
      let nextElement = selectHeader.nextElementSibling;
  
      const headerFixed = () => {
        if (headerOffset - window.scrollY <= 0) {
          selectHeader.classList.add("sticked");
          if (nextElement) nextElement.classList.add("sticked-header-offset");
        } else {
          selectHeader.classList.remove("sticked");
          if (nextElement) nextElement.classList.remove("sticked-header-offset");
        }
      };
      window.addEventListener("load", headerFixed);
      document.addEventListener("scroll", headerFixed);
    }
  
    /**
     * Sticky HeaderPages on Scroll
     */
    const selectHeaderPages = document.querySelector("#headerPages");
    if (selectHeaderPages) {
      let headerOffset = selectHeaderPages.offsetTop;
      let nextElement = selectHeaderPages.nextElementSibling;
  
      const headerFixed = () => {
        if (headerOffset - window.scrollY <= 0) {
          selectHeaderPages.classList.add("sticked");
          if (nextElement) nextElement.classList.add("sticked-header-offset");
        } else {
          selectHeaderPages.classList.remove("sticked");
          if (nextElement) nextElement.classList.remove("sticked-header-offset");
        }
      };
      window.addEventListener("load", headerFixed);
      document.addEventListener("scroll", headerFixed);
    }
  
    /**
     * Sticky HeaderDetailBlog on Scroll
     */
    const selectHeaderDetail = document.querySelector("#headerDetail");
    if (selectHeaderDetail) {
      let headerOffset = selectHeaderDetail.offsetTop;
      let nextElement = selectHeaderDetail.nextElementSibling;
  
      const headerFixed = () => {
        if (headerOffset - window.scrollY <= 0) {
          selectHeaderDetail.classList.add("sticked");
          if (nextElement) nextElement.classList.add("sticked-header-offset");
        } else {
          selectHeaderDetail.classList.remove("sticked");
          if (nextElement) nextElement.classList.remove("sticked-header-offset");
        }
      };
      window.addEventListener("load", headerFixed);
      document.addEventListener("scroll", headerFixed);
    }
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = document.querySelectorAll("#navbar a");
  
    function navbarlinksActive() {
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
  
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
  
        let position = window.scrollY + 200;
  
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    }
    window.addEventListener("load", navbarlinksActive);
    document.addEventListener("scroll", navbarlinksActive);
  
    /**
     * Mobile nav toggle
     */
    const mobileNavShow = document.querySelector(".mobile-nav-show");
    const mobileNavHide = document.querySelector(".mobile-nav-hide");
  
    document.querySelectorAll(".mobile-nav-toggle").forEach((el) => {
      el.addEventListener("click", function (event) {
        event.preventDefault();
        mobileNavToogle();
      });
    });
  
    function mobileNavToogle() {
      document.querySelector("body").classList.toggle("mobile-nav-active");
      mobileNavShow.classList.toggle("d-none");
      mobileNavHide.classList.toggle("d-none");
    }
  
    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll("#navbar a").forEach((navbarlink) => {
      if (!navbarlink.hash) return;
  
      let section = document.querySelector(navbarlink.hash);
      if (!section) return;
  
      navbarlink.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) {
          mobileNavToogle();
        }
      });
    });
  
    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector(".scroll-top");
    if (scrollTop) {
      const togglescrollTop = function () {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      };
      window.addEventListener("load", togglescrollTop);
      document.addEventListener("scroll", togglescrollTop);
      scrollTop.addEventListener(
        "click",
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      );
    }
  
    // Data anggota tim
    const teamMembers = [
      { name: "Siftiyan Abdullah", role: "Ketua Umum", department: "T. Informatika", image: "./images/profile/BPH-siftiyan.png" },
      { name: "Dian Amaliya", role: "Wakil Ketua Umum", department: "T. Pendidikan", image: "./images/profile/BPH-amel.png" },
      { name: "Febrina Rizky A.", role: "Sekertaris Umum 2", department: "Pend. Tata Rias", image: "./images/profile/SEKRETARIS_FEBRINA 2.JPG" },
      { name: "Yunita Puspita S.", role: "Bendahara Umum 1", department: "Hukum", image: "./images/profile/BENDAHARA_YUNITA 1.png" },
      { name: "Sebastian Aditya", role: "Bendahara Umum 2", department: "Hukum", image: "./images/profile/BENDAHARA_SEBASTIAN 3.JPG" },
      { name: "Tri Kinarsih", role: "Kadep Penlar", department: "PGSD", image: "./images/profile/PENLAR_KINAR 2.JPG" },
      { name: "Aulia Sagita N.", role: "Wakil Kadep Penlar", department: "PGSD", image: "./images/profile/PENLAR_AULIA 2.JPG" },
      { name: "Widya Ariyan E.", role: "Staff Penlar", department: "Pend. Bhs Inggris", image: "./images/profile/PENLAR_ELSA 3.JPG" },
      { name: "Putri Dwi A.", role: "Staff Penlar", department: "Pend. Kimia", image: "./images/profile/PENLAR_PUTRI 2.JPG" },
      { name: "Irsa Rosyida", role: "Staff Penlar", department: "Pend. Tata Rias", image: "./images/profile/PENLAR_IRSA 3.JPG" },
      { name: "Nasha Rizqita", role: "Staff Penlar", department: "BK", image: "./images/profile/PENLAR_NASHA 1.JPG" },
      { name: "Herdita Rizki", role: "Staff Penlar", department: "Pend. Tata Rias", image: "./images/profile/PENLAR_HERDITA 3.JPG" },
      { name: "Farah Zulfa Arista", role: "Staff Penlar", department: "Sosiologi", image: "./images/profile/PENLAR_FARAH 3 (1).JPG" },
      { name: "Azkia Kamila", role: "Kadep Penmas", department: "M. Informatika", image: "./images/profile/PENMAS_AZKIA 2.jpg" },
      { name: "Dania Maisun N.", role: "Wakil Kadep Penmas", department: "Sastra Daerah", image: "./images/profile/PENMAS_DANIA 2.jpg" },
      { name: "Kharisma Aulia", role: "Staff Penmas", department: "Sastra Daerah", image: "./images/profile/PENMAS_RISMA 3.JPG" },
      { name: "Syahrul Firdaus", role: "Staff Penmas", department: "Hukum", image: "./images/profile/PENMAS_SYAHRUL 3.JPG" },
      { name: "Dyah Nafiahtin", role: "Staff Penmas", department: "Pend. IPS", image: "./images/profile/PENMAS_DYAH 1.JPG" },
      { name: "Hajar H.", role: "Staff Penmas", department: "Bhs dan Sastra Jawa", image: "./images/profile/PENMAS_HAJAR 2.JPG" },
      { name: "Mayang Deni L.", role: "Staff Penmas", department: "Seni Rupa", image: "./images/profile/mayang.png" },
      { name: "Helida Qorima P.", role: "Staff Penmas", department: "Pend. Sejarah", image: "./images/profile/PENMAS_HELIDA 3.JPG" },
      { name: "Dela Puspita Sari", role: "Staff Penmas", department: "Ilmu Ekonomi", image: "./images/profile/dela.png" },
      { name: "Sona Alayya", role: "Staff Penmas", department: "Ilmu Ekonomi", image: "./images/profile/sona.png" },
      { name: "Kalfin F.", role: "Kadep Minba", department: "Manajemen", image: "./images/profile/MINBA_KALVIN 2.JPG" },
      { name: "Rizky Fajar A.", role: "Wakil Kadep Minba", department: "Sastra Indonesia", image: "./images/profile/MINBA_RIZKY 2.JPG" },
      { name: "Aditya Putra A", role: "Staff Minba", department: "Sendratasik", image: "./images/profile/MINBA_ADINDA ZANATA 2.JPG" },
      { name: "Revi Yuanita H.", role: "Staff Minba", department: "IPA", image: "./images/profile/MINBA_REVI 2.jpg" },
      { name: "Adinda Zanata Z.", role: "Staff Minba", department: "PPKn", image: "./images/profile/MINBA_ADINDA ZANATA 2.JPG" },
      { name: "Paulista I.", role: "Staff Minba", department: "PENOR", image: "./images/profile/paul.png" },
      { name: "M. Hisyam Muafa", role: "Staff Minba", department: "Pend. Tata Niaga", image: "./images/profile/MINBA_HISYAM 2.JPG" },
      { name: "Zaendy Ananda", role: "Staff Minba", department: "Pend. Teknologi Informasi", image: "./images/profile/MINBA_ZAENDY 2.JPG" },
      { name: "Dwiasa Kurnia S.", role: "Staff Minba", department: "Manajemen", image: "./images/profile/MINBA_DWIASA 2.JPG" },
      { name: "Sonya Ainur R.", role: "Kadep Medikraf", department: "Biologi", image: "./images/profile/MEDIKRAF_SONYA 2.JPG" },
      { name: "Senja Salzanabila", role: "Staff Medikraf", department: "Kimia", image: "./images/profile/MEDIKRAF_SENJA 2.JPG" },
      { name: "Nadira R.", role: "Staff Medikraf", department: "Pend. Tata Rias", image: "./images/profile/MEDIKRAF_NADIRA 2.JPG" },
      { name: "Winda Tri Lestari", role: "Staff Medikraf", department: "Pend. Tata Rias", image: "./images/profile/MEDIKRAF_WINDA 2.JPG.jpg" },
      { name: "Shinta Dewi P.", role: "Staff Medikraf", department: "Psikologi", image: "./images/profile/MEDIKRAF_SHINTA 2.JPG" },
      { name: "Erika Fitra N.", role: "Staff Medikraf", department: "Ilmu Ekonomi", image: "./images/profile/erika.png" },
      { name: "Dzaky Zakariya", role: "Staff Medikraf", department: "T. Mesin", image: "./images/profile/MEDIKRAF_DZAKY 3.JPG" },
      { name: "Amaliya Nada A.", role: "Staff Medikraf", department: "Pend. Biologi", image: "./images/profile/MEDIKRAF_AMALIA 2.JPG" },
      { name: "Naufal Rafif R.", role: "Kadep PSDM", department: "Manajemen", image: "./images/profile/PSDM_NAUFAL 2.JPG" },
      { name: "Indira Yuniar F.", role: "Wakil Kadep PSDM", department: "Manajemen", image: "./images/profile/PSDM_INDIRA 2.JPG" },
      { name: "Risa Alyauma", role: "Staff PSDM", department: "Matematika", image: "./images/profile/PSDM_RISA 2.JPG" },
      { name: "As-Syifa K. N.", role: "Staff PSDM", department: "Gizi", image: "./images/profile/PSDM_ASYIFA 2JPG.JPG" },
      { name: "Nova Fitria W.", role: "Staff PSDM", department: "Pend. Sejarah", image: "./images/profile/PSDM_NOVA 2.JPG" },
      { name: "Berlian Indah R.", role: "Staff PSDM", department: "Pend. Adm Perkantoran", image: "./images/profile/PSDM_BERLIAN 2.JPG" },
      { name: "Eka Pramudia A.", role: "Staff PSDM", department: "Ekonomi Islam", image: "./images/profile/eka.png" },
    ];
    
  // Fungsi untuk membuat elemen anggota tim
  function createTeamMember(member) {
    const memberElement = document.createElement("div");
    memberElement.classList.add("col-xl-2", "col-md-4", "d-flex");
    memberElement.setAttribute("data-aos", "fade-up");
    memberElement.setAttribute("data-aos-delay", "100");
  
    memberElement.innerHTML = `
      <div class="member">
        <img src="${member.image}" class="img-fluid" alt="" />
        <h4>${member.name}</h4>
        <h6>${member.role}</h6>
        <span>${member.department}</span>
      </div>
    `;
  
    return memberElement;
  }
  
  // Menambahkan anggota tim ke dalam elemen dengan id "team-members"
  const teamContainer = document.getElementById("team-members");
  teamMembers.forEach(member => {
    const memberElement = createTeamMember(member);
    teamContainer.appendChild(memberElement);
  });
  
    /**
     * Porfolio isotope and filter
     */
    let portfolionIsotope = document.querySelector(".portfolio-isotope");
  
    if (portfolionIsotope) {
      let portfolioFilter = portfolionIsotope.getAttribute(
        "data-portfolio-filter"
      )
        ? portfolionIsotope.getAttribute("data-portfolio-filter")
        : "*";
      let portfolioLayout = portfolionIsotope.getAttribute(
        "data-portfolio-layout"
      )
        ? portfolionIsotope.getAttribute("data-portfolio-layout")
        : "masonry";
      let portfolioSort = portfolionIsotope.getAttribute("data-portfolio-sort")
        ? portfolionIsotope.getAttribute("data-portfolio-sort")
        : "original-order";
  
      window.addEventListener("load", () => {
        let portfolioIsotope = new Isotope(
          document.querySelector(".portfolio-container"),
          {
            itemSelector: ".portfolio-item",
            layoutMode: portfolioLayout,
            filter: portfolioFilter,
            sortBy: portfolioSort,
          }
        );
        
        let menuFilters = document.querySelectorAll(
          ".portfolio-isotope .portfolio-flters li"
        );
        menuFilters.forEach(function (el) {
          el.addEventListener(
            "click",
            function () {
              document
                .querySelector(
                  ".portfolio-isotope .portfolio-flters .filter-active"
                )
                .classList.remove("filter-active");
              this.classList.add("filter-active");
              portfolioIsotope.arrange({
                filter: this.getAttribute("data-filter"),
              });
            },
            false
          );
        });
      });
    }
  });
  