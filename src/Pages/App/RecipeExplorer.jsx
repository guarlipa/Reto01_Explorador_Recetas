import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecipeExplorer = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    {
      title: 'Paella Mixta (España)',
      image: 'https://estaticos-cdn.prensaiberica.es/clip/9cb62572-b4fe-4969-b0fb-0ee876339b11_16-9-aspect-ratio_default_0.jpg',
      description: 'Compite con la tortilla de patatas por ser la comida más famosa de nuestro país. Es un plato típicamente mediterráneo, muy nutritivo y cardiosaludable que tiene su origen en la Albufera de Valencia. Admite todo tipo de ingredientes desde carnes a verduras, el único indispensable es el arroz. Así se prepara: Se pueden suprimir los que no gusten o no convengan. Se pone el pollo cubierto de agua fría en una cazuela -no conviene excederse con la cantidad de agua para que no sobre al agregarla al arroz- con un trozo de cebolla, un diente de ajo y una rama de perejil. Una vez cocido, se saca y se deja enfriar, reservando el caldo. Las almejas, lavadas, se ponen en un cazo con un pocillo de agua sobre el fuego, y a medida que abren se pasan con una espumadera a otro recipiente, quitándoles media cáscara. El caldo se filtra con un paño fino y se mezcla con el otro caldo. En otra cazuela, con la mitad del aceite que se empleará para hacer la paella, se fríe el lomo cortado en trozos. Ya frito, se agrega una cucharada de cebolla picada y el tomate, se rehoga todo y se cuece hasta que esté tierno. A continuación se añaden las salchichas, el congrio cortado, los calamares limpios y troceados -sin la tinta-, los langostinos, las almejas y el pollo, cortado en trozos y sin hueso. Ingredientes: 1/2 kg de arroz, 250 g de salchichas blancas, 6 langostinos, 1/4 kg de congrio, 1/4 kg de calamares pequeños, 1/4 kg de almejas, 200 g de lomo de cerdo, 1 pollo pequeño, 1 cucharada de tomate, 1 lata pequeña de pimientos, 1 lata de guisantes, cebolla, ajo, perejil, azafrán, aceite y sal.'
    },
    {
      title: 'American Burger (EEUU)',
      image: 'https://estaticos-cdn.prensaiberica.es/clip/b05a8713-4d7b-4e7b-a7d8-9a82aa0bfdf0_16-9-aspect-ratio_default_0.jpg',
      description: 'Así se prepara: Se pueden suprimir los que no gusten o no convengan. Se pone el pollo cubierto de agua fría en una cazuela -no conviene excederse con la cantidad de agua para que no sobre al agregarla al arroz- con un trozo de cebolla, un diente de ajo y una rama de perejil. Una vez cocido, se saca y se deja enfriar, reservando el caldo. Las almejas, lavadas, se ponen en un cazo con un pocillo de agua sobre el fuego, y a medida que abren se pasan con una espumadera a otro recipiente, quitándoles media cáscara. El caldo se filtra con un paño fino y se mezcla con el otro caldo. En otra cazuela, con la mitad del aceite que se empleará para hacer la paella, se fríe el lomo cortado en trozos. Ya frito, se agrega una cucharada de cebolla picada y el tomate, se rehoga todo y se cuece hasta que esté tierno. A continuación se añaden las salchichas, el congrio cortado, los calamares limpios y troceados -sin la tinta-, los langostinos, las almejas y el pollo, cortado en trozos y sin hueso.'
    },
    {
      title: 'Sushi (Japón)',
      image: 'https://estaticos-cdn.prensaiberica.es/clip/2e86c5b0-4756-4eea-94d6-895ab777ed87_16-9-aspect-ratio_default_0.jpg',
      description: 'Así se prepara: Primero hay que quitar el almidón al arroz. Para ello lo ponemos en un colador y lo mantenemos bajo el agua del grifo (cuando el almidón haya desaparecido el agua filtrada por el arroz dejará de ser blanquecina y volverá a ser transparente). Ponemos a hervir el arroz durante unos 20 minutos a fuego lento. Cuando esté hecho lo pasamos a una fuente y lo dejamos enfriar. Mientras tanto, preparamos la mezcla para el arroz. En un recipiente ponemos tres cucharadas de vinagre y una de azúcar, y agitamos hasta que este quede casi disuelto. Añadimos esta mezcla al arroz. Ingredientes: Una taza de arroz, vinagre de arroz, azúcar, algas nori, wasabi, salsa de soja, cualquier pescado fresco, pepino o aguacate. Es necesaria una esterilla o makisu para hacer los rollos.'
    }
  ];


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const openModal = (index) => {
    setSelectedRecipe(recipes[index]);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Slider {...sliderSettings}>
        {recipes.map((recipe, index) => (
          <div key={index} className="bg-white p-4 rounded-lg">
            <img src={recipe.image} alt={recipe.title} className="mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
            <p className="text-gray-700">{recipe.description.substring(0, 100)}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => openModal(index)}>Ver Receta</button>
          </div>
        ))}
      </Slider>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-xl">
            <h2 className="text-xl font-bold mb-4">{selectedRecipe.title}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.title} className="mx-auto mb-4" />
            <p className="text-gray-700 mb-4">{selectedRecipe.description}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeExplorer;
