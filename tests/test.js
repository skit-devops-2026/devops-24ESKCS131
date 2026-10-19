const assert = require('assert');

// Import database & logic functions simulation
const database = [
  {
    id: "r1",
    name: "Sattvik Pure Veg Haven",
    kitchenType: "pure_veg",
    rating: 4.8,
    priceRange: "₹₹",
    avgCostPerPerson: 350,
    dietaryFlags: ["Vegan", "Gluten-Free", "Jain-Friendly"],
    cuisine: ["South Indian", "North Indian"]
  },
  {
    id: "r2",
    name: "The Green Leaf & Dual Grill",
    kitchenType: "separate_kitchen",
    rating: 4.7,
    priceRange: "₹₹₹",
    avgCostPerPerson: 650,
    dietaryFlags: ["Vegan", "Halal"],
    cuisine: ["North Indian", "Mughlai"]
  },
  {
    id: "r3",
    name: "Bella Italia Trattoria",
    kitchenType: "combined_kitchen",
    rating: 4.6,
    priceRange: "₹₹",
    avgCostPerPerson: 500,
    dietaryFlags: ["Gluten-Free"],
    cuisine: ["Italian"]
  }
];

// Test 1: Verify Restaurant Data Structure
console.log("▶ Running Test 1: Verifying Database Items Count...");
assert.strictEqual(database.length, 3, "Database should contain 3 restaurants.");
console.log("✔ Test 1 Passed!");

// Test 2: Verify Kitchen Segregation Categories
console.log("▶ Running Test 2: Verifying Kitchen Setup Types...");
const pureVeg = database.filter(r => r.kitchenType === 'pure_veg');
assert.strictEqual(pureVeg.length, 1, "Should find exactly 1 pure veg restaurant.");
assert.strictEqual(pureVeg[0].name, "Sattvik Pure Veg Haven");
console.log("✔ Test 2 Passed!");

// Test 3: Test Match Score Logic Calculation Math
console.log("▶ Running Test 3: Verifying Taste Match Score Algorithm...");
function calculateMatchScore(restaurant, selectedKitchen) {
  let score = 55;
  score += (restaurant.rating / 5) * 20;
  if (selectedKitchen === 'pure_veg') {
    if (restaurant.kitchenType === 'pure_veg') score += 20;
    else if (restaurant.kitchenType === 'separate_kitchen') score += 10;
    else score -= 15;
  }
  return Math.min(99, Math.max(60, Math.round(score)));
}

const pureVegScore = calculateMatchScore(database[0], 'pure_veg');
assert.ok(pureVegScore >= 90, "Pure veg restaurant should score 90% or higher for pure veg filter.");

const combinedScore = calculateMatchScore(database[2], 'pure_veg');
assert.ok(combinedScore < 70, "Combined kitchen restaurant should receive penalty when pure veg is requested.");
console.log("✔ Test 3 Passed!");

// Test 4: Dietary Shield Verification
console.log("▶ Running Test 4: Verifying Dietary Flags Shield...");
const veganRestaurants = database.filter(r => r.dietaryFlags.includes("Vegan"));
assert.strictEqual(veganRestaurants.length, 2, "Should find 2 vegan-friendly restaurants.");
console.log("✔ Test 4 Passed!");

console.log("\n🎉 ALL AUTOMATED TESTS PASSED SUCCESSFULLY!");
