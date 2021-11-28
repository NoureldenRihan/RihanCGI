//Prv ==> Preview (.PNG)
//Phq ==> High Quality (.EXR)
//zip ==> Preview + High Quality (.ZIP)

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
  download_name,
  //tags,
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
    download_title: download_name,
    link: purchase_link,
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
    "GNRL002",
    "Stitch <br /> 002",
    "../product_Data/GNRL002/Shape 2.png",
    "../product_Data/GNRL002/Shape 2.exr",
    "../product_Data/GNRL002/Shape 2.zip",
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
    "Hephaestus Symbol",
    "Ancient Greek Symbol",
    0
  );
  // Create Your Products Above Here
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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

  // reseting total product Number to 0 so that when re-rendering the template the numbers are accurate.
  totalProductNum = 0;

  // Checking if price is Free or not
  // According to it the suitable template is rendered
  if (price == 0) {
    finalPrice = "Free";
    downloadTemplate = `
    <div class="btns">
      <a href="${itemInCatalog.preview}" download="${itemInCatalog.download_title}.png" ><button class="btn btn-success options_btn">PNG</button></a>
      <a href="${itemInCatalog.hq}" download="${itemInCatalog.download_title}.exr" ><button class="btn btn-success options_btn">EXR</button></a>
      <a href="${itemInCatalog.zip}" download="${itemInCatalog.download_title}.zip" ><button class="btn btn-success options_btn">ZIP</button></a>
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

backToMarketplace();
$("#marketplace").html(marketplace);
