'use strict';

const book = [
  { name: 'Павло', phone: '+380445556677' },
  { name: 'Олег', phone: '+380501122334' },
  { name: 'Ірина', phone: '+380671010101' },
];

const findPhoneByName = n => {
  for (let i = 0; i < book.length; i++) if (book[i].name === n) return book[i].phone;
};

module.exports = { phonebook: book, findPhoneByName };
