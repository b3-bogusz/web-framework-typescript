import {User} from "../models/User";

const user1 = new User({ name: 'Patryk', age: 31 });

user1.on('change', () => {
    console.log('Change #1')
});
user1.trigger('change')
