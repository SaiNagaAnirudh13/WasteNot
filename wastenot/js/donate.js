document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('donate-food-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const donorName = document.getElementById('donor-name').value;
            const donorEmail = document.getElementById('donor-email').value;
            const foodItem = document.getElementById('food-item').value;
            const quantity = document.getElementById('quantity').value;
            const expirationDate = document.getElementById('expiration-date').value;
            const pickupLocation = document.getElementById('pickup-location').value;

            const foodListing = {
                donorName,
                donorEmail,
                foodItem,
                quantity,
                expirationDate,
                pickupLocation
            };

            saveListing(foodListing);
            form.reset();
            alert('Food donation successfully added!');
        });
    }

    displayListings();
});

function saveListing(listing) {
    let listings = JSON.parse(localStorage.getItem('foodListings')) || [];
    listings.push(listing);
    localStorage.setItem('foodListings', JSON.stringify(listings));
}

function displayListings() {
    let listings = JSON.parse(localStorage.getItem('foodListings')) || [];
    const listingsSection = document.querySelector('.listings-section');
    const template = document.getElementById('listing-template');

    listings.forEach(listing => {
        const clone = template.cloneNode(true);
        clone.id = '';
        clone.style.display = 'block';
        clone.querySelector('.food-item').textContent = listing.foodItem;
        clone.querySelector('.quantity').textContent = listing.quantity;
        clone.querySelector('.expiration-date').textContent = listing.expirationDate;
        clone.querySelector('.pickup-location').textContent = listing.pickupLocation;

        listingsSection.appendChild(clone);
    });
}
