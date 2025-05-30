console.clear()

class Hero {
    constructor(name, health, maxHealth, armor, attack, damage, regenPerSec) {
        this.name = name // NAMA HERO
        this.health = health // DARAH / HEALTH HERO
        this.maxHealth = maxHealth // MAXSIMAL HEALTH HERO
        this.armor = armor // ARMOR HERO
        this.attack = attack // TOTAL BERAPA KALI ATTACK DI LAKUKAN PER 1 KALI ATTACK
        this.damage = damage // KERUSAKAN YANG DIBERIKAN
        this.regenPerSec = regenPerSec // REGENERASI PER DETIK (MISAL 1 health PER detik)
    }

    status() {
        console.log(`=============================`)
        console.log(`Name\t\t\t: ${this.name}`)
        console.log(`Health\t\t\t: ${this.health}`)
        console.log(`Max Health\t\t: ${this.maxHealth}`)
        console.log(`Armor\t\t\t: ${this.armor}`)
        console.log(`Attack\t\t\t: ${this.attack}`)
        console.log(`Damage\t\t\t: ${this.damage}`)
        console.log(`Regen Per Second\t: ${this.regenPerSec}`)
        console.log(`=============================`)
    }

    addDamage(dmg, atk) {
        const totalDmg = dmg * atk
        const remainder = (this.armor -= totalDmg)

        if (remainder <= 0) {
            const finalRemainder = Math.abs(remainder)
            this.health -= finalRemainder

            console.log(`SISA HEALTH: ${this.health}`)
            console.log(`=============================`)
        } else {
            console.log(`SISA ARMOR\t: ${this.armor}`)
            console.log(`SISA HEALTH\t: ${this.health}`)
            console.log(`=============================`)
        }
    }

    addAttack(target) {
        target.addDamage(this.damage, this.attack)
        this.armor += this.attack // Curi armor sesuai berapa kali dia menyerang
    }

    addRegen() {
        const intervalId = setInterval(() => {
            this.health += this.regenPerSec

            if (this.health >= this.maxHealth) {
                this.health = this.maxHealth
                console.log(`HEALTH PENUH: ${this.health}`)

                clearInterval(intervalId)
            } else {
                console.log(this.health)
            }
        }, 1000)
    }
}

const john = new Hero('john', 120, 120, 25, 2, 10, 2)
const smith = new Hero('smith', 100, 100, 10, 3, 10, 3)

smith.addAttack(john)
john.addRegen()
john.status()
