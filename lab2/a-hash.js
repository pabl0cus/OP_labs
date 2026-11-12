'use strict';

const phonebook = {
  Павло: '+380445556677',
  Олег: '+380501122334',
  Ірина: '+380671010101',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
