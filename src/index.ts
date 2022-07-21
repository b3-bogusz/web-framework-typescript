import {User} from "../models/User";

const user = User.buildUser({ name: 'new record', age: 0, id: 10 });

user.on('change', () => {
    console.log(user)
})

user.fetch();