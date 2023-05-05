const BASE_URL = "http://localhost:8000/api/";

// function getCookie() {
//   // Step 1: Get the cookie value
//   var cookieValue = document.cookie;

//   // Step 2: Find the cookie by name
//   var cookieName = "myCookie"; // Replace with the name of your cookie
//   var startIndex = cookieValue.indexOf(cookieName + "=");
//   var endIndex = cookieValue.indexOf(";", startIndex);

//   if (endIndex === -1) {
//     endIndex = cookieValue.length;
//   }

//   // Step 3: Extract the cookie value
//   var cookieString = cookieValue.slice(startIndex, endIndex);
//   cookieString = cookieString.split("=")[1]

//   var obj = JSON.parse(cookieString);

//   // Now, the 'obj' variable contains the object retrieved from the cookie
//   return obj;
// }

// function saveCookie(obj) {
//   // Step 1: Convert the object to a JSON string

//   var jsonString = JSON.stringify(obj);

//   // Step 2: Set the cookie value
//   var cookieName = "myCookie"; // Replace with the desired cookie name
//   document.cookie = cookieName + "=" + jsonString;

//   // Optionally, set additional cookie properties (e.g., expiration date)
//   var expirationDate = new Date();
//   expirationDate.setDate(expirationDate.getDate() + 7); // Set cookie to expire in 7 days
//   document.cookie =
//     cookieName +
//     "=" +
//     jsonString +
//     "; expires=" +
//     expirationDate.toUTCString() +
//     "; path=/"; // Example with additional properties
// }

// Function to save a JSON object in a cookie
function saveCookie(jsonObject) {
  const expiryDays = 7;
  const cookieName = "myCookie";
  const jsonStr = JSON.stringify(jsonObject);
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + expiryDays);

  document.cookie = `${cookieName}=${encodeURIComponent(
    jsonStr
  )}; expires=${expiryDate.toUTCString()}; path=/`;
}

// Function to retrieve a JSON object from a cookie
function getCookie() {
  const cookieName = "myCookie";
  const cookie = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith(cookieName + "="));
  if (cookie) {
    const jsonStr = decodeURIComponent(cookie.split("=")[1]);
    const jsonObject = JSON.parse(jsonStr);
    return jsonObject;
  }
  return null;
}

export { BASE_URL, getCookie, saveCookie };
