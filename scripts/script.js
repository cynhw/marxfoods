// Fetch the JSON file
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const productContainer = document.getElementById('product-container');

    // Generate HTML for each product
    const productsHTML = data.map(product => {
      if (product.price !== null) {
        return `
          <div class="products ${product.category}">
            <img src="${product.image}" width="200px" height="200px">
            <h2>${product.name}</h2>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
          </div>
        `;
      } else {
        return `
          <div class="products ${product.category}">
            <img src="${product.image}" width="200px" height="200px">
            <h2>${product.name}</h2>
            <p class="price">${product.stock}</p>
            <p>${product.description}</p>
          </div>
        `;
      }
    }).join('');

    // Insert the product data into the HTML element
    productContainer.innerHTML = productsHTML;
  })
  .catch(error => console.error(error));

  var accordions = document.getElementsByClassName("accordion");

        for (var i = 0; i < accordions.length; i++) {
            accordions[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }