const laptops = [
  {
      productName: "UltraBook Pro 15",
      productPrice: 1299.99,
      quantity: 1,
      productImage: "https://cdn.mos.cms.futurecdn.net/Ajc3ezCTN4FGz2vF4LpQn9-1200-80.jpg",
      description: "A powerful ultrabook with a sleek design, perfect for professionals on the go."
  },
  {
      productName: "Gaming Beast X200",
      productPrice: 1899.99,
      quantity: 1,
      productImage: "https://cdn.mos.cms.futurecdn.net/Ajc3ezCTN4FGz2vF4LpQn9-1200-80.jpg",
      description: "High-performance gaming laptop with top-tier graphics for an immersive experience."
  },
  {
      productName: "Budget Buddy 14",
      productPrice: 499.99,
      quantity: 1,
      productImage: "https://cdn.mos.cms.futurecdn.net/Ajc3ezCTN4FGz2vF4LpQn9-1200-80.jpg",
      description: "Affordable and reliable, ideal for students and everyday use."
  },
  {
      productName: "Creative Studio 17",
      productPrice: 1599.99,
      quantity: 1,
      productImage: "https://cdn.mos.cms.futurecdn.net/Ajc3ezCTN4FGz2vF4LpQn9-1200-80.jpg",
      description: "Designed for creatives, this laptop offers vibrant display and powerful editing capabilities."
  },
  {
      productName: "2-in-1 FlexBook",
      productPrice: 799.99,
      quantity: 1,
      productImage: "https://cdn.mos.cms.futurecdn.net/Ajc3ezCTN4FGz2vF4LpQn9-1200-80.jpg",
      description: "Versatile 2-in-1 laptop that easily transitions from a laptop to a tablet."
  }
];

// Render products to DOM 
const CartContainer = document.getElementById("cart-list");

// Handle increment 
function incrementQuantity(param) {
  let clickProductName = param.target.id;

  // Find the product in the array
  let product;
  for (let item of laptops) {
      if (item.productName === clickProductName) {
          product = item;
          break;
      }
  }

  // Increment the quantity
  product.quantity++;

  // Find the quantity element and update it
  let quantityElem = document.getElementById(`quantity-${clickProductName}`);
  quantityElem.textContent = product.quantity; // Use the updated product variable

  // Update the laptop array
  let index = laptops.indexOf(product);
  laptops[index] = product;
}

// Handle decrease logic
function decreaseQtn(param) {
  let clickProductName = param.target.id;

  // Find the product in the array
  let product;
  for (let item of laptops) {
      if (item.productName === clickProductName) {
          product = item;
          break;
      }
  }

  // Decrement the product if quantity is greater than 1
  if (product.quantity > 1) {
      product.quantity--;
  }

  // Find the quantity element and update it
  let quantityElem = document.getElementById(`quantity-${clickProductName}`);
  quantityElem.textContent = product.quantity; // Use the updated product variable

  // Update the laptop array
  let index = laptops.indexOf(product);
  laptops[index] = product;
}

// Handle rendering of products 
function renderProducts() {
  for (let product of laptops) {
      let productCard = document.createElement("div");
      productCard.setAttribute("class", "product-card");

      let productimg = document.createElement("img");
      productimg.src = product.productImage;

      let productName = document.createElement("h3");
      productName.textContent = product.productName;

      let productPrice = document.createElement("p");
      productPrice.textContent = `$${product.productPrice.toFixed(2)}`; // Display price correctly

      let productDescription = document.createElement("p");
      productDescription.textContent = product.description;

      // Buttons
      let incrementBtn = document.createElement("button");
      incrementBtn.setAttribute("id", product.productName);
      incrementBtn.textContent = "+";
      incrementBtn.addEventListener("click", incrementQuantity);

      let decrementBtn = document.createElement("button");
      decrementBtn.setAttribute("id", product.productName);
      decrementBtn.textContent = "-";
      decrementBtn.addEventListener("click", decreaseQtn); // Add event listener

      let quantity = document.createElement("p");
      quantity.textContent = product.quantity; // Set to the initial quantity
      quantity.setAttribute("id", `quantity-${product.productName}`);

      let deleteEle = document.createElement("button");
      deleteEle.textContent = "remove";

      let leftBox = document.createElement("div");
      leftBox.setAttribute("class", "left-box");
      leftBox.appendChild(decrementBtn);
      leftBox.appendChild(quantity);
      leftBox.appendChild(incrementBtn);

      let actionBox = document.createElement("div");
      actionBox.setAttribute("class", "action-box");
      actionBox.appendChild(leftBox);
      actionBox.appendChild(deleteEle);

      // Add elements to product card 
      productCard.appendChild(productimg);
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);
      productCard.appendChild(productDescription);
      productCard.appendChild(actionBox);

      CartContainer.appendChild(productCard);
  }
}

renderProducts();
