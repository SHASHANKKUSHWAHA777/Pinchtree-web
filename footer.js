document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer-placeholder");

  if (footer) {
    footer.innerHTML = `
      <footer class="border-t-2 border-black mt-16">

        <div class="px-6 py-14 max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

          <div>
            <h2 class="text-xl font-black uppercase">PinchTree</h2>
            <p class="mt-4 font-medium leading-relaxed">
              Building defence and medical safety products for real-world impact.
            </p>
            <p class="mt-4 font-bold uppercase text-sm">
              Smart Safety. Real Impact.
            </p>
          </div>

          <div>
            <h2 class="text-lg font-black uppercase">Products</h2>
            <ul class="mt-4 space-y-3 font-semibold">
              <li><a href="services.html" class="hover:underline">SafeCrowd</a></li>
              <li><a href="services.html" class="hover:underline">Bluetooth Safety Device</a></li>
              <li><a href="services.html" class="hover:underline">Upcoming Systems</a></li>
            </ul>
          </div>

          <div>
            <h2 class="text-lg font-black uppercase">Resources</h2>
            <ul class="mt-4 space-y-3 font-semibold">
              <li><a href="blogs.html" class="hover:underline">Blogs</a></li>
              <li><a href="#" class="hover:underline">Research</a></li>
              <li><a href="#" class="hover:underline">Case Studies</a></li>
              <li><a href="#" class="hover:underline">Documentation</a></li>
            </ul>
          </div>

          <div>
            <h2 class="text-lg font-black uppercase">Company</h2>
            <ul class="mt-4 space-y-3 font-semibold">
              <li><a href="about.html" class="hover:underline">About</a></li>
              <li><a href="contact.html" class="hover:underline">Contact</a></li>
              <li><a href="#" class="hover:underline">Careers</a></li>
              <li><a href="#" class="hover:underline">Partners</a></li>
            </ul>
          </div>

        </div>

        <div class="border-t-2 border-black py-6 px-6 text-center font-semibold">
          © 2026 PinchTree.com | Defence & Medical Solutions
        </div>

      </footer>
    `;
  } else {
    console.error("Footer placeholder not found!");
  }
});