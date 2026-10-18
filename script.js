const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');

  const revealOnScroll = () => {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 120;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      }
    }
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // run on page load

  
function sendToWhatsApp(button) {
  const productCard = button.closest(".product");

  let productName = "Product";
  let price = "Please confirm the price";

  if (productCard) {
    const nameElement = productCard.querySelector("h3");
    const priceElement = productCard.querySelector(".price");

    if (nameElement) {
      productName = nameElement.textContent.trim();
    }

    if (priceElement) {
      price = priceElement.textContent.trim();
    }
  }

  const message = `Hello PlatForm Technology,

I am interested in this product:

Product: ${productName}
Price: ${price}

Please let me know if it is available.`;

  const phoneNumber = "96877381538";

  const whatsappURL =
    "https://api.whatsapp.com/send?phone=" +
    phoneNumber +
    "&text=" +
    encodeURIComponent(message);

  // Open WhatsApp when the customer clicks Buy Now
  window.open(whatsappURL, "_blank");
}