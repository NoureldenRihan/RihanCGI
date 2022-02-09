//Prv ==> Preview (.PNG)
//Phq ==> High Quality (.EXR)
//zip ==> Preview + High Quality (.ZIP)

let marketplace = $("#marketplace").html();
let gridLayout = `col-xs-12 col-md-6 col-lg-3`;
let catalog = {};
let totalProductNum = 0;
let AD_sensor = 0;
let searchGuideWord = [];
let searchTag;
let brushMainIDs = {
  HRDS: {
    code: "HRDS",
    title: "Hard <br /> Surface ",
    imgUrl: "../Images/HRDS.png",
  },
  PHAR: {
    code: "PHAR",
    title: "Ancient <br /> Egyptian",
    imgUrl: "../Images/PHAR.png",
  },
  GREK: {
    code: "GREK",
    title: "Ancient <br /> Greek",
    imgUrl: "../Images/GREK.png",
  },
  VIKG: {
    code: "VIKG",
    title: "Vikings <br /> .....",
    imgUrl: "../Images/VIKG.png",
  },
  TERR: {
    code: "TERR",
    title: "Rocks & <br /> Terrain",
    imgUrl: "../Images/TERR.png",
  },
  SCRT: {
    code: "SCRT",
    title: "Scratches  <br /> .....",
    imgUrl: "../Images/SCRT.png",
  },
  GNRL: {
    code: "GNRL",
    title: "General  <br /> .....",
    imgUrl: "../Images/GNRL.png",
  },
  CARV: {
    code: "CARV",
    title: "Carving  <br /> .....",
    imgUrl: "../Images/CARV.png",
  },
  BLOB: {
    code: "BLOB",
    title: "Blobs  <br /> .....",
    imgUrl: "../Images/BLOB.png",
  },
  TILE: {
    code: "TILE",
    title: "Tileables  <br /> .....",
    imgUrl: "../Images/TILE.png",
  },
  GRID: {
    code: "GRID",
    title: "Grid  <br /> .....",
    imgUrl: "../Images/GRID.png",
  },
  HAIR: {
    code: "HAIR",
    title: "Hair  <br /> .....",
    imgUrl: "../Images/HAIR.png",
  },
  FBRC: {
    code: "FBRC",
    title: "Cloth & <br /> Fabric",
    imgUrl: "../Images/FBRC.png",
  },
  RIHAN: {
    code: "RIHAN",
    title: "RihanCGI <br /> Specials",
    imgUrl: "../Images/RIHAN.png",
  },
};

//Google Ads Snippet
let ADs = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5809703577382397"
crossorigin="anonymous"></script>
<!-- Mid-Products Ads -->
<ins class="adsbygoogle"
style="display:block"
data-ad-client="ca-pub-5809703577382397"
data-ad-slot="7271845196"
data-ad-format="auto"
data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script>`;

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
      id='navLogo'
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
          <a class="nav-link ${
            targetclass == 4 ? "active" : " "
          }" href="FAQs.htm">FAQs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://discord.gg/VRqpWzTNSQ"
            >Discord</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://ko-fi.com/rihancgi"
            >Buy us Coffee</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.patreon.com/RihanCGI"
            >Patreon</a
          >
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

// function That Creates the Preview Type Buttons
function createpreviewTypeButtons() {
  let previewTypeButton = `
  <button id="previewSingle" class="priceFilterButton btn btn-outline-warning" onclick="marketplacePreviewType('single');">Single</button>
  <button id="previewBundle" class="priceFilterButton btn btn-outline-warning" onclick="marketplacePreviewType('bundled');">Bundled</button>`;
  $("#previewType").html(previewTypeButton);
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
  AD_sensor += 1;
  if (AD_sensor == 20) {
    marketplace += ADs;
    AD_sensor = 0;
  }
}

// function backToMarketplace clears the marketplace, recreates all available products and recreates the marketplace
function backToMarketplace() {
  marketplace = ``;
  createProduct(
    "PHAR998",
    "Pharaonic <br /> Shape 998",
    "../product_Data/PHAR998/Phar Tablet 3.png",
    "../product_Data/PHAR998/Phar Tablet 3.exr",
    "../product_Data/PHAR998/Phar Tablet 3.zip",
    "../product_Data/PHAR998/Phar Tablet 3 Normal Map.png",
    "Pharaonic Shape 998",
    "Pharaonic",
    0
  );
  createProduct(
    "HRDS122",
    "Hard Surface <br /> Shape 122",
    "../product_Data/HRDS122/Shape 2.png",
    "../product_Data/HRDS122/Shape 2.exr",
    "../product_Data/HRDS122/Shape 2.zip",
    "../product_Data/HRDS122/Shape 2 Normal Map.png",
    "Hard Surface Shape 122",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS123",
    "Hard Surface <br /> Shape 123",
    "../product_Data/HRDS123/Shape 3.png",
    "../product_Data/HRDS123/Shape 3.exr",
    "../product_Data/HRDS123/Shape 3.zip",
    "../product_Data/HRDS123/Shape 3 Normal Map.png",
    "Hard Surface Shape 123",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS114",
    "Hard Surface <br /> Shape 114",
    "../product_Data/HRDS114/Shape 1.png",
    "../product_Data/HRDS114/Shape 1.exr",
    "../product_Data/HRDS114/Shape 1.zip",
    "../product_Data/HRDS114/Shape 1 Normal Map.png",
    "Hard Surface Shape 114",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS115",
    "Hard Surface <br /> Shape 115",
    "../product_Data/HRDS115/Shape 2.png",
    "../product_Data/HRDS115/Shape 2.exr",
    "../product_Data/HRDS115/Shape 2.zip",
    "../product_Data/HRDS115/Shape 2 Normal Map.png",
    "Hard Surface Shape 115",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS116",
    "Hard Surface <br /> Shape 116",
    "../product_Data/HRDS116/Shape 3.png",
    "../product_Data/HRDS116/Shape 3.exr",
    "../product_Data/HRDS116/Shape 3.zip",
    "../product_Data/HRDS116/Shape 3 Normal Map.png",
    "Hard Surface Shape 116",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS118",
    "Hard Surface <br /> Shape 118",
    "../product_Data/HRDS118/Shape 4.png",
    "../product_Data/HRDS118/Shape 4.exr",
    "../product_Data/HRDS118/Shape 4.zip",
    "../product_Data/HRDS118/Shape 4 Normal Map.png",
    "Hard Surface Shape 118",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS119",
    "Hard Surface <br /> Shape 119",
    "../product_Data/HRDS119/Shape 5.png",
    "../product_Data/HRDS119/Shape 5.exr",
    "../product_Data/HRDS119/Shape 5.zip",
    "../product_Data/HRDS119/Shape 5 Normal Map.png",
    "Hard Surface Shape 119",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS121",
    "Hard Surface <br /> Shape 121",
    "../product_Data/HRDS121/Shape 6.png",
    "../product_Data/HRDS121/Shape 6.exr",
    "../product_Data/HRDS121/Shape 6.zip",
    "../product_Data/HRDS121/Shape 6 Normal Map.png",
    "Hard Surface Shape 121",
    "Hard Surface",
    0
  );
  createProduct(
    "GNRL005",
    "Decorative <br /> 005",
    "../product_Data/GNRL005/Shape 2.png",
    "../product_Data/GNRL005/Shape 2.exr",
    "../product_Data/GNRL005/Shape 2.zip",
    "../product_Data/GNRL005/Shape 2 Normal Map.png",
    "Decorative 005",
    "Decorative Shapes",
    0
  );
  createProduct(
    "GNRL004",
    "Decorative <br /> 004",
    "../product_Data/GNRL004/Shape 1.png",
    "../product_Data/GNRL004/Shape 1.exr",
    "../product_Data/GNRL004/Shape 1.zip",
    "../product_Data/GNRL004/Shape 1 Normal Map.png",
    "Decorative 004",
    "Decorative Shapes",
    0
  );
  createProduct(
    "FBRC002",
    "Fabric <br /> 002",
    "../product_Data/FBRC002/Fabric 3.png",
    "../product_Data/FBRC002/Fabric 3.exr",
    "../product_Data/FBRC002/Fabric 3.zip",
    "   ",
    "Fabric 002",
    "Cloth & Fabric",
    0
  );
  createProduct(
    "FBRC001",
    "Fabric <br /> 001",
    "../product_Data/FBRC001/Fabric 2.png",
    "../product_Data/FBRC001/Fabric 2.exr",
    "../product_Data/FBRC001/Fabric 2.zip",
    "   ",
    "Fabric 001",
    "Cloth & Fabric",
    0
  );
  createProduct(
    "FBRC000",
    "Fabric <br /> 000",
    "../product_Data/FBRC000/Fabric 1.png",
    "../product_Data/FBRC000/Fabric 1.exr",
    "../product_Data/FBRC000/Fabric 1.zip",
    "   ",
    "Fabric 000",
    "Cloth & Fabric",
    0
  );
  createProduct(
    "HRDS113",
    "Hard Surface <br /> Shape 113",
    "../product_Data/HRDS113/Shape 13.png",
    "../product_Data/HRDS113/Shape 13.exr",
    "../product_Data/HRDS113/Shape 13.zip",
    "../product_Data/HRDS113/Shape 13 Normal Map.png",
    "Hard Surface Shape 113",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS110",
    "Hard Surface <br /> Shape 110",
    "../product_Data/HRDS110/Shape 12.png",
    "../product_Data/HRDS110/Shape 12.exr",
    "../product_Data/HRDS110/Shape 12.zip",
    "../product_Data/HRDS110/Shape 12 Normal Map.png",
    "Hard Surface Shape 110",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS109",
    "Hard Surface <br /> Shape 109",
    "../product_Data/HRDS109/Shape 11.png",
    "../product_Data/HRDS109/Shape 11.exr",
    "../product_Data/HRDS109/Shape 11.zip",
    "../product_Data/HRDS109/Shape 11 Normal Map.png",
    "Hard Surface Shape 109",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS108",
    "Hard Surface <br /> Shape 108",
    "../product_Data/HRDS108/Shape 10.png",
    "../product_Data/HRDS108/Shape 10.exr",
    "../product_Data/HRDS108/Shape 10.zip",
    "../product_Data/HRDS108/Shape 10 Normal Map.png",
    "Hard Surface Shape 108",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS107",
    "Hard Surface <br /> Shape 107",
    "../product_Data/HRDS107/Shape 9.png",
    "../product_Data/HRDS107/Shape 9.exr",
    "../product_Data/HRDS107/Shape 9.zip",
    "../product_Data/HRDS107/Shape 9 Normal Map.png",
    "Hard Surface Shape 107",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS106",
    "Hard Surface <br /> Shape 106",
    "../product_Data/HRDS106/Shape 8.png",
    "../product_Data/HRDS106/Shape 8.exr",
    "../product_Data/HRDS106/Shape 8.zip",
    "../product_Data/HRDS106/Shape 8 Normal Map.png",
    "Hard Surface Shape 106",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS105",
    "Hard Surface <br /> Shape 105",
    "../product_Data/HRDS105/Shape 7.png",
    "../product_Data/HRDS105/Shape 7.exr",
    "../product_Data/HRDS105/Shape 7.zip",
    "../product_Data/HRDS105/Shape 7 Normal Map.png",
    "Hard Surface Shape 105",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS104",
    "Hard Surface <br /> Shape 104",
    "../product_Data/HRDS104/Shape 6.png",
    "../product_Data/HRDS104/Shape 6.exr",
    "../product_Data/HRDS104/Shape 6.zip",
    "../product_Data/HRDS104/Shape 6 Normal Map.png",
    "Hard Surface Shape 104",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS103",
    "Hard Surface <br /> Shape 103",
    "../product_Data/HRDS103/Shape 5.png",
    "../product_Data/HRDS103/Shape 5.exr",
    "../product_Data/HRDS103/Shape 5.zip",
    "../product_Data/HRDS103/Shape 5 Normal Map.png",
    "Hard Surface Shape 103",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS101",
    "Hard Surface <br /> Shape 101",
    "../product_Data/HRDS101/Shape 4.png",
    "../product_Data/HRDS101/Shape 4.exr",
    "../product_Data/HRDS101/Shape 4.zip",
    "../product_Data/HRDS101/Shape 4 Normal Map.png",
    "Hard Surface Shape 101",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS100",
    "Hard Surface <br /> Shape 100",
    "../product_Data/HRDS100/Shape 3.png",
    "../product_Data/HRDS100/Shape 3.exr",
    "../product_Data/HRDS100/Shape 3.zip",
    "../product_Data/HRDS100/Shape 3 Normal Map.png",
    "Hard Surface Shape 100",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS098",
    "Hard Surface <br /> Shape 098",
    "../product_Data/HRDS098/Shape 2.png",
    "../product_Data/HRDS098/Shape 2.exr",
    "../product_Data/HRDS098/Shape 2.zip",
    "../product_Data/HRDS098/Shape 2 Normal Map.png",
    "Hard Surface Shape 098",
    "Hard Surface",
    0
  );
  createProduct(
    "HRDS097",
    "Hard Surface <br /> Shape 097",
    "../product_Data/HRDS097/Shape 1.png",
    "../product_Data/HRDS097/Shape 1.exr",
    "../product_Data/HRDS097/Shape 1.zip",
    "../product_Data/HRDS097/Shape 1 Normal Map.png",
    "Hard Surface Shape 097",
    "Hard Surface",
    0
  );
  createProduct(
    "PHAR743",
    "Pharaonic <br /> Shape 743",
    "../product_Data/PHAR743/Phar Tablet 1.png",
    "../product_Data/PHAR743/Phar Tablet 1.exr",
    "../product_Data/PHAR743/Phar Tablet 1.zip",
    "../product_Data/PHAR743/Phar Tablet 1 Normal Map.png",
    "Pharaonic Shape 743",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR744",
    "Pharaonic <br /> Shape 744",
    "../product_Data/PHAR744/Phar Tablet 2.png",
    "../product_Data/PHAR744/Phar Tablet 2.exr",
    "../product_Data/PHAR744/Phar Tablet 2.zip",
    "../product_Data/PHAR744/Phar Tablet 2 Normal Map.png",
    "Pharaonic Shape 744",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR700",
    "Pharaonic <br /> Shape 700",
    "../product_Data/PHAR700/Phar Char 1.png",
    "../product_Data/PHAR700/Phar Char 1.exr",
    "../product_Data/PHAR700/Phar Char 1.zip",
    "../product_Data/PHAR700/Phar Char 1 Normal Map.png",
    "Pharaonic Shape 700",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR701",
    "Pharaonic <br /> Shape 701",
    "../product_Data/PHAR701/Phar Char 2.png",
    "../product_Data/PHAR701/Phar Char 2.exr",
    "../product_Data/PHAR701/Phar Char 2.zip",
    "../product_Data/PHAR701/Phar Char 2 Normal Map.png",
    "Pharaonic Shape 701",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR702",
    "Pharaonic <br /> Shape 702",
    "../product_Data/PHAR702/Phar Char 3.png",
    "../product_Data/PHAR702/Phar Char 3.exr",
    "../product_Data/PHAR702/Phar Char 3.zip",
    "../product_Data/PHAR702/Phar Char 3 Normal Map.png",
    "Pharaonic Shape 702",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR703",
    "Pharaonic <br /> Shape 703",
    "../product_Data/PHAR703/Phar Char 4.png",
    "../product_Data/PHAR703/Phar Char 4.exr",
    "../product_Data/PHAR703/Phar Char 4.zip",
    "../product_Data/PHAR703/Phar Char 4 Normal Map.png",
    "Pharaonic Shape 703",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR704",
    "Pharaonic <br /> Shape 704",
    "../product_Data/PHAR704/Phar Char 5.png",
    "../product_Data/PHAR704/Phar Char 5.exr",
    "../product_Data/PHAR704/Phar Char 5.zip",
    "../product_Data/PHAR704/Phar Char 5 Normal Map.png",
    "Pharaonic Shape 704",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR705",
    "Pharaonic <br /> Shape 705",
    "../product_Data/PHAR705/Phar Char 6.png",
    "../product_Data/PHAR705/Phar Char 6.exr",
    "../product_Data/PHAR705/Phar Char 6.zip",
    "../product_Data/PHAR705/Phar Char 6 Normal Map.png",
    "Pharaonic Shape 705",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR706",
    "Pharaonic <br /> Shape 706",
    "../product_Data/PHAR706/Phar Char 7.png",
    "../product_Data/PHAR706/Phar Char 7.exr",
    "../product_Data/PHAR706/Phar Char 7.zip",
    "../product_Data/PHAR706/Phar Char 7 Normal Map.png",
    "Pharaonic Shape 706",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR707",
    "Pharaonic <br /> Shape 707",
    "../product_Data/PHAR707/Phar Char 8.png",
    "../product_Data/PHAR707/Phar Char 8.exr",
    "../product_Data/PHAR707/Phar Char 8.zip",
    "../product_Data/PHAR707/Phar Char 8 Normal Map.png",
    "Pharaonic Shape 707",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR708",
    "Pharaonic <br /> Shape 708",
    "../product_Data/PHAR708/Phar Char 9.png",
    "../product_Data/PHAR708/Phar Char 9.exr",
    "../product_Data/PHAR708/Phar Char 9.zip",
    "../product_Data/PHAR708/Phar Char 9 Normal Map.png",
    "Pharaonic Shape 708",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR709",
    "Pharaonic <br /> Shape 709",
    "../product_Data/PHAR709/Phar Char 10.png",
    "../product_Data/PHAR709/Phar Char 10.exr",
    "../product_Data/PHAR709/Phar Char 10.zip",
    "../product_Data/PHAR709/Phar Char 10 Normal Map.png",
    "Pharaonic Shape 709",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR710",
    "Pharaonic <br /> Shape 710",
    "../product_Data/PHAR710/Phar Char 11.png",
    "../product_Data/PHAR710/Phar Char 11.exr",
    "../product_Data/PHAR710/Phar Char 11.zip",
    "../product_Data/PHAR710/Phar Char 11 Normal Map.png",
    "Pharaonic Shape 710",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR711",
    "Pharaonic <br /> Shape 711",
    "../product_Data/PHAR711/Phar Char 12.png",
    "../product_Data/PHAR711/Phar Char 12.exr",
    "../product_Data/PHAR711/Phar Char 12.zip",
    "../product_Data/PHAR711/Phar Char 12 Normal Map.png",
    "Pharaonic Shape 711",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR712",
    "Pharaonic <br /> Shape 712",
    "../product_Data/PHAR712/Phar Char 13.png",
    "../product_Data/PHAR712/Phar Char 13.exr",
    "../product_Data/PHAR712/Phar Char 13.zip",
    "../product_Data/PHAR712/Phar Char 13 Normal Map.png",
    "Pharaonic Shape 712",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR713",
    "Pharaonic <br /> Shape 713",
    "../product_Data/PHAR713/Phar Char 14.png",
    "../product_Data/PHAR713/Phar Char 14.exr",
    "../product_Data/PHAR713/Phar Char 14.zip",
    "../product_Data/PHAR713/Phar Char 14 Normal Map.png",
    "Pharaonic Shape 713",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR714",
    "Pharaonic <br /> Shape 714",
    "../product_Data/PHAR714/Phar Char 15.png",
    "../product_Data/PHAR714/Phar Char 15.exr",
    "../product_Data/PHAR714/Phar Char 15.zip",
    "../product_Data/PHAR714/Phar Char 15 Normal Map.png",
    "Pharaonic Shape 714",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR715",
    "Pharaonic <br /> Shape 715",
    "../product_Data/PHAR715/Phar Char 16.png",
    "../product_Data/PHAR715/Phar Char 16.exr",
    "../product_Data/PHAR715/Phar Char 16.zip",
    "../product_Data/PHAR715/Phar Char 16 Normal Map.png",
    "Pharaonic Shape 715",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR716",
    "Pharaonic <br /> Shape 716",
    "../product_Data/PHAR716/Phar Char 17.png",
    "../product_Data/PHAR716/Phar Char 17.exr",
    "../product_Data/PHAR716/Phar Char 17.zip",
    "../product_Data/PHAR716/Phar Char 17 Normal Map.png",
    "Pharaonic Shape 716",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR717",
    "Pharaonic <br /> Shape 717",
    "../product_Data/PHAR717/Phar Char 18.png",
    "../product_Data/PHAR717/Phar Char 18.exr",
    "../product_Data/PHAR717/Phar Char 18.zip",
    "../product_Data/PHAR717/Phar Char 18 Normal Map.png",
    "Pharaonic Shape 717",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR718",
    "Pharaonic <br /> Shape 718",
    "../product_Data/PHAR718/Phar Char 19.png",
    "../product_Data/PHAR718/Phar Char 19.exr",
    "../product_Data/PHAR718/Phar Char 19.zip",
    "../product_Data/PHAR718/Phar Char 19 Normal Map.png",
    "Pharaonic Shape 718",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR719",
    "Pharaonic <br /> Shape 719",
    "../product_Data/PHAR719/Phar Char 20.png",
    "../product_Data/PHAR719/Phar Char 20.exr",
    "../product_Data/PHAR719/Phar Char 20.zip",
    "../product_Data/PHAR719/Phar Char 20 Normal Map.png",
    "Pharaonic Shape 719",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR720",
    "Pharaonic <br /> Shape 720",
    "../product_Data/PHAR720/Phar Char 21.png",
    "../product_Data/PHAR720/Phar Char 21.exr",
    "../product_Data/PHAR720/Phar Char 21.zip",
    "../product_Data/PHAR720/Phar Char 21 Normal Map.png",
    "Pharaonic Shape 720",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR721",
    "Pharaonic <br /> Shape 721",
    "../product_Data/PHAR721/Phar Char 23.png",
    "../product_Data/PHAR721/Phar Char 23.exr",
    "../product_Data/PHAR721/Phar Char 23.zip",
    "../product_Data/PHAR721/Phar Char 23 Normal Map.png",
    "Pharaonic Shape 721",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR722",
    "Pharaonic <br /> Shape 722",
    "../product_Data/PHAR722/Phar Char 25.png",
    "../product_Data/PHAR722/Phar Char 25.exr",
    "../product_Data/PHAR722/Phar Char 25.zip",
    "../product_Data/PHAR722/Phar Char 25 Normal Map.png",
    "Pharaonic Shape 722",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR723",
    "Pharaonic <br /> Shape 723",
    "../product_Data/PHAR723/Phar Char 26.png",
    "../product_Data/PHAR723/Phar Char 26.exr",
    "../product_Data/PHAR723/Phar Char 26.zip",
    "../product_Data/PHAR723/Phar Char 26 Normal Map.png",
    "Pharaonic Shape 723",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR724",
    "Pharaonic <br /> Shape 724",
    "../product_Data/PHAR724/Phar Char 27.png",
    "../product_Data/PHAR724/Phar Char 27.exr",
    "../product_Data/PHAR724/Phar Char 27.zip",
    "../product_Data/PHAR724/Phar Char 27 Normal Map.png",
    "Pharaonic Shape 724",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR725",
    "Pharaonic <br /> Shape 725",
    "../product_Data/PHAR725/Phar Char 28.png",
    "../product_Data/PHAR725/Phar Char 28.exr",
    "../product_Data/PHAR725/Phar Char 28.zip",
    "../product_Data/PHAR725/Phar Char 28 Normal Map.png",
    "Pharaonic Shape 725",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR726",
    "Pharaonic <br /> Shape 726",
    "../product_Data/PHAR726/Phar Char 29.png",
    "../product_Data/PHAR726/Phar Char 29.exr",
    "../product_Data/PHAR726/Phar Char 29.zip",
    "../product_Data/PHAR726/Phar Char 29 Normal Map.png",
    "Pharaonic Shape 726",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR727",
    "Pharaonic <br /> Shape 727",
    "../product_Data/PHAR727/Phar Char 30.png",
    "../product_Data/PHAR727/Phar Char 30.exr",
    "../product_Data/PHAR727/Phar Char 30.zip",
    "../product_Data/PHAR727/Phar Char 30 Normal Map.png",
    "Pharaonic Shape 727",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR728",
    "Pharaonic <br /> Shape 728",
    "../product_Data/PHAR728/Phar Char 31.png",
    "../product_Data/PHAR728/Phar Char 31.exr",
    "../product_Data/PHAR728/Phar Char 31.zip",
    "../product_Data/PHAR728/Phar Char 31 Normal Map.png",
    "Pharaonic Shape 728",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR729",
    "Pharaonic <br /> Shape 729",
    "../product_Data/PHAR729/Phar Char 32.png",
    "../product_Data/PHAR729/Phar Char 32.exr",
    "../product_Data/PHAR729/Phar Char 32.zip",
    "../product_Data/PHAR729/Phar Char 32 Normal Map.png",
    "Pharaonic Shape 729",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR730",
    "Pharaonic <br /> Shape 730",
    "../product_Data/PHAR730/Phar Char 33.png",
    "../product_Data/PHAR730/Phar Char 33.exr",
    "../product_Data/PHAR730/Phar Char 33.zip",
    "../product_Data/PHAR730/Phar Char 33 Normal Map.png",
    "Pharaonic Shape 730",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR731",
    "Pharaonic <br /> Shape 731",
    "../product_Data/PHAR731/Phar Char 34.png",
    "../product_Data/PHAR731/Phar Char 34.exr",
    "../product_Data/PHAR731/Phar Char 34.zip",
    "../product_Data/PHAR731/Phar Char 34 Normal Map.png",
    "Pharaonic Shape 731",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR732",
    "Pharaonic <br /> Shape 732",
    "../product_Data/PHAR732/Phar Char 35.png",
    "../product_Data/PHAR732/Phar Char 35.exr",
    "../product_Data/PHAR732/Phar Char 35.zip",
    "../product_Data/PHAR732/Phar Char 35 Normal Map.png",
    "Pharaonic Shape 732",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR733",
    "Pharaonic <br /> Shape 733",
    "../product_Data/PHAR733/Phar Char 36.png",
    "../product_Data/PHAR733/Phar Char 36.exr",
    "../product_Data/PHAR733/Phar Char 36.zip",
    "../product_Data/PHAR733/Phar Char 36 Normal Map.png",
    "Pharaonic Shape 733",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR734",
    "Pharaonic <br /> Shape 734",
    "../product_Data/PHAR734/Phar Char 37.png",
    "../product_Data/PHAR734/Phar Char 37.exr",
    "../product_Data/PHAR734/Phar Char 37.zip",
    "../product_Data/PHAR734/Phar Char 37 Normal Map.png",
    "Pharaonic Shape 734",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR735",
    "Pharaonic <br /> Shape 735",
    "../product_Data/PHAR735/Phar Char 38.png",
    "../product_Data/PHAR735/Phar Char 38.exr",
    "../product_Data/PHAR735/Phar Char 38.zip",
    "../product_Data/PHAR735/Phar Char 38 Normal Map.png",
    "Pharaonic Shape 735",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR736",
    "Pharaonic <br /> Shape 736",
    "../product_Data/PHAR736/Phar Char 39.png",
    "../product_Data/PHAR736/Phar Char 39.exr",
    "../product_Data/PHAR736/Phar Char 39.zip",
    "../product_Data/PHAR736/Phar Char 39 Normal Map.png",
    "Pharaonic Shape 736",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR737",
    "Pharaonic <br /> Shape 737",
    "../product_Data/PHAR737/Phar Char 40.png",
    "../product_Data/PHAR737/Phar Char 40.exr",
    "../product_Data/PHAR737/Phar Char 40.zip",
    "../product_Data/PHAR737/Phar Char 40 Normal Map.png",
    "Pharaonic Shape 737",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR738",
    "Pharaonic <br /> Shape 738",
    "../product_Data/PHAR738/Phar Char 41.png",
    "../product_Data/PHAR738/Phar Char 41.exr",
    "../product_Data/PHAR738/Phar Char 41.zip",
    "../product_Data/PHAR738/Phar Char 41 Normal Map.png",
    "Pharaonic Shape 738",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR739",
    "Pharaonic <br /> Shape 739",
    "../product_Data/PHAR739/Phar Char 42.png",
    "../product_Data/PHAR739/Phar Char 42.exr",
    "../product_Data/PHAR739/Phar Char 42.zip",
    "../product_Data/PHAR739/Phar Char 42 Normal Map.png",
    "Pharaonic Shape 739",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR740",
    "Pharaonic <br /> Shape 740",
    "../product_Data/PHAR740/Phar Char 43.png",
    "../product_Data/PHAR740/Phar Char 43.exr",
    "../product_Data/PHAR740/Phar Char 43.zip",
    "../product_Data/PHAR740/Phar Char 43 Normal Map.png",
    "Pharaonic Shape 740",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR741",
    "Pharaonic <br /> Shape 741",
    "../product_Data/PHAR741/Phar Char 44.png",
    "../product_Data/PHAR741/Phar Char 44.exr",
    "../product_Data/PHAR741/Phar Char 44.zip",
    "../product_Data/PHAR741/Phar Char 44 Normal Map.png",
    "Pharaonic Shape 741",
    "Pharaonic",
    0
  );
  createProduct(
    "PHAR742",
    "Pharaonic <br /> Shape 742",
    "../product_Data/PHAR742/Phar Char 45.png",
    "../product_Data/PHAR742/Phar Char 45.exr",
    "../product_Data/PHAR742/Phar Char 45.zip",
    "../product_Data/PHAR742/Phar Char 45 Normal Map.png",
    "Pharaonic Shape 742",
    "Pharaonic",
    0
  );
  createProduct(
    "VIKG002",
    "Norse <br /> Runes 002",
    "../product_Data/VIKG002/Rune 1.png",
    "../product_Data/VIKG002/Rune 1.exr",
    "../product_Data/VIKG002/Rune 1.zip",
    "../product_Data/VIKG002/Rune 1 Normal Map.png",
    "Runes 002",
    "Vikings",
    0
  );
  createProduct(
    "VIKG003",
    "Norse <br /> Runes 003",
    "../product_Data/VIKG003/Rune 2.png",
    "../product_Data/VIKG003/Rune 2.exr",
    "../product_Data/VIKG003/Rune 2.zip",
    "../product_Data/VIKG003/Rune 2 Normal Map.png",
    "Runes 003",
    "Vikings",
    0
  );
  createProduct(
    "VIKG004",
    "Norse <br /> Runes 004",
    "../product_Data/VIKG004/Rune 3.png",
    "../product_Data/VIKG004/Rune 3.exr",
    "../product_Data/VIKG004/Rune 3.zip",
    "../product_Data/VIKG004/Rune 3 Normal Map.png",
    "Runes 004",
    "Vikings",
    0
  );
  createProduct(
    "VIKG005",
    "Norse <br /> Runes 005",
    "../product_Data/VIKG005/Rune 4.png",
    "../product_Data/VIKG005/Rune 4.exr",
    "../product_Data/VIKG005/Rune 4.zip",
    "../product_Data/VIKG005/Rune 4 Normal Map.png",
    "Runes 005",
    "Vikings",
    0
  );
  createProduct(
    "VIKG006",
    "Norse <br /> Runes 006",
    "../product_Data/VIKG006/Rune 5.png",
    "../product_Data/VIKG006/Rune 5.exr",
    "../product_Data/VIKG006/Rune 5.zip",
    "../product_Data/VIKG006/Rune 5 Normal Map.png",
    "Runes 006",
    "Vikings",
    0
  );
  createProduct(
    "VIKG007",
    "Norse <br /> Runes 007",
    "../product_Data/VIKG007/Rune 6.png",
    "../product_Data/VIKG007/Rune 6.exr",
    "../product_Data/VIKG007/Rune 6.zip",
    "../product_Data/VIKG007/Rune 6 Normal Map.png",
    "Runes 007",
    "Vikings",
    0
  );
  createProduct(
    "VIKG008",
    "Norse <br /> Runes 008",
    "../product_Data/VIKG008/Rune 7.png",
    "../product_Data/VIKG008/Rune 7.exr",
    "../product_Data/VIKG008/Rune 7.zip",
    "../product_Data/VIKG008/Rune 7 Normal Map.png",
    "Runes 008",
    "Vikings",
    0
  );
  createProduct(
    "VIKG009",
    "Norse <br /> Runes 009",
    "../product_Data/VIKG009/Rune 8.png",
    "../product_Data/VIKG009/Rune 8.exr",
    "../product_Data/VIKG009/Rune 8.zip",
    "../product_Data/VIKG009/Rune 8 Normal Map.png",
    "Runes 009",
    "Vikings",
    0
  );
  createProduct(
    "VIKG010",
    "Norse <br /> Runes 010",
    "../product_Data/VIKG010/Rune 9.png",
    "../product_Data/VIKG010/Rune 9.exr",
    "../product_Data/VIKG010/Rune 9.zip",
    "../product_Data/VIKG010/Rune 9 Normal Map.png",
    "Runes 010",
    "Vikings",
    0
  );
  createProduct(
    "VIKG011",
    "Norse <br /> Runes 011",
    "../product_Data/VIKG011/Rune 10.png",
    "../product_Data/VIKG011/Rune 10.exr",
    "../product_Data/VIKG011/Rune 10.zip",
    "../product_Data/VIKG011/Rune 10 Normal Map.png",
    "Runes 011",
    "Vikings",
    0
  );
  createProduct(
    "VIKG012",
    "Norse <br /> Runes 012",
    "../product_Data/VIKG012/Rune 11.png",
    "../product_Data/VIKG012/Rune 11.exr",
    "../product_Data/VIKG012/Rune 11.zip",
    "../product_Data/VIKG012/Rune 11 Normal Map.png",
    "Runes 012",
    "Vikings",
    0
  );
  createProduct(
    "VIKG013",
    "Norse <br /> Runes 013",
    "../product_Data/VIKG013/Rune 12.png",
    "../product_Data/VIKG013/Rune 12.exr",
    "../product_Data/VIKG013/Rune 12.zip",
    "../product_Data/VIKG013/Rune 12 Normal Map.png",
    "Runes 013",
    "Vikings",
    0
  );
  createProduct(
    "VIKG014",
    "Norse <br /> Runes 014",
    "../product_Data/VIKG014/Rune 13.png",
    "../product_Data/VIKG014/Rune 13.exr",
    "../product_Data/VIKG014/Rune 13.zip",
    "../product_Data/VIKG014/Rune 13 Normal Map.png",
    "Runes 014",
    "Vikings",
    0
  );
  createProduct(
    "VIKG015",
    "Norse <br /> Runes 015",
    "../product_Data/VIKG015/Rune 14.png",
    "../product_Data/VIKG015/Rune 14.exr",
    "../product_Data/VIKG015/Rune 14.zip",
    "../product_Data/VIKG015/Rune 14 Normal Map.png",
    "Runes 015",
    "Vikings",
    0
  );
  createProduct(
    "VIKG016",
    "Norse <br /> Runes 016",
    "../product_Data/VIKG016/Rune 15.png",
    "../product_Data/VIKG016/Rune 15.exr",
    "../product_Data/VIKG016/Rune 15.zip",
    "../product_Data/VIKG016/Rune 15 Normal Map.png",
    "Runes 016",
    "Vikings",
    0
  );
  createProduct(
    "VIKG017",
    "Norse <br /> Runes 017",
    "../product_Data/VIKG017/Rune 16.png",
    "../product_Data/VIKG017/Rune 16.exr",
    "../product_Data/VIKG017/Rune 16.zip",
    "../product_Data/VIKG017/Rune 16 Normal Map.png",
    "Runes 017",
    "Vikings",
    0
  );
  createProduct(
    "VIKG018",
    "Norse <br /> Runes 018",
    "../product_Data/VIKG018/Rune 17.png",
    "../product_Data/VIKG018/Rune 17.exr",
    "../product_Data/VIKG018/Rune 17.zip",
    "../product_Data/VIKG018/Rune 17 Normal Map.png",
    "Runes 018",
    "Vikings",
    0
  );
  createProduct(
    "VIKG019",
    "Norse <br /> Runes 019",
    "../product_Data/VIKG019/Rune 18.png",
    "../product_Data/VIKG019/Rune 18.exr",
    "../product_Data/VIKG019/Rune 18.zip",
    "../product_Data/VIKG019/Rune 18 Normal Map.png",
    "Runes 019",
    "Vikings",
    0
  );
  createProduct(
    "VIKG020",
    "Norse <br /> Runes 020",
    "../product_Data/VIKG020/Rune 19.png",
    "../product_Data/VIKG020/Rune 19.exr",
    "../product_Data/VIKG020/Rune 19.zip",
    "../product_Data/VIKG020/Rune 19 Normal Map.png",
    "Runes 020",
    "Vikings",
    0
  );
  createProduct(
    "VIKG021",
    "Norse <br /> Runes 021",
    "../product_Data/VIKG021/Rune 20.png",
    "../product_Data/VIKG021/Rune 20.exr",
    "../product_Data/VIKG021/Rune 20.zip",
    "../product_Data/VIKG021/Rune 20 Normal Map.png",
    "Runes 021",
    "Vikings",
    0
  );
  createProduct(
    "VIKG022",
    "Norse <br /> Runes 022",
    "../product_Data/VIKG022/Rune 21.png",
    "../product_Data/VIKG022/Rune 21.exr",
    "../product_Data/VIKG022/Rune 21.zip",
    "../product_Data/VIKG022/Rune 21 Normal Map.png",
    "Runes 022",
    "Vikings",
    0
  );
  createProduct(
    "VIKG023",
    "Norse <br /> Runes 023",
    "../product_Data/VIKG023/Rune 22.png",
    "../product_Data/VIKG023/Rune 22.exr",
    "../product_Data/VIKG023/Rune 22.zip",
    "../product_Data/VIKG023/Rune 22 Normal Map.png",
    "Runes 023",
    "Vikings",
    0
  );
  createProduct(
    "VIKG024",
    "Norse <br /> Runes 024",
    "../product_Data/VIKG024/Rune 23.png",
    "../product_Data/VIKG024/Rune 23.exr",
    "../product_Data/VIKG024/Rune 23.zip",
    "../product_Data/VIKG024/Rune 23 Normal Map.png",
    "Runes 024",
    "Vikings",
    0
  );
  createProduct(
    "VIKG025",
    "Norse <br /> Runes 025",
    "../product_Data/VIKG025/Rune 24.png",
    "../product_Data/VIKG025/Rune 24.exr",
    "../product_Data/VIKG025/Rune 24.zip",
    "../product_Data/VIKG025/Rune 24 Normal Map.png",
    "Runes 025",
    "Vikings",
    0
  );
  createProduct(
    "HAIR001",
    "Hair <br /> Shape 001",
    "../product_Data/HAIR001/Hair 1.png",
    "../product_Data/HAIR001/Hair 1.exr",
    "../product_Data/HAIR001/Hair 1.zip",
    "   ",
    "Hair Shape 001",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR002",
    "Hair <br /> Shape 002",
    "../product_Data/HAIR002/Hair 1D.png",
    "../product_Data/HAIR002/Hair 1D.exr",
    "../product_Data/HAIR002/Hair 1D.zip",
    "   ",
    "Hair Shape 002",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR003",
    "Hair <br /> Shape 003",
    "../product_Data/HAIR003/Hair 1F.png",
    "../product_Data/HAIR003/Hair 1F.exr",
    "../product_Data/HAIR003/Hair 1F.zip",
    "   ",
    "Hair Shape 003",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR004",
    "Hair <br /> Shape 004",
    "../product_Data/HAIR004/Hair 1S.png",
    "../product_Data/HAIR004/Hair 1S.exr",
    "../product_Data/HAIR004/Hair 1S.zip",
    "   ",
    "Hair Shape 004",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR005",
    "Hair <br /> Shape 005",
    "../product_Data/HAIR005/Hair 2.png",
    "../product_Data/HAIR005/Hair 2.exr",
    "../product_Data/HAIR005/Hair 2.zip",
    "   ",
    "Hair Shape 005",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR006",
    "Hair <br /> Shape 006",
    "../product_Data/HAIR006/Hair 2D.png",
    "../product_Data/HAIR006/Hair 2D.exr",
    "../product_Data/HAIR006/Hair 2D.zip",
    "   ",
    "Hair Shape 006",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR007",
    "Hair <br /> Shape 007",
    "../product_Data/HAIR007/Hair 2F.png",
    "../product_Data/HAIR007/Hair 2F.exr",
    "../product_Data/HAIR007/Hair 2F.zip",
    "   ",
    "Hair Shape 007",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR008",
    "Hair <br /> Shape 008",
    "../product_Data/HAIR008/Hair 2S.png",
    "../product_Data/HAIR008/Hair 2S.exr",
    "../product_Data/HAIR008/Hair 2S.zip",
    "   ",
    "Hair Shape 008",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR009",
    "Hair <br /> Shape 009",
    "../product_Data/HAIR009/Hair 3.png",
    "../product_Data/HAIR009/Hair 3.exr",
    "../product_Data/HAIR009/Hair 3.zip",
    "   ",
    "Hair Shape 009",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR010",
    "Hair <br /> Shape 010",
    "../product_Data/HAIR010/Hair 3D.png",
    "../product_Data/HAIR010/Hair 3D.exr",
    "../product_Data/HAIR010/Hair 3D.zip",
    "   ",
    "Hair Shape 010",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR011",
    "Hair <br /> Shape 011",
    "../product_Data/HAIR011/Hair 3F.png",
    "../product_Data/HAIR011/Hair 3F.exr",
    "../product_Data/HAIR011/Hair 3F.zip",
    "   ",
    "Hair Shape 011",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR012",
    "Hair <br /> Shape 012",
    "../product_Data/HAIR012/Hair 3S.png",
    "../product_Data/HAIR012/Hair 3S.exr",
    "../product_Data/HAIR012/Hair 3S.zip",
    "   ",
    "Hair Shape 012",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR013",
    "Hair <br /> Shape 013",
    "../product_Data/HAIR013/Hair 4.png",
    "../product_Data/HAIR013/Hair 4.exr",
    "../product_Data/HAIR013/Hair 4.zip",
    "   ",
    "Hair Shape 013",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR014",
    "Hair <br /> Shape 014",
    "../product_Data/HAIR014/Hair 4D.png",
    "../product_Data/HAIR014/Hair 4D.exr",
    "../product_Data/HAIR014/Hair 4D.zip",
    "   ",
    "Hair Shape 014",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR015",
    "Hair <br /> Shape 015",
    "../product_Data/HAIR015/Hair 4F.png",
    "../product_Data/HAIR015/Hair 4F.exr",
    "../product_Data/HAIR015/Hair 4F.zip",
    "   ",
    "Hair Shape 015",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR016",
    "Hair <br /> Shape 016",
    "../product_Data/HAIR016/Hair 4S.png",
    "../product_Data/HAIR016/Hair 4S.exr",
    "../product_Data/HAIR016/Hair 4S.zip",
    "   ",
    "Hair Shape 016",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR017",
    "Hair <br /> Shape 017",
    "../product_Data/HAIR017/Hair 5.png",
    "../product_Data/HAIR017/Hair 5.exr",
    "../product_Data/HAIR017/Hair 5.zip",
    "   ",
    "Hair Shape 017",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR018",
    "Hair <br /> Shape 018",
    "../product_Data/HAIR018/Hair 5D.png",
    "../product_Data/HAIR018/Hair 5D.exr",
    "../product_Data/HAIR018/Hair 5D.zip",
    "   ",
    "Hair Shape 018",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR019",
    "Hair <br /> Shape 019",
    "../product_Data/HAIR019/Hair 5F.png",
    "../product_Data/HAIR019/Hair 5F.exr",
    "../product_Data/HAIR019/Hair 5F.zip",
    "   ",
    "Hair Shape 019",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR020",
    "Hair <br /> Shape 020",
    "../product_Data/HAIR020/Hair 5S.png",
    "../product_Data/HAIR020/Hair 5S.exr",
    "../product_Data/HAIR020/Hair 5S.zip",
    "   ",
    "Hair Shape 020",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR021",
    "Hair <br /> Shape 021",
    "../product_Data/HAIR021/Hair 6.png",
    "../product_Data/HAIR021/Hair 6.exr",
    "../product_Data/HAIR021/Hair 6.zip",
    "   ",
    "Hair Shape 021",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR022",
    "Hair <br /> Shape 022",
    "../product_Data/HAIR022/Hair 6D.png",
    "../product_Data/HAIR022/Hair 6D.exr",
    "../product_Data/HAIR022/Hair 6D.zip",
    "   ",
    "Hair Shape 022",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR023",
    "Hair <br /> Shape 023",
    "../product_Data/HAIR023/Hair 6F.png",
    "../product_Data/HAIR023/Hair 6F.exr",
    "../product_Data/HAIR023/Hair 6F.zip",
    "   ",
    "Hair Shape 023",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR024",
    "Hair <br /> Shape 024",
    "../product_Data/HAIR024/Hair 6S.png",
    "../product_Data/HAIR024/Hair 6S.exr",
    "../product_Data/HAIR024/Hair 6S.zip",
    "   ",
    "Hair Shape 024",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR025",
    "Hair <br /> Shape 025",
    "../product_Data/HAIR025/Hair 7.png",
    "../product_Data/HAIR025/Hair 7.exr",
    "../product_Data/HAIR025/Hair 7.zip",
    "   ",
    "Hair Shape 025",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR026",
    "Hair <br /> Shape 026",
    "../product_Data/HAIR026/Hair 7D.png",
    "../product_Data/HAIR026/Hair 7D.exr",
    "../product_Data/HAIR026/Hair 7D.zip",
    "   ",
    "Hair Shape 026",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR027",
    "Hair <br /> Shape 027",
    "../product_Data/HAIR027/Hair 7F.png",
    "../product_Data/HAIR027/Hair 7F.exr",
    "../product_Data/HAIR027/Hair 7F.zip",
    "   ",
    "Hair Shape 027",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR028",
    "Hair <br /> Shape 028",
    "../product_Data/HAIR028/Hair 7S.png",
    "../product_Data/HAIR028/Hair 7S.exr",
    "../product_Data/HAIR028/Hair 7S.zip",
    "   ",
    "Hair Shape 028",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR029",
    "Hair <br /> Shape 029",
    "../product_Data/HAIR029/Hair 8.png",
    "../product_Data/HAIR029/Hair 8.exr",
    "../product_Data/HAIR029/Hair 8.zip",
    "   ",
    "Hair Shape 029",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR030",
    "Hair <br /> Shape 030",
    "../product_Data/HAIR030/Hair 8D.png",
    "../product_Data/HAIR030/Hair 8D.exr",
    "../product_Data/HAIR030/Hair 8D.zip",
    "   ",
    "Hair Shape 030",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR031",
    "Hair <br /> Shape 031",
    "../product_Data/HAIR031/Hair 8F.png",
    "../product_Data/HAIR031/Hair 8F.exr",
    "../product_Data/HAIR031/Hair 8F.zip",
    "   ",
    "Hair Shape 031",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR032",
    "Hair <br /> Shape 032",
    "../product_Data/HAIR032/Hair 8S.png",
    "../product_Data/HAIR032/Hair 8S.exr",
    "../product_Data/HAIR032/Hair 8S.zip",
    "   ",
    "Hair Shape 032",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR033",
    "Hair <br /> Shape 033",
    "../product_Data/HAIR033/Hair 9.png",
    "../product_Data/HAIR033/Hair 9.exr",
    "../product_Data/HAIR033/Hair 9.zip",
    "   ",
    "Hair Shape 033",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR034",
    "Hair <br /> Shape 034",
    "../product_Data/HAIR034/Hair 9D.png",
    "../product_Data/HAIR034/Hair 9D.exr",
    "../product_Data/HAIR034/Hair 9D.zip",
    "   ",
    "Hair Shape 034",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR035",
    "Hair <br /> Shape 035",
    "../product_Data/HAIR035/Hair 9F.png",
    "../product_Data/HAIR035/Hair 9F.exr",
    "../product_Data/HAIR035/Hair 9F.zip",
    "   ",
    "Hair Shape 035",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR036",
    "Hair <br /> Shape 036",
    "../product_Data/HAIR036/Hair 9S.png",
    "../product_Data/HAIR036/Hair 9S.exr",
    "../product_Data/HAIR036/Hair 9S.zip",
    "   ",
    "Hair Shape 036",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR037",
    "Hair <br /> Shape 037",
    "../product_Data/HAIR037/Hair 10.png",
    "../product_Data/HAIR037/Hair 10.exr",
    "../product_Data/HAIR037/Hair 10.zip",
    "   ",
    "Hair Shape 037",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR038",
    "Hair <br /> Shape 038",
    "../product_Data/HAIR038/Hair 10D.png",
    "../product_Data/HAIR038/Hair 10D.exr",
    "../product_Data/HAIR038/Hair 10D.zip",
    "   ",
    "Hair Shape 038",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR039",
    "Hair <br /> Shape 039",
    "../product_Data/HAIR039/Hair 10F.png",
    "../product_Data/HAIR039/Hair 10F.exr",
    "../product_Data/HAIR039/Hair 10F.zip",
    "   ",
    "Hair Shape 039",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR040",
    "Hair <br /> Shape 040",
    "../product_Data/HAIR040/Hair 10S.png",
    "../product_Data/HAIR040/Hair 10S.exr",
    "../product_Data/HAIR040/Hair 10S.zip",
    "   ",
    "Hair Shape 040",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR041",
    "Hair <br /> Shape 041",
    "../product_Data/HAIR041/Hair 11.png",
    "../product_Data/HAIR041/Hair 11.exr",
    "../product_Data/HAIR041/Hair 11.zip",
    "   ",
    "Hair Shape 041",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR042",
    "Hair <br /> Shape 042",
    "../product_Data/HAIR042/Hair 11D.png",
    "../product_Data/HAIR042/Hair 11D.exr",
    "../product_Data/HAIR042/Hair 11D.zip",
    "   ",
    "Hair Shape 042",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR043",
    "Hair <br /> Shape 043",
    "../product_Data/HAIR043/Hair 11F.png",
    "../product_Data/HAIR043/Hair 11F.exr",
    "../product_Data/HAIR043/Hair 11F.zip",
    "   ",
    "Hair Shape 043",
    "Hair & Fur",
    0
  );
  createProduct(
    "HAIR044",
    "Hair <br /> Shape 044",
    "../product_Data/HAIR044/Hair 11S.png",
    "../product_Data/HAIR044/Hair 11S.exr",
    "../product_Data/HAIR044/Hair 11S.zip",
    "   ",
    "Hair Shape 044",
    "Hair & Fur",
    0
  );
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
  createpreviewTypeButtons();
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
  searchTag = $("#userSearch").val();
  searchTag = searchTag.trim().toUpperCase();
  $("#marketplace").html(
    "<h1 class='centerText'>Gathering Search Results...</h1>"
  );
  setTimeout(preSearch, 1500);
}

//Delay Function Prior for Searching to Allow Loading Screen to Appear
function preSearch() {
  search(searchTag);
}

// Function that Takes a Search Keyword from a Select Tag to Auto Search it on Market Place
function autoSearch() {
  let sel = document.getElementById("SearchSelection");
  let selection = sel.options[sel.selectedIndex].value;
  searchTag = selection;
  $("#marketplace").html(
    "<h1 class='centerText'>Gathering Search Results...</h1>"
  );
  setTimeout(preSearch, 1500);
}

// Implementing Search Function where user can type the product Code or some of it and it will preview all products that match this code.
// if no products found it leaves the products on page and displays a small msg showing that no search result was found.
// if the user searches while nothing is at the search bar it displays all the products available.
function search(searchWord) {
  let catalogkeys = Object.keys(catalog);
  let template;
  let searchResultFound = false;
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
      $("#noSearchResult").html(`<h4>'${searchWord}' Results Found</h4>`);
      searchResultFound = true;
    }
  }
  if (!searchResultFound) {
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

// Groups the Textures into Bundles According to the ID and Displays these Bundles
function marketplacePreviewType(state_choice) {
  let catalogkeys = Object.keys(catalog);
  let brushIDKeys = Object.keys(brushMainIDs);
  let template;
  marketplace = ``;
  totalProductNum = 0;
  if (state_choice == "single") {
    backToMarketplace();
  } else if (state_choice == "bundled") {
    for (let i = 0; i < brushIDKeys.length; i++) {
      let currentItem = brushMainIDs[brushIDKeys[i]];
      template = `<div class="${gridLayout} product_area card">
      <img class="thumbnail card" src="../Images/${currentItem.imgUrl}" alt="${currentItem.title}" loading="lazy"/>
      <h1 class="product_title">${currentItem.title}</h1>
      <button class="btn btn-primary" onclick="viewBundle('${currentItem.code}');">View Bundle!</button>
      </div>
      <br/>`;
      marketplace += template;
    }
    $("#marketplace").html(marketplace);
  }
}

// Displays Each Bundle's Items Grouped Together with only one download button that downloads the Zip File
function viewBundle(bundleID) {
  let catalogkeys = Object.keys(catalog);
  let template;
  marketplace = ``;
  totalProductNum = 0;
  for (let i = 0; i < Object.keys(catalog).length; i++) {
    let item = catalog[catalogkeys[i]];
    if (item.price == 0) {
      if (catalogkeys[i].substring(0, 4) == bundleID.substring(0, 4)) {
        template = `<div class="${gridLayout} product_area card centerDiv">
      <img class="thumbnail card" src="${item.preview}" alt="${item.name}" loading="lazy"/>
      <h1 class="product_title">${item.name}</h1>
      <a href="${item.zip}" download="${item.download_title}"><button class="btn btn-success options_btn fullbtn">Download!</button></a>
      </div>
      <br/>`;
        marketplace += template;
        totalProductNum += 1;
        $("#marketplace").html(marketplace);
        $("#totalProductNum").html(totalProductNum);
      }
    }
  }
}

backToMarketplace();
$("#marketplace").html(marketplace);
