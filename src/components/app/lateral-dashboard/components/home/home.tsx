import { Component, State, Event, EventEmitter } from '@stencil/core';
import { getCookie, removeCookies } from '../../../../../tools/cookie';
import { httpGet } from '../../../../../tools/request';
import { environment } from '../../../../../config/environment';

@Component({
  tag: 'ion-home',
  styleUrl: 'home.scss'
})
export class HomeComponent {
  @Event() navigate: EventEmitter;
  @Event() giveFlips: EventEmitter;
  @State() wallet = {
    balance: 0,
    owner: '',
    createdAt: ''
  }
  logOut() {
    removeCookies();
    this.navigate.emit('login');
  }
  componentWillLoad() {
    httpGet(`${environment.baseUrl}/oauth2/user`, getCookie('FLIPPIT_accessToken'))
      .then(response => response.json())
      .then((res) => {
        if (res.status !== 200) {
          return;
        }
        httpGet(`${environment.baseUrl}/api/wallet`, getCookie('FLIPPIT_accessToken'))
          .then(response => response.json())
          .then((res) => {
            if (res.status !== 200) {
              return;
            }
            this.wallet = res.data;
          })
      })
  }
  render() {
    return (
      <div class="flippit-home-container">
        <div class="info-container">
          <div class="info-flips-container">
            <h2>Te quedan</h2>
            <h3>Última recarga: <span>{this.wallet.createdAt.split('T')[0]}</span></h3>
            <p>{this.wallet.balance} <span>Flips</span></p>
          </div>
          <div class="info-flips-container">
            <h2>Has premiado</h2>
            <h3>Este mes: <span>{this.wallet.createdAt.split('T')[0]}</span></h3>
            <p>{this.wallet.balance} <span>Flips</span></p>
          </div>
        </div>
        <ion-logout action={this.giveFlips.emit.bind(this)}></ion-logout>
      </div>
    );
  }
}