//Prv ==> Preview (.PNG)
//Phq ==> High Quality (.EXR)
//zip ==> Preview + High Quality

let marketplace = $("#marketplace").html();
let gridLayout = `col-xs-12 col-md-6 col-lg-3`;
let catalog = {};

// function CreateProduct takes a name and preview .PNG
//and creates a template including the name, .PNG and a button for previewing the product
function createProduct(
  product_id,
  product_name,
  product_Prv,
  product_Phq,
  product_zip,
  product_desc = "No Description.",
  product_price = 0,
  purchase_link = "No Link"
) {
  catalog[product_id] = {
    name: product_name,
    desc: product_desc,
    price: product_price,
    preview: product_Prv,
    hq: product_Phq,
    zip: product_zip,
    link: purchase_link,
  };
  let template;
  template = `<div class="${gridLayout} product_area card"> 
  <img class="thumbnail card" src="${product_Prv}" alt="${product_name}" />
  <h1 class="product_title">${product_name}</h1>
  <button class="btn btn-primary" onclick="viewProduct('${product_id}');">Check Texture!</button>
  </div>
  <br/>`;
  marketplace += template;
}

// function backToMarketplace clears the marketplace, recreates all available products and recreates the marketplace
function backToMarketplace() {
  marketplace = ``;
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // Create Your Products Below Here
  $("#marketplace").html(marketplace);
}

// function viewProduct gives a more indetail view of a product and the ability to download .PNG and .EXR and .ZIP files
// includes a name, description, id and files to be downloaded
// it includes a back button that calls the backToMarketplace function
function viewProduct(product_id) {
  let finalPrice;
  let downloadTemplate;
  let itemInCatalog = catalog[product_id];
  let price = itemInCatalog.price;

  // Checking if price is Free or not
  // According to it the suitable template is rendered
  if (price == 0) {
    finalPrice = "Free";
    downloadTemplate = `
    <div class="btns">
      <a href="${itemInCatalog.preview}" download="${itemInCatalog.name}.png" ><button class="btn btn-success options_btn">PNG</button></a>
      <a href="${itemInCatalog.hq}" download="${itemInCatalog.name}.exr" ><button class="btn btn-success options_btn">EXR</button></a>
      <a href="${itemInCatalog.zip}" download="${itemInCatalog.name}.zip" ><button class="btn btn-success options_btn">ZIP</button></a>
    </div>`;
  } else {
    finalPrice = `${price}$`;
    downloadTemplate = `
    <div class="btns">
      <button class="btn btn-success options_btn"><a href="${itemInCatalog.link}" class="noDecor" 
      target="_blank">Buy on Artstation</a></button>
    </div>`;
  }
  let productViewTemplate;
  productViewTemplate = `<div class="productView">
  <button class="btn btn-warning" onclick="backToMarketplace();">Back</button>
  <br/>
  <br/>
  <img src="${itemInCatalog.preview}" alt="${itemInCatalog.name}" class="viewProductImage card">
  <div class="caption">
    <h1 class="product_title">${itemInCatalog.name}</h1>
    <p>Price: <span class="productPrice">${finalPrice}</span></p>
    <p>${itemInCatalog.desc}</p>
    <p>ID: ${product_id}</p>
  </div>
  ${downloadTemplate}
</div>`;
  marketplace = productViewTemplate;
  $("#marketplace").html(marketplace);
}

backToMarketplace();
$("#marketplace").html(marketplace);
