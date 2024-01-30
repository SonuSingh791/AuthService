const UserRepository = require('../repository/userRepository');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create({
                email: data.email,
                password: data.password
            });
            return user;
        } catch (error) {
            console.log('Something went wrong at service layer');
            throw error;
        }
    }
}

module.exports = UserService;