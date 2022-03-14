import Magician from '../magician';

test('should create Magician', () => {
  const name = 'name';
  const type = 'Magician';

  const expected = {
    name: 'name',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const received = new Magician(name, type);
  expect(received).toEqual(expected);
});
