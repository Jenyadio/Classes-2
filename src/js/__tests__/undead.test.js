import Undead from '../undead';

test('should create Undead', () => {
  const name = 'name';
  const type = 'Undead';

  const expected = {
    name: 'name',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const received = new Undead(name, type);
  expect(received).toEqual(expected);
});
