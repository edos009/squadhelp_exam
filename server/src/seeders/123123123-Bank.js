module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Banks",
      [
        {
          cardNumber: "4564654564564564",
          name: "SquadHelp",
          expiry: "11/22",
          cvc: "453",
          balance: 0,
        },
        {
          cardNumber: "4111111111111111",
          name: "buyer",
          expiry: "09/23",
          cvc: "505",
          balance: 10000,
        },
        {
          cardNumber: "4000000000000000",
          name: "creator",
          expiry: "09/23",
          cvc: "505",
          balance: 0,
        },
      ],
      {}
    );
  },
};
