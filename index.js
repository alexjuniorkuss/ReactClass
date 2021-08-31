import { TypeUser } from "./JS/Models/TypeUser.js";
import { User } from "./JS/Models/User.js";
import { Person } from "./JS/Models/Person.js";
import { PersonRepository } from "./JS/Repository/PersonRepository.js";

let modTypeUser = new TypeUser();
let modUser = new User();
let modPerson = new Person();

let repo = new PersonRepository();

// carregando todo o model des do type ate person
modTypeUser.Name ="Super Fodao Adm";
modTypeUser.Description = "Eu sou the best user";

modUser.Email = "UserFodao@estoyTestando.com";
modUser.Password ="12345";
modUser.TypeUser = modTypeUser;

modPerson.FirstName = "Alex";
modPerson.LastName = "Junior";
modPerson.birthDate = "1999-04-16";
modPerson.Document = "12345678"
modPerson.modUser = modUser

repo.create(modPerson);
// repo.read().then(lista => {
// lista.forEach(m => {
//          console.log(m);
//      });
//  });

// repo.read_by_id(idTeste).then(model => 
//     console.log(model));
// repo.update(modPerson);
// repo.delete(idTeste);
