//Header
class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="header-wrapper">
                    <div class="ocg">
                        <a href="../html/index.html"><img src="../resources/OCG.png" id="header-image"></a>
                    </div>
                    <div class="navbar">
                        <ul class="links">
                            <li class="listed-item"><a href="../html/us.html">Nosotros</a></li>
                            <li class="listed-item"><a href="../html/services.html">Servicios</a></li>
                        </ul>
                    </div>
                    <div class="cta">
                        <a href="../html/contact.html">Contact us</a>
                    </div>
                    <div class="toggle-btn">
                    <i class="fa-solid fa-bars-staggered" style="color: #343377;"></i>
                    </div>
                </div>
                <div class="dropdown-menu">
                    <div class="ocg-2">
                    <a href="../html/index.html"><img src="../resources/logoheader.png" id="header-image"></a>
                    <i class="fa-solid fa-x" style="color: #343377;"></i>
                    </div>
                    <ul>
                        <li class="listed-item"><a href="../html/us.html">Get to know us</a></li>
                        <li class="listed-item"><a href="../html/services.html">Our Services</a></li>
                        <li class="listed-item"><a href="../html/technical.html">Technical info</a></li>
                        <li><a href="../html/contact.html">Contact us</a></li>
                        </ul>
                </div>
            </header>
        `;
    }
}
//Footer
class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="footer-wrapper">
            <div class="footer-info-1">
                <div class="footer-image-wrapper">
                    <img src="../resources/OCG.png" alt="footer image">
                </div>
                <div class="footer-links-1">
                    <a class="phone-1" href="tel:6017176795"><i class="fa-solid fa-phone" style="color: #303377;"></i> 601-717-6795</a>
                    <a class="phone-2" href="tel:+573142495193"><i class="fa-solid fa-phone" style="color: #303377;"></i> 314-249-5193</a>
                    <a class="address" href="https://maps.app.goo.gl/fWVBeh1n7oQCyCz49"><i class="fa-solid fa-map-pin" style="color: #303377;"></i> Calle 75 No 68H - 42 Bogota </a>
                </div>
                <div class="footer-text-1">
                    <p>Tenemos presencia en:
                    Barranquilla, Bogotá, Cali, Chocontá, 
                    Duitama, Fusagasugá, Ibagué,Melgar, Neiva,
                     Paipa, Restrepo, Ricaurte, San Andres, 
                     Santa Marta, Sogamoso, Tunja, Villavicencio, 
                     Yopal</p>
                </div>
            </div>
            <div class="footer-info-2">
                <h5>Empresa</h5>
                <div class="footer-links-2">
                    <a href="../html/index.html" class="link-1">Inicio</a>
                    <a  href="../html/us.html" class="link-2">Nosotros</a>
                    <a  href="../html/services.html" class="link-3">Servicios</a>
                    <a  href="../html/contact.html" class="link-4">Contacto</a>
                </div>
            </div>
        </div>
    </footer>
        `;
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);


const navbar = document.querySelector('.header-wrapper');
const headerImage = document.getElementById('header-image');
window.addEventListener('load', () => {
    const page = window.location.pathname;
    if(!page.endsWith('/html/index.html')){
        headerImage.src = '../resources/logoheader.png';
        navbar.style.background = '#FAF9FA';
        navbar.style.position ='static';
    }
})
   

const accordion = document.getElementsByClassName('collapsible-item');
for(i=0; i<accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle('active')
    })

}

window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

})

function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('open');
}


document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-btn');
    toggleBtn.addEventListener('click', toggleDropdown);

   
    const closeIcon = document.querySelector('.fa-x');
    if (closeIcon) {
        closeIcon.addEventListener('click', toggleDropdown);
    }
});