import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecipeExplorer = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const recipes = [
    {
      title: 'Paella Mixta (España)',
      image: 'https://estaticos-cdn.prensaiberica.es/clip/9cb62572-b4fe-4969-b0fb-0ee876339b11_16-9-aspect-ratio_default_0.jpg',
      description: 'Compite con la tortilla de patatas por ser la comida más famosa de nuestro país. Es un plato típicamente mediterráneo, muy nutritivo y cardiosaludable que tiene su origen en la Albufera de Valencia. Admite todo tipo de ingredientes desde carnes a verduras, el único indispensable es el arroz.'
    },
    {
      title: 'American Burger (EEUU)',
      image: 'https://estaticos-cdn.prensaiberica.es/clip/b05a8713-4d7b-4e7b-a7d8-9a82aa0bfdf0_16-9-aspect-ratio_default_0.jpg',
      description: 'El icono de la gastronomía norteamericana debe su nombre a la ciudad germana de Hamburgo, aunque su origen se remonta al Imperio Romano. Relacionada siempre con la comida basura, lo cierto es que es un plato muy recomendable siempre que se use carne de calidad, ingredientes frescos y no se abuse de las salsas.'
    },
    {
      title: 'Sushi (Japón)',
      image: 'https://estaticos-cdn.prensaiberica.es/clip/2e86c5b0-4756-4eea-94d6-895ab777ed87_16-9-aspect-ratio_default_0.jpg',
      description: 'El sushi, al contrario de lo que muchos piensan, no es solo pescado crudo. El plato que Japón ha logrado exportar al resto del mundo se prepara a base de arroz cocido, algas, verduras y pescado crudo. Es rico en Omega 3, por lo que ayuda a prevenir enfermedades del corazón, problemas cerebrovasculares y artritis. '
    }
  ];

  const filteredRecipes = recipes.filter(recipe =>
    !searchTerm || recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const openModal = (index) => {
    setSelectedRecipe(filteredRecipes[index]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar receta..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded-md p-2 mb-4"
      />

      <Slider {...sliderSettings}>
        {filteredRecipes.map((recipe, index) => (
          <div key={index} className="bg-white p-4 rounded-lg ">
            <img src={recipe.image} alt={recipe.title} className="mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2 ">{recipe.title}</h2>
            <p className="text-gray-700 text-2xl">{recipe.description.substring(0, 100)}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => openModal(index)}>Ver Receta</button>
          </div>
        ))}
      </Slider>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-screen-lg">
            <h2 className="text-3xl font-bold mb-4">{selectedRecipe.title}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.title} className="mx-auto mb-4" />
            <p className="text-gray-700 mb-4 text-2xl">{selectedRecipe.description}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeExplorer;

