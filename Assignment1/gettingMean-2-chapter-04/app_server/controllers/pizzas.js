const homelist = (req, res) => {
    res.render('pizzas-list',
      {
        title: 'Loc8r Pizza - find great pizza places!',
        pageHeader: {
          title: 'Loc8r Pizza',
          strapLine: 'Find places to work with wifi near you!'
        },
        sidebar: "Loc8r helps you find pizza places in your area. Let Loc8r help you find the place you're looking for.",
        pizzas: [
          {
            name: 'La Bella Pizza Canyon',
            address: '700 23rd St, Canyon, TX 79015',
            rating: 4,
            facilities: ['Custom Pizzas', 'Drinks', 'Deserts'],
            distance: '50m'
          },
          {
            name: 'Barrel & Pie',
            address: '1512 5th Ave #101, Canyon, TX 79015',
            rating: 5,
            facilities: ['Pizzas', 'Drinks', 'Deserts'],
            distance: '125m'
          },
          {
            name: 'Pizza Hut',
            address: '110 23rd St, Canyon, TX 79015',
            rating: 3,
            facilities: ['Food', 'Delivery'],
            distance: '100m'
          }
        ]
      }
    );
  };
  
  const pizzaInfo = (req, res) => {
    res.render('pizza-info',
      {
        title: 'La Bella Pizza Canyon',
         pageHeader: {
          title: 'Loc8r Pizza',
        },
        sidebar: {
          context: 'is on Loc8r because it has pizza\'s and other treats you can get while you\'re there, like drinks and deserts.',
          callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        pizza: {
          name: 'La Bella Pizza Canyon',
          address: '700 23rd St, Canyon, TX 79015',
          rating: 3,
          facilities: ['Custom Pizzas', 'Drinks', 'Deserts'],
          coords: {lat: 34.976372, lng: -101.919369},
          openingTimes: [
            {
              days: 'Monday - Thursday',
              opening: '11:00am',
              closing: '12:00am',
              closed: false
            },
            {
              days: 'Friday - Saturday',
              opening: '11:00am',
              closing: '1:00am',
              closed: false
            },
            {
              days: 'Sunday',
              closed: true
            }
          ],
          reviews: [
            {
              author: 'Simon Holmes',
              rating: 5,
              timestamp: '16 July 2013',
              reviewText: 'Amazing pizza and calzones. Seriously the best in the Panhandle. It\'s obvious that they use top notch ingredients.'
            },
            {
              author: 'Charlie Chaplin',
              rating: 3,
              timestamp: '16 June 2013',
              reviewText: 'Not flavorful. Walmart pizza is better'
            }
          ]
        }
      }
    );
  };
  
  const addReview = (req, res) => {
    res.render('pizza-review-form',
      {
        title: 'Review La Bella Pizza Canyon on Loc8r' ,
        pageHeader: { title: 'Review La Bella Pizza Canyon' }
      }
    );
  };
  
  module.exports = {
    homelist,
    pizzaInfo,
    addReview
  };
  