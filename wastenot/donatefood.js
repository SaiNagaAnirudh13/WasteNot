document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("donate-food-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const donorName = document.getElementById("donor-name").value;
        const donorEmail = document.getElementById("donor-email").value;
        const donorPhone = document.getElementById("donor-phone").value;
        const foodItem = document.getElementById("food-item").value;
        const quantity = document.getElementById("quantity").value;
        const expirationDate = document.getElementById("expiration-date").value;
        const pickupLocation = document.getElementById("pickup-location").value;

        const donation = {
            donorName,
            donorEmail,
            donorPhone,
            foodItem,
            quantity,
            expirationDate,
            pickupLocation
        };

        let donations = localStorage.getItem("donations");
        if (donations) {
            donations = JSON.parse(donations);
        } else {
            donations = [];
        }
        donations.push(donation);
        localStorage.setItem("donations", JSON.stringify(donations));

        form.reset();
    });
});
