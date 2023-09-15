window.addEventListener("scroll", function() { 
    var header = document.querySelector("header_container");
    header.classList.toggle("sticky", window.scrollY > 0);
})
console.log("work")