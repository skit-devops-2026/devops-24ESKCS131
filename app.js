const database = [
  {
    id: "r1",
    name: "Sattvik Pure Veg Haven",
    tagline: "Authentic South Indian & Marwari Delicacies with 100% Pure Veg Kitchen",
    cuisine: ["South Indian", "North Indian"],
    location: "Downtown",
    address: "102 Heritage Way, Downtown",
    rating: 4.8,
    reviewCount: 420,
    priceRange: "₹₹",
    avgCostPerPerson: 350,
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
    kitchenType: "pure_veg",
    kitchenSafetyDetails: "🌿 100% Strictly Pure Vegetarian Kitchen. Zero meat, eggs, or seafood handled anywhere on premises. Dedicated Jain-friendly cooking section with separate utensils.",
    dietaryFlags: ["Vegan", "Gluten-Free", "Jain-Friendly", "Nut-Free"],
    signatureDishes: [
      { name: "Special Ghee Roast Dosa", price: 180, isVeg: true, isGlutenFree: true, rating: 4.9, description: "Crispy fermented rice crepe brushed with aromatic clarified butter." },
      { name: "Sattvik Paneer Butter Masala", price: 260, isVeg: true, isGlutenFree: true, rating: 4.8, description: "Cottage cheese in rich cashew & tomato gravy." },
      { name: "Dal Baati Churma Thali", price: 320, isVeg: true, isGlutenFree: false, rating: 4.9, description: "Traditional Rajasthani baked wheat rolls served with spiced lentils." }
    ],
    moodTags: ["Family Dining", "Comfort Food", "Quick Bite"]
  },
  {
    id: "r2",
    name: "The Green Leaf & Dual Grill",
    tagline: "Fine Dining with Certified Dedicated Separate Kitchens for Veg & Non-Veg",
    cuisine: ["North Indian", "Mughlai"],
    location: "Uptown",
    address: "45 Grand Boulevard, Uptown",
    rating: 4.7,
    reviewCount: 380,
    priceRange: "₹₹₹",
    avgCostPerPerson: 650,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    kitchenType: "separate_kitchen",
    kitchenSafetyDetails: "🔪 Certified Dual-Wing Kitchen. Completely separated vegetarian cooking wing with dedicated deep fryers, separate oil, color-coded utensils, and isolated tawa grills.",
    dietaryFlags: ["Vegan", "Halal", "Gluten-Free", "Dairy-Free"],
    signatureDishes: [
      { name: "Smokey Veg Paneer Tikka", price: 280, isVeg: true, isGlutenFree: true, rating: 4.8, description: "Clay-oven roasted cottage cheese on separate veg grill." },
      { name: "Dual-Kitchen Chicken Dum Biryani", price: 380, isVeg: false, isGlutenFree: true, rating: 4.9, description: "Slow-cooked fragrant basmati rice cooked in dedicated non-veg wing." },
      { name: "Crispy Lotus Stem Kebab", price: 240, isVeg: true, isGlutenFree: true, rating: 4.7, description: "Spiced lotus root patties seared on dedicated vegetarian tawa." }
    ],
    moodTags: ["Date Night", "Fine Dining", "Family Dining"]
  },
  {
    id: "r3",
    name: "Sakura Japanese Izakaya",
    tagline: "Authentic Ramen & Sushi Bar with Dedicated Vegetarian Sushi Station",
    cuisine: ["Japanese"],
    location: "Bay Area",
    address: "77 Harbor Street, Bay Area",
    rating: 4.9,
    reviewCount: 512,
    priceRange: "₹₹₹",
    avgCostPerPerson: 750,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    kitchenType: "separate_kitchen",
    kitchenSafetyDetails: "🔪 Independent Vegan & Veg Sushi Station. Dedicated bamboo mats, knives, and prep counters reserved strictly for plant-based rolls.",
    dietaryFlags: ["Vegan", "Gluten-Free", "Keto", "Nut-Free"],
    signatureDishes: [
      { name: "Avocado & Mango Dragon Roll", price: 340, isVeg: true, isGlutenFree: true, rating: 4.9, description: "Creamy avocado, fresh mango, and crispy tempura bits with vegan eel sauce." },
      { name: "Truffle Mushroom Ramen", price: 420, isVeg: true, isGlutenFree: false, rating: 4.9, description: "Rich shiitake broth with handmade noodles and truffle oil." },
      { name: "Salmon Nigiri Platter", price: 490, isVeg: false, isGlutenFree: true, rating: 4.8, description: "Fresh Norwegian salmon over seasoned sushi rice." }
    ],
    moodTags: ["Date Night", "Fine Dining"]
  },
  {
    id: "r4",
    name: "Govinda's Pure Veg Sanctuary",
    tagline: "100% Pure Organic Vegetarian & Vegan Buffet & Fine Cuisine",
    cuisine: ["North Indian", "South Indian", "Vegan"],
    location: "Downtown",
    address: "204 Lotus Lane, Downtown",
    rating: 4.9,
    reviewCount: 650,
    priceRange: "₹₹",
    avgCostPerPerson: 400,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    kitchenType: "pure_veg",
    kitchenSafetyDetails: "🌿 100% Pure Organic Veg & Ahimsa Kitchen. Zero non-veg ingredients or cross-contamination risk. Garlic & Onion-free options available.",
    dietaryFlags: ["Vegan", "Gluten-Free", "Jain-Friendly", "Nut-Free", "Keto"],
    signatureDishes: [
      { name: "Royal Shahi Paneer", price: 290, isVeg: true, isGlutenFree: true, rating: 4.9, description: "Fresh cottage cheese in velvety saffron & melon seed gravy." },
      { name: "Vegan Mango Kulfi", price: 130, isVeg: true, isGlutenFree: true, rating: 4.8, description: "Creamy coconut milk ice dessert with Alphonso mango pulp." },
      { name: "Avocado & Quinoa Power Bowl", price: 250, isVeg: true, isGlutenFree: true, rating: 4.7, description: "Superfood bowl with tahini dressing." }
    ],
    moodTags: ["Healthy", "Family Dining", "Comfort Food"]
  },
  {
    id: "r5",
    name: "Bella Italia Trattoria",
    tagline: "Artisanal Wood-Fired Pizzas & Handmade Pasta",
    cuisine: ["Italian"],
    location: "Midtown",
    address: "12 Pine Street, Midtown",
    rating: 4.6,
    reviewCount: 290,
    priceRange: "₹₹",
    avgCostPerPerson: 500,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    kitchenType: "combined_kitchen",
    kitchenSafetyDetails: "🍲 Shared Italian Kitchen. Pizzas baked in wood-fired oven. Dedicated foil liners provided upon request for veg pizzas.",
    dietaryFlags: ["Vegan", "Gluten-Free", "Dairy-Free"],
    signatureDishes: [
      { name: "Truffle Wild Mushroom Pizza", price: 390, isVeg: true, isGlutenFree: false, rating: 4.8, description: "Mozzarella, wild mushrooms, garlic olive oil, and white truffle glaze." },
      { name: "Neapolitan Margherita", price: 320, isVeg: true, isGlutenFree: false, rating: 4.7, description: "San Marzano tomatoes, buffalo mozzarella, and fresh basil." },
      { name: "Prosciutto & Burrata Pasta", price: 450, isVeg: false, isGlutenFree: false, rating: 4.6, description: "Fresh tagliatelle with cured ham and creamy burrata." }
    ],
    moodTags: ["Casual Dining", "Date Night"]
  },
  {
    id: "r6",
    name: "El Mariachi Taqueria",
    tagline: "Vibrant Mexican Street Tacos & Fresh Guacamole",
    cuisine: ["Mexican"],
    location: "Westside",
    address: "89 Sunset Boulevard, Westside",
    rating: 4.5,
    reviewCount: 310,
    priceRange: "₹",
    avgCostPerPerson: 280,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    kitchenType: "separate_kitchen",
    kitchenSafetyDetails: "🔪 Separate Grill Sections for Veggie & Meat Tacos. Lard-free beans cooked in dedicated vegetarian cookware.",
    dietaryFlags: ["Vegan", "Gluten-Free", "Halal", "Dairy-Free"],
    signatureDishes: [
      { name: "Crispy Jackfruit Carnitas Taco", price: 120, isVeg: true, isGlutenFree: true, rating: 4.8, description: "Braised shredded jackfruit in chipotle glaze." },
      { name: "Birria Beef Quesatacos", price: 160, isVeg: false, isGlutenFree: true, rating: 4.9, description: "Slow-cooked beef taco with consommé broth." },
      { name: "Fresh House Guacamole & Chips", price: 180, isVeg: true, isGlutenFree: true, rating: 4.7, description: "Hass avocados, lime juice, cilantro, and sea salt chips." }
    ],
    moodTags: ["Quick Bite", "Late Night Craving"]
  }
];

const state = {
  searchQuery: "",
  selectedKitchen: "all",
  location: "all",
  cuisine: "all",
  minRating: 4.0,
  selectedDietary: [],
  selectedPrice: "all",
  maxBudget: 600,
  sortBy: "match"
};

function calculateMatchScore(restaurant) {
  let score = 55;
  score += (restaurant.rating / 5) * 20;

  if (state.selectedKitchen !== "all") {
    if (state.selectedKitchen === "pure_veg") {
      if (restaurant.kitchenType === "pure_veg") score += 20;
      else if (restaurant.kitchenType === "separate_kitchen") score += 10;
      else score -= 15;
    } else if (state.selectedKitchen === "separate_kitchen") {
      if (restaurant.kitchenType === "separate_kitchen" || restaurant.kitchenType === "pure_veg") score += 20;
      else score -= 10;
    }
  } else {
    score += 10;
  }

  if (state.location !== "all" && restaurant.location === state.location) score += 10;
  if (state.cuisine !== "all" && restaurant.cuisine.includes(state.cuisine)) score += 10;

  if (state.selectedDietary.length > 0) {
    const matchCount = state.selectedDietary.filter(d => restaurant.dietaryFlags.includes(d)).length;
    score += (matchCount / state.selectedDietary.length) * 15;
  } else {
    score += 8;
  }

  return Math.min(99, Math.max(60, Math.round(score)));
}

