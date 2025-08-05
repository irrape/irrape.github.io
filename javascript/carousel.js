
window.addEventListener("load", () => {
  const MIN_LOADING_TIME = 2000;

  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.style.display = "none";

    const body = document.body;
    body.classList.remove("hidden");

    // Forzar reflow para que la transición funcione
    void body.offsetWidth;

    // Añadir clase para iniciar fade-in
    body.classList.add("visible");
  }, MIN_LOADING_TIME);
});




function toggleDetails(projectId, btn) {
  const project = document.getElementById(projectId);
  const preview = project.querySelector('.preview-details');
  const projectText = project.querySelector('.project-text');
  const h2 = project.querySelector('.project-text h2');
  const h3 = project.querySelector('.project-text h3');
  const p = project.querySelector('.project-text p');
  const images = preview.querySelectorAll('.preview-images img');
  const isHidden = preview.hasAttribute('hidden');

  // Configuración por proyecto
  const config = {
    project1: {
      bg: 'linear-gradient(to right, #000000 40%, #6e664d 60%, #000000 100%)',
      h2Color: 'white',
      pColor: 'white',
      shadow: '0 4px 12px rgba(0, 0, 0, 0.6)', // sombra 
    },
    project2: {
      bg: 'linear-gradient(to left, white 30%, #6e664d 50%, white 100%)',
      h2Color: 'black',
      pColor: 'black',
      shadow: '0 4px 12px rgba(0, 0, 0, 0.6)', // sombra 
    },
    project3: {
      bg: 'linear-gradient(to right, #000000 40%, #6e664d 60%, #000000 100%)',
      h2Color: 'white',
      pColor: 'white',
      shadow: '0 4px 12px rgba(0, 0, 0, 0.6)', // sombra 
    },
    project4: {
      bg: 'linear-gradient(to left, white 30%, #6e664d 50%, white 100%)',
      h2Color: 'black',
      pColor: 'black',
      shadow: '0 4px 12px rgba(0, 0, 0, 0.6)', // sombra 
    },
    project5: {
      bg: 'linear-gradient(to right, #000000 40%, #6e664d 60%, #ffffff 100%)',
      h2Color: 'white',
      pColor: 'white',
      shadow: '0 4px 12px rgba(0, 0, 0, 0.6)', // sombra 
    },
  };





  const { bg, h2Color, pColor, shadow } = config[projectId] || {};

  // Mostrar y ocultar detalles
  if (isHidden) {
    preview.removeAttribute('hidden');
    project.style.background = bg;

    preview.style.marginLeft = '3rem';
    projectText.style.marginLeft = '7rem';
    project.style.marginBottom = '6rem';
    btn.textContent = 'Hide Preview';
    btn.setAttribute('aria-expanded', 'true');
    h2.style.fontWeight = 'bold';
    h2.style.color = h2Color;
    p.style.color = pColor;
   
    if (h3) {
      h3.removeAttribute('hidden');
      h3.style.color = 'white'; // Aplicamos color blanco al mostrarlo
    }

    if (p) {
      p.setAttribute('hidden', '');
    }

  } else {
    preview.setAttribute('hidden', '');
    project.style.background = '';
    preview.style.marginLeft = '1rem';
    projectText.style.marginLeft = '1rem';
    project.style.marginBottom = '0';
    btn.textContent = 'See Preview';
    btn.setAttribute('aria-expanded', 'false');
    h2.style.color = '';
    p.style.color = '';
    if (h3) h3.setAttribute('hidden', '');
    if (p) p.removeAttribute('hidden');


  }

  // Aplicar sombras
  images.forEach(img => {
    img.style.boxShadow = shadow;
  });

}
