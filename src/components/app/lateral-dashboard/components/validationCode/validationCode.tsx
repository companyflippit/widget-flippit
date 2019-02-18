import { Component, State, Event, EventEmitter } from '@stencil/core';
import { getCookie, removeCookies } from '../../../../../tools/cookie';
import { httpGet, httpPostAuth } from '../../../../../tools/request';
import { environment } from '../../../../../config/environment';


@Component({
  tag: 'ion-validation-code',
  styleUrl: 'validationCode.scss'
})
export class validationCodeComponent {
  @State() update: boolean = true;
  @State() phoneValidationCode = [null, null, null, null, null];
  @Event() navigate: EventEmitter;
  @State() user = {
    phone: '',
    code: '+34',
    _id: '',
    scope: '',
    number: '',
    validated: ''
  };

  handleChange(event) {
    const input = event.path[0].id.split('validationCode')[1];
    this.phoneValidationCode[input] = event.data;
    this.update = !this.update;
  }
  sendCode() {
    this.update = !this.update;
    const validationCode = Number(this.phoneValidationCode.join(''));
    httpPostAuth(`${environment.baseUrl}/oauth2/user/sms`, { validationCode }, getCookie('FLIPPIT_accessToken'))
      .then(response => response.json())
      .then((res) => {
        if (res.status === 200) {
          this.navigate.emit('validationCompleted');
        }
      });
  }
  componentWillLoad() {
    httpGet(`${environment.baseUrl}/oauth2/user`, getCookie('FLIPPIT_accessToken'))
      .then(response => response.json())
      .then((res) => {
        if (res.status !== 200) {
          return;
        }
        this.user = res.data;
        if (res.data.validated) {
          this.navigate.emit('home');
        }
        delete this.user._id;
        delete this.user.validated;
        this.update = !this.update;
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
          <h2>Introduce los 5 dígitos</h2>
          <h3>Hemos enviado el código a: {this.user.code} {this.user.phone} ¿Aún no te llega el mensaje? Reenviar</h3>
        </div>
        <form class="validationCode" autocomplete="off">
          <input type="number" id="validationCode0" value={this.phoneValidationCode[0]} onInput={(event) => this.handleChange(event)} />
          <input type="number" id="validationCode1" value={this.phoneValidationCode[1]} onInput={(event) => this.handleChange(event)} />
          <input type="number" id="validationCode2" value={this.phoneValidationCode[2]} onInput={(event) => this.handleChange(event)} />
          <input type="number" id="validationCode3" value={this.phoneValidationCode[3]} onInput={(event) => this.handleChange(event)} />
          <input type="number" id="validationCode4" value={this.phoneValidationCode[4]} onInput={(event) => this.handleChange(event)} />
          <div class="buttons-container">
            <div class="back" onClick={() => this.goBack()}>Atrás</div>
            <div class="next" onClick={() => this.sendCode()}>Continuar</div>
          </div>
        </form>
        <div class="circles-container">
          <div class="circle"></div>
          <div class="circle circle-active"></div>
          <div class="circle"></div>
        </div>
      </div>
    );
  }
}
