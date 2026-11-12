'use strict';

function fn() {
  const first = { name: 'Павло' };
  let second = { name: 'Олег' };

  first.name = 'Петро';
  second.name = 'Іван';
  second = { name: 'Андрій' };

  // first можна змінити всередині, але не можна присвоїти йому інший об'єкт
  console.log(first, second);
}

module.exports = { fn };
