const loadCategory = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`)
  const data = await res.json();
  const allCategory = data.categories;
  displayCategoryName(allCategory);
}

loadCategory();

const loadAllPets = async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
  const data = await res.json();
  const allPets = data.pets;

  document.getElementById('sort-high-to-low').addEventListener('click', function () {
    priceHighToLow(allPets);
  })

  document.getElementById('sort-low-to-high').addEventListener('click', function () {
    priceLowToHigh(allPets);
  })

  toggleLoadingSpinner(true);

  setTimeout(displayAllPets,2000,allPets);
  

}

const displayAllPets = (allPets) => {
  toggleLoadingSpinner(false);
  const petContainer = document.getElementById('pet-container');
  petContainer.innerHTML = '';
  allPets.forEach(pet => {
    const { breed, date_of_birth, gender, price, image, pet_name } = pet;
    const petType = pet.category;
    const petId = pet.petId;
    const uniqueId = petType + petId;
    const btnLikeUniqueId = 'like-' + uniqueId;
    const btnAdoptUniqueId = 'adopt-' + uniqueId;
    const btnDetailsUniqueId = 'details-' + uniqueId;
    const petDetails = document.createElement('div');
    petDetails.innerHTML = `<div class="card bg-base-100 shadow-2xl py-5 px-5">
              <figure class="h-44">
                <img
                  src="${image}"
                  class="rounded-xl"
                />
              </figure>
              <div class="pt-4 space-y-2">
                <h1 class="text-3xl font-extrabold">${pet_name ? pet_name : "Unknown"}</h1>
                <p class="text-base font-semibold">
                  <i class="fa-solid fa-qrcode"></i> &nbsp; Breed : ${breed ? breed : "Unknown"}
                </p>
                <p class="text-base font-semibold">
                  <i class="fa-solid fa-calendar"></i> &nbsp; Birth : ${date_of_birth ? date_of_birth : "Unknown"}
                </p>
                <p class="text-base font-semibold">
                  <i class="fa-solid fa-venus"></i> &nbsp; Gender : ${gender ? gender : "Unknown"}
                </p>
                <p class="text-base font-semibold">
                  <i class="fa-solid fa-dollar-sign"></i> &nbsp; Price : ${price ? price : "In Process"}
                </p>
              </div>
              <hr class="border-b-2 mt-2" />
              <div class="mt-2 flex justify-between">
                <button id="${btnLikeUniqueId}" onclick="likedPets('${pet.image}')" class=" hover:bg-[#0E7A81] text-[#0E7A81] hover:text-white border-2 border-[#0E7A81] rounded px-4 py-1">
                  <i class="fa-solid fa-thumbs-up  "></i>
                </button>
                <button
                id="${btnAdoptUniqueId}" onclick="adopt_modal.showModal(); adoptPets()"
                  class="hover:bg-[#0E7A81] border-2 border-[#0E7A81] rounded px-3 py-1 hover:text-white text-[#0E7A81] font-semibold"
                >
                  Adopt
                </button>
                <button
                id="${btnDetailsUniqueId}" onclick="petDetails('${btnDetailsUniqueId}')"
                  class="hover:bg-[#0E7A81]  border-2 border-[#0E7A81] rounded px-3 py-1 hover:text-white text-[#0E7A81] font-semibold"
                >
                  Details
                </button>
              </div>
            </div>`
    petContainer.appendChild(petDetails);
  })
}


loadAllPets();

