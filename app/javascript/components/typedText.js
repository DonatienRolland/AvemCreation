
import Typed from 'typed.js';

function loadDynamicBannerText() {
  if (document.getElementById('banner-typed-text')) {
    new Typed('#banner-typed-text', {
      strings: [
        "concevoir ton site web,",
        "imaginer ton identité de marque,",
        "optimiser ton marketing digital,",
        "monter tes vidéos,"
      ],
      typeSpeed: 50,
      loop: true
    });

  }
}

export { loadDynamicBannerText };
