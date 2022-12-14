import "./components/index.js";
var Screens;
(function (Screens) {
    Screens[Screens["login"] = 0] = "login";
    Screens[Screens["register"] = 1] = "register";
    Screens[Screens["home"] = 2] = "home";
})(Screens || (Screens = {}));
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.screen = Screens.register;
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        var _a, _b;
        this.render();
        const login = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-login");
        login === null || login === void 0 ? void 0 : login.addEventListener("login-success", () => {
            this.render();
        });
        const register = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("app-register");
        register === null || register === void 0 ? void 0 : register.addEventListener("register-success", () => {
            console.log('holi');
            this.screen = Screens.login;
            this.render();
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        switch (this.screen) {
            case Screens.home:
                this.shadowRoot.innerHTML = "<app-home></app-home>";
                break;
            case Screens.login:
                this.shadowRoot.innerHTML = `
                <app-login>
                </app-login>
                <h1>${localStorage.getItem("email")}</h1>
                <h1>${localStorage.getItem("password")}</h1>
                `;
                break;
            case Screens.register:
                this.shadowRoot.innerHTML = "<app-register></app-register>";
                break;
            default:
                break;
        }
    }
}
customElements.define("app-container", AppContainer);
