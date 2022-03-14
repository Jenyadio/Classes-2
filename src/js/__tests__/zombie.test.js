import Zombie from '../zombie';

test('should create Zombie', () => {
  const name = 'name';
  const type = 'Zombie';

  const expected = {
    name: 'name',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const received = new Zombie(name, type);
  expect(received).toEqual(expected);
});
