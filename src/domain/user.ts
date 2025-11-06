export class User {
  public id: number
  public name: string
  public lastName: string
  public age: number
  public profession: string

  constructor(id, name, lastName, age, profession) {
    this.id = id
    this.name = name
    this.lastName = lastName
    this.age = age
    this.profession = profession
  }

  getInfo() {
    return {
      id: this.id,
      name: this.name,
      lastName: this.lastName,
      age: this.age,
      profession: this.profession,
    }
  }

  getNameAndLastName() {
    return {
      name: this.name,
      lastName: this.lastName,
    }
  }
}

const newUser = new User(1231313, 'Douglas', 'Sales', 20, 'desenvolvedor')
const infoUser = newUser.getInfo()
const fullName = newUser.getNameAndLastName()

console.log(infoUser)
console.log(fullName)
