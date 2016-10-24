exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coffee').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('coffee').insert({
          name: 'Rio Jorco',
          roaster: 'Two Rivers',
          origin: 'Brazil',
          roast: 'Dark',
          caffeine: 8,
          decaf: false,
          price: 4,
          quantity: 1
        }),
        knex('coffee').insert({
          name: 'Gersi Kebele',
          roaster: 'Black Eye',
          origin: 'Ecuador',
          roast: 'medium',
          caffeine: 6,
          decaf: false,
          price: 3,
          quantity: 1
        }),
        knex('coffee').insert({
          name: 'Abera Gedela',
          roaster: 'Sweet Bloom',
          origin: 'Ecuador',
          roast: 'light',
          caffeine: 2,
          decaf: false,
          price: 4,
          quantity: 1
        })
      ]);
    });
};
