const navbar = document.querySelector(".navbar")
const logo = document.querySelector(".navbar .logo img")
const caret = document.querySelectorAll(".navbar .subnavbtn img")



window.onscroll = function () {
    // pageYOffset or scrollY

    if (window.pageYOffset > 80) {
        navbar.classList.add("scrolled")
        logo.setAttribute("src", "img/logo.png")
        caret.forEach(function (carets) {
            carets.setAttribute("src", "img/icon-caret.svg")
        })


    } else {
        navbar.classList.remove("scrolled")
        logo.setAttribute("src", "img/logo-white.png")
        caret.forEach(function (carets) {
            carets.setAttribute("src", "img/caret-white.svg")
        })


    }


    if (navbar.classList.contains("no")) {
        logo.setAttribute("src", "img/logo.png")
        caret.forEach(function (carets) {
            carets.setAttribute("src", "img/icon-caret.svg")
        })
    }

}



// Date Year

const year = document.querySelector(".year")

year.innerHTML = new Date().getFullYear()



document.querySelector('.custom-select-wrapper').addEventListener('click', function () {
    this.querySelector('.custom-select').classList.toggle('open');
})

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function () {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}




// Mobile Nav

const navExpand = [].slice.call(document.querySelectorAll(".nav-expand"));
const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		Back
	</a>
</li>`;

navExpand.forEach(item => {
    item.querySelector(".nav-expand-content").insertAdjacentHTML("afterbegin", backLink);
    item.querySelector(".nav-link").addEventListener("click", () => item.classList.add("active"));
    item.querySelector(".nav-back-link").addEventListener("click", () => item.classList.remove("active"));
});


// not-so-important stuff starts here

const ham = document.getElementById("ham");
ham.addEventListener("click", function () {
    document.body.classList.toggle("nav-is-toggled");
});








