// Sort - High to Low Function

const priceHighToLow = (allPets => {
    const petContainer = document.getElementById('pet-container');
    petContainer.innerHTML = '';
    let allPetsPrice = [];
    allPets.forEach(pet => {
        let petPrice = Number(pet.price);
        allPetsPrice.push(petPrice)
    })


    allPetsPrice.sort((a, b) => b - a);
    let allPetsPriceDescending = [...allPetsPrice];

    let allPetsDescendingOrder = [];
    allPetsPriceDescending.forEach(price => {

        allPets.forEach(pet => {
            let matchingPetPrice = Number(pet.price);
            if (price == matchingPetPrice && allPetsDescendingOrder.includes(pet) == false) {
                allPetsDescendingOrder.push(pet);
            }
        })
    })

    toggleLoadingSpinner(true);
    setTimeout(displayAllPets,2000,allPetsDescendingOrder);
})

// Sort - Low to High Function

const priceLowToHigh = (allPets => {
    const petContainer = document.getElementById('pet-container');
    petContainer.innerHTML = '';
    let allPetsPrice = [];
    allPets.forEach(pet => {
        let petPrice = Number(pet.price);
        allPetsPrice.push(petPrice)
    })


    allPetsPrice.sort((a, b) => a - b);
    let allPetsPriceAscending = [...allPetsPrice];

    let allPetsAscendingOrder = [];
    allPetsPriceAscending.forEach(price => {

        allPets.forEach(pet => {
            let matchingPetPrice = Number(pet.price);
            if (price == matchingPetPrice && allPetsAscendingOrder.includes(pet) == false) {
                allPetsAscendingOrder.push(pet);
            }
        })
    })

    toggleLoadingSpinner(true);
    setTimeout(displayAllPets,2000,allPetsAscendingOrder);

})