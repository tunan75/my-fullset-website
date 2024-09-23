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
    const premiumSteers = totalBeefPerMonth / (steerYield * premiumCutYield); // for premium cuts (guests)
    const fullSetSteers = totalBeefPerMonth / steerYield; // for full set (staff + guests)

    // Calculate steers saved by using Full Set model
    const steersSaved = premiumSteers - fullSetSteers;

    // Calculate environmental savings (monthly)
    const carbonReduction = steersSaved * co2PerSteer; // in kg
    const waterSavings = steersSaved * waterPerSteer; // in liters
    const landSavings = steersSaved * landPerSteer; // in square meters

    // Convert to more user-friendly units (monthly)
    const totalBeefTons = totalBeefPerMonth / 1000; // kg to metric tons
    const carbonReductionTons = carbonReduction / 1000; // kg to metric tons
    const waterSavingsML = waterSavings / 1000000; // liters to megaliters (ML)
    const landSavingsHectares = landSavings / 10000; // square meters to hectares

    // Display results with unit conversion
    document.getElementById("totalBeef").textContent = totalBeefTons.toFixed(2) + " metric tons";
    document.getElementById("premiumSteers").textContent = premiumSteers.toFixed(2);
    document.getElementById("fullSetSteers").textContent = fullSetSteers.toFixed(2);
    document.getElementById("steersSaved").textContent = steersSaved.toFixed(2);
    document.getElementById("carbonReduction").textContent = carbonReductionTons.toFixed(2) + " metric tons CO₂";
    document.getElementById("waterSavings").textContent = waterSavingsML.toFixed(2) + " megaliters";
    document.getElementById("landSavings").textContent = landSavingsHectares.toFixed(2) + " hectares";
}
// Function to render the chart
function renderChart(premiumSteers, fullSetSteers) {
    const ctx = document.getElementById('steerChart').getContext('2d');
    const steerChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Premium Cut Model', 'Full Set Model'],
            datasets: [{
                label: 'Number of Steers Required',
                data: [premiumSteers, fullSetSteers],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
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
    const premiumSteers = totalBeefPerMonth / (steerYield * premiumCutYield); // for premium cuts (guests)
    const fullSetSteers = totalBeefPerMonth / steerYield; // for full set (staff + guests)

    // Calculate steers saved by using Full Set model
    const steersSaved = premiumSteers - fullSetSteers;

    // Calculate environmental savings (monthly)
    const carbonReduction = steersSaved * co2PerSteer; // in kg
    const waterSavings = steersSaved * waterPerSteer; // in liters
    const landSavings = steersSaved * landPerSteer; // in square meters

    // Convert to more user-friendly units (monthly)
    const totalBeefTons = totalBeefPerMonth / 1000; // kg to metric tons
    const carbonReductionTons = carbonReduction / 1000; // kg to metric tons
    const waterSavingsML = waterSavings / 1000000; // liters to megaliters (ML)
    const landSavingsHectares = landSavings / 10000; // square meters to hectares

    // Display results with unit conversion
    document.getElementById("totalBeef").textContent = totalBeefTons.toFixed(2) + " metric tons";
    document.getElementById("premiumSteers").textContent = premiumSteers.toFixed(2);
    document.getElementById("fullSetSteers").textContent = fullSetSteers.toFixed(2);
    document.getElementById("steersSaved").textContent = steersSaved.toFixed(2);
    document.getElementById("carbonReduction").textContent = carbonReductionTons.toFixed(2) + " metric tons CO₂";
    document.getElementById("waterSavings").textContent = waterSavingsML.toFixed(2) + " megaliters";
    document.getElementById("landSavings").textContent = landSavingsHectares.toFixed(2) + " hectares";

    // Call the renderChart function with calculated values
    renderChart(premiumSteers, fullSetSteers);
}

// Function to render the chart
function renderChart(premiumSteers, fullSetSteers) {
    const ctx = document.getElementById('steerChart').getContext('2d');
    const steerChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Premium Cut Model', 'Full Set Model'],
            datasets: [{
                label: 'Number of Steers Required',
                data: [premiumSteers, fullSetSteers],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
