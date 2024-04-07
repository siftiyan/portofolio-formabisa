let footer = `
<div class="container">
    <div class="row gy-4">
        <div class="col-lg-3 col-md-12 footer-info">
            <a href="index.html" class="logo">
            <img src="../images/portofolio image/logokabinet.png" />
            </a>
        </div>

        <div class="col footer-links">
            <h4>Our Menu</h4>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="./pages/about.html">About</a></li>
            <li><a href="./pages/our_event.html">Our Event</a></li>
            <li><a href="./pages/contact.html">Contact</a></li>
            <li><a href="./pages/blog.html">Blog</a></li>
            </ul>
        </div>

        <div class="col footer-links">
            <h4>Our Departemen</h4>
            <ul>
            <li><a href="#">Penmas</a></li>
            <li><a href="#">Medikraf</a></li>
            <li><a href="#">Minba</a></li>
            <li><a href="#">PSDM</a></li>
            <li><a href="#">Penlar</a></li>
            </ul>
        </div>

        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
            Sekretariat : Jl. Trisula No. 10, Sumberjo Kecamatan Kademangan 
            Kabupaten Blitar 66161
            <br />
                Indonesia <br /><br />
                <strong>Phone:</strong> +62 858 0471 5734<br />
                <strong>Email:</strong> formabisa.unesa1@gmail.com<br />
            </p>
        </div>
    </div>
</div>

<div class="container mt-4">
    <div class="copyright">
        &copy; Copyright <strong><span>kabinet adhigana sahitya</span></strong>. All Rights Reserved
    </div>
</div>
s
`;

let footerPages = `
<div class="container">
    <div class="row gy-4">
        <div class="col-lg-3 col-md-12 footer-info">
            <a href="/" class="logo">
            <img src="../images/portofolio image/logokabinet.png" />
            </a>
        </div>

        <div class="col footer-links">
            <h4>Our Menu</h4>
            <ul>
            <li><a href="../index.html">Home</a></li>
            <li><a href="./about.html">About</a></li>
            <li><a href="./our_event.html">Our Event</a></li>
            <li><a href="./contact.html">Contact</a></li>
            <li><a href="./blog.html">Blog</a></li>
            </ul>
        </div>

        <div class="col footer-links">
            <h4>Our Departemen</h4>
            <ul>
            <li><a href="#">Penmas</a></li>
            <li><a href="#">Medikraf</a></li>
            <li><a href="#">Minba</a></li>
            <li><a href="#">PSDM</a></li>
            <li><a href="#">Penlar</a></li>
            </ul>
        </div>

        <div
            class="col-lg-3 col-md-12 footer-contact text-center text-md-start"
        >
            <h4>Contact Us</h4>
            <p>
            Sekretariat : Jl. Trisula No. 10, Sumberjo Kecamatan Kademangan 
            Kabupaten Blitar 66161
            <br />
            Indonesia <br /><br />
            <strong>Phone:</strong> +62 858 0471 5734<br />
            <strong>Email:</strong> formabisa.unesa1@gmail.com<br />
            </p>
        </div>
    </div>
</div>

<div class="container mt-4">
    <div class="copyright">
        &copy; Copyright <strong><span>kabinet adhigana sahitya</span></strong
        >. All Rights Reserved
    </div>
</div>
`;

const footerDetail = `
<div class="container">
    <div class="row gy-4">
        <div class="col-lg-3 col-md-12 footer-info">
            <a href="/" class="logo">
            <img src="../../images/logokabinet.png" />
            </a>
        </div>

        <div class="col footer-links">
            <h4>Our Menu</h4>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="../about.html">About</a></li>
            <li><a href="../our_event.html">Our Event</a></li>
            <li><a href="../contact.html">Contact</a></li>
            <li><a href="../blog.html">Blog</a></li>
            </ul>
        </div>

        <div class="col footer-links">
            <h4>Our Departemen</h4>
            <ul>
            <li><a href="#">Penmas</a></li>
            <li><a href="#">Medikraf</a></li>
            <li><a href="#">Minba</a></li>
            <li><a href="#">PSDM</a></li>
            <li><a href="#">Penlar</a></li>
            </ul>
        </div>

        <div
            class="col-lg-3 col-md-12 footer-contact text-center text-md-start"
        >
            <h4>Contact Us</h4>
            <p>
            Sekretariat : Jl. Trisula No. 10, Sumberjo Kecamatan Kademangan 
            Kabupaten Blitar 66161
            <br />
            Indonesia <br /><br />
            <strong>Phone:</strong> +62 858 0471 5734<br />
            <strong>Email:</strong> formabisa.unesa1@gmail.com<br />
            </p>
        </div>
    </div>
</div>

<div class="container mt-4">
    <div class="copyright">
        &copy; Copyright <strong><span>kabinet adhigana sahitya</span></strong>. All Rights Reserved
    </div>
</div>
`;

const footerHome = document.getElementById("footer");
const footerPage = document.getElementById("footerPages");
const footerDetailBlog = document.getElementById("footerDetail");

if (footerHome) {
    footerHome.innerHTML = footer;
}else if (footerPage) {
    footerPage.innerHTML = footerPages;
}else if (footerDetailBlog) {
    footerDetailBlog.innerHTML = footerDetail;
}
