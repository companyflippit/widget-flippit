import { Component, State, Event, EventEmitter } from '@stencil/core';
import { httpPost } from '../../../../../tools/request';
import { setCookies } from '../../../../../tools/cookie';
import { environment } from '../../../../../config/environment';

@Component({
  tag: 'ion-signup',
  styleUrl: 'signup.scss'
})
export class Signup {
  @Event() navigate: EventEmitter;
  @State() email: string;
  @State() password: string;
  @State() confirmPassword: string;
  @State() error: boolean = false;
  @State() errorMessage: string = 'Introduzca un email valido.';
  @State() timeOut = null;

  handleSubmit(e) {
    e.preventDefault();
    this.signup();
  }
  setError() {
    this.error = true;
    this.timeOut = setTimeout(() => this.error = false, 2000);
  }
  handleChange(event) {
    switch (event.path[0].id) {
      case 'email':
        this.email = event.target.value;
        break;
      case 'password':
        this.password = event.target.value;
        break;
      case 'confirmPassword':
        this.confirmPassword = event.target.value;
        break;
    }
  }
  signup() {
    if(this.password !== this.confirmPassword || !this.password || !this.password) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      this.setError();
      return;
    }
    const newUser = {
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    }
    httpPost(`${environment.baseUrl}/oauth2/user`, newUser)
      .then(response => response.json())
      .then((data) => {
        if (data.status !== 200) {
          this.errorMessage = 'El email ya está registrado o no es válido.'
          this.setError();
          return;
        }
        const loginUser = {
          grant_type: 'password',
          username: newUser.email,
          password: newUser.password,
        }
        httpPost(`${environment.baseUrl}/oauth2/token`, loginUser)
          .then(response => response.json())
          .then(data => {
            if (data.status !== 200) {
              return;
            }
            setCookies(data.data)
            this.navigate.emit('validationCompleted');
          })
      });
  }
  render() {
    return (
      <div class="flippit-signup-container">
        <div class="body">
          <h2>Crea una cuenta con un correo y una contraseña para probar.</h2>
          <form onSubmit={(e) => this.handleSubmit(e)} autocomplete="off">
            <label>CORREO
              <input type="email" id="email" class={this.error ? 'input-error' : ''} value={this.email} onInput={(event) => this.handleChange(event)} />
            </label>
            <label>CONTRASEÑA
              <input type="password" id="password" class={this.error ? 'input-error' : ''} value={this.password} onInput={(event) => this.handleChange(event)} />
            </label>
            <label>CONFIRMAR CONTRASEÑA
              <input type="password" id="confirmPassword" class={this.error ? 'input-error' : ''} value={this.confirmPassword} onInput={(event) => this.handleChange(event)} />
            </label>
              <p class={this.error ? 'error' : 'error-hide'}>{this.errorMessage}</p>
            <button>Continuar</button>
          </form>
          <div class="login" onClick={() => this.navigate.emit('login')}>
              <p>¿Tienes ya cuenta?  <br/> Inicia sesión</p>
            </div>
        </div>
      </div>
    );
  }
}