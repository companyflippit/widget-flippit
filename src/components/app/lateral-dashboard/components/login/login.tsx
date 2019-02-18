import { Component, State, Event, EventEmitter} from '@stencil/core';
import { httpPost, httpGet } from '../../../../../tools/request';
import { setCookies, getCookie } from '../../../../../tools/cookie';
import { environment } from '../../../../../config/environment';

@Component({
  tag: 'ion-login',
  styleUrl: 'login.scss'
})
export class LoginComponent {
  @Event() navigate: EventEmitter;

  @State() email: string;
  @State() password: string;
  @State() remember = true;
  @State() error: boolean = false;
  @State() errorMessage: string = 'Credenciales incorrectos, vuelva a intentarlo';
  @State() timeOut = null;

  handleSubmit(e) {
    e.preventDefault();
    this.login();
  }

  handleChange(event) {
    switch (event.target.id) {
      case 'email':
        this.email = event.target.value;
        break; 
      case 'password':
        this.password = event.target.value;
        break;
      case 'remember':
        this.remember = !this.remember;
        break;
    }
  }
  setError() {
    this.error = true;
    this.timeOut = setTimeout(() => this.error = false, 2000);
  }
  login() {
    if(!this.email || !this.password) {
      this.setError();
      return;
    }
    const loginUser = {
      grant_type: 'password',
      username: this.email,
      password: this.password
    }
    console.log(loginUser);
    httpPost(`${environment.baseUrl}/oauth2/token`, loginUser)
      .then(response => response.json())
      .then(data => {
        if (data.status !== 200) {
          this.setError();
          return;
        }
        setCookies(data.data);
        if(data.status === 200) {
          httpGet(`${environment.baseUrl}/oauth2/user`, getCookie('FLIPPIT_accessToken'))
          .then(response => response.json())
          .then(res => {
            if(res.status === 200 && res.data.validated) {
              if(this.remember) {
                document.cookie = `FLIPPIT_email=${this.email}`;
              }
              this.navigate.emit('home');
            } else if(res.status === 200){
              this.navigate.emit('phone');
            }
          })
        }
 
      })
      .catch( () => {
        this.errorMessage = 'Server not avaiable!'
      });
  }
  componentWillLoad() {
    const email = getCookie('FLIPPIT_email');
    if(email) {
      this.email = email;
      this.remember = true;
    }
  }
  render() {
    return (
      <div class="flippit-login-container">
        <div class="body">
          <h2>Ahora no se trata de Likes,<br />si no de premiar un buen artículo.</h2>
          <form onSubmit={(e) => this.handleSubmit(e)} autoComplete="off">
            <label>CORREO
            <input type="email" id="email" class={this.error ? 'input-error' : ''} value={this.email} onInput={(event) => this.handleChange(event)} />
            </label>
            <label>CONTRASEÑA
              <input type="password" id="password" class={this.error ? 'input-error' : ''} value={this.password} onInput={(event) => this.handleChange(event)} />
            </label>
            <div class="checkbox">
              <input type="checkbox" id="remember" checked={this.remember} onInput={(event) => this.handleChange(event)} /> 
              <label htmlFor="remember"> Recordar correo </label>
            </div>
            <div class="forget-password">
              <p class={this.error ? 'error' : 'error-hide'}>{this.errorMessage}</p>
            </div>
            <button>Continuar</button>
          </form>
          <div class="signup">
            <p>
              ¿Eres un nuevo usuario?  <br/>
              <span onClick={() => this.navigate.emit('signup')}>Regístrate</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}