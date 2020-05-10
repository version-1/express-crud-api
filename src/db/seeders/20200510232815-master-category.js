'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Categories',
      [
        {
          key: 'programming',
          name: 'プログラミング',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          key: 'career',
          name: 'キャリア',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          key: 'hobby',
          name: '趣味',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {})
  },
}
