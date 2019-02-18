import { Component, State, Event, EventEmitter } from '@stencil/core';
import { httpGet, httpPatch } from '../../../../../tools/request';
import { environment } from '../../../../../config/environment';
import { getCookie, removeCookies } from '../../../../../tools/cookie';

@Component({
  tag: 'ion-phone',
  styleUrl: 'phone.scss'
})
export class phoneComponent {
  @Event() navigate: EventEmitter;
  @State() code: string = '+34';
  @State() number: string;
  @State() user: {
    phone: number;
    code: string;
    scope: string;
    validated: string;
    updatedAt: string;
    createdAt: string;
  };

  handleSubmit(e) {
    //TODO: validación de campos
    const { code, number } = this;
    e.preventDefault();
    this.user.code = code;
    this.user.phone = Number(number); 
    httpPatch(`${environment.baseUrl}/oauth2/user`, this.user, getCookie('FLIPPIT_accessToken'))
    .then(response => response.json())
    .then((res) => {
      if(res.status === 200) {
        httpGet(`${environment.baseUrl}/oauth2/user/sms`, getCookie('FLIPPIT_accessToken'))
        .then(response => response.json())
        .then(res => {
          if(res.status === 200) {
            this.navigate.emit('validationCode');
          }
        })
      }
    })
  }

  handleChange(event) {
    switch (event.path[0].id) {
      case 'code':
        this.code = event.target.value;
        break; 
      case 'number':
        this.number = event.target.value;
        break;
    }
  }
  componentWillLoad() {
    httpGet(`${environment.baseUrl}/oauth2/user`, getCookie('FLIPPIT_accessToken'))
    .then(response => response.json())
    .then((res) => {
      if(res.status !== 200) {
        return;
      }
      delete res.data.updatedAt;
      delete res.data.createdAt;
      this.user = res.data;
      if(res.data.phone) {
        this.number = res.data.phone;
      }
      if(res.data.validated) {
        this.navigate.emit('home');
      }
      delete this.user.validated;
    })
  }
  goBack() {
    removeCookies();
    this.navigate.emit('login')
  }
  render() {
    return (
      <div class="flippit-phone-container">
        <div class="phone-container-header">
          <h2>Por tu seguridad verifiquemos tu cuenta</h2>
          <h3>Introduce tu número móvil y te enviaremos un mensaje con un código de verificación.</h3>
        </div>
          <form autocomplete="off">
            <input type="text" id="code" value={this.code} disabled={true}/>
            <input autoFocus={true} type="number" id="number" value={this.number} onInput={(event) => this.handleChange(event)} />
            <div class="buttons-container">
              <div class="back" onClick={() => this.goBack()}>Atrás</div>
              <div class="next" onClick={(e) => this.handleSubmit(e)}>Continuar</div>
            </div>
          </form> 
        <div class="circles-container">
          <div class="circle circle-active"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    );
  }
}