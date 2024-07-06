document.addEventListener("DOMContentLoaded", () => {
  const listingsContainer = document.getElementById("listings-container");
  const donations = JSON.parse(localStorage.getItem("donations")) || [];

  donations.forEach(donation => {
      const card = document.createElement("div");
      card.classList.add("card", "mb-3");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      cardBody.innerHTML = `
          <h5 class="card-title">${donation.foodItem}</h5>
          <p class="card-text">
              <strong>Donor Name:</strong> ${donation.donorName}<br>
              <strong>Email:</strong> ${donation.donorEmail}<br>
              <strong>Phone:</strong> ${donation.donorPhone}<br>
              <strong>Quantity:</strong> ${donation.quantity}<br>
              <strong>Expiration Date:</strong> ${donation.expirationDate}<br>
              <strong>Pickup Location:</strong> ${donation.pickupLocation}
          </p>
      `;

      card.appendChild(cardBody);
      listingsContainer.appendChild(card);
  });
});
