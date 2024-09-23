// Function to calculate beef consumption and steers required
function calculateBeef() {
    // Get form values
    const rooms = document.getElementById("rooms").value;
    const occupancy = document.getElementById("occupancy").value / 100;
    const guestsPerRoom = document.getElementById("guests").value;
    const staff = document.getElementById("staff").value;

    // Constants
    const guestBeefPerDay = 0.08; // 80 grams (0.08 kg) per day per guest
    const staffBeefPerMonth = 0.6; // 600 grams (0.6 kg) per month per staff member
    const daysPerMonth = 30.42; // Average days per month
    const steerYield = 220; // kg of freezer-ready beef per steer

    // Calculate total guests and staff
    const totalGuests = rooms * occupancy * guestsPerRoom;
    const totalStaff = staff;

    // Beef consumption for guests
    const totalGuestBeefPerMonth = totalGuests * guestBeefPerDay * daysPerMonth; // in kg

    // Beef consumption for staff
    const totalStaffBeefPerMonth = totalStaff * staffBeefPerMonth; // in kg

    // Total beef consumption (guests + staff)
    const totalBeefPerMonth = totalGuestBeefPerMonth + totalStaffBeefPerMonth; // in kg

    // Calculate number of steers required (monthly)
    const steersRequired = totalBeefPerMonth / steerYield;

    // Display results
    document.getElementById("totalBeef").textContent = totalBeefPerMonth.toFixed(2) + " kg";
    document.getElementById("premiumSteers").textContent = steersRequired.toFixed(2);
}

