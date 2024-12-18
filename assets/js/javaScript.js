const locationElement = document.getElementById("currentLocation");

// const getGeoLocation = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
//         locationElement.innerHTML = `Latitude: ${latitude}, Longitude: ${longitude}`;
//       },
//       (error) => {
//         console.error("Error retrieving location:", error);
//         locationElement.innerHTML = "Unable to retrieve your location.";
//       }
//     );
//   } else {
//     locationElement.innerHTML = "Geolocation is not supported by this browser.";
//   }
// };

const getLocationByIP =  () => {
  const response = await fetch("https://ipapi.co/json/");
  //   const data = await response.json();
  console.log(response);
  //   const { city, region, country, ip } = data;

  //   locationElement.innerHTML = `City: ${city}, Region: ${region}, Country: ${country}`;
};

// Call the function
getLocationByIP();

// getGeoLocation();
