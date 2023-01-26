import { LoginService } from '../service/loginService';

export class ApiController {
    private loginService: LoginService;

    constructor() {
        this.loginService = new LoginService();
    }

    async login(userInfo) {
        return await this.loginService.login(userInfo);
    }

    async register(userInfo) {
        return await this.loginService.register(userInfo);
    }
}