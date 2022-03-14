export default class Character {
  constructor(name, type) {
    if ((typeof name !== 'string') || name.length < 2 || name.length > 10) {
      throw new Error('name length must be from 2 to 10 characters');
    }

    const arr = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (arr.indexOf(type) === -1) {
      throw new Error('there is no such type');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
