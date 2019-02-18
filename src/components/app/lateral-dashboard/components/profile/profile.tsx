import { Component, EventEmitter, Event, State } from '@stencil/core';
import { removeCookies, getCookie } from '../../../../../tools/cookie';
import { httpPatch, httpGet, httpPostAuth} from '../../../../../tools/request';
import { environment } from '../../../../../config/environment';

@Component({
  tag: 'ion-profile',
  styleUrl: 'profile.scss'
})
export class ProfileComponent {
  @Event() navigate: EventEmitter;
  @State() name: string = '';
  @State() email: string;
  @State() password: string;
  @State() confirmPassword: string;
  @State() error: boolean = false;
  @State() errorMessage: string = 'Introduzca un email valido.';
  @State() timeOut = null;
  @State() successMessage = null;
  

  logOut() {
    removeCookies();
    this.navigate.emit('login');
  }

  handleSubmit() {
    // e.preventDefault();
    this.editUser();
  }
  setError() {
    this.error = true;
    this.timeOut = setTimeout(() => this.error = false, 2000);
  }
  setSucessMessage() {
    this.successMessage = true;
    this.timeOut = setTimeout(() => this.successMessage = false, 2000);
  }
  editUser() {
    if(!this.name || !this.email) {
      this.setError();
      return;
    }
    const { name, email } = this;
    const user = {
      name: name || '',
      username: email,
      email
    }
    this.editPassword();
    httpPatch(`${environment.baseUrl}/oauth2/user`, user, getCookie('FLIPPIT_accessToken'))
    .then(response => response.json())
    .then((data) => {
      const { name, email } =  data.data;
      this.name = name;
      this.email = email;
      this.setSucessMessage();
    })
  }
  editPassword() {
    if(!this.password && !this.confirmPassword) {
      return;
    }
    const user = {
      password: this.password,
      confirmPassword: this.confirmPassword,
    }
    httpPostAuth(`${environment.baseUrl}/oauth2/password`, user, getCookie('FLIPPIT_accessToken'))
    .then(response => response.json())
    .then(() => {
      this.setSucessMessage();
      this.password = null;
      this.confirmPassword = null;
    });
  }
  handleChange(event) {
    switch (event.path[0].id) {
      case 'name':
        this.name = event.target.value;
        break;
      case 'email':
        this.email = event.target.value;
        break;
      case 'password':
        this.password = event.target.value;
        break;
      case 'confirmPassword':
        this.confirmPassword = event.target.value;
        break;
      case 'name':
        this.confirmPassword = event.target.value;
        break;
    }
  }

  componentWillLoad() {
    httpGet(`${environment.baseUrl}/oauth2/user`, getCookie('FLIPPIT_accessToken'))
    .then(response => response.json())
    .then((data) => {
      const { name, email } =  data.data;
      this.name = name;
      this.email = email;
    })
  }

  render() {
    return (
      <div class="flippit-profile-container">
        <form onSubmit={() => this.handleSubmit()} autocomplete="off">
          <label>NOMBRE
            <input type="text" id="name" value={this.name} onInput={(event) => this.handleChange(event)} />
          </label>
          <label>CORREO
            <input type="email" id="email" value={this.email} onInput={(event) => this.handleChange(event)} />
          </label>
          {this.error ? <p class="error-message">No puedes dejar el nombre y el email vacíos</p> : ''}
          <label>CONTRASEÑA
            <input type="password" id="password" value={this.password} onInput={(event) => this.handleChange(event)} />
          </label>
          <label>CONFIRMAR CONTRASEÑA
            <input type="password" id="confirmPassword" value={this.confirmPassword} onInput={(event) => this.handleChange(event)} />
          </label>
          <button style={{ 'display': 'none'}}></button>
          </form>
          {this.successMessage ? <p class="success-message">El perfil se ha actualizado con éxito</p> : ''}
          <ion-logout action={this.handleSubmit.bind(this)} color={'#3d1980'} backgroundColor={'white'}></ion-logout>
      </div>
    );
  }
}