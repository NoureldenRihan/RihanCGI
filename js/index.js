//Prv ==> Preview (.PNG)
//Phq ==> High Quality (.EXR)
//zip ==> Preview + High Quality

let marketplace = $("#marketplace").html();
let gridLayout = `col-xs-12 col-md-6 col-lg-3`;
let catalog = {};
let totalProductNum = 0;

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
  totalProductNum += 1;
  $("#totalProductNum").html(totalProductNum);
}

// function backToMarketplace clears the marketplace, recreates all available products and recreates the marketplace
function backToMarketplace() {
  marketplace = ``;
  createProduct(
    "HRDS203",
    "Hard Surface <br/> 203",
    "../product_Data/HRDS203/HS Symbol 1.png",
    "../product_Data/HRDS203/HS Symbol 1.exr",
    "../product_Data/HRDS203/HS Symbol 1.zip",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS291",
    "Hard Surface <br/> 291",
    "../product_Data/HRDS291/HS Symbol 4.png",
    "../product_Data/HRDS291/HS Symbol 4.exr",
    "../product_Data/HRDS291/HS Symbol 4.zip",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS120",
    "Hard Surface <br/> 120",
    "../product_Data/HRDS120/HS Symbol 5.png",
    "../product_Data/HRDS120/HS Symbol 5.exr",
    "../product_Data/HRDS120/HS Symbol 5.zip",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HDRS222",
    "Hard Surface <br/> 222",
    "../product_Data/HDRS222/HS Symbol 9.png",
    "../product_Data/HDRS222/HS Symbol 9.exr",
    "../product_Data/HDRS222/HS Symbol 9.zip",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS102",
    "Hard Surface <br/> 102",
    "../product_Data/HRDS102/HS Symbol 3.png",
    "../product_Data/HRDS102/HS Symbol 3.exr",
    "../product_Data/HRDS102/HS Symbol 3.zip",
    "Hard SUrface Shape",
    0
  );
  createProduct(
    "HDRS223",
    "Hard Surface <br/> 223",
    "../product_Data/HDRS223/HS Symbol 10.png",
    "../product_Data/HDRS223/HS Symbol 10.exr",
    "../product_Data/HDRS223/HS Symbol 10.zip",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HDRS111",
    "Hard Surface <br/> 111",
    "../product_Data/HRDS111/HS Symbol 7.png",
    "../product_Data/HRDS111/HS Symbol 7.exr",
    "../product_Data/HRDS111/HS Symbol 7.zip",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HDRS112",
    "Hard Surface <br/> 112",
    "../product_Data/HDRS112/HS Symbol 8.png",
    "../product_Data/HDRS112/HS Symbol 8.exr",
    "../product_Data/HDRS112/HS Symbol 8.zip",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS227",
    "Hard Surface <br/> 227",
    "../product_Data/HRDS227/HS Symbol 6.png",
    "../product_Data/HRDS227/HS Symbol 6.exr",
    "../product_Data/HRDS227/HS Symbol 6.zip",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS230",
    "Hard Surface <br/> 230",
    "../product_Data/HRDS230/HS Symbol 2.png",
    "../product_Data/HRDS230/HS Symbol 2.exr",
    "../product_Data/HRDS230/HS Symbol 2.zip",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "APHRO00",
    "Aphrodite <br/> Symbol",
    "../product_Data/APHRO00/Aphrodite.png",
    "../product_Data/APHRO00/Aphrodite.exr",
    "../product_Data/APHRO00/Aphrodite.zip",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "APOLL05",
    "Apollo <br/> Symbol",
    "../product_Data/APOLL05/Apollo.png",
    "../product_Data/APOLL05/Apollo.exr",
    "../product_Data/APOLL05/Apollo.zip",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "ATHENA7",
    "Athena <br/> Symbol",
    "../product_Data/ATHENA7/Athena.png",
    "../product_Data/ATHENA7/Athena.exr",
    "../product_Data/ATHENA7/Athena.zip",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "ARES802",
    "Ares <br/> Symbol",
    "../product_Data/ARES802/Ares.png",
    "../product_Data/ARES802/Ares.exr",
    "../product_Data/ARES802/Ares.zip",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "DEMET07",
    "Demeter <br/> Symbol",
    "../product_Data/DEMET07/Demeter.png",
    "../product_Data/DEMET07/Demeter.exr",
    "../product_Data/DEMET07/Demeter.zip",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "DIONY00",
    "Dionysus <br/> Symbol",
    "../product_Data/DIONY00/Dionysus.png",
    "../product_Data/DIONY00/Dionysus.exr",
    "../product_Data/DIONY00/Dionysus.zip",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "ZEUS100",
    "Zues <br/> Symbol",
    "../product_Data/ZEUS100/Zeus.png",
    "../product_Data/ZEUS100/Zeus.exr",
    "../product_Data/ZEUS100/Zeus.zip",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "POSEID0N",
    "Poseidon <br/> Symbol",
    "../product_Data/POSEID0N/Poseidon.png",
    "../product_Data/POSEID0N/Poseidon.exr",
    "../product_Data/POSEID0N/Poseidon.zip",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "HERMES6",
    "Hermes <br/> Symbol",
    "../product_Data/HERMES6/Hermes.png",
    "../product_Data/HERMES6/Hermes.exr",
    "../product_Data/HERMES6/Hermes.zip",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "HEPHA47",
    "Hephaestus <br/> Symbol",
    "../product_Data/HEPHA47/Hephaestus.png",
    "../product_Data/HEPHA47/Hephaestus.exr",
    "../product_Data/HEPHA47/Hephaestus.zip",
    "Ancient Greek Symbol",
    0
  );
  // Create Your Products Above Here
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  console.log();
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
