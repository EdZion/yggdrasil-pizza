const toppings = ['Tomatsås', ' Ost', ' Skinka', ' Champinjoner', ' Ananas', ' Räkor', ' Musslor', ' Krabba', ' Prosciutto', ' Parma Skinka', ' Pancetta', ' Kyckling', ' Salami', ' Salad', ' Lök', ' Gurka', ' Tomat', ' Peperoni', ' Kebab', ' Kebabsås'];
const category = ['Klassiker', 'Inbakad', 'Rullpizza', 'Kebab'];

module.exports = () => {
  return {
    category,
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
        category: category[0],
        price: 80,
        toppings: [toppings[0], toppings[1], toppings[2], toppings[4]],
      },
      {
        id: 5,
        name: 'Calzone',
        category: category[1],
        price: 85,
        toppings: [toppings[0], toppings[1], toppings[2]],
      },
      {
        id: 6,
        name: 'Vikingaskepp',
        category: category[1],
        price: 100,
        toppings: [toppings[0], toppings[1], toppings[2], toppings[5]],
      },
      {
        id: 7,
        name: 'Harald',
        category: category[1],
        price: 110,
        toppings: [toppings[0], toppings[1], toppings[2], toppings[5], toppings[6], toppings[7]],
      },
      {
        id: 8,
        name: 'Särimner',
        category: category[1],
        price: 137,
        toppings: [toppings[0], toppings[1], toppings[2], toppings[8], toppings[9], toppings[10]],
      },
      {
        id: 9,
        name: 'Alexandra Special',
        category: category[2],
        price: 360,
        toppings: [toppings[0], toppings[1], toppings[18], toppings[19], toppings[15], toppings[13], toppings[12], toppings[11], toppings[4]],
      },
      {
        id: 10,
        name: 'Rullzone',
        category: category[2],
        price: 85,
        toppings: [toppings[0], toppings[1], toppings[2]],
      },
      {
        id: 11,
        name: 'Kebaq pizza',
        category: category[3],
        price: 90,
        toppings: [toppings[0], toppings[1], toppings[18], toppings[19]],
      },
      {
        id: 12,
        name: 'Allan Special',
        category: category[3],
        price: 100,
        toppings: [toppings[0], toppings[1], toppings[18], toppings[19], ' kärlek'],
      },
    ],
  };
};
