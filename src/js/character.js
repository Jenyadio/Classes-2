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

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += (this.attack / 100) * 20;
      this.defence += (this.defence / 100) * 20;
      this.health = 100;
    } else {
      throw new Error('you are dead BYE');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('you are dead BYE');
    }
  }
}
