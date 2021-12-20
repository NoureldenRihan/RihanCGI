//Prv ==> Preview (.PNG)
//Phq ==> High Quality (.EXR)
//zip ==> Preview + High Quality (.ZIP)

let marketplace = $("#marketplace").html();
let gridLayout = `col-xs-12 col-md-6 col-lg-3`;
let catalog = {};
let totalProductNum = 0;

// function that Creates the NavBar in All Webpages that have a div with id "CreateNavBarHere"
function createNavBar() {
  let targetDiv = document.getElementById("CreateNavBarHere");
  let targetclass = targetDiv.innerHTML;
  let navBar = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <img
      src="./Images/rihan-cgi-logo-cropped.png"
      alt="Rihan CGI Logo"
      class="navbar-brand Logo"
    />
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link ${
            targetclass == 1 ? "active" : " "
          } " aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ${
            targetclass == 2 ? "active" : " "
          }" href="Brush Textures.htm">Brush Textures</a>
        </li>
        <li class="nav-item">
            <a class="nav-link ${
              targetclass == 3 ? "active" : " "
            }" href="Search Guide.html">Search Guide</a>
          </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.patreon.com/RihanCGI"
            >Patreon</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link ${
            targetclass == 4 ? "active" : " "
          }" href="FAQs.htm">FAQs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="PrivacyPolicy.html">Privacy Policy</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
  targetDiv.innerHTML = navBar;
}

// function That Creates the Price Filter Buttons
function createFilterButtons() {
  let priceButtons = `
  <button id="PriceAll" class="priceFilterButton btn btn-outline-info" onclick="allOrFreeOrPaid('all');">All</button>
  <button id="PriceFree" class="priceFilterButton btn btn-outline-info" onclick="allOrFreeOrPaid('free');">Free</button>
  <button id="PricePaid" class="priceFilterButton btn btn-outline-info" onclick="allOrFreeOrPaid('paid');">Paid</button>`;
  $("#priceFilter").html(priceButtons);
}

