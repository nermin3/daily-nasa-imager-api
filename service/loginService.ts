import { LoginRepository } from '../repository/loginRepository';

export class LoginService {
    private loginRepository: LoginRepository;

    constructor() {
        this.loginRepository = new LoginRepository();
    }

    async login(userInfo) {
        return await this.loginRepository.login(userInfo);
    }

    async register(userInfo) {
        return await this.loginRepository.register(userInfo);
    }
}