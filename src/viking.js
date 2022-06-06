// Soldier
class Soldier {
  constructor(healthProp, strengthProp) {

    this.health = healthProp;
    this.strength = strengthProp;

  }
  attack() {
    return this.strength


  }
  receiveDamage(damage) {

    this.health = this.health - damage;


  }

}

// Viking
class Viking extends Soldier {

  constructor(nameProp, healthProp, strengthProp,) {

    super(healthProp, strengthProp)
    this.name = nameProp;
  }



  receiveDamage(damage) {

    this.health = this.health - damage;
    if (this.health > 0) {
      let dam = this.name + " has received " + damage + " points of damage";

      return dam;

    } else { return this.name + " has died in act of combat" }

  }
  battleCry() {
    return "Odin Owns You All!"


  }









}

// Saxon
class Saxon extends Soldier {

  receiveDamage(damage) {

    this.health = this.health - damage;
    if (this.health > 0) {
      let dam = "A Saxon has received " + damage + " points of damage";

      return dam;

    } else { return "A Saxon has died in combat" }

  }








}

// War
class War {
  constructor() {

    this.vikingArmy = [];
    this.saxonArmy = [];


  }


  addViking(obj) {
    this.vikingArmy.push(obj);
  }


  addSaxon(obj) {
    this.saxonArmy.push(obj)

  }


  vikingAttack() {

    let saxon=this.saxonArmy[0]
    let viking=this.vikingArmy[0]
    saxon.receiveDamage(viking.strength);
    
  }


  //saxonAttack()
  //showStatus()




}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
