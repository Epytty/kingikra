const menuBtn = document.querySelector(".menuBtn");
const headerNavAdaptive = document.querySelector(".headerNavAdaptive");

menuBtn.addEventListener("click", () => {
    headerNavAdaptive.style.display = headerNavAdaptive.style.display === "none" ? "flex" : "none";
    });


//new
const newContainer = document.querySelector('.new');
const prevButtonNew = document.getElementById('prevButtonNew');
const nextButtonNew = document.getElementById('nextButtonNew');
const slideCountNew = 2;

let currentIndexNew = 0;
    
function updateDisplayNew() {
    newContainer.style.transform = `translateX(-${currentIndexNew * 100}%)`;
}

prevButtonNew.addEventListener('click', () => {
        currentIndexNew = (currentIndexNew - 1 + slideCountNew) % slideCountNew;
        updateDisplayNew();
    });
    
    nextButtonNew.addEventListener('click', () => {
        currentIndexNew = (currentIndexNew + 1) % slideCountNew;
        updateDisplayNew();
    });
    updateDisplayNew();


//hits
const hitsContainer = document.querySelector('.hits');
const prevButtonHits = document.getElementById('prevButtonHits');
const nextButtonHits = document.getElementById('nextButtonHits');
const slideCountHits = 2;

let currentIndexHits = 0;
    
function updateDisplayHits() {
    hitsContainer.style.transform = `translateX(-${currentIndexHits * 100}%)`;
}

prevButtonHits.addEventListener('click', () => {
        currentIndexHits = (currentIndexHits - 1 + slideCountHits) % slideCountHits;
        updateDisplayHits();
    });
    
    nextButtonHits.addEventListener('click', () => {
        currentIndexHits = (currentIndexHits + 1) % slideCountHits;
        updateDisplayHits();
    });
    updateDisplayHits();
    
    
//recomented
const recContainer = document.querySelector('.recomented');
const prevButtonRec = document.getElementById('prevButtonRec');
const nextButtonRec = document.getElementById('nextButtonRec');
const slideCountRec = 2;

let currentIndexRec = 0;
    
function updateDisplayRec() {
    recContainer.style.transform = `translateX(-${currentIndexRec * 100}%)`;
}

    prevButtonRec.addEventListener('click', () => {
        currentIndexRec = (currentIndexRec - 1 + slideCountRec) % slideCountRec;
        updateDisplayRec();
    });
    
    nextButtonRec.addEventListener('click', () => {
        currentIndexRec = (currentIndexRec + 1) % slideCountRec;
        updateDisplayRec();
    });
    updateDisplayRec();





    
    
    