function renderRestaurants() {
  const grid = document.getElementById("restaurantGrid");
  let filtered = database.filter(r => {
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchName = r.name.toLowerCase().includes(q);
      const matchCuisine = r.cuisine.some(c => c.toLowerCase().includes(q));
      if (!matchName && !matchCuisine) return false;
    }
    if (state.selectedKitchen !== "all") {
      if (state.selectedKitchen === "pure_veg" && r.kitchenType !== "pure_veg") return false;
      if (state.selectedKitchen === "separate_kitchen" && r.kitchenType === "combined_kitchen") return false;
      if (state.selectedKitchen === "combined_kitchen" && r.kitchenType !== "combined_kitchen") return false;
    }
    if (state.location !== "all" && r.location !== state.location) return false;
    if (state.cuisine !== "all" && !r.cuisine.includes(state.cuisine)) return false;
    if (r.rating < state.minRating) return false;
    if (state.selectedPrice !== "all" && r.priceRange !== state.selectedPrice) return false;
    if (r.avgCostPerPerson > state.maxBudget) return false;
    if (state.selectedDietary.length > 0) {
      const hasAll = state.selectedDietary.every(d => r.dietaryFlags.includes(d));
      if (!hasAll) return false;
    }
    return true;
  });

  filtered = filtered.map(r => ({ ...r, matchScore: calculateMatchScore(r) }));

  if (state.sortBy === "match") filtered.sort((a, b) => b.matchScore - a.matchScore);
  else if (state.sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);
  else if (state.sortBy === "cost_asc") filtered.sort((a, b) => a.avgCostPerPerson - b.avgCostPerPerson);
  else if (state.sortBy === "cost_desc") filtered.sort((a, b) => b.avgCostPerPerson - a.avgCostPerPerson);

  document.getElementById("resultCount").innerText = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: #94a3b8;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <h3 style="font-size: 1.4rem; color: #fff; margin-bottom: 0.5rem;">No Restaurants Match Your Selected Filters</h3>
        <p>Try resetting filters or adjusting kitchen setup settings.</p>
        <button class="btn btn-primary" style="margin-top: 1rem;" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(r => {
    let kitchenBadgeText = "🌿 100% Pure Veg";
    let kitchenBadgeClass = "pure_veg";
    if (r.kitchenType === "separate_kitchen") {
      kitchenBadgeText = "🔪 Dedicated Separate Kitchens";
      kitchenBadgeClass = "separate_kitchen";
    } else if (r.kitchenType === "combined_kitchen") {
      kitchenBadgeText = "🍲 Combined Kitchen";
      kitchenBadgeClass = "combined_kitchen";
    }

    const topDish = r.signatureDishes[0];

    return `
      <div class="restaurant-card">
        <div class="card-image-wrap">
          <img src="${r.image}" alt="${r.name}" loading="lazy" />
          <div class="match-score-badge">⚡ ${r.matchScore}% Taste Match</div>
          <div class="kitchen-badge ${kitchenBadgeClass}">${kitchenBadgeText}</div>
        </div>

        <div class="card-content">
          <div class="card-header-meta">
            <h3 class="card-title">${r.name}</h3>
            <div class="rating-chip">⭐ ${r.rating}</div>
          </div>

          <div class="card-cuisine">📍 ${r.location} • ${r.cuisine.join(", ")} • ${r.priceRange}</div>

          <div class="card-dietary-tags">
            ${r.dietaryFlags.map(d => `<span class="diet-tag">${d}</span>`).join("")}
          </div>

          <div class="signature-dish-preview">
            <span class="dish-label">🔥 Top Signature Dish:</span>
            <strong>${topDish.name}</strong> - ₹${topDish.price} (${topDish.rating}⭐)
          </div>

          <div class="card-footer">
            <div class="cost-info">Avg <span class="cost-highlight">₹${r.avgCostPerPerson}</span> / person</div>
            <button class="btn btn-primary btn-card-action" onclick="openDetailModal('${r.id}')">View Details & Menu</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function resetAllFilters() {
  state.searchQuery = "";
  state.selectedKitchen = "all";
  state.location = "all";
  state.cuisine = "all";
  state.minRating = 4.0;
  state.selectedDietary = [];
  state.selectedPrice = "all";
  state.maxBudget = 600;

  document.getElementById("searchInput").value = "";
  document.getElementById("locationSelect").value = "all";
  document.getElementById("cuisineSelect").value = "all";
  document.getElementById("ratingSlider").value = 4.0;
  document.getElementById("ratingValue").innerText = "4.0+ Stars";
  document.getElementById("budgetSlider").value = 600;
  document.getElementById("budgetValue").innerText = "₹600 / person";

  document.querySelectorAll(".kitchen-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.kitchen === "all");
  });

  document.querySelectorAll('#dietaryCheckboxes input').forEach(cb => cb.checked = false);
  document.querySelectorAll('#priceBtnGroup .price-btn').forEach(btn => {
    btn.classList.toggle("active", btn.dataset.price === "all");
  });

  renderRestaurants();
}

function openDetailModal(id) {
  const r = database.find(item => item.id === id);
  if (!r) return;

  const modal = document.getElementById("detailModal");
  const body = document.getElementById("modalDetailBody");

  body.innerHTML = `
    <div class="modal-hero">
      <img src="${r.image}" class="modal-hero-img" alt="${r.name}" />
      <div>
        <span class="diet-tag" style="background: rgba(59, 130, 246, 0.2); color: #60a5fa; font-weight: 700;">📍 ${r.location}</span>
        <h2 style="font-size: 2rem; margin: 0.5rem 0 0.2rem;">${r.name}</h2>
        <p style="color: #94a3b8; font-size: 0.95rem; margin-bottom: 1rem;">${r.tagline}</p>
        
        <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;">
          <div class="rating-chip" style="font-size: 1rem; padding: 0.3rem 0.8rem;">⭐ ${r.rating} (${r.reviewCount} reviews)</div>
          <div style="color: #34d399; font-weight: 800; font-size: 1.1rem;">₹${r.avgCostPerPerson} avg / person</div>
          <div style="color: #94a3b8;">${r.priceRange}</div>
        </div>

        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          ${r.dietaryFlags.map(d => `<span class="diet-tag">${d}</span>`).join("")}
        </div>
      </div>
    </div>

    <div class="kitchen-safety-card">
      <h4>🥦 Verified Kitchen Setup & Hygiene Safety Certificate</h4>
      <p style="font-size: 0.95rem; color: #e2e8f0; margin-top: 0.4rem; line-height: 1.5;">${r.kitchenSafetyDetails}</p>
    </div>

    <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 1rem;">🍲 Signature Dishes Spotlight</h3>
    <div class="dishes-grid">
      ${r.signatureDishes.map(dish => `
        <div class="dish-card">
          <div class="dish-card-header">
            <span class="dish-title">${dish.isVeg ? '🌿' : '🍗'} ${dish.name}</span>
            <span class="dish-price">₹${dish.price}</span>
          </div>
          <div style="font-size: 0.8rem; color: #fbbf24; margin-bottom: 0.4rem;">⭐ ${dish.rating} rating</div>
          <p style="font-size: 0.82rem; color: #94a3b8;">${dish.description}</p>
        </div>
      `).join("")}
    </div>
  `;

  modal.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  renderRestaurants();

  document.getElementById("searchInput").addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    renderRestaurants();
  });

  document.querySelectorAll(".kitchen-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".kitchen-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.selectedKitchen = tab.dataset.kitchen;
      renderRestaurants();
    });
  });

  document.getElementById("locationSelect").addEventListener("change", (e) => {
    state.location = e.target.value;
    renderRestaurants();
  });

  document.getElementById("cuisineSelect").addEventListener("change", (e) => {
    state.cuisine = e.target.value;
    renderRestaurants();
  });

  document.getElementById("ratingSlider").addEventListener("input", (e) => {
    state.minRating = parseFloat(e.target.value);
    document.getElementById("ratingValue").innerText = `${state.minRating.toFixed(1)}+ Stars`;
    renderRestaurants();
  });

  document.getElementById("budgetSlider").addEventListener("input", (e) => {
    state.maxBudget = parseInt(e.target.value);
    document.getElementById("budgetValue").innerText = `₹${state.maxBudget} / person`;
    renderRestaurants();
  });

  document.querySelectorAll("#dietaryCheckboxes input").forEach(cb => {
    cb.addEventListener("change", () => {
      state.selectedDietary = Array.from(document.querySelectorAll("#dietaryCheckboxes input:checked")).map(c => c.value);
      renderRestaurants();
    });
  });

  document.querySelectorAll("#priceBtnGroup .price-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#priceBtnGroup .price-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.selectedPrice = btn.dataset.price;
      renderRestaurants();
    });
  });

  document.getElementById("resetFiltersBtn").addEventListener("click", resetAllFilters);
  document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderRestaurants();
  });

  document.getElementById("closeDetailModal").addEventListener("click", () => {
    document.getElementById("detailModal").classList.remove("active");
  });

  document.getElementById("closeWheelModal").addEventListener("click", () => {
    document.getElementById("wheelModal").classList.remove("active");
  });

  document.getElementById("closeBudgetModal").addEventListener("click", () => {
    document.getElementById("budgetModal").classList.remove("active");
  });

  document.getElementById("openWheelBtn").addEventListener("click", () => {
    document.getElementById("wheelModal").classList.add("active");
    document.getElementById("wheelResultCard").style.display = "none";
  });

  // Spin Wheel Action - Canvas stays clean (numbers 1-6), winner card pops up after spin
  document.getElementById("spinWheelActionBtn").addEventListener("click", () => {
    const wheelCanvas = document.getElementById("wheelCanvas");
    const resultCard = document.getElementById("wheelResultCard");
    const randomDeg = 1800 + Math.floor(Math.random() * 360);
    wheelCanvas.style.transform = `rotate(${randomDeg}deg)`;

    setTimeout(() => {
      const winner = database[Math.floor(Math.random() * database.length)];
      resultCard.innerHTML = `
        <div style="background: rgba(59, 130, 246, 0.15); border: 1px solid #3b82f6; padding: 1.25rem; border-radius: 12px; margin-top: 1.5rem;">
          <h3 style="color: #60a5fa; font-size: 1.2rem;">🎉 We Found Your Perfect Match!</h3>
          <h2 style="font-size: 1.6rem; margin: 0.4rem 0;">${winner.name}</h2>
          <p style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 0.8rem;">${winner.tagline}</p>
          <button class="btn btn-primary" onclick="document.getElementById('wheelModal').classList.remove('active'); openDetailModal('${winner.id}');">View Menu & Book Table</button>
        </div>
      `;
      resultCard.style.display = "block";
    }, 4000);
  });

  document.getElementById("openBudgetBtn").addEventListener("click", () => {
    const modal = document.getElementById("budgetModal");
    const body = document.getElementById("budgetModalBody");

    body.innerHTML = `
      <div style="background: rgba(255, 255, 255, 0.04); padding: 1.25rem; border-radius: 12px; border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
        <label style="display: block; font-weight: 700; margin-bottom: 0.5rem;">Select Restaurant:</label>
        <select id="budgetRestSelect" class="custom-select" style="width: 100%;">
          ${database.map(r => `<option value="${r.id}">${r.name} (${r.priceRange})</option>`).join("")}
        </select>
      </div>
      <div id="budgetDishesContainer"></div>
    `;

    const select = document.getElementById("budgetRestSelect");
    const renderBudgetDishes = () => {
      const selectedId = select.value;
      const r = database.find(item => item.id === selectedId);
      const container = document.getElementById("budgetDishesContainer");

      container.innerHTML = `
        <h4 style="margin-bottom: 0.75rem;">Dishes at ${r.name}:</h4>
        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          ${r.signatureDishes.map((dish, i) => `
            <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255, 255, 255, 0.03); padding: 0.8rem 1rem; border-radius: 8px; border: 1px solid var(--border-color);">
              <div>
                <strong>${dish.name}</strong>
                <div style="font-size: 0.8rem; color: #94a3b8;">₹${dish.price} / dish</div>
              </div>
              <input type="number" min="0" value="${i === 0 ? 2 : 1}" data-price="${dish.price}" class="dish-qty-input" style="width: 60px; padding: 0.4rem; background: #0b0f19; border: 1px solid var(--border-color); color: #fff; border-radius: 6px; text-align: center;" />
            </div>
          `).join("")}
        </div>

        <div style="margin-top: 1.5rem; background: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; padding: 1.25rem; border-radius: 12px; text-align: center;">
          <div style="font-size: 0.9rem; color: #94a3b8;">Estimated Bill Total (with tax & tip)</div>
          <div id="calculatedTotal" style="font-size: 2.2rem; font-weight: 800; color: #34d399; margin: 0.3rem 0;">₹0.00</div>
          <div style="font-size: 0.85rem; color: #94a3b8;">Avg Cost Per Person (for 2 guests): <strong id="perPersonTotal">₹0.00</strong></div>
        </div>
      `;

      const recalculate = () => {
        let sum = 0;
        document.querySelectorAll(".dish-qty-input").forEach(input => {
          const qty = parseInt(input.value) || 0;
          const price = parseFloat(input.dataset.price);
          sum += qty * price;
        });
        const total = sum * 1.18;
        document.getElementById("calculatedTotal").innerText = `₹${total.toFixed(2)}`;
        document.getElementById("perPersonTotal").innerText = `₹${(total / 2).toFixed(2)}`;
      };

      document.querySelectorAll(".dish-qty-input").forEach(input => {
        input.addEventListener("input", recalculate);
      });

      recalculate();
    };

    select.addEventListener("change", renderBudgetDishes);
    renderBudgetDishes();
    modal.classList.add("active");
  });
});
