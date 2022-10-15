export class Register extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            const event = new CustomEvent("register-success", {
                composed: true
            });
            console.log(this);
            this.dispatchEvent(event);
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = `
        <section>
            <h3>Register</h3>
            <app-form></app-form>
        </section>
        `;
    }
}
customElements.define("app-register", Register);
