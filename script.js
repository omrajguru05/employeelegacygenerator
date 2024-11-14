// Counter to simulate unique ID increment
let legacyCounter = 1;

function generateLegacyID() {
    const staffName = document.getElementById("staffName").value.trim();
    const position = document.getElementById("position").value.trim();
    const dateOfJoining = document.getElementById("dateOfJoining").value;
    
    // Check if inputs are valid
    if (staffName && position && dateOfJoining) {
        // Generate the random string using staff name letters, random letters, numbers, and a symbol
        const randomLetters = getRandomString(4);
        const randomNumber = Math.floor(Math.random() * 1000);
        const symbol = getRandomSymbol();
        
        // Create the Legacy ID with some letters from staff name
        const legacyID = `${staffName.substring(0, 3).toUpperCase()}-${randomLetters}-${randomNumber}${symbol}`;
        
        document.getElementById("legacyID").innerText = `Legacy ID for ${staffName}: ${legacyID}`;
        
        // Create the certificate as an image
        createCertificate(staffName, position, dateOfJoining, legacyID);
        
        // Increment the counter for the next ID
        legacyCounter++;
    } else {
        document.getElementById("legacyID").innerText = "Please fill in all fields.";
    }
}

function createCertificate(name, position, date, id) {
    // Create a canvas element
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");

    // Dark background (using dark grey)
    ctx.fillStyle = "#2c2c2c"; // Dark grey background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Title: "Python Pathways Club"
    ctx.fillStyle = "#ffffff"; // White text for visibility
    ctx.font = "36px Arial, sans-serif";
    ctx.fillText("Python Pathways Club", 230, 50);

    // Subtitle: "Certificate of Welcome"
    ctx.font = "24px Arial, sans-serif";
    ctx.fillText("Certificate of Welcome", 250, 120);

    // Certificate text content
    ctx.font = "20px Arial, sans-serif";
    ctx.fillText("This is to certify that", 300, 180);
    ctx.font = "28px Arial, sans-serif";
    ctx.fillText(name, 330, 220);

    // Position and Date of Joining
    ctx.font = "20px Arial, sans-serif";
    ctx.fillText(`Position: ${position}`, 300, 260);
    ctx.fillText(`Date of Joining: ${date}`, 300, 300);
    ctx.fillText(`Legacy ID: ${id}`, 300, 340);

    // Additional Details
    ctx.font = "18px Arial, sans-serif";
    ctx.fillText(`Date of Issue: ${new Date().toLocaleDateString()}`, 300, 420);

    // Signature area
    ctx.font = "20px Arial, sans-serif";
    ctx.fillText("Signed,", 500, 500);
    ctx.fillText("Om Rajguru", 500, 530);
    ctx.fillText("President, Python Pathways", 500, 560);

    // Download the certificate as an image
    const link = document.createElement("a");
    link.download = `${name}_Certificate.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
}

// Function to generate a random string of letters
function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Function to generate a random symbol
function getRandomSymbol() {
    const symbols = ['@', '#', '$', '^', '&', '*', '!'];
    return symbols[Math.floor(Math.random() * symbols.length)];
}
