// Capture form results
let formData = {};
const form = document.getElementById("feedback-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const value = Object.fromEntries(data.entries());
  formData = JSON.stringify(value);
});

// read feedback json
fetch("feedback.json")
  .then((res) => res.json())
  .then((data) => {
    // Manipulate the data here
    data.push({ name: "Jane", age: 25, email: "jane@example.com" });

    // Save the data back to the file
    const jsonData = JSON.stringify(data);
    fetch("/data/data.json", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: jsonData,
    })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  })
  .catch((err) => console.error(err));
