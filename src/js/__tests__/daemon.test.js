import Daemon from '../daemon';

test('should create Daemon', () => {
  const name = 'name';
  const type = 'Daemon';

  const expected = {
    name: 'name',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const received = new Daemon(name, type);
  expect(received).toEqual(expected);
});
