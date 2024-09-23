// Function to calculate beef consumption and environmental impact
function calculateBeef() {
    // Get form values
    const rooms = document.getElementById("rooms").value;
    const occupancy = document.getElementById("occupancy").value / 100;
    const guestsPerRoom = document.getElementById("guests").value;
    const staff = document.getElementById("staff").value;

    // Constants
    const guestBeefPerDay = 0.08; // 80 grams (0.08 kg) per day per guest
    const staffBeefPerMonth = 0.6; // 600 grams (0.6 kg) per month per staff member
    const staffWorkingPercentage = 0.90; // 90% of staff are working, 10% on leave
    const daysPerMonth = 30.42; // Average days per month
    const premiumCutYield = 0.20; // 20% premium cuts
    const fullSetYield = 0.80; // 80% utilization
    const steerYield = 220; // kg of freezer-ready beef per steer
    const co2PerSteer = 13500; // kg CO₂ per steer
    const waterPerSteer = 7500000; // liters of water per steer
    const landPerSteer = 2000; // square meters per steer

    // Calculate total guests and adjust staff count (90% staff working)
    const totalGuests = rooms * occupancy * guestsPerRoom;
    const staffWorking = staff * staffWorkingPercentage; // Staff on duty (excluding those on leave)

    // Beef consumption for guests
    const totalGuestBeefPerMonth = totalGuests * guestBeefPerDay * daysPerMonth; // in kg

    // Beef consumption for staff
    const totalStaffBeefPerMonth = staffWorking * staffBeefPerMonth; // in kg (monthly)

    // Total beef consumption (guests + staff)
    const totalBeefPerMonth = totalGuestBeefPerMonth + totalStaffBeefPerMonth; // in kg

    // Calculate number of steers required (monthly)
    const premiumSteers = Math.round(totalBeefPerMonth / (steerYield * premiumCutYield)); // for premium cuts (guests)
    const fullSetSteers = Math.round(totalBeefPerMonth / steerYield); // for full set (staff + guests)

    // Calculate steers saved by using Full Set model
    const steersSaved = premiumSteers - fullSetSteers;

    // Display results with unit conversion
    document.getElementById("totalBeef").textContent = (totalBeefPerMonth / 1000).toFixed(2) + " metric tons";
    document.getElementById("premiumSteers").textContent = premiumSteers;
    document.getElementById("fullSetSteers").textContent = fullSetSteers;
    document.getElementById("steersSaved").textContent = steersSaved;
    document.getElementById("carbonReduction").textContent = (steersSaved * co2PerSteer / 1000).toFixed(2) + " metric tons CO₂";
    document.getElementById("waterSavings").textContent = (steersSaved * waterPerSteer / 1000000).toFixed(2) + " megaliters";
    document.getElementById("landSavings").textContent = (steersSaved * landPerSteer / 10000).toFixed(2) + " hectares";

    // Display the carbon offset
    document.getElementById("carbonOffset").textContent = `Carbon Offset: You saved ${(steersSaved * co2PerSteer / 1000).toFixed(2)} metric tons of CO₂ emissions by switching to the Full Set model!`;

    // Display cow images
    displayCowImages('premiumCutCows', premiumSteers);
    displayCowImages('fullSetCows', fullSetSteers);
    displayCowImages('steersSavedCows', steersSaved);
}

// Function to display cow images
function displayCowImages(containerId, numCows) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear any previous images
    for (let i = 0; i < numCows; i++) {
        const cowImg = document.createElement('img');
        cowImg.src = 'https://example.com/black-cow.png'; // Replace with your black Angus cow image URL
        cowImg.alt = 'Black Angus Cow';
        container.appendChild(cowImg);
    }
}
