// Define details for each location
const locationDetails = {
  library: "The library is a quiet place where you can study and read books. Open from 8:00 AM to 6:00 PM.",
  cafeteria: "The cafeteria serves breakfast and lunch. It's open from 7:00 AM to 2:00 PM.",
  gym: "The gym is where sports activities take place. Open from 6:00 AM to 8:00 PM.",
  office: "The school office is for administrative tasks and inquiries. Open from 9:00 AM to 5:00 PM."
};

// Add event listeners to all location elements
document.querySelectorAll('.location').forEach(location => {
  location.addEventListener('click', (event) => {
    const locationId = event.target.id;
    const details = locationDetails[locationId] || "No details available for this location.";
    document.getElementById('details').textContent = details;
  });
});