import Character from '../character';
import Bowerman from '../bowerman';
import Daemon from '../daemon';
import Zombie from '../zombie';

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

test('should level up', () => {
  const character = new Bowerman('Vanya', 'Bowerman');
  character.levelUp();

  expect(character).toEqual({
    name: 'Vanya',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  });
});

test('level up error', () => {
  const character = new Daemon('Oleg', 'Daemon');
  character.health = 0;

  expect(() => character.levelUp()).toThrow('you are dead BYE');
});

test('should damage', () => {
  const character = new Zombie('Stas', 'Zombie');
  character.damage(10);

  expect(character).toEqual({
    name: 'Stas',
    type: 'Zombie',
    health: 94,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

test('damage error', () => {
  const character = new Bowerman('Vova', 'Bowerman');
  character.health = 0;

  expect(() => character.damage(30)).toThrow('you are dead BYE');
});
