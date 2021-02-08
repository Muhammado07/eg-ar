const navbar = document.querySelector(".navbar")
const logo = document.querySelector(".navbar .logo img")
const caret = document.querySelectorAll(".navbar .subnavbtn img")

const popBtn = document.querySelector(".pop-up")




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

    // Show Btn pop-up

    if (window.pageYOffset > 300) {
        popBtn.classList.add("show")

    } else {
        popBtn.classList.remove("show")
    }

}



// Date Year

const year = document.querySelector(".year")

year.innerHTML = new Date().getFullYear()



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


// Show Contact pop-up
const pop = document.querySelector(".pop-over")
const cancel = document.querySelector(".cancel")

popBtn.addEventListener("click", function () {
    pop.classList.add("view")
})
cancel.addEventListener("click", function () {
    pop.classList.remove("view")
})







