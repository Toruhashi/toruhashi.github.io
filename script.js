// Entry key redirection logic
document.getElementById("submitKey").addEventListener("click", function() {
    const entryKey = document.getElementById("entryKey").value.trim();

    // Define the entry keys and their corresponding pages
    const entryKeys = {
        "toruga03": "security.html",
        "sciencelord": "scientific.html",
        "rapidresponse": "response.html"
    };

    // Check if the entry key matches any predefined key
    if (entryKeys[entryKey]) {
        // Redirect to the corresponding page
        window.location.href = entryKeys[entryKey];
    } else {
        // Show an error message if the key is invalid
        const errorMessage = document.getElementById("errorMessage");
        errorMessage.classList.remove("hidden");
    }
});