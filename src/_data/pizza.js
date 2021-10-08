const toppings = ['Tomatsås', 'Ost', 'Skinka', 'Champinjoner', 'Ananas'];
const category = ['Klassiker', 'Inbakad', 'Rullpizza', 'Kebab'];

module.exports = () => {
  return {
    items: [
      {
        id: 1,
        name: 'Margarita',
        category: category[0],
        price: 70,
        toppings: [toppings[0], toppings[1]],
      },
      {
        id: 2,
        name: 'Vesuvio',
        category: category[0],
        price: 75,
        toppings: [toppings[0], toppings[1], toppings[2]],
      },
      {
        id: 3,
        name: 'Capricciosa',
        category: category[0],
        price: 80,
        toppings: [toppings[0], toppings[1], toppings[2], toppings[3]],
      },
      {
        id: 4,
        name: 'Hawaii',
        category: category[1],
        price: 80,
        toppings: [toppings[0], toppings[1], toppings[2], toppings[4]],
      },
    ],
  };
};
