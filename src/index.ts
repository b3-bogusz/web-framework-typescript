import {User} from "../models/User";

const user1 = new User({ name: 'Patryk', age: 31 });

user1.set({ name: 'newName', age: 20 })

console.log(user1.get('age'));
