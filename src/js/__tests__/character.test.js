import Character from '../character';

test('should create character', () => {
  const name = 'name';
  const type = 'Undead';

  const expected = {
    name,
    type: 'Undead',
    health: 100,
    level: 1,
  };
  const received = new Character(name, type);
  expect(received).toEqual(expected);
});

test('too-long-name error', () => {
  const name = 'superpupername';
  const type = 'Zombie';

  expect(() => new Character(name, type)).toThrow('name length must be from 2 to 10 characters');
});

test('too-short-name error', () => {
  const name = 'f';
  const type = 'Magician';

  expect(() => new Character(name, type)).toThrow('name length must be from 2 to 10 characters');
});

test('type error', () => {
  const name = 'master';
  const type = 'Student';

  expect(() => new Character(name, type)).toThrow('there is no such type');
});
