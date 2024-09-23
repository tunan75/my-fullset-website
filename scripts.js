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
    const premiumCutYield = 0.25; // 25% premium cuts
    const thinSteakYield = 0.175; // 17.5% thin steaks
    const boneInRoastYield = 0.15; // 15% bone-in roasts
    const cubeMeatYield = 0.225; // 22.5% cube meat
    const groundMeatYield = 0.20; // 20% ground meat
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

    // Break down the Full Set composition (Premium, Steaks, etc.)
    const fullSetComposition = {
        premiumCuts: steerYield * premiumCutYield,
        thinSteaks: steerYield * thinSteakYield,
        boneInRoasts: steerYield * boneInRoastYield,
        cubeMeat: steerYield * cubeMeatYield,
        groundMeat: steerYield * groundMeatYield
    };

    // Staff use percentages for each beef category
    const staffUsePercentages = {
        premiumCuts: 0.10,
        thinSteaks: 0.80,
        boneInRoasts: 0.70,
        cubeMeat: 0.85,
        groundMeat: 0.80
    };

    // Calculate total number of Full Sets required annually
    const totalAnnualBeefConsumption = totalBeefPerMonth * 12; // annual beef consumption in kg
    const fullSetsRequiredAnnually = totalAnnualBeefConsumption / steerYield; // steers per year (in decimal)

    // Apply monthly averaging for Full Sets
    const fullSetsPerMonth = fullSetsRequiredAnnually / 12; // Average monthly Full Set requirement (in decimal)

    // Round to nearest whole Full Set and apply monthly purchasing logic
    const fullSetsRounded = Math.round(fullSetsPerMonth); // Consistent monthly purchase as a whole number

    // Environmental savings calculations
    const carbonReductionTons = (fullSetsRounded * co2PerSteer / 1000).toFixed(2); // in metric tons
    const waterSavingsML = (fullSetsRounded * waterPer
