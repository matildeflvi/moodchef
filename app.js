const recetas = {
  relax: {
    nombre: "Sopa cremosa de zapallo",
    ingredientes: [
      "2 tazas de zapallo picado",
      "1 cebolla pequeña",
      "1 taza de leche o crema",
      "Sal",
      "Pimienta"
    ],
    pasos: [
      "Sofríe la cebolla hasta que esté transparente.",
      "Agrega el zapallo y cúbrelo con agua.",
      "Cocina hasta que esté blando.",
      "Licúa y agrega la leche.",
      "Condimenta a gusto."
    ]
  },

  energia: {
    nombre: "Bowl de quinoa con verduras",
    ingredientes: [
      "1 taza de quinoa",
      "1 zanahoria rallada",
      "1 taza de espinaca",
      "1 huevo o tofu",
      "Salsa de soya"
    ],
    pasos: [
      "Cocina la quinoa.",
      "Saltea las verduras.",
      "Agrega huevo o tofu.",
      "Mezcla todo y añade salsa de soya."
    ]
  },

  dulce: {
    nombre: "Brownie tibio con nueces",
    ingredientes: [
      "1 taza de chocolate",
      "1/2 taza de mantequilla",
      "1 taza de azúcar",
      "2 huevos",
      "1 taza de harina",
      "Nueces picadas"
    ],
    pasos: [
      "Mezcla el chocolate con la mantequilla derretida.",
      "Agrega azúcar y huevos.",
      "Añade la harina y las nueces.",
      "Hornea 20 min a 180°C."
    ]
  },

  simple: {
    nombre: "Panqueques rápidos",
    ingredientes: [
      "1 taza de harina",
      "1 taza de leche",
      "1 huevo",
      "1 cucharada de aceite",
      "Sal"
    ],
    pasos: [
      "Mezcla todos los ingredientes.",
      "Vierte un poco en un sartén caliente.",
      "Da vuelta cuando haga burbujas.",
      "Sirve con miel o lo que quieras."
    ]
  },

  experimental: {
    nombre: "La Experi-Tostada Caótica",
    ingredientes: [
      "1 pan cualquiera (si está viejo, mejor: más textura 🙌)",
      "1 cucharada de mantequilla",
      "1 puñado de papas fritas trituradas",
      "Un chorrito de limón",
      "Salsa picante (la que te dé miedo usar)",
      "Una pizca de azúcar (sí, azúcar)",
      "Opcional: lo primero que encuentres en el refri"
    ],
    pasos: [
      "Tuesta el pan hasta que esté casi quemado (confía).",
      "Unta mantequilla como si estuvieras pintando una muralla.",
      "Agrega papas fritas molidas para darle un *crunch* completamente innecesario.",
      "Exprime un chorrito de limón encima porque… ¿por qué no?",
      "Echa salsa picante con el corazón, pero sin pensar.",
      "Finaliza con una pizca de azúcar para confundir al paladar.",
      "Saca una foto ‘aesthetic’ porque el sabor no es lo importante aquí.",
      "Disfrútala. O no. Esa es la experiencia."
  ]
}
};

const botones = document.querySelectorAll(".mood-btn");

if (botones.length > 0) {
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const mood = boton.dataset.mood;

      
      localStorage.setItem("mood", mood);

      
      window.location.href = "receta.html";
    });
  });
}

if (window.location.pathname.includes("receta.html")) {
  const moodGuardado = localStorage.getItem("mood");

  const titulo = document.getElementById("tituloMood");
  const texto = document.getElementById("textoReceta");

  if (moodGuardado) {
    const receta = recetas[moodGuardado];

    titulo.textContent = receta.nombre;

    texto.innerHTML = `
      <h4>Ingredientes:</h4>
      <ul>
        ${receta.ingredientes.map(i => `<li>${i}</li>`).join("")}
      </ul>

      <h4>Preparación:</h4>
      <ol>
        ${receta.pasos.map(p => `<li>${p}</li>`).join("")}
      </ol>
    `;
  }
}
