const displayCategoryName = (allCategory) => {
    const categoryNames = document.getElementById('category-names');
    allCategory.forEach(category => {
        const categoryId = category.category;
        const categoryIdLowerCase = categoryId.toLowerCase();

        const categoryType = document.createElement('div');
        categoryType.innerHTML = `<button id=${categoryIdLowerCase} class="hover:bg-slate-200 focus:outline-none focus:ring focus:bg-lime-200 border-2 border-blue-100 rounded px-12 py-4 flex gap-4 items-center ">
            <img src="${category.category_icon}" alt="" />
            <p class="text-lg font-bold">${category.category}</p>
          </button>`
        categoryNames.appendChild(categoryType);
    })

    document.getElementById('cat').addEventListener('click', function () {
        toggleLoadingSpinner(true);
        loadSingleCategory('cat');
    })

    document.getElementById('dog').addEventListener('click', function () {
        toggleLoadingSpinner(true);
        loadSingleCategory('dog');
    })

    document.getElementById('rabbit').addEventListener('click', function () {
        toggleLoadingSpinner(true);
        loadSingleCategory('rabbit');
    })

    document.getElementById('bird').addEventListener('click', function () {
        toggleLoadingSpinner(true);
        loadSingleCategory('bird');
    })
}


const loadSingleCategory = async (search) => {


    const res = await fetch(` https://openapi.programming-hero.com/api/peddy/category/${search}`);
    const data = await res.json();
    const singleCategory = data.data;

    if (singleCategory.length >= 1) {
        setTimeout(displayAllPets, 2000, singleCategory);
    } else {
        const noPet = () => {
            toggleLoadingSpinner(false);
            const petContainer = document.getElementById('pet-container');
            petContainer.innerHTML = '';
            const errorCard = document.createElement('div');
            errorCard.setAttribute('class', "col-span-3 flex flex-col items-center");
            errorCard.innerHTML = `<img src="images/error.webp" class="rounded-xl"/>
            <h1 class="text-4xl font-extrabold text-center my-4">No Information Available</h1>
            <p class="text-base font-semibold text-center">Right now,there is no birds available to adopt. <br/> If we find any kinds of birds which can be adopted we will publish it on our website</p>`;
            petContainer.appendChild(errorCard);
        }
        setTimeout(noPet, 2000);
    }

    document.getElementById('sort-high-to-low').addEventListener('click', function () {
        priceHighToLow(singleCategory);
    })

    document.getElementById('sort-low-to-high').addEventListener('click', function () {
        priceLowToHigh(singleCategory);
    })
}
