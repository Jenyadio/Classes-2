import Bowerman from '../bowerman';

test('should create Bowerman', () => {
  const name = 'name';
  const type = 'Bowerman';

  const expected = {
    name: 'name',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const received = new Bowerman(name, type);
  expect(received).toEqual(expected);
});
