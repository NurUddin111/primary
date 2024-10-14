// Liked Pets

const likedPets = (pet) => {
    const likedPetsContainer = document.getElementById('liked-pets');
    const likedPetCard = document.createElement('div');
    likedPetCard.innerHTML = `<img class="rounded" src="${pet}" alt="" />`;
    likedPetsContainer.appendChild(likedPetCard);
}

// Adopt Pets

const adoptPets = () => {
    let element = document.getElementById('countdown');
    element.innerHTML = "03";
    const countdownTimer = (seconds) => {
        let counter = seconds;
        const interval = setInterval(() => {
            element.innerHTML = '0' + counter;

            counter--;

            if (counter < 0) {
                clearInterval(interval);
                element.innerHTML = "Successfully Adopted";
            }

        }, 1000);
    }
    countdownTimer(2);
};