// function CreateProduct takes a name and preview .PNG
//and creates a template including the name, .PNG and a button for previewing the product
function createProduct(
  product_id,
  product_name,
  product_Prv,
  product_Phq,
  product_zip,
  product_normal,
  download_name,
  product_desc = "No Description.",
  product_price = 0,
  purchase_link = "No Link",
  Bundle = false
) {
  catalog[product_id] = {
    name: product_name,
    desc: product_desc,
    price: product_price,
    preview: product_Prv,
    hq: product_Phq,
    zip: product_zip,
    normal: product_normal,
    download_title: download_name,
    link: purchase_link,
    bundle: Bundle,
  };
  let template;
  template = `<div class="${gridLayout} product_area card"> 
  <img class="thumbnail card" src="${product_Prv}" alt="${product_name}" loading="lazy" />
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
    "HRDS096",
    "Hard Surface <br /> Shape 096",
    "../product_Data/HRDS096/HS Symbol 10.png",
    "../product_Data/HRDS096/HS Symbol 10.exr",
    "../product_Data/HRDS096/HS Symbol 10.zip",
    "../product_Data/HRDS096/HS Symbol 10 Normal Map.png",
    "Hard Surface Shape 096",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS095",
    "Hard Surface <br /> Shape 095",
    "../product_Data/HRDS095/HS Symbol 9.png",
    "../product_Data/HRDS095/HS Symbol 9.exr",
    "../product_Data/HRDS095/HS Symbol 9.zip",
    "../product_Data/HRDS095/HS Symbol 9 Normal Map.png",
    "Hard Surface Shape 095",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS094",
    "Hard Surface <br /> Shape 094",
    "../product_Data/HRDS094/HS Symbol 8.png",
    "../product_Data/HRDS094/HS Symbol 8.exr",
    "../product_Data/HRDS094/HS Symbol 8.zip",
    "../product_Data/HRDS094/HS Symbol 8 Normal Map.png",
    "Hard Surface Shape 094",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS093",
    "Hard Surface <br /> Shape 093",
    "../product_Data/HRDS093/HS Symbol 7.png",
    "../product_Data/HRDS093/HS Symbol 7.exr",
    "../product_Data/HRDS093/HS Symbol 7.zip",
    "../product_Data/HRDS093/HS Symbol 7 Normal Map.png",
    "Hard Surface Shape 093",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS092",
    "Hard Surface <br /> Shape 092",
    "../product_Data/HRDS092/HS Symbol 6.png",
    "../product_Data/HRDS092/HS Symbol 6.exr",
    "../product_Data/HRDS092/HS Symbol 6.zip",
    "../product_Data/HRDS092/HS Symbol 6 Normal Map.png",
    "Hard Surface Shape 092",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS091",
    "Hard Surface <br /> Shape 091",
    "../product_Data/HRDS091/HS Symbol 5.png",
    "../product_Data/HRDS091/HS Symbol 5.exr",
    "../product_Data/HRDS091/HS Symbol 5.zip",
    "../product_Data/HRDS091/HS Symbol 5 Normal Map.png",
    "Hard Surface Shape 091",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS090",
    "Hard Surface <br /> Shape 090",
    "../product_Data/HRDS090/HS Symbol 4.png",
    "../product_Data/HRDS090/HS Symbol 4.exr",
    "../product_Data/HRDS090/HS Symbol 4.zip",
    "../product_Data/HRDS090/HS Symbol 4 Normal Map.png",
    "Hard Surface Shape 090",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS089",
    "Hard Surface <br /> Shape 089",
    "../product_Data/HRDS089/HS Symbol 3.png",
    "../product_Data/HRDS089/HS Symbol 3.exr",
    "../product_Data/HRDS089/HS Symbol 3.zip",
    "../product_Data/HRDS089/HS Symbol 3 Normal Map.png",
    "Hard Surface Shape 089",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS088",
    "Hard Surface <br /> Shape 088",
    "../product_Data/HRDS088/HS Symbol 2.png",
    "../product_Data/HRDS088/HS Symbol 2.exr",
    "../product_Data/HRDS088/HS Symbol 2.zip",
    "../product_Data/HRDS088/HS Symbol 2 Normal Map.png",
    "Hard Surface Shape 088",
    "Hard Surface ",
    0
  );
  createProduct(
    "HRDS087",
    "Hard Surface <br /> Shape 087",
    "../product_Data/HRDS087/HS Symbol 1.png",
    "../product_Data/HRDS087/HS Symbol 1.exr",
    "../product_Data/HRDS087/HS Symbol 1.zip",
    "../product_Data/HRDS087/HS Symbol 1 Normal Map.png",
    "Hard Surface Shape 087",
    "Hard Surface ",
    0
  );
  createProduct(
    "HRDS086",
    "Hard Surface <br /> Shape 086",
    "../product_Data/HRDS086/Shape 15.png",
    "../product_Data/HRDS086/Shape 15.exr",
    "../product_Data/HRDS086/Shape 15.zip",
    "../product_Data/HRDS086/Shape 15 Normal Map.png",
    "Hard Surface Shape 086",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS085",
    "Hard Surface <br /> Shape 085",
    "../product_Data/HRDS085/Shape 14.png",
    "../product_Data/HRDS085/Shape 14.exr",
    "../product_Data/HRDS085/Shape 14.zip",
    "../product_Data/HRDS085/Shape 14 Normal Map.png",
    "Hard Surface Shape 085",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS084",
    "Hard Surface <br /> Shape 084",
    "../product_Data/HRDS084/Shape 13.png",
    "../product_Data/HRDS084/Shape 13.exr",
    "../product_Data/HRDS084/Shape 13.zip",
    "../product_Data/HRDS084/Shape 13 Normal Map.png",
    "Hard Surface Shape 084",
    "Hard Surface ",
    0
  );
  createProduct(
    "HRDS083",
    "Hard Surface <br /> Shape 083",
    "../product_Data/HRDS083/Shape 12.png",
    "../product_Data/HRDS083/Shape 12.exr",
    "../product_Data/HRDS083/Shape 12.zip",
    "../product_Data/HRDS083/Shape 12 Normal Map.png",
    "Hard Surface Shape 083",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS082",
    "Hard Surface <br /> Shape 082",
    "../product_Data/HRDS082/Shape 11.png",
    "../product_Data/HRDS082/Shape 11.exr",
    "../product_Data/HRDS082/Shape 11.zip",
    "../product_Data/HRDS082/Shape 11 Normal Map.png",
    "Hard Surface Shape 082",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS028",
    "Hard Surface <br /> Shape 028",
    "../product_Data/HRDS028/Arrow Shape.png",
    "../product_Data/HRDS028/Arrow Shape.exr",
    "../product_Data/HRDS028/Arrow Shape.zip",
    "../product_Data/HRDS028/Arrow Shape Normal Map.png",
    "Hard Surface Shape 028",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS027",
    "Hard Surface <br /> Shape 027",
    "../product_Data/HRDS027/Shape 1.png",
    "../product_Data/HRDS027/Shape 1.exr",
    "../product_Data/HRDS027/Shape 1.zip",
    "../product_Data/HRDS027/Shape 1 Normal Map.png",
    "Hard Surface Shape 027",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS026",
    "Hard Surface <br /> Shape 026",
    "../product_Data/HRDS026/Shape 2.png",
    "../product_Data/HRDS026/Shape 2.exr",
    "../product_Data/HRDS026/Shape 2.zip",
    "../product_Data/HRDS026/Shape 2 Normal Map.png",
    "Hard Surface Shape 026",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS081",
    "Hard Surface <br /> Shape 081",
    "../product_Data/HRDS081/Shape 13.png",
    "../product_Data/HRDS081/Shape 13.exr",
    "../product_Data/HRDS081/Shape 13.zip",
    "../product_Data/HRDS081/Shape 13 Normal Map.png",
    "Hard Surface Shape 081",
    "Hard Surface",
    2,
    "https://artstn.co/m/9nN3R",
    (Bundle = true)
  );
  createProduct(
    "HRDS080",
    "Hard Surface <br /> Shape 080",
    "../product_Data/HRDS080/Shape 12.png",
    "../product_Data/HRDS080/Shape 12.exr",
    "../product_Data/HRDS080/Shape 12.zip",
    "../product_Data/HRDS080/Shape 12 Normal Map.png",
    "Hard Surface Shape 080",
    "Hard Surface",
    2,
    "https://artstn.co/m/9nN3R",
    (Bundle = true)
  );
  createProduct(
    "HRDS079",
    "Hard Surface <br /> Shape 079",
    "../product_Data/HRDS079/Shape 11.png",
    "../product_Data/HRDS079/Shape 11.exr",
    "../product_Data/HRDS079/Shape 11.zip",
    "../product_Data/HRDS079/Shape 11 Normal Map.png",
    "Hard Surface Shape 079",
    "Hard Surface",
    2,
    "https://artstn.co/m/9nN3R",
    (Bundle = true)
  );
  createProduct(
    "HRDS078",
    "Hard Surface <br /> Shape 078",
    "../product_Data/HRDS078/Shape 10.png",
    "../product_Data/HRDS078/Shape 10.exr",
    "../product_Data/HRDS078/Shape 10.zip",
    "../product_Data/HRDS078/Shape 10 Normal Map.png",
    "Hard Surface Shape 078",
    "Hard Surface",
    2,
    "https://artstn.co/m/9nN3R",
    (Bundle = true)
  );
  createProduct(
    "HRDS077",
    "Hard Surface <br /> Shape 077",
    "../product_Data/HRDS077/Shape 9.png",
    "../product_Data/HRDS077/Shape 9.exr",
    "../product_Data/HRDS077/Shape 9.zip",
    "../product_Data/HRDS077/Shape 9 Normal Map.png",
    "Hard Surface Shape 077",
    "Hard Surface",
    2,
    "https://artstn.co/m/9nN3R",
    (Bundle = true)
  );
  createProduct(
    "HRDS076",
    "Hard Surface <br /> Shape 076",
    "../product_Data/HRDS076/Shape 8.png",
    "../product_Data/HRDS076/Shape 8.exr",
    "../product_Data/HRDS076/Shape 8.zip",
    "../product_Data/HRDS076/Shape 8 Normal Map.png",
    "Hard Surface Shape 076",
    "Hard Surface ",
    2,
    "https://artstn.co/m/9nN3R",
    (Bundle = true)
  );
  createProduct(
    "HRDS075",
    "Hard Surface <br /> Shape 075",
    "../product_Data/HRDS075/Shape 7.png",
    "../product_Data/HRDS075/Shape 7.exr",
    "../product_Data/HRDS075/Shape 7.zip",
    "../product_Data/HRDS075/Shape 7 Normal Map.png",
    "Hard Surface Shape 075",
    "Hard Surface",
    2,
    "https://artstn.co/m/9nN3R",
    (Bundle = true)
  );
  createProduct(
    "HRDS074",
    "Hard Surface <br /> Shape 074",
    "../product_Data/HRDS074/Shape 6.png",
    "../product_Data/HRDS074/Shape 6.exr",
    "../product_Data/HRDS074/Shape 6.zip",
    "../product_Data/HRDS074/Shape 6 Normal Map.png",
    "Hard Surface Shape 074",
    "Hard Surface ",
    2,
    "https://artstn.co/m/9nN3R",
    (Bundle = true)
  );
  createProduct(
    "HRDS073",
    "Hard Surface <br /> Shape 073",
    "../product_Data/HRDS073/Shape 5.png",
    "../product_Data/HRDS073/Shape 5.exr",
    "../product_Data/HRDS073/Shape 5.zip",
    "../product_Data/HRDS073/Shape 5 Normal Map.png",
    "Hard Surface Shape 073",
    "Hard Surface",
    2,
    "https://artstn.co/m/9nN3R",
    (Bundle = true)
  );
  createProduct(
    "HRDS072",
    "Hard Surface <br /> Shape 072",
    "../product_Data/HRDS072/Shape 4.png",
    "../product_Data/HRDS072/Shape 4.exr",
    "../product_Data/HRDS072/Shape 4.zip",
    "../product_Data/HRDS072/Shape 4 Normal Map.png",
    "Hard Surface Shape 072",
    "Hard Surface",
    2,
    "https://artstn.co/m/9nN3R",
    (Bundle = true)
  );
  createProduct(
    "HRDS071",
    "Hard Surface <br /> Shape 071",
    "../product_Data/HRDS071/Shape 3.png",
    "../product_Data/HRDS071/Shape 3.exr",
    "../product_Data/HRDS071/Shape 3.zip",
    "../product_Data/HRDS071/Shape 3 Normal Map.png",
    "Hard Surface Shape 071",
    "Hard Surface",
    2,
    "https://artstn.co/m/9nN3R",
    (Bundle = true)
  );
  createProduct(
    "GRID016",
    "Grid <br /> 016",
    "../product_Data/GRID016/Grid 11.png",
    "../product_Data/GRID016/Grid 11.exr",
    "../product_Data/GRID016/Grid 11.zip",
    "../product_Data/GRID016/Grid 11 Normal Map.png",
    "Grid 016",
    "Grid",
    0
  );
  createProduct(
    "GRID015",
    "Grid <br /> 015",
    "../product_Data/GRID015/Grid 10.png",
    "../product_Data/GRID015/Grid 10.exr",
    "../product_Data/GRID015/Grid 10.zip",
    "../product_Data/GRID015/Grid 10 Normal Map.png",
    "Grid 015",
    "Grid",
    0
  );
  createProduct(
    "GRID014",
    "Grid <br /> 014",
    "../product_Data/GRID014/Grid 9.png",
    "../product_Data/GRID014/Grid 9.exr",
    "../product_Data/GRID014/Grid 9.zip",
    "../product_Data/GRID014/Grid 9 Normal Map.png",
    "Grid 014",
    "Grid",
    0
  );
  createProduct(
    "GRID013",
    "Grid <br /> 013",
    "../product_Data/GRID013/Grid 8.png",
    "../product_Data/GRID013/Grid 8.exr",
    "../product_Data/GRID013/Grid 8.zip",
    "../product_Data/GRID013/Grid 8 Normal Map.png",
    "Grid 013",
    "Grid",
    0
  );
  createProduct(
    "GRID012",
    "Grid <br /> 012",
    "../product_Data/GRID012/Grid 7.png",
    "../product_Data/GRID012/Grid 7.exr",
    "../product_Data/GRID012/Grid 7.zip",
    "../product_Data/GRID012/Grid 7 Normal Map.png",
    "Grid  012",
    "Grid ",
    0
  );
  createProduct(
    "GRID011",
    "Grid <br /> 011",
    "../product_Data/GRID011/Grid 6.png",
    "../product_Data/GRID011/Grid 6.exr",
    "../product_Data/GRID011/Grid 6.zip",
    "../product_Data/GRID011/Grid 6 Normal Map.png",
    "Grid 011",
    "Grid ",
    0
  );
  createProduct(
    "GRID010",
    "Grid <br /> 010",
    "../product_Data/GRID010/Grid 15.png",
    "../product_Data/GRID010/Grid 15.exr",
    "../product_Data/GRID010/Grid 15.zip",
    "../product_Data/GRID010/Grid 15 Normal Map.png",
    "Grid 010",
    "Grid",
    0
  );
  createProduct(
    "GRID009",
    "Grid <br /> 009",
    "../product_Data/GRID009/Grid 14.png",
    "../product_Data/GRID009/Grid 14.exr",
    "../product_Data/GRID009/Grid 14.zip",
    "../product_Data/GRID009/Grid 14 Normal Map.png",
    "Grid 009",
    "Grid",
    0
  );
  createProduct(
    "GRID008",
    "Grid <br /> 008",
    "../product_Data/GRID008/Grid 13.png",
    "../product_Data/GRID008/Grid 13.exr",
    "../product_Data/GRID008/Grid 13.zip",
    "../product_Data/GRID008/Grid 13 Normal Map.png",
    "Grid 008",
    "Grid",
    0
  );
  createProduct(
    "GRID006",
    "Grid <br /> 006",
    "../product_Data/GRID006/Grid 12.png",
    "../product_Data/GRID006/Grid 12.exr",
    "../product_Data/GRID006/Grid 12.zip",
    "../product_Data/GRID006/Grid 12 Normal Map.png",
    "Grid 006",
    "Grid ",
    0
  );
  createProduct(
    "GRID005",
    "Grid <br /> 005",
    "../product_Data/GRID005/Grid 5.png",
    "../product_Data/GRID005/Grid 5.exr",
    "../product_Data/GRID005/Grid 5.zip",
    "../product_Data/GRID005/Grid 5 Normal Map.png",
    "Grid 005",
    "Grid ",
    0
  );
  createProduct(
    "GRID004",
    "Grid <br /> 004",
    "../product_Data/GRID004/Grid 4.png",
    "../product_Data/GRID004/Grid 4.exr",
    "../product_Data/GRID004/Grid 4.zip",
    "../product_Data/GRID004/Grid 4  Normal Map.png",
    "Grid 004",
    "Grid ",
    0
  );
  createProduct(
    "GRID003",
    "Grid <br /> 003",
    "../product_Data/GRID003/Grid 3.png",
    "../product_Data/GRID003/Grid 3.exr",
    "../product_Data/GRID003/Grid 3.zip",
    "../product_Data/GRID003/Grid 3 Normal Map.png",
    "Grid 003",
    "Grid ",
    0
  );
  createProduct(
    "GRID002",
    "Grid <br /> 002",
    "../product_Data/GRID002/Grid 2.png",
    "../product_Data/GRID002/Grid 2.exr",
    "../product_Data/GRID002/Grid 2.zip",
    "../product_Data/GRID002/Grid 2 Normal Map.png",
    "Grid 002",
    "Grid",
    0
  );
  createProduct(
    "GRID001",
    "Grid <br /> 001",
    "../product_Data/GRID001/Grid 1.png",
    "../product_Data/GRID001/Grid 1.exr",
    "../product_Data/GRID001/Grid 1.zip",
    "../product_Data/GRID001/Grid 1 Normal Map.png",
    "Grid 001",
    "Grid ",
    0
  );
  createProduct(
    "HRDS023",
    "Cross Bolt <br /> 1",
    "../product_Data/HRDS023/Cross Bolt.png",
    "../product_Data/HRDS023/Cross Bolt.exr",
    "../product_Data/HRDS023/Cross Bolt.zip",
    "../product_Data/HRDS023/Cross Bolt  Normal Map.png",
    "Cross Bolt 1",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS022",
    "Cross Bolt <br /> 2",
    "../product_Data/HRDS022/Cross Bolt 2.png",
    "../product_Data/HRDS022/Cross Bolt 2.exr",
    "../product_Data/HRDS022/Cross Bolt 2.zip",
    "../product_Data/HRDS022/Cross Bolt 2 Normal Map.png",
    "Cross Bolt 2",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS024",
    "One Side Bolt <br /> 1",
    "../product_Data/HRDS024/One Side Bolt .png",
    "../product_Data/HRDS024/One Side Bolt .exr",
    "../product_Data/HRDS024/One Side Bolt .zip",
    "../product_Data/HRDS024/One Side Bolt Normal Map.png",
    "One Side Bolt 1",
    "Hard Surface ",
    0
  );
  createProduct(
    "HRDS025",
    "One Side Bolt <br /> 2",
    "../product_Data/HRDS025/One Side Bolt 2.png",
    "../product_Data/HRDS025/One Side Bolt 2.exr",
    "../product_Data/HRDS025/One Side Bolt 2.zip",
    "../product_Data/HRDS025/One Side Bolt 2 Normal Map.png",
    "One Side Bolt 2",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS020",
    "Normal Bolt <br /> 1",
    "../product_Data/HRDS020/Normal Bolt.png",
    "../product_Data/HRDS020/Normal Bolt.exr",
    "../product_Data/HRDS020/Normal Bolt.zip",
    "../product_Data/HRDS020/Normal Bolt Normal Map.png",
    "Normal Bolt 1",
    "Hard Surface",
    0
  );
  createProduct(
    "SCRT003",
    "Scratch <br /> 003",
    "../product_Data/SCRT003/Wide Scratch.png",
    "../product_Data/SCRT003/Wide Scratch.exr",
    "../product_Data/SCRT003/Wide Scratch.zip",
    "   ",
    "Scratch 003",
    "Scratch",
    0
  );
  createProduct(
    "SCRT002",
    "Scratch <br /> 002",
    "../product_Data/SCRT002/Medium Scratch.png",
    "../product_Data/SCRT002/Medium Scratch.exr",
    "../product_Data/SCRT002/Medium Scratch.zip",
    "   ",
    "Scratch 002",
    "Scratch ",
    0
  );
  createProduct(
    "TERR005",
    "Rock & Terrain <br /> 005",
    "../product_Data/TERR005/Shape6.png",
    "../product_Data/TERR005/Shape6.exr",
    "../product_Data/TERR005/Shape6.zip",
    "   ",
    "Rock & Terrain 005",
    "Rock & Terrain ",
    0
  );
  createProduct(
    "TERR004",
    "Rock & Terrain <br /> 004",
    "../product_Data/TERR004/Shape5.png",
    "../product_Data/TERR004/Shape5.exr",
    "../product_Data/TERR004/Shape5.zip",
    "   ",
    "Rock & Terrain 004",
    "Rock & Terrain ",
    0
  );
  createProduct(
    "TERR003",
    "Rock & Terrain <br /> 003",
    "../product_Data/TERR003/Shape4.png",
    "../product_Data/TERR003/Shape4.exr",
    "../product_Data/TERR003/Shape4.zip",
    "   ",
    "Rock & Terrain 003",
    "Rock & Terrain ",
    0
  );
  createProduct(
    "TERR002",
    "Rock & Terrain <br /> 002",
    "../product_Data/TERR002/Shape3.png",
    "../product_Data/TERR002/Shape3.exr",
    "../product_Data/TERR002/Shape3.zip",
    "   ",
    "Rock & Terrain 002",
    "Rock & Terrain ",
    0
  );
  createProduct(
    "TERR001",
    "Rock & Terrain <br /> 001",
    "../product_Data/TERR001/Shape2.png",
    "../product_Data/TERR001/Shape2.exr",
    "../product_Data/TERR001/Shape2.zip",
    "   ",
    "Rock & Terrain 001",
    "Rock & Terrain ",
    0
  );
  createProduct(
    "TERR000",
    "Rock & Terrain <br /> 000",
    "../product_Data/TERR000/Shape1.png",
    "../product_Data/TERR000/Shape1.exr",
    "../product_Data/TERR000/Shape1.zip",
    "   ",
    "Rock & Terrain 000",
    "Rock & Terrain",
    0
  );
  createProduct(
    "HRDS070",
    "Hard Surface <br /> Shape 070",
    "../product_Data/HRDS070/Shape4.png",
    "../product_Data/HRDS070/Shape4.exr",
    "../product_Data/HRDS070/Shape4.zip",
    "../product_Data/HRDS070/Shape4 Normal Map.png",
    "Hard Surface Shape 070",
    "Hard Surface ",
    0
  );
  createProduct(
    "HRDS069",
    "Hard Surface <br /> Shape 069",
    "../product_Data/HRDS069/Shape3.png",
    "../product_Data/HRDS069/Shape3.exr",
    "../product_Data/HRDS069/Shape3.zip",
    "../product_Data/HRDS069/Shape3 Normal Map.png",
    "Hard Surface Shape 069",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS068",
    "Hard Surface <br /> Shape 068",
    "../product_Data/HRDS068/Shape2.png",
    "../product_Data/HRDS068/Shape2.exr",
    "../product_Data/HRDS068/Shape2.zip",
    "../product_Data/HRDS068/Shape2 Normal Map.png",
    "Hard Surface Shape 068",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS067",
    "Hard Surface <br /> Shape 067",
    "../product_Data/HRDS067/Shape1.png",
    "../product_Data/HRDS067/Shape1.exr",
    "../product_Data/HRDS067/Shape1.zip",
    "../product_Data/HRDS067/Shape1 Normal Map.png",
    "Hard Surface Shape 067",
    "Hard Surface ",
    0
  );
  createProduct(
    "HRDS019",
    "Hard Surface <br /> Shape 019",
    "../product_Data/HRDS019/Shape 2.png",
    "../product_Data/HRDS019/Shape 2.exr",
    "../product_Data/HRDS019/Shape 2.zip",
    "../product_Data/HRDS019/Shape 2 Normal Map.png",
    "Hard Surface Shape 019",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS018",
    "Hard Surface <br /> Shape 018",
    "../product_Data/HRDS018/Shape 1.png",
    "../product_Data/HRDS018/Shape 1.exr",
    "../product_Data/HRDS018/Shape 1.zip",
    "../product_Data/HRDS018/Shape 1 Normal Map.png",
    "Hard Surface Shape 018",
    "Hard Surface ",
    0
  );
  createProduct(
    "TILE114",
    "Tileable Texture <br /> 114",
    "../product_Data/TILE114/Tileable 12.png",
    "../product_Data/TILE114/Tileable 12.exr",
    "../product_Data/TILE114/Tileable 12.zip",
    "../product_Data/TILE114/Tileable 12  Normal Map.png",
    "Tileable Texture 114",
    "Tileable ",
    0
  );
  createProduct(
    "TILE113",
    "Tileable Texture <br /> 113",
    "../product_Data/TILE113/Tileable 11.png",
    "../product_Data/TILE113/Tileable 11.exr",
    "../product_Data/TILE113/Tileable 11.zip",
    "../product_Data/TILE113/Tileable 11  Normal Map.png",
    "Tileable Texture 113",
    "Tileable ",
    0
  );
  createProduct(
    "TILE112",
    "Tileable Texture <br /> 112",
    "../product_Data/TILE112/Tileable 10.png",
    "../product_Data/TILE112/Tileable 10.exr",
    "../product_Data/TILE112/Tileable 10.zip",
    "../product_Data/TILE112/Tileable 10 Normal Map.png",
    "Tileable Texture 112",
    "Tileable ",
    0
  );
  createProduct(
    "TILE111",
    "Tileable Texture <br /> 111",
    "../product_Data/TILE111/Tileable 9.png",
    "../product_Data/TILE111/Tileable 9.exr",
    "../product_Data/TILE111/Tileable 9.zip",
    "../product_Data/TILE111/Tileable 9 Normal Map.png",
    "Tileable Texture 111",
    "Tileable ",
    0
  );
  createProduct(
    "TILE110",
    "Tileable Texture <br /> 110",
    "../product_Data/TILE110/Tileable 8.png",
    "../product_Data/TILE110/Tileable 8.exr",
    "../product_Data/TILE110/Tileable 8.zip",
    "../product_Data/TILE110/Tileable 8 Normal Map.png",
    "Tileable Texture 110",
    "Tileable ",
    0
  );
  createProduct(
    "TILE109",
    "Tileable Texture <br /> 109",
    "../product_Data/TILE109/Tileable 7.png",
    "../product_Data/TILE109/Tileable 7.exr",
    "../product_Data/TILE109/Tileable 7.zip",
    "../product_Data/TILE109/Tileable 7 Normal Map.png",
    "Tileable Texture 109",
    "Tileable ",
    0
  );
  createProduct(
    "TILE108",
    "Tileable Texture <br /> 108",
    "../product_Data/TILE108/Tileable 5.png",
    "../product_Data/TILE108/Tileable 5.exr",
    "../product_Data/TILE108/Tileable 5.zip",
    "../product_Data/TILE108/Tileable 5 Normal Map.png",
    "Tileable Texture 108",
    "Tileable ",
    0
  );
  createProduct(
    "TILE107",
    "Tileable Texture <br /> 107",
    "../product_Data/TILE107/Tileable 4.png",
    "../product_Data/TILE107/Tileable 4.exr",
    "../product_Data/TILE107/Tileable 4.zip",
    "../product_Data/TILE107/Tileable 4 Normal Map.png",
    "Tileable Texture 107",
    "Tileable ",
    0
  );
  createProduct(
    "TILE106",
    "Tileable Texture <br /> 106",
    "../product_Data/TILE106/Tileable 3.png",
    "../product_Data/TILE106/Tileable 3.exr",
    "../product_Data/TILE106/Tileable 3.zip",
    "../product_Data/TILE106/Tileable 3 Normal Map.png",
    "Tileable Texture 106",
    "Tileable ",
    0
  );
  createProduct(
    "TILE105",
    "Tileable Texture <br /> 105",
    "../product_Data/TILE105/Tileable 2.png",
    "../product_Data/TILE105/Tileable 2.exr",
    "../product_Data/TILE105/Tileable 2.zip",
    "../product_Data/TILE105/Tileable 2 Normal Map.png",
    "Tileable Texture 105",
    "Tileable ",
    0
  );
  createProduct(
    "TILE100",
    "Tileable Texture <br /> 100",
    "../product_Data/TILE100/Tileable 1.png",
    "../product_Data/TILE100/Tileable 1.exr",
    "../product_Data/TILE100/Tileable 1.zip",
    "../product_Data/TILE100/Tileable 1 Normal Map.png",
    "Tileable Texture 100",
    "Tileable",
    0
  );
  createProduct(
    "HRDS017",
    "Hard Surface <br /> Shape 017",
    "../product_Data/HRDS017/Shape 12.png",
    "../product_Data/HRDS017/Shape 12.exr",
    "../product_Data/HRDS017/Shape 12.zip",
    "../product_Data/HRDS017/Shape 12 Normal Map.png",
    "Hard Surface Shape 017",
    "Hard Surface ",
    2,
    "https://www.artstation.com/a/11287322",
    (Bundle = true)
  );
  createProduct(
    "HRDS013",
    "Hard Surface <br /> Shape 013",
    "../product_Data/HRDS013/Shape 8.png",
    "../product_Data/HRDS013/Shape 8.exr",
    "../product_Data/HRDS013/Shape 8.zip",
    "../product_Data/HRDS013/Shape 8 Normal Map.png",
    "Hard Surface Shape 013",
    "Hard Surface ",
    2,
    "https://www.artstation.com/a/11287322",
    (Bundle = true)
  );
  createProduct(
    "HRDS015",
    "Hard Surface <br /> Shape 015",
    "../product_Data/HRDS015/Shape 10.png",
    "../product_Data/HRDS015/Shape 10.exr",
    "../product_Data/HRDS015/Shape 10.zip",
    "../product_Data/HRDS015/Shape 10 Normal Map.png",
    "Hard Surface Shape 015",
    "Hard Surface",
    2,
    "https://www.artstation.com/a/11287322",
    (Bundle = true)
  );
  createProduct(
    "HRDS010",
    "Hard Surface <br /> Shape 010",
    "../product_Data/HRDS010/Shape 3.png",
    "../product_Data/HRDS010/Shape 3.exr",
    "../product_Data/HRDS010/Shape 3.zip",
    "../product_Data/HRDS010/Shape 3 Normal Map.png",
    "Hard Surface Shape 010",
    "Hard Surface ",
    2,
    "https://www.artstation.com/a/11287322",
    (Bundle = true)
  );
  createProduct(
    "HRDS016",
    "Hard Surface <br /> Shape 016",
    "../product_Data/HRDS016/Shape 11.png",
    "../product_Data/HRDS016/Shape 11.exr",
    "../product_Data/HRDS016/Shape 11.zip",
    "../product_Data/HRDS016/Shape 11 Normal Map.png",
    "Hard Surface Shape 016",
    "Hard Surface",
    2,
    "https://www.artstation.com/a/11287322",
    (Bundle = true)
  );
  createProduct(
    "HRDS014",
    "Hard Surface <br /> Shape 014",
    "../product_Data/HRDS014/Shape 9.png",
    "../product_Data/HRDS014/Shape 9.exr",
    "../product_Data/HRDS014/Shape 9.zip",
    "../product_Data/HRDS014/Shape 9 Normal Map.png",
    "Hard Surface Shape 014",
    "Hard Surface",
    2,
    "https://www.artstation.com/a/11287322",
    (Bundle = true)
  );
  createProduct(
    "HRDS012",
    "Hard Surface <br /> Shape 012",
    "../product_Data/HRDS012/Shape 5.png",
    "../product_Data/HRDS012/Shape 5.exr",
    "../product_Data/HRDS012/Shape 5.zip",
    "../product_Data/HRDS012/Shape 5 Normal Map.png",
    "Hard Surface Shape 012",
    "Hard Surface ",
    2,
    "https://www.artstation.com/a/11287322",
    (Bundle = true)
  );
  createProduct(
    "HRDS011",
    "Hard Surface <br /> Shape 011",
    "../product_Data/HRDS011/Shape 4.png",
    "../product_Data/HRDS011/Shape 4.exr",
    "../product_Data/HRDS011/Shape 4.zip",
    "../product_Data/HRDS011/Shape 4 Normal Map.png",
    "Hard Surface Shape 011",
    "Hard Surface",
    2,
    "https://www.artstation.com/a/11287322",
    (Bundle = true)
  );
  createProduct(
    "HRDS009",
    "Hard Surface <br /> Shape 009",
    "../product_Data/HRDS009/Shape 2.png",
    "../product_Data/HRDS009/Shape 2.exr",
    "../product_Data/HRDS009/Shape 2.zip",
    "../product_Data/HRDS009/Shape 2 Normal Map.png",
    "Hard Surface Shape 009",
    "Hard Surface",
    2,
    "https://www.artstation.com/a/11287322",
    (Bundle = true)
  );
  createProduct(
    "HRDS008",
    "Hard Surface <br /> Shape 008",
    "../product_Data/HRDS008/Shape 1.png",
    "../product_Data/HRDS008/Shape 1.exr",
    "../product_Data/HRDS008/Shape 1.zip",
    "../product_Data/HRDS008/Shape 1 Normal Map.png",
    "Hard Surface Shape 008",
    "Hard Surface ",
    2,
    "https://www.artstation.com/a/11287322",
    (Bundle = true)
  );
  createProduct(
    "HRDS006",
    "Hard Surface <br /> Shape 006",
    "../product_Data/HRDS006/Shape 7.png",
    "../product_Data/HRDS006/Shape 7.exr",
    "../product_Data/HRDS006/Shape 7.zip",
    "../product_Data/HRDS006/Shape 7 Normal Map.png",
    "Hard Surface Shape 006",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS005",
    "Hard Surface <br /> Shape 005",
    "../product_Data/HRDS005/Shape 6.png",
    "../product_Data/HRDS005/Shape 6.exr",
    "../product_Data/HRDS005/Shape 6.zip",
    "../product_Data/HRDS005/Shape 6 Normal Map.png",
    "Hard Surface Shape 005",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS004",
    "Hard Surface <br /> Shape 004",
    "../product_Data/HRDS004/Shape 7.png",
    "../product_Data/HRDS004/Shape 7.exr",
    "../product_Data/HRDS004/Shape 7.zip",
    "../product_Data/HRDS004/Shape 7 Normal Map.png",
    "Hard Surface Shape 004",
    "Hard Surface ",
    0
  );
  createProduct(
    "HRDS003",
    "Hard Surface <br /> Shape 003",
    "../product_Data/HRDS003/Shape 5.png",
    "../product_Data/HRDS003/Shape 5.exr",
    "../product_Data/HRDS003/Shape 5.zip",
    "../product_Data/HRDS003/Shape 5 Normal Map.png",
    "Hard Surface Shape 003",
    "Hard Surface ",
    0
  );
  createProduct(
    "HRDS002",
    "Hard Surface <br /> Shape 002",
    "../product_Data/HRDS002/Shape 6.png",
    "../product_Data/HRDS002/Shape 6.exr",
    "../product_Data/HRDS002/Shape 6.zip",
    "../product_Data/HRDS002/Shape 6 Normal Map.png",
    "Hard Surface Shape 002",
    "Hard Surface ",
    0
  );
  createProduct(
    "HRDS001",
    "Hard Surface <br /> Shape 001",
    "../product_Data/HRDS001/Shape 4.png",
    "../product_Data/HRDS001/Shape 4.exr",
    "../product_Data/HRDS001/Shape 4.zip",
    "../product_Data/HRDS001/Shape 4 Normal Map.png",
    "Hard Surface Shape 001",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS032",
    "Hard Surface <br /> Shape 032",
    "../product_Data/HRDS032/Shape 1.png",
    "../product_Data/HRDS032/Shape 1.exr",
    "../product_Data/HRDS032/Shape 1.zip",
    "../product_Data/HRDS032/Shape 1 Normal Map.png",
    "Shape 032 Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS031",
    "Hard Surface <br /> Shape 031",
    "../product_Data/HRDS031/Shape 2.png",
    "../product_Data/HRDS031/Shape 2.exr",
    "../product_Data/HRDS031/Shape 2.zip",
    "../product_Data/HRDS031/Shape 2 Normal Map.png",
    "Shape 031 Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS030",
    "Hard Surface <br /> Shape 030",
    "../product_Data/HRDS030/Shape 3.png",
    "../product_Data/HRDS030/Shape 3.exr",
    "../product_Data/HRDS030/Shape 3.zip",
    "../product_Data/HRDS030/Shape 3 Normal Map.png",
    "Shape 030 Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "GNRL002",
    "Stitch <br /> 002",
    "../product_Data/GNRL002/Shape 2.png",
    "../product_Data/GNRL002/Shape 2.exr",
    "../product_Data/GNRL002/Shape 2.zip",
    "../product_Data/GNRL002/Shape 2 Normal Map.png",
    "Stitch 002",
    "General",
    0
  );
  createProduct(
    "GNRL003",
    "Stitch <br /> 003",
    "../product_Data/GNRL003/Shape 3.png",
    "../product_Data/GNRL003/Shape 3.exr",
    "../product_Data/GNRL003/Shape 3.zip",
    "../product_Data/GNRL003/Shape 3 Normal Map.png",
    "Stitch 003",
    "General",
    0
  );
  createProduct(
    "GNRL001",
    "Lines <br /> 001",
    "../product_Data/GNRL001/Shape 1.png",
    "../product_Data/GNRL001/Shape 1.exr",
    "../product_Data/GNRL001/Shape 1.zip",
    "../product_Data/GNRL001/Shape 1 Normal Map.png",
    "Lines 001",
    "General",
    0
  );
  createProduct(
    "HRDS036",
    "Hard Surface <br /> 036",
    "../product_Data/HRDS036/Shape 5.png",
    "../product_Data/HRDS036/Shape 5.exr",
    "../product_Data/HRDS036/Shape 5.zip",
    "../product_Data/HRDS036/Shape 5 Normal Map.png",
    "Hard Surface 036",
    "Hard Surface ",
    0
  );
  createProduct(
    "HRDS037",
    "Hard Surface <br /> 037",
    "../product_Data/HRDS037/Shape 4.png",
    "../product_Data/HRDS037/Shape 4.exr",
    "../product_Data/HRDS037/Shape 4.zip",
    "../product_Data/HRDS037/Shape 4 Normal Map.png",
    "Hard Surface 037",
    "Hard Surface ",
    0
  );
  createProduct(
    "HRDS038",
    "Hard Surface <br /> 038",
    "../product_Data/HRDS038/Shape 3.png",
    "../product_Data/HRDS038/Shape 3.exr",
    "../product_Data/HRDS038/Shape 3.zip",
    "../product_Data/HRDS038/Shape 3 Normal Map.png",
    "Hard Surface 038",
    "Hard Surface ",
    0
  );
  createProduct(
    "HRDS039",
    "Hard Surface <br /> 039",
    "../product_Data/HRDS039/Shape 2.png",
    "../product_Data/HRDS039/Shape 2.exr",
    "../product_Data/HRDS039/Shape 2.zip",
    "../product_Data/HRDS039/Shape 2 Normal Map.png",
    "Hard Surface 039",
    "Hard Surface ",
    0
  );
  createProduct(
    "HRDS035",
    "Hard Surface <br /> 035",
    "../product_Data/HRDS035/Shape 1.png",
    "../product_Data/HRDS035/Shape 1.exr",
    "../product_Data/HRDS035/Shape 1.zip",
    "../product_Data/HRDS035/Shape 1 Normal Map.png",
    "Hard Surface 035",
    "Hard Surface ",
    0
  );
  createProduct(
    "HRDS040",
    "Circle-High Level <br/> Hard Surface",
    "../product_Data/HRDS040/Circle-High-Hard Surface.png",
    "../product_Data/HRDS040/Circle-High-Hard Surface.exr",
    "../product_Data/HRDS040/Circle-High-Hard Surface.zip",
    "../product_Data/HRDS040/Circle-High-Hard Surface Normal Map.png",
    "Circle-High Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS041",
    "Circle-Low Level <br/> Hard Surface",
    "../product_Data/HRDS041/Circle-Low-Hard Surface.png",
    "../product_Data/HRDS041/Circle-Low-Hard Surface.exr",
    "../product_Data/HRDS041/Circle-Low-Hard Surface.zip",
    "../product_Data/HRDS041/Circle-Low-Hard Surface Normal Map.png",
    "Circle-Low Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS042",
    "Circle-Mid Level <br/> Hard Surface",
    "../product_Data/HRDS042/Circle-Mid-Hard Surface.png",
    "../product_Data/HRDS042/Circle-Mid-Hard Surface.exr",
    "../product_Data/HRDS042/Circle-Mid-Hard Surface.zip",
    "../product_Data/HRDS042/Circle-Mid-Hard Surface Normal Map.png",
    "Circle-Mid Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS043",
    "Dec-High Level <br/> Hard Surface",
    "../product_Data/HRDS043/Dec-High-Hard Surface.png",
    "../product_Data/HRDS043/Dec-High-Hard Surface.exr",
    "../product_Data/HRDS043/Dec-High-Hard Surface.zip",
    "../product_Data/HRDS043/Dec-High-Hard Surface Normal Map.png",
    "Dec-High Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS044",
    "Dec-Low Level <br/> Hard Surface",
    "../product_Data/HRDS044/Dec-Low-Hard Surface.png",
    "../product_Data/HRDS044/Dec-Low-Hard Surface.exr",
    "../product_Data/HRDS044/Dec-Low-Hard Surface.zip",
    "../product_Data/HRDS044/Dec-Low-Hard Surface Normal Map.png",
    "Dec-Low Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS045",
    "Dec-Mid Level <br/> Hard Surface",
    "../product_Data/HRDS045/Dec-Mid-Hard Surface.png",
    "../product_Data/HRDS045/Dec-Mid-Hard Surface.exr",
    "../product_Data/HRDS045/Dec-Mid-Hard Surface.zip",
    "../product_Data/HRDS045/Dec-Mid-Hard Surface Normal Map.png",
    "Dec-Mid Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS046",
    "Non-High Level <br/> Hard Surface",
    "../product_Data/HRDS046/Non-High-Hard Surface.png",
    "../product_Data/HRDS046/Non-High-Hard Surface.exr",
    "../product_Data/HRDS046/Non-High-Hard Surface.zip",
    "../product_Data/HRDS046/Non-High-Hard Surface Normal Map.png",
    "Non-High Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS048",
    "Non-Low Level <br/> Hard Surface",
    "../product_Data/HRDS048/Non-Low-Hard Surface.png",
    "../product_Data/HRDS048/Non-Low-Hard Surface.exr",
    "../product_Data/HRDS048/Non-Low-Hard Surface.zip",
    "../product_Data/HRDS048/Non-Low-Hard Surface Normal Map.png",
    "Non-Low Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS049",
    "Non-Mid Level <br/> Hard Surface",
    "../product_Data/HRDS049/Non-Mid-Hard Surface.png",
    "../product_Data/HRDS049/Non-Mid-Hard Surface.exr",
    "../product_Data/HRDS049/Non-Mid-Hard Surface.zip",
    "../product_Data/HRDS049/Non-Mid-Hard Surface Normal Map.png",
    "Non-Mid Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS051",
    "Oct-Mid Level <br/> Hard Surface",
    "../product_Data/HRDS051/Oct-Mid-Hard Surface.png",
    "../product_Data/HRDS051/Oct-Mid-Hard Surface.exr",
    "../product_Data/HRDS051/Oct-Mid-Hard Surface.zip",
    "../product_Data/HRDS051/Oct-Mid-Hard Surface Normal Map.png",
    "Oct-Mid Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS050",
    "Oct-High Level <br/> Hard Surface",
    "../product_Data/HRDS050/Oct-High-Hard Surface.png",
    "../product_Data/HRDS050/Oct-High-Hard Surface.exr",
    "../product_Data/HRDS050/Oct-High-Hard Surface.zip",
    "../product_Data/HRDS050/Oct-High-Hard Surface Normal Map.png",
    "Oct-High Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS052",
    "Oct-Low Level <br/> Hard Surface",
    "../product_Data/HRDS052/Oct-Low-Hard Surface.png",
    "../product_Data/HRDS052/Oct-Low-Hard Surface.exr",
    "../product_Data/HRDS052/Oct-Low-Hard Surface.zip",
    "../product_Data/HRDS052/Oct-Low-Hard Surface Normal Map.png",
    "Oct-Low Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS058",
    "Hex-Mid Level <br/> Hard Surface",
    "../product_Data/HRDS058/Hex-Mid-Hard Surface.png",
    "../product_Data/HRDS058/Hex-Mid-Hard Surface.exr",
    "../product_Data/HRDS058/Hex-Mid-Hard Surface.zip",
    "../product_Data/HRDS058/Hex-Mid-Hard Surface Normal Map.png",
    "Hex-Mid Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS057",
    "Hex-Low Level <br/> Hard Surface",
    "../product_Data/HRDS057/Hex-Low-Hard Surface.png",
    "../product_Data/HRDS057/Hex-Low-Hard Surface.exr",
    "../product_Data/HRDS057/Hex-Low-Hard Surface.zip",
    "../product_Data/HRDS057/Hex-Low-Hard Surface Normal Map.png",
    "Hex-Low Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS056",
    "Hex-High Level <br/> Hard Surface",
    "../product_Data/HRDS056/Hex-High-Hard Surface.png",
    "../product_Data/HRDS056/Hex-High-Hard Surface.exr",
    "../product_Data/HRDS056/Hex-High-Hard Surface.zip",
    "../product_Data/HRDS056/Hex-High-Hard Surface Normal Map.png",
    "Hex-High Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS055",
    "Hept-Mid Level <br/> Hard Surface",
    "../product_Data/HRDS055/Hept-Mid-Hard Surface.png",
    "../product_Data/HRDS055/Hept-Mid-Hard Surface.exr",
    "../product_Data/HRDS055/Hept-Mid-Hard Surface.zip",
    "../product_Data/HRDS055/Hept-Mid-Hard Surface Normal Map.png",
    "Hept-Mid Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS054",
    "Hept-Low Level <br/> Hard Surface",
    "../product_Data/HRDS054/Hept-Low-Hard Surface.png",
    "../product_Data/HRDS054/Hept-Low-Hard Surface.exr",
    "../product_Data/HRDS054/Hept-Low-Hard Surface.zip",
    "../product_Data/HRDS054/Hept-Low-Hard Surface Normal Map.png",
    "Hept-Low Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS053",
    "Hept-High Level <br/> Hard Surface",
    "../product_Data/HRDS053/Hept-High-Hard Surface.png",
    "../product_Data/HRDS053/Hept-High-Hard Surface.exr",
    "../product_Data/HRDS053/Hept-High-Hard Surface.zip",
    "../product_Data/HRDS053/Hept-High-Hard Surface Normal Map.png",
    "Hept-High Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS061",
    "Pent-Mid Level <br/> Hard Surface",
    "../product_Data/HRDS061/Pent-Mid-Hard Surface.png",
    "../product_Data/HRDS061/Pent-Mid-Hard Surface.exr",
    "../product_Data/HRDS061/Pent-Mid-Hard Surface.zip",
    "../product_Data/HRDS061/Pent-Mid-Hard Surface Normal Map.png",
    "Pent-Mid Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS060",
    "Pent-Low Level <br/> Hard Surface",
    "../product_Data/HRDS060/Pent-Low-Hard Surface.png",
    "../product_Data/HRDS060/Pent-Low-Hard Surface.exr",
    "../product_Data/HRDS060/Pent-Low-Hard Surface.zip",
    "../product_Data/HRDS060/Pent-Low-Hard Surface Normal Map.png",
    "Pent-Low Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS059",
    "Pent-High Level <br/> Hard Surface",
    "../product_Data/HRDS059/Pent-High-Hard Surface.png",
    "../product_Data/HRDS059/Pent-High-Hard Surface.exr",
    "../product_Data/HRDS059/Pent-High-Hard Surface.zip",
    "../product_Data/HRDS059/Pent-High-Hard Surface Normal Map.png",
    "Pent-High Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS986",
    "Tri-Mid Level <br/> Hard Surface",
    "../product_Data/HRDS986/Tri-Mid-Hard Surface.png",
    "../product_Data/HRDS986/Tri-Mid-Hard Surface.exr",
    "../product_Data/HRDS986/Tri-Mid-Hard Surface.zip",
    "../product_Data/HRDS986/Tri-Mid-Hard Surface Normal Map.png",
    "Tri-Mid Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS066",
    "Tri-Low Level <br/> Hard Surface",
    "../product_Data/HRDS066/Tri-Low-Hard Surface.png",
    "../product_Data/HRDS066/Tri-Low-Hard Surface.exr",
    "../product_Data/HRDS066/Tri-Low-Hard Surface.zip",
    "../product_Data/HRDS066/Tri-Low-Hard Surface  Normal Map.png",
    "Tri-Low Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS065",
    "Tri-High Level <br/> Hard Surface",
    "../product_Data/HRDS065/Tri-High-Hard Surface.png",
    "../product_Data/HRDS065/Tri-High-Hard Surface.exr",
    "../product_Data/HRDS065/Tri-High-Hard Surface.zip",
    "../product_Data/HRDS065/Tri-High-Hard Surface  Normal Map.png",
    "Tri-High Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS063",
    "Quad-Mid Level <br/> Hard Surface",
    "../product_Data/HRDS063/Quad-Mid-Hard Surface.png",
    "../product_Data/HRDS063/Quad-Mid-Hard Surface.exr",
    "../product_Data/HRDS063/Quad-Mid-Hard Surface.zip",
    "../product_Data/HRDS063/Quad-Mid-Hard Surface Normal Map.png",
    "Quad-Mid Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS064",
    "Quad-Low Level <br/> Hard Surface",
    "../product_Data/HRDS064/Quad-Low-Hard Surface.png",
    "../product_Data/HRDS064/Quad-Low-Hard Surface.exr",
    "../product_Data/HRDS064/Quad-Low-Hard Surface.zip",
    "../product_Data/HRDS064/Quad-Low-Hard Surface  Normal Map.png",
    "Quad-Low Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS062",
    "Quad-High Level <br/> Hard Surface",
    "../product_Data/HRDS062/Quad-High-Hard Surface.png",
    "../product_Data/HRDS062/Quad-High-Hard Surface.exr",
    "../product_Data/HRDS062/Quad-High-Hard Surface.zip",
    "../product_Data/HRDS062/Quad-High-Hard Surface Normal Map.png",
    "Quad-High Hard Surface",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS321",
    "Hard Surface <br/> 321",
    "../product_Data/HRDS321/Shape 2.png",
    "../product_Data/HRDS321/Shape 2.exr",
    "../product_Data/HRDS321/Shape 2.zip",
    "../product_Data/HRDS321/Shape 2 Normal Map.png",
    "Hard Surface 321",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS204",
    "Hard Surface <br/> 204",
    "../product_Data/HRDS204/Shape 1.png",
    "../product_Data/HRDS204/Shape 1.exr",
    "../product_Data/HRDS204/Shape 1.zip",
    "../product_Data/HRDS204/Shape 1 Normal Map.png",
    "Hard Surface 204",
    "Hard Surface",
    0
  );
  createProduct(
    "RIHAN00",
    "Rihan CGI <br/> Logo 00",
    "../product_Data/RIHAN00/Mini-Logo.png",
    "../product_Data/RIHAN00/Mini-Logo.exr",
    "../product_Data/RIHAN00/Mini-Logo.zip",
    "../product_Data/RIHAN00/Mini-Logo Normal Map.png",
    "RihanCGI Logo 00",
    "Rihan CGI",
    0
  );
  createProduct(
    "RIHAN01",
    "Rihan CGI <br/> Logo 01",
    "../product_Data/RIHAN01/Main Logo.png",
    "../product_Data/RIHAN01/Main Logo.exr",
    "../product_Data/RIHAN01/Main Logo.zip",
    "../product_Data/RIHAN01/Main Logo Normal Map.png",
    "RihanCGI Logo 01",
    "Rihan CGI",
    0
  );
  createProduct(
    "GNRL000",
    "Donut <br/> &nbsp;",
    "../product_Data/GNRL000/Donut .png",
    "../product_Data/GNRL000/Donut .exr",
    "../product_Data/GNRL000/Donut .zip",
    "../product_Data/GNRL000/Donut Normal Map.png",
    "Donut",
    "General Textures",
    0
  );
  createProduct(
    "BLOB033",
    "Blobs <br/> 033",
    "../product_Data/BLOB033/Blobs 1.png",
    "../product_Data/BLOB033/Blobs 1.exr",
    "../product_Data/BLOB033/Blobs 1.zip",
    "../product_Data/BLOB033/Blobs 1 Normal Map.png",
    "Blobs 033",
    "Blobs",
    0
  );
  createProduct(
    "BLOB088",
    "Blobs <br/> 088",
    "../product_Data/BLOB088/Blobs 2.png",
    "../product_Data/BLOB088/Blobs 2.exr",
    "../product_Data/BLOB088/Blobs 2.zip",
    "../product_Data/BLOB088/Blobs 2 Normal Map.png",
    "Blobs 088",
    "Blobs",
    0
  );
  createProduct(
    "BLOB100",
    "Blobs <br/> 100",
    "../product_Data/BLOB100/Blobs 3.png",
    "../product_Data/BLOB100/Blobs 3.exr",
    "../product_Data/BLOB100/Blobs 3.zip",
    "../product_Data/BLOB100/Blobs 3 Normal Map.png",
    "Blobs 100",
    "Blobs",
    0
  );
  createProduct(
    "PHAR111",
    "Eye of Ra <br/> Pharaonic",
    "../product_Data/PHAR111/Eye of Ra.png",
    "../product_Data/PHAR111/Eye of Ra.exr",
    "../product_Data/PHAR111/Eye of Ra.zip",
    "../product_Data/PHAR111/Eye of Ra  Normal Map.png",
    "Eye of Ra",
    "Pharaonic Symbol",
    0
  );
  createProduct(
    "PHAR001",
    "Scarab <br/> Pharaonic",
    "../product_Data/PHAR001/Scarab.png",
    "../product_Data/PHAR001/Scarab.exr",
    "../product_Data/PHAR001/Scarab.zip",
    "../product_Data/PHAR001/Scarab  Normal Map.png",
    "Scarab",
    "Pharaonic Symbol",
    0
  );
  createProduct(
    "PHAR999",
    "Ankh key <br/> Pharaonic",
    "../product_Data/PHAR999/Ankh Key.png",
    "../product_Data/PHAR999/Ankh Key.exr",
    "../product_Data/PHAR999/Ankh Key.zip",
    "../product_Data/PHAR999/Ankh Key Normal Map.png",
    "Ankh Key",
    "Pharaonic Symbol",
    0
  );
  createProduct(
    "PHAR000",
    "Lotus <br/> Pharaonic",
    "../product_Data/PHAR000/Lotus Flower.png",
    "../product_Data/PHAR000/Lotus Flower.exr",
    "../product_Data/PHAR000/Lotus Flower.zip",
    "../product_Data/PHAR000/Lotus Flower Normal Map.png",
    "Lotus",
    "Pharaonic Symbol",
    0
  );
  createProduct(
    "PHAR555",
    "Egyptian Cat <br/> Pharaonic",
    "../product_Data/PHAR555/Egyptian Cat.png",
    "../product_Data/PHAR555/Egyptian Cat.exr",
    "../product_Data/PHAR555/Egyptian Cat.zip",
    "../product_Data/PHAR555/Egyptian Cat Normal Map.png",
    "Egyptian Cat",
    "Pharaonic Symbol",
    0
  );
  createProduct(
    "PHAR231",
    "Snake <br/> Pharaonic",
    "../product_Data/PHAR231/Snake.png",
    "../product_Data/PHAR231/Snake.exr",
    "../product_Data/PHAR231/Snake.zip",
    "../product_Data/PHAR231/Snake  Normal Map.png",
    "Snake",
    "Pharaonic Symbol",
    0
  );
  createProduct(
    "PHAR332",
    "Pharaonic <br/> 332",
    "../product_Data/PHAR332/Symbol 1.png",
    "../product_Data/PHAR332/Symbol 1.exr",
    "../product_Data/PHAR332/Symbol 1.zip",
    "../product_Data/PHAR332/Symbol 1  Normal Map.png",
    "Pharaonic Symbol 332",
    "Pharaonic Symbol",
    0
  );
  createProduct(
    "PHAR445",
    "Pharaonic <br/> 445",
    "../product_Data/PHAR445/Symbol 2.png",
    "../product_Data/PHAR445/Symbol 2.exr",
    "../product_Data/PHAR445/Symbol 2.zip",
    "../product_Data/PHAR445/Symbol 2 Normal Map.png",
    "Pharaonic Symbol 445",
    "Pharaonic Symbol",
    0
  );
  createProduct(
    "PHAR654",
    "Pharaonic <br/> 654",
    "../product_Data/PHAR654/Symbol 3.png",
    "../product_Data/PHAR654/Symbol 3.exr",
    "../product_Data/PHAR654/Symbol 3.zip",
    "../product_Data/PHAR654/Symbol 3 Normal Map.png",
    "Pharaonic Symbol 654",
    "Pharaonic Symbol",
    0
  );
  createProduct(
    "HRDS747",
    "Arrow Line <br/> Beveled",
    "../product_Data/HRDS747/Beveled Arrow Line Hard Surface .png",
    "../product_Data/HRDS747/Beveled Arrow Line Hard Surface .exr",
    "../product_Data/HRDS747/Beveled Arrow Line Hard Surface .zip",
    "../product_Data/HRDS747/Beveled Arrow Line Hard Surface  Normal Map.png",
    "Beveled Arrow Line",
    "Beveled Arrow Line Hard Surface",
    0
  );
  createProduct(
    "HRDS156",
    "Arrow <br/> Beveled",
    "../product_Data/HRDS156/Beveled Arrow Hard Surface.png",
    "../product_Data/HRDS156/Beveled Arrow Hard Surface.exr",
    "../product_Data/HRDS156/Beveled Arrow Hard Surface.zip",
    "../product_Data/HRDS156/Beveled Arrow Hard Surface  Normal Map.png",
    "Beveled Arrow",
    "Beveled Arrow Hard Surface",
    0
  );
  createProduct(
    "HRDS442",
    "Arrow <br/> Non-Beveled",
    "../product_Data/HRDS442/Arrow Hard Surface.png",
    "../product_Data/HRDS442/Arrow Hard Surface.exr",
    "../product_Data/HRDS442/Arrow Hard Surface.zip",
    "../product_Data/HRDS442/Arrow Hard Surface Normal Map.png",
    "Non-Beveled Arrow",
    "Non-Beveled Arrow Hard Surface",
    0
  );
  createProduct(
    "HRDS332",
    "Semi Arrow Line <br/> Beveled",
    "../product_Data/HRDS332/Beveled Semi Arrow Line Hard Surface .png",
    "../product_Data/HRDS332/Beveled Semi Arrow Line Hard Surface .exr",
    "../product_Data/HRDS332/Beveled Semi Arrow Line Hard Surface .zip",
    "../product_Data/HRDS332/Beveled Semi Arrow Line Hard Surface  Normal Map.png",
    "Beveled Semi Arrow Line",
    "Beveled Semi Arrow Line Hard Surface",
    0
  );
  createProduct(
    "HRDS555",
    "Semi Arrow <br/> Beveled",
    "../product_Data/HRDS555/Beveled Semi Arrow Hard Surface .png",
    "../product_Data/HRDS555/Beveled Semi Arrow Hard Surface .exr",
    "../product_Data/HRDS555/Beveled Semi Arrow Hard Surface .zip",
    "../product_Data/HRDS555/Beveled Semi Arrow Hard Surface  Normal Map.png",
    "Beveled Semi Arrow",
    "Beveled Semi Arrow Hard Surface",
    0
  );
  createProduct(
    "HRDS117",
    "Semi Arrow <br/> Non-Beveled",
    "../product_Data/HRDS117/Semi Arrow Hard Surface 1.png",
    "../product_Data/HRDS117/Semi Arrow Hard Surface 1.exr",
    "../product_Data/HRDS117/Semi Arrow Hard Surface 1.zip",
    "../product_Data/HRDS117/Semi Arrow Hard Surface 1 Normal Map.png",
    "Non-Beveled Semi Arrow",
    "Non-Beveled Semi Arrow Hard Surface",
    0
  );
  createProduct(
    "CARV190",
    "Circle Carving <br/> 190",
    "../product_Data/CARV190/Circle Carve 3.png",
    "../product_Data/CARV190/Circle Carve 3.exr",
    "../product_Data/CARV190/Circle Carve 3.zip",
    "",
    "Circle Carving 190",
    "Carvings",
    0
  );
  createProduct(
    "CARV003",
    "Circle Carving <br/> 003",
    "../product_Data/CARV003/Circle Carve 5.png",
    "../product_Data/CARV003/Circle Carve 5.exr",
    "../product_Data/CARV003/Circle Carve 5.zip",
    "",
    "Circle Carving 003",
    "Carvings",
    0
  );
  createProduct(
    "CARV009",
    "Circle Carving <br/> 009",
    "../product_Data/CARV009/Circle Carve 4.png",
    "../product_Data/CARV009/Circle Carve 4.exr",
    "../product_Data/CARV009/Circle Carve 4.zip",
    "",
    "Circle Carving 009",
    "Carvings",
    0
  );
  createProduct(
    "CARV100",
    "Square Carving <br/> 100",
    "../product_Data/CARV100/Square Carve2.png",
    "../product_Data/CARV100/Square Carve2.exr",
    "../product_Data/CARV100/Square Carve2.zip",
    "",
    "Square Carving 100",
    "Carvings",
    0
  );
  createProduct(
    "CARV333",
    "Circle Carving <br/> 333",
    "../product_Data/CARV333/Circle Carve.png",
    "../product_Data/CARV333/Circle Carve.exr",
    "../product_Data/CARV333/Circle Carve.zip",
    "",
    "Circle Carving 333",
    "Carvings",
    0
  );
  createProduct(
    "TERR291",
    "Rock & Terrain <br/> 291",
    "../product_Data/TERR291/Terrain 1.png",
    "../product_Data/TERR291/Terrain 1.exr",
    "../product_Data/TERR291/Terrain 1.zip",
    "",
    "Rock & Terrain 291",
    "Rock & Terrain Brush",
    0
  );
  createProduct(
    "TERR700",
    "Rock & Terrain <br/> 700",
    "../product_Data/TERR700/Terrain 2.png",
    "../product_Data/TERR700/Terrain 2.exr",
    "../product_Data/TERR700/Terrain 2.zip",
    "",
    "Rock & Terrain 700",
    "Rock & Terrain Brush",
    0
  );
  createProduct(
    "SCRT001",
    "Scratch <br/> 001",
    "../product_Data/SCRT001/Scratch 1.png",
    "../product_Data/SCRT001/Scratch 1.exr",
    "../product_Data/SCRT001/Scratch 1.zip",
    "",
    "Scratch 001",
    "Scratches",
    0
  );
  createProduct(
    "VIKG001",
    "Vikings <br/> Axe",
    "../product_Data/VIKG001/Axe.png",
    "../product_Data/VIKG001/Axe.exr",
    "../product_Data/VIKG001/Axe.zip",
    "../product_Data/VIKG001/Axe Normal Map.png",
    "Vikings Axe",
    "Vikings Axe Symbol",
    0
  );
  createProduct(
    "VIKG911",
    "Vikings <br/> Wolf",
    "../product_Data/VIKG911/Wolf.png",
    "../product_Data/VIKG911/Wolf.exr",
    "../product_Data/VIKG911/Wolf.zip",
    "../product_Data/VIKG911/Wolf Normal Map.png",
    "Vikings Wolf",
    "Vikings Wolf Symbol",
    0
  );
  createProduct(
    "VIKG444",
    "Vikings <br/> 444",
    "../product_Data/VIKG444/Symbol 5.png",
    "../product_Data/VIKG444/Symbol 5.exr",
    "../product_Data/VIKG444/Symbol 5.zip",
    "../product_Data/VIKG444/Symbol 5 Normal Map.png",
    "Vikings 444",
    "Vikings Symbol",
    0
  );
  createProduct(
    "VIKG200",
    "Vikings <br/> Bird",
    "../product_Data/VIKG200/Bird.png",
    "../product_Data/VIKG200/Bird.exr",
    "../product_Data/VIKG200/Bird.zip",
    "../product_Data/VIKG200/Bird Normal Map.png",
    "Vikings Bird",
    "Vikings Bird Symbol",
    0
  );
  createProduct(
    "VIKG999",
    "Vikings <br/> Dragon",
    "../product_Data/VIKG999/Dragon.png",
    "../product_Data/VIKG999/Dragon.exr",
    "../product_Data/VIKG999/Dragon.zip",
    "../product_Data/VIKG999/Dragon Normal Map.png",
    "Vikings Dragon",
    "Vikings Dragon Symbol",
    0
  );
  createProduct(
    "VIKG611",
    "Vikings <br/> 611",
    "../product_Data/VIKG611/Symbol 7.png",
    "../product_Data/VIKG611/Symbol 7.exr",
    "../product_Data/VIKG611/Symbol 7.zip",
    "../product_Data/VIKG611/Symbol 7 Normal Map.png",
    "Vikings 611",
    "Vikings Symbol",
    0
  );
  createProduct(
    "VIKG909",
    "Vikings <br/> Tree",
    "../product_Data/VIKG909/Tree.png",
    "../product_Data/VIKG909/Tree.exr",
    "../product_Data/VIKG909/Tree.zip",
    "../product_Data/VIKG909/Tree Normal Map.png",
    "Vikings Tree",
    "Vikings Tree Symbol",
    0
  );
  createProduct(
    "VIKG333",
    "Vikings <br/> 333",
    "../product_Data/VIKG333/Symbol 1.png",
    "../product_Data/VIKG333/Symbol 1.exr",
    "../product_Data/VIKG333/Symbol 1.zip",
    "../product_Data/VIKG333/Symbol 1 Normal Map.png",
    "Vikings 333",
    "Vikings Symbol",
    0
  );
  createProduct(
    "VIKG881",
    "Vikings <br/> 881",
    "../product_Data/VIKG881/Symbol 6.png",
    "../product_Data/VIKG881/Symbol 6.exr",
    "../product_Data/VIKG881/Symbol 6.zip",
    "../product_Data/VIKG881/Symbol 6 Normal Map.png",
    "Vikings 881",
    "Vikings Symbol",
    0
  );
  createProduct(
    "VIKG555",
    "Vikings <br/> 555",
    "../product_Data/VIKG555/Symbol 2.png",
    "../product_Data/VIKG555/Symbol 2.exr",
    "../product_Data/VIKG555/Symbol 2.zip",
    "../product_Data/VIKG555/Symbol 2 Normal Map.png",
    "Vikings 555",
    "Vikings Symbol",
    0
  );
  createProduct(
    "VIKG678",
    "Vikings <br/> 678",
    "../product_Data/VIKG678/Symbol 4.png",
    "../product_Data/VIKG678/Symbol 4.exr",
    "../product_Data/VIKG678/Symbol 4.zip",
    "../product_Data/VIKG678/Symbol 4 Normal Map.png",
    "Vikings 678",
    "Vikings Symbol",
    0
  );
  createProduct(
    "HRDS203",
    "Hard Surface <br/> 203",
    "../product_Data/HRDS203/HS Symbol 1.png",
    "../product_Data/HRDS203/HS Symbol 1.exr",
    "../product_Data/HRDS203/HS Symbol 1.zip",
    "../product_Data/HRDS203/HS Symbol 1 Normal Map.png",
    "Hard Surface 203",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS291",
    "Hard Surface <br/> 291",
    "../product_Data/HRDS291/HS Symbol 4.png",
    "../product_Data/HRDS291/HS Symbol 4.exr",
    "../product_Data/HRDS291/HS Symbol 4.zip",
    "../product_Data/HRDS291/HS Symbol 4 Normal Map.png",
    "Hard Surface 291",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS120",
    "Hard Surface <br/> 120",
    "../product_Data/HRDS120/HS Symbol 5.png",
    "../product_Data/HRDS120/HS Symbol 5.exr",
    "../product_Data/HRDS120/HS Symbol 5.zip",
    "../product_Data/HRDS120/HS Symbol 5 Normal Map.png",
    "Hard Surface 120",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS222",
    "Hard Surface <br/> 222",
    "../product_Data/HRDS222/HS Symbol 9.png",
    "../product_Data/HRDS222/HS Symbol 9.exr",
    "../product_Data/HRDS222/HS Symbol 9.zip",
    "../product_Data/HRDS222/HS Symbol 9 Normal Map.png",
    "Hard Surface 222",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS102",
    "Hard Surface <br/> 102",
    "../product_Data/HRDS102/HS Symbol 3.png",
    "../product_Data/HRDS102/HS Symbol 3.exr",
    "../product_Data/HRDS102/HS Symbol 3.zip",
    "../product_Data/HRDS102/HS Symbol 3 Normal Map.png",
    "Hard Surface 102",
    "Hard SUrface Shape",
    0
  );
  createProduct(
    "HRDS223",
    "Hard Surface <br/> 223",
    "../product_Data/HRDS223/HS Symbol 10.png",
    "../product_Data/HRDS223/HS Symbol 10.exr",
    "../product_Data/HRDS223/HS Symbol 10.zip",
    "../product_Data/HRDS223/HS Symbol 10  Normal Map.png",
    "Hard Surface 223",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS111",
    "Hard Surface <br/> 111",
    "../product_Data/HRDS111/HS Symbol 7.png",
    "../product_Data/HRDS111/HS Symbol 7.exr",
    "../product_Data/HRDS111/HS Symbol 7.zip",
    "../product_Data/HRDS111/HS Symbol 7 Normal Map.png",
    "Hard Surface 111",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS112",
    "Hard Surface <br/> 112",
    "../product_Data/HRDS112/HS Symbol 8.png",
    "../product_Data/HRDS112/HS Symbol 8.exr",
    "../product_Data/HRDS112/HS Symbol 8.zip",
    "../product_Data/HRDS112/HS Symbol 8  Normal Map.png",
    "Hard Surface 112",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS099",
    "Hard Surface <br/> 099",
    "../product_Data/HRDS099/HS Symbol 1.png",
    "../product_Data/HRDS099/HS Symbol 1.exr",
    "../product_Data/HRDS099/HS Symbol 1.zip",
    "../product_Data/HRDS099/HS Symbol 1 Normal Map.png",
    "Hard Surface 099",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS224",
    "Hard Surface <br/> 224",
    "../product_Data/HRDS224/HS Symbol 2.png",
    "../product_Data/HRDS224/HS Symbol 2.exr",
    "../product_Data/HRDS224/HS Symbol 2.zip",
    "../product_Data/HRDS224/HS Symbol 2  Normal Map.png",
    "Hard Surface 224",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS033",
    "Hard Surface <br/> 033",
    "../product_Data/HRDS033/HS Symbol 3.png",
    "../product_Data/HRDS033/HS Symbol 3.exr",
    "../product_Data/HRDS033/HS Symbol 3.zip",
    "../product_Data/HRDS033/HS Symbol 3 Normal Map.png",
    "Hard Surface 033",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS444",
    "Hard Surface <br/> 444",
    "../product_Data/HRDS444/HS Symbol 4.png",
    "../product_Data/HRDS444/HS Symbol 4.exr",
    "../product_Data/HRDS444/HS Symbol 4.zip",
    "../product_Data/HRDS444/HS Symbol 4 Normal Map.png",
    "Hard Surface 444",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS199",
    "Hard Surface <br/> 199",
    "../product_Data/HRDS199/HS Symbol 5.png",
    "../product_Data/HRDS199/HS Symbol 5.exr",
    "../product_Data/HRDS199/HS Symbol 5.zip",
    "../product_Data/HRDS199/HS Symbol 5 Normal Map.png",
    "Hard Surface 199",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS656",
    "Hard Surface <br/> 656",
    "../product_Data/HRDS656/HS Symbol 6.png",
    "../product_Data/HRDS656/HS Symbol 6.exr",
    "../product_Data/HRDS656/HS Symbol 6.zip",
    "../product_Data/HRDS656/HS Symbol 6 Normal Map.png",
    "Hard Surface 656",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS717",
    "Hard Surface <br/> 717",
    "../product_Data/HRDS717/HS Symbol 7.png",
    "../product_Data/HRDS717/HS Symbol 7.exr",
    "../product_Data/HRDS717/HS Symbol 7.zip",
    "../product_Data/HRDS717/HS Symbol 7 Normal Map.png",
    "Hard Surface 717",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS888",
    "Hard Surface <br/> 888",
    "../product_Data/HRDS888/HS Symbol 8.png",
    "../product_Data/HRDS888/HS Symbol 8.exr",
    "../product_Data/HRDS888/HS Symbol 8.zip",
    "../product_Data/HRDS888/HS Symbol 8 Normal Map.png",
    "Hard Surface 888",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS975",
    "Hard Surface <br/> 975",
    "../product_Data/HRDS975/HS Symbol 9.png",
    "../product_Data/HRDS975/HS Symbol 9.exr",
    "../product_Data/HRDS975/HS Symbol 9.zip",
    "../product_Data/HRDS975/HS Symbol 9  Normal Map.png",
    "Hard Surface 975",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS021",
    "Hard Surface <br/> 021",
    "../product_Data/HRDS021/HS Symbol 10.png",
    "../product_Data/HRDS021/HS Symbol 10.exr",
    "../product_Data/HRDS021/HS Symbol 10.zip",
    "../product_Data/HRDS021/HS Symbol 10 Normal Map.png",
    "Hard Surface 021",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS227",
    "Hard Surface <br/> 227",
    "../product_Data/HRDS227/HS Symbol 6.png",
    "../product_Data/HRDS227/HS Symbol 6.exr",
    "../product_Data/HRDS227/HS Symbol 6.zip",
    "../product_Data/HRDS227/HS Symbol 6  Normal Map.png",
    "Hard Surface 227",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "HRDS230",
    "Hard Surface <br/> 230",
    "../product_Data/HRDS230/HS Symbol 2.png",
    "../product_Data/HRDS230/HS Symbol 2.exr",
    "../product_Data/HRDS230/HS Symbol 2.zip",
    "../product_Data/HRDS230/HS Symbol 2  Normal Map.png",
    "Hard Surface 230",
    "Hard Surface Shape",
    0
  );
  createProduct(
    "GREK300",
    "Aphrodite <br/> Symbol",
    "../product_Data/GREK300/Aphrodite.png",
    "../product_Data/GREK300/Aphrodite.exr",
    "../product_Data/GREK300/Aphrodite.zip",
    "../product_Data/GREK300/Aphrodite Normal Map.png",
    "Aphrodite Symbol",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "GREK050",
    "Apollo <br/> Symbol",
    "../product_Data/GREK050/Apollo.png",
    "../product_Data/GREK050/Apollo.exr",
    "../product_Data/GREK050/Apollo.zip",
    "../product_Data/GREK050/Apollo Normal Map.png",
    "Apollo Symbol",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "GREK000",
    "Athena <br/> Symbol",
    "../product_Data/GREK000/Athena.png",
    "../product_Data/GREK000/Athena.exr",
    "../product_Data/GREK000/Athena.zip",
    "../product_Data/GREK000/Athena Normal Map.png",
    "Athena Symbol",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "GREK999",
    "Ares <br/> Symbol",
    "../product_Data/GREK999/Ares.png",
    "../product_Data/GREK999/Ares.exr",
    "../product_Data/GREK999/Ares.zip",
    "../product_Data/GREK999/Ares Normal Map.png",
    "Ares Symbol",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "GREK110",
    "Demeter <br/> Symbol",
    "../product_Data/GREK110/Demeter.png",
    "../product_Data/GREK110/Demeter.exr",
    "../product_Data/GREK110/Demeter.zip",
    "../product_Data/GREK110/Demeter Normal Map.png",
    "Demeter Symbol",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "GREK080",
    "Dionysus <br/> Symbol",
    "../product_Data/GREK080/Dionysus.png",
    "../product_Data/GREK080/Dionysus.exr",
    "../product_Data/GREK080/Dionysus.zip",
    "../product_Data/GREK080/Dionysus Normal Map.png",
    "Dionysus Symbol",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "GREK100",
    "Zues <br/> Symbol",
    "../product_Data/GREK100/Zeus.png",
    "../product_Data/GREK100/Zeus.exr",
    "../product_Data/GREK100/Zeus.zip",
    "../product_Data/GREK100/Zeus Normal Map.png",
    "Zues Symbol",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "GREK222",
    "Poseidon <br/> Symbol",
    "../product_Data/GREK222/Poseidon.png",
    "../product_Data/GREK222/Poseidon.exr",
    "../product_Data/GREK222/Poseidon.zip",
    "../product_Data/GREK222/Poseidon Normal Map.png",
    "Poseidon Symbol",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "GREK210",
    "Hermes <br/> Symbol",
    "../product_Data/GREK210/Hermes.png",
    "../product_Data/GREK210/Hermes.exr",
    "../product_Data/GREK210/Hermes.zip",
    "../product_Data/GREK210/Hermes Normal Map.png",
    "Hermes Symbol",
    "Ancient Greek Symbol",
    0
  );
  createProduct(
    "GREK201",
    "Hephaestus <br/> Symbol",
    "../product_Data/GREK201/Hephaestus.png",
    "../product_Data/GREK201/Hephaestus.exr",
    "../product_Data/GREK201/Hephaestus.zip",
    "../product_Data/GREK201/Hephaestus Normal Map.png",
    "Hephaestus Symbol",
    "Ancient Greek Symbol",
    0
  );
  // Create Your Products Above Here
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  $("#marketplace").html(marketplace);
  // Creating Neccesary UI Elements
  createNavBar();
  createFilterButtons();
}

// function viewProduct gives a more indetail view of a product and the ability to download .PNG and .EXR and .ZIP files
// includes a name, description, id and files to be downloaded
// it includes a back button that calls the backToMarketplace function
function viewProduct(product_id) {
  let finalPrice;
  let downloadTemplate;
  let itemInCatalog = catalog[product_id];
  let price = itemInCatalog.price;

  // reseting total product Number to 0 so that when re-rendering the template the numbers are accurate.
  totalProductNum = 0;

  // Checking if price is Free or not
  // According to it the suitable template is rendered
  if (price == 0) {
    finalPrice = "Free";
    downloadTemplate = `
    <div class="btns">
      <a href="${itemInCatalog.preview}" download="${
      itemInCatalog.download_title
    }.png" ><button class="btn btn-success options_btn">PNG</button></a>
      <a href="${itemInCatalog.hq}" download="${
      itemInCatalog.download_title
    }.exr" ><button class="btn btn-success options_btn">EXR</button></a>
      <a href="${itemInCatalog.normal}" download="${
      itemInCatalog.download_title
    }.png" class= "${
      itemInCatalog.normal == "   " ? "hidden" : ""
    }"><button class="btn btn-success options_btn">Normal Map</button></a>
      <a href="${itemInCatalog.zip}" download="${
      itemInCatalog.download_title
    }.zip" ><button class="btn btn-success options_btn">ZIP</button></a>
    </div>`;
  } else {
    if (itemInCatalog.bundle == true) {
      finalPrice = `Sold in a Bundle For ${price}$`;
    } else {
      finalPrice = `${price}$`;
    }
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
  <img src="${itemInCatalog.preview}" alt="${itemInCatalog.name}" class="viewProductImage card" loading="lazy">
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

// Setting user Search to be upper case to match product Codes and Trims all excess spaces
function setSearch() {
  let searchTag = $("#userSearch").val();
  searchTag = searchTag.trim().toUpperCase();
  search(searchTag);
}

// Implementing Search Function where user can type the product Code or some of it and it will preview all products that match this code.
// if no products found it leaves the products on page and displays a small msg showing that no search result was found.
// if the user searches while nothing is at the search bar it displays all the products available.
function search(searchWord) {
  let catalogkeys = Object.keys(catalog);
  let template;
  resetPriceFilterClass();
  $("#noSearchResult").html(``);
  if (searchWord == "") {
    totalProductNum = 0;
    backToMarketplace();
    return;
  }
  marketplace = ``;
  totalProductNum = 0;
  for (let i = 0; i < Object.keys(catalog).length; i++) {
    if (catalogkeys[i].includes(searchWord)) {
      let item = catalog[catalogkeys[i]];
      template = `<div class="${gridLayout} product_area card">
      <img class="thumbnail card" src="${item.preview}" alt="${item.name}" loading="lazy"/>
      <h1 class="product_title">${item.name}</h1>
      <button class="btn btn-primary" onclick="viewProduct('${catalogkeys[i]}');">Check Texture!</button>
      </div>
      <br/>`;
      marketplace += template;
      totalProductNum += 1;
      $("#marketplace").html(marketplace);
      $("#totalProductNum").html(totalProductNum);
    }
  }
  if (totalProductNum == 0) {
    let result = `<h3>No Search Result Found</h3>`;
    $("#noSearchResult").html(result);
  }
}

// funtion that Checks Which Price Filter is Applied & displays the Products that have these requirements applied
function allOrFreeOrPaid(state_choice) {
  let catalogkeys = Object.keys(catalog);
  let template;
  marketplace = ``;
  totalProductNum = 0;
  // Loop
  for (let i = 0; i < Object.keys(catalog).length; i++) {
    let item = catalog[catalogkeys[i]];
    if (state_choice == "free") {
      priceFilterClass(state_choice);
      if (item.price <= 0) {
        template = `<div class="${gridLayout} product_area card">
      <img class="thumbnail card" src="${item.preview}" alt="${item.name}" loading="lazy"/>
      <h1 class="product_title">${item.name}</h1>
      <button class="btn btn-primary" onclick="viewProduct('${catalogkeys[i]}');">Check Texture!</button>
      </div>
      <br/>`;
        marketplace += template;
        totalProductNum += 1;
        $("#marketplace").html(marketplace);
        $("#totalProductNum").html(totalProductNum);
      }
    } else if (state_choice == "paid") {
      priceFilterClass(state_choice);
      if (item.price > 0) {
        template = `<div class="${gridLayout} product_area card">
      <img class="thumbnail card" src="${item.preview}" alt="${item.name}" loading="lazy"/>
      <h1 class="product_title">${item.name}</h1>
      <button class="btn btn-primary" onclick="viewProduct('${catalogkeys[i]}');">Check Texture!</button>
      </div>
      <br/>`;
        marketplace += template;
        totalProductNum += 1;
        $("#marketplace").html(marketplace);
        $("#totalProductNum").html(totalProductNum);
      }
    } else if (state_choice == "all") {
      priceFilterClass(state_choice);
      search("");
    }
  }
  if (totalProductNum == 0) {
    marketplace = `<h1 class="centerText"> No Products Found </h1>`;
    $("#marketplace").html(marketplace);
    $("#totalProductNum").html(totalProductNum);
  }
  // endLoop
}

// It Filters the Price Filter Buttons to Assign a Class for the clicked One and remove it from the others
function priceFilterClass(state) {
  if (state == "free") {
    $("#PriceFree").addClass("btn-info").removeClass("btn-outline-info");
    $("#PricePaid").removeClass("btn-info").addClass("btn-outline-info");
    $("#PriceAll").removeClass("btn-info").addClass("btn-outline-info");
  } else if (state == "paid") {
    $("#PricePaid").addClass("btn-info").removeClass("btn-outline-info");
    $("#PriceFree").removeClass("btn-info").addClass("btn-outline-info");
    $("#PriceAll").removeClass("btn-info").addClass("btn-outline-info");
  } else if (state == "all") {
    $("#PriceAll").addClass("btn-info").removeClass("btn-outline-info");
    $("#PricePaid").removeClass("btn-info").addClass("btn-outline-info");
    $("#PriceFree").removeClass("btn-info").addClass("btn-outline-info");
  }
}

// Resets The Price Filters Class
function resetPriceFilterClass() {
  $("#PriceAll").removeClass("btn-info").addClass("btn-outline-info");
  $("#PriceFree").removeClass("btn-info").addClass("btn-outline-info");
  $("#PricePaid").removeClass("btn-info").addClass("btn-outline-info");
}

backToMarketplace();
$("#marketplace").html(marketplace);
