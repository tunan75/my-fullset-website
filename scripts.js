console.log("JavaScript file loaded successfully!");

// Sample function to display an alert
function greet() {
    alert("Welcome to the Full Set Beef Calculator!");
}
function calculateBeef() {
    // Get form values
    const rooms = document.getElementById("rooms").value;
    const occupancy = document.getElementById("occupancy").value / 100;
    const guestsPerRoom = document.getElementById("guests").value;
    const staff = document.getElementById("staff").value;

    // Constants
    const beefPerMeal = 0.2; // kg per meal
    const mealsPerDay = 3;
    const daysPerYear = 365;
    const premiumCutYield = 0.20; // 20% premium cuts
    const fullSetYield = 0.80; // 80% utilization
    const steerYield = 220; // kg of freezer-ready beef per steer
    const co2PerSteer = 13500; // kg CO₂ per steer
    const waterPerSteer = 7500000; // liters of water per steer
    const landPerSteer = 2000; // square meters per steer

    // Calculate total guests and beef consumption
    const totalGuests = rooms * occupancy * guestsPerRoom;
    const totalMealsPerDay = (totalGuests + staff) * mealsPerDay;
    const totalBeefPerYear = totalMealsPerDay * beefPerMeal * daysPerYear; // in kg

    // Calculate number of steers required
    const premiumSteers = totalBeefPerYear / (steerYield * premiumCutYield);
    const fullSetSteers = totalBeefPerYear / steerYield;
    const steersSaved = premiumSteers - fullSetSteers;

    // Calculate environmental savings
    const carbonReduction = steersSaved * co2PerSteer;
    const waterSavings = steersSaved * waterPerSteer;
    const landSavings = steersSaved * landPerSteer;

    // Display results
    document.getElementById("totalBeef").textContent = totalBeefPerYear.toFixed(2) + " kg";
    document.getElementById("premiumSteers").textContent = premiumSteers.toFixed(2);
    document.getElementById("fullSetSteers").textContent = fullSetSteers.toFixed(2);
    document.getElementById("steersSaved").textContent = steersSaved.toFixed(2);
    document.getElementById("carbonReduction").textContent = carbonReduction.toFixed(2) + " kg CO₂";
    document.getElementById("waterSavings").textContent = waterSavings.toFixed(2) + " liters";
    document.getElementById("landSavings").textContent = landSavings.toFixed(2) + " square meters";
}
function calculateBeef() {
    // Get form values
    const rooms = document.getElementById("rooms").value;
    const occupancy = document.getElementById("occupancy").value / 100;
    const guestsPerRoom = document.getElementById("guests").value;
    const staff = document.getElementById("staff").value;

    // Constants
    const beefPerMeal = 0.2; // kg per meal
    const mealsPerDay = 3;
    const daysPerYear = 365;
    const premiumCutYield = 0.20; // 20% premium cuts
    const fullSetYield = 0.80; // 80% utilization
    const steerYield = 220; // kg of freezer-ready beef per steer
    const co2PerSteer = 13500; // kg CO₂ per steer
    const waterPerSteer = 7500000; // liters of water per steer
    const landPerSteer = 2000; // square meters per steer

    // Calculate total guests and beef consumption
    const totalGuests = rooms * occupancy * guestsPerRoom;
    const totalMealsPerDay = (totalGuests + staff) * mealsPerDay;
    const totalBeefPerYear = totalMealsPerDay * beefPerMeal * daysPerYear; // in kg

    // Calculate number of steers required
    const premiumSteers = totalBeefPerYear / (steerYield * premiumCutYield);
    const fullSetSteers = totalBeefPerYear / steerYield;
    const steersSaved = premiumSteers - fullSetSteers;

    // Calculate environmental savings
    const carbonReduction = steersSaved * co2PerSteer; // in kg
    const waterSavings = steersSaved * waterPerSteer; // in liters
    const landSavings = steersSaved * landPerSteer; // in square meters

    // Convert to more user-friendly units
    const carbonReductionTons = carbonReduction / 1000; // kg to metric tons
    const waterSavingsKL = waterSavings / 1000; // liters to kiloliters
    const landSavingsHectares = landSavings / 10000; // square meters to hectares

    // Display results with unit conversion
    document.getElementById("totalBeef").textContent = totalBeefPerYear.toFixed(2) + " kg";
    document.getElementById("premiumSteers").textContent = premiumSteers.toFixed(2);
    document.getElementById("fullSetSteers").textContent = fullSetSteers.toFixed(2);
    document.getElementById("steersSaved").textContent = steersSaved.toFixed(2);
    document.getElementById("carbonReduction").textContent = carbonReductionTons.toFixed(2) + " metric tons CO₂";
    document.getElementById("waterSavings").textContent = waterSavingsKL.toFixed(2) + " kiloliters";
    document.getElementById("landSavings").textContent = landSavingsHectares.toFixed(2) + " hectares";
}
function calculateBeef() {
    // Get form values
    const rooms = document.getElementById("rooms").value;
    const occupancy = document.getElementById("occupancy").value / 100;
    const guestsPerRoom = document.getElementById("guests").value;
    const staff = document.getElementById("staff").value;

    // Constants
    const beefPerMeal = 0.2; // kg per meal
    const mealsPerDay = 3;
    const daysPerMonth = 30.42; // Average days per month
    const premiumCutYield =function calculateBeef() {
    // Get form values
    const rooms = document.getElementById("rooms").value;
    const occupancy = document.getElementById("occupancy").value / 100;
    const guestsPerRoom = document.getElementById("guests").value;
    const staff = document.getElementById("staff").value;

    // Constants
    const beefPerMeal = 0.08; // 80 grams (0.08 kg) per meal per person
    const mealsPerDay = 3;
    const daysPerMonth = 30.42; // Average days per month
    const premiumCutYield = 0.20; // 20% premium cuts
    const fullSetYield = 0.80; // 80% utilization
    const steerYield = 220; // kg of freezer-ready beef per steer
    const co2PerSteer = 13500; // kg CO₂ per steer
    const waterPerSteer = 7500000; // liters of water per steer
    const landPerSteer = 2000; // square meters per steer

    // Calculate total guests and beef consumption (monthly)
    const totalGuests = rooms * occupancy * guestsPerRoom;
    const totalMealsPerDay = (totalGuests + staff) * mealsPerDay;
    const totalBeefPerMonth = totalMealsPerDay * beefPerMeal * daysPerMonth; // in kg

    // Calculate number of steers required (monthly)
    const premiumSteers = totalBeefPerMonth / (steerYield * premiumCutYield);
    const fullSetSteers = totalBeefPerMonth / steerYield;
    const steersSaved = premiumSteers - fullSetSteers;

    // Calculate environmental savings (monthly)
    const carbonReduction = steersSaved * co2PerSteer; // in kg
    const waterSavings = steersSaved * waterPerSteer; // in liters
    const landSavings = steersSaved * landPerSteer; // in square meters

    // Convert to more user-friendly units (monthly)
    const total

function calculateBeef() {
    // Get form values
    const rooms = document.getElementById("rooms").value;
    const occupancy = document.getElementById("occupancy").value / 100;
    const guestsPerRoom = document.getElementById("guests").value;
    const staff = document.getElementById("staff").value;

    // Constants
    const beefPerDay = 0.08; // 80 grams (0.08 kg) per day per person
    const daysPerMonth = 30.42; // Average days per month
    const premiumCutYield = 0.20; // 20% premium cuts
    const fullSetYield = 0.80; // 80% utilization
    const steerYield = 220; // kg of freezer-ready beef per steer
    const co2PerSteer = 13500; // kg CO₂ per steer
    const waterPerSteer = 7500000; // liters of water per steer
    const landPerSteer = 2000; // square meters per steer

    // Calculate total guests and beef consumption (monthly)
    const totalGuests = rooms * occupancy * guestsPerRoom;
    const totalPeoplePerDay = totalGuests + staff;
    const totalBeefPerMonth = totalPeoplePerDay * beefPerDay * daysPerMonth; // in kg

    // Calculate number of steers required (monthly)
    const premiumSteers = totalBeefPerMonth / (steer
function calculateBeef() {
    // Get form values
    const rooms = document.getElementById("rooms").value;
    const occupancy = document.getElementById("occupancy").value / 100;
    const guestsPerRoom = document.getElementById("guests").value;
    const staff = document.getElementById("staff").value;

    // Constants
    const beefPerDay = 0.08; // 80 grams (0.08 kg) per day per person
    const daysPerMonth = 30.42; // Average days per month
    const premiumCutYield = 0.20; // 20% premium cuts
    const fullSetYield = 0.80; // 80% utilization
    const steerYield = 220; // kg of freezer-ready beef per steer
    const co2PerSteer = 13500; // kg CO₂ per steer
    const waterPerSteer = 7500000; // liters of water per steer
    const landPerSteer = 2000; // square meters per steer

    // Calculate total people (guests + staff) and monthly beef consumption
    const totalGuests = rooms * occupancy * guestsPerRoom;
    const totalPeople = totalGuests + staff;
    const totalBeefPerMonth = totalPeople * beefPerDay * daysPerMonth; // in kg

    // Calculate number of steers required (monthly)
    const premiumSteers = totalBeefPerMonth / (steerYield * premiumCutYield);
    const fullSetSteers = totalBeefPerMonth / steerYield;
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
    document.getElementById("totalBeef").tex
function calculateBeef() {
    // Get form values
    const rooms = document.getElementById("rooms").value;
    const occupancy = document.getElementById("occupancy").value / 100;
    const guestsPerRoom = document.getElementById("guests").value;
    const staff = document.getElementById("staff").value;

    // Constants
    const beefPerDay = 0.02; // 20 grams (0.02 kg) per day per person
    const daysPerMonth = 30.42; // Average days per month
    const premiumCutYield = 0.20; // 20% premium cuts
    const fullSetYield = 0.80; // 80% utilization
    const steerYield = 220; // kg of freezer-ready beef per steer
    const co2PerSteer = 13500; // kg CO₂ per steer
    const waterPerSteer = 7500000; // liters of water per steer
    const landPerSteer = 2000; // square meters per steer

    // Calculate total people (guests + staff) and monthly beef consumption
    const totalGuests = rooms * occupancy * guestsPerRoom;
    const totalPeople = totalGuests + staff;
    const totalBeefPerMonth = totalPeople * beefPerDay * daysPerMonth; // in kg

    // Calculate number of steers required (monthly)
    const premiumSteers = totalBeefPerMonth / (steerYield * premiumCutYield);
    const fullSetSteers = totalBeefPerMonth / steerYield;
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
