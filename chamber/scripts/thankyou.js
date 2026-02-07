const params = new URLSearchParams(window.location.search);
window.onload = () => {
    document.getElementById("output").innerHTML = `
        <p><strong>Name:</strong> ${params.get("fname")} ${params.get("lname")}</p>
        <p><strong>Email:</strong> ${params.get("email")}</p>
        <p><strong>Phone:</strong> ${params.get("phone")}</p>
        <p><strong>Business:</strong> ${params.get("business")}</p>
        <p><strong>Date:</strong> ${params.get("timestamp")}</p>
    `;
};