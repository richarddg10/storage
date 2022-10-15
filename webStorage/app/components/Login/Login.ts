export class Login extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
        const form = this.shadowRoot?.querySelector("app-form");
        form.addEventListener("form-fullfiled", (evt: CustomEvent)=>{
            const email = evt.detail.email;
            const password = evt.detail.password;

            const event: CustomEvent = new CustomEvent("login-success",{
                composed: true
            })
            console.log(this);

            this.dispatchEvent(event);    
        })
    }

    render(){
        if(!this.shadowRoot) return;
        this.shadowRoot.innerHTML = `
        <section>
            <h3>Log in</h3>
            <app-form></app-form>
        </section>
        `
    }
}

customElements.define("app-login",Login);