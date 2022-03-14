import Swordsman from '../swordsman';

test('should create Swordsman', () => {
  const name = 'name';
  const type = 'Swordsman';

  const expected = {
    name: 'name',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const received = new Swordsman(name, type);
  expect(received).toEqual(expected);
});
