'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Movies', [
      {
        title: 'Anchorman',
        description: 'Some news boys do shenanigans',
        image:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0357413%2F&psig=AOvVaw1JBgkvPeF_tLoF9ULkZ-qC&ust=1670523668397000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKj5teCP6PsCFQAAAAAdAAAAABAE',
        releaseYear: 2004,
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Tremors',
        description: 'Space worms terrorize a rural Arizona town',
        image:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0100814%2F&psig=AOvVaw1RKPncfdFrZeY1-WHi33LO&ust=1670523759585000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKik94uQ6PsCFQAAAAAdAAAAABAE',
        releaseYear: 1990,
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
