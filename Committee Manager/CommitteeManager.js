// Array to store sign-in data
const signInData = [];

// Handle form submission
document.getElementById("signInForm").addEventListener("submit", signIn);
    
    function signIn(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Get the input values
    const name = document.getElementById("name").value; // Still uses the `id`
    const committee = document.getElementById("committee").value;
    const email = document.getElementById("email").value;
    const signInTime = new Date().toLocaleString(); // Get the current date and time

    // Add the data to the array
    signInData.push({ name, committee, email, signInTime });

    // Clear the form fields
    document.getElementById("signInForm").reset();

    alert("Sign-in recorded successfully!");
}

// Export data to CSV
document.getElementById("exportButton").addEventListener("click", exportData);
    
    function exportData() {
    if (signInData.length === 0) {
        alert("No data to export!");
        return;
    }

    // Create CSV content
    let csvContent = "Name,Committee,Email,Sign-In Time\n"; // Header row
    signInData.forEach(row => {
        csvContent += `${row.name},${row.committee},${row.email},${row.signInTime}\n`;
    });

    // Create a Blob from the CSV content
    const blob = new Blob([csvContent], { type: "text/csv" });

    // Create a download link
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "SignInData.csv"; // File name for the exported file
    link.click();

    alert("Data exported successfully!");
}