document.querySelectorAll("#movieGallery figure").forEach((el) => {
    el.addEventListener("click", () => {
        const fig = el;
        
        const image = fig.querySelector("img").src;
        const title = fig.querySelector("img").getAttribute("data-title");
        const genre = fig.querySelector("img").getAttribute("data-genre");
        const year = fig.querySelector("img").getAttribute("data-year");
        const director = fig.querySelector("img").getAttribute("data-director");
        const rating = fig.querySelector("img").getAttribute("data-rating");

        document.querySelector("#lightbox #modalImage").src = image;
        document.querySelector("#lightbox #modalTitle").innerText = title;
        document.querySelector("#lightbox #modalGenre").innerText = genre;
        document.querySelector("#lightbox #modalYear").innerText = year;
        document.querySelector("#lightbox #modalDirector").innerText = director;
        document.querySelector("#lightbox #modalRating").innerText = rating;
        
        document.querySelector("#lightbox").showModal();
    });
});

const lightbox = document.querySelector("#lightbox");
const closeButton = lightbox.querySelector("button[type='submit']");

closeButton.addEventListener("click", () => {
    lightbox.close();
});
