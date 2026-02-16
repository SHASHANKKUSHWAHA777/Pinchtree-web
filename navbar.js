const navbarHTML = `
<nav class="flex justify-between items-center px-10 py-4 bg-white border-b-4 border-black sticky top-0 z-50 overflow-visible">
  
  <a href="index.html" class="flex items-center gap-5 text-3xl font-black tracking-tighter uppercase text-black">
    <img src="pinchtreelogofinal.png" alt="PinchTree" class="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-contain rounded-full border-2 border-black bg-gray-50 shadow-lg">
    
    <span class="leading-none">PinchTree</span>
  </a>

  <div class="hidden md:flex items-center gap-10">
    <a href="index.html" id="nav-index" class="nav-item text-lg">Home</a>
    <a href="about.html" id="nav-about" class="nav-item text-lg">About</a>
    <a href="services.html" id="nav-services" class="nav-item text-lg">Services</a>
    <a href="products.html" id="nav-products" class="nav-item text-lg">Products</a>
    <a href="contact.html" id="nav-contact" class="nav-item text-lg">Contact</a>
    
  </div>

  <button class="md:hidden font-black border-2 border-black px-4 py-2 rounded-none uppercase">Menu</button>
</nav>

<style>
  /* Alignment and Hover Logic */
  .nav-item { position: relative; font-weight: 800; text-transform: uppercase; color: black; padding-bottom: 5px; }
  .nav-item::after { content: ''; position: absolute; left: 0; bottom: 0; width: 0; height: 3px; background-color: black; transition: width 0.3s ease-in-out; }
  .nav-item:hover::after { width: 100%; }
  .active-link::after { width: 100% !important; }
</style>
`;

document.getElementById('navbar-placeholder').innerHTML = navbarHTML;

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const pageIdMap = { "index.html": "nav-index", "about.html": "nav-about", "services.html": "nav-services", "products.html": "nav-products", "contact.html": "nav-contact" };
if (pageIdMap[currentPage]) document.getElementById(pageIdMap[currentPage]).classList.add("active-link");