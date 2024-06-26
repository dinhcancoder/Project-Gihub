'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Roles',
      [
        {
          role_id: 'bcb8d4a3-1a97-474d-bd1e-1d775e75fjpe',
          role_name: 'Member',
          description: 'Thành viên'
        },
        {
          role_id: 'bcb8d4a3-1a97-474d-bd1e-1d775e75fhy8',
          role_name: 'Admin',
          description: 'Quản trị viên'
        },
        {
          role_id: 'bcb8d4a3-1a97-474d-bd1e-1d775e75fp0a',
          role_name: 'Super Admin',
          description: 'Quản trị cấp cao'
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {})
  }
}
