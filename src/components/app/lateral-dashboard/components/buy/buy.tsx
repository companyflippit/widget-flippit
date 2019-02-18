import { Component, EventEmitter, Event, State } from '@stencil/core';
import { httpGet } from '../../../../../tools/request';
import { environment } from '../../../../../config/environment';
import { getCookie, removeCookies } from '../../../../../tools/cookie';

@Component({
  tag: 'ion-buy',
  styleUrl: 'buy.scss'
})
export class BuyComponent {
  @Event() navigate: EventEmitter;
  @State() card: number;
  @State() name: string;
  @State() expiration: string;
  @State() cvv: number;
  @State() error: boolean = false;
  @State() send: boolean = false;
  @State() email: boolean = false;
  @State() timeOut = null;

  handleClick() {
    if (!this.card || !this.name || !this.expiration || !this.cvv) {
      this.setError();
      return;
    }

  }
  handleChange(event) {
    switch (event.path[0].id) {
      case 'card':
        this.card = event.target.value;
        break;
      case 'name':
        this.name = event.target.value;
        break;
      case 'expiration':
        this.expiration = event.target.value;
        break;
      case 'cvv':
        this.cvv = event.target.value;
        break;
    }
  }
  logOut() {
    removeCookies();
    this.navigate.emit('login');
  }
  setError() {
    this.error = true;
    this.timeOut = setTimeout(() => this.error = false, 2000);
  }
  componentWillLoad() {
    httpGet(`${environment.baseUrl}/oauth2/user`, getCookie('FLIPPIT_accessToken'))
      .then(response => response.json())
      .then((res) => {
        if (res.status !== 200) {
          return;
        }
        this.email = res.data.email;
      });
  }
  render() {
    return (
      <div class="flippit-buy-container">
        <h2>Recarga tus Flips</h2>
        <form autocomplete="off">
          <input class={this.error ? 'card-number error' : 'card-number'} type="number" placeholder="Número de la tarjeta" id="card" value={this.card} onInput={(event) => this.handleChange(event)} />
          <input class={this.error ? 'error' : ''} type="text" placeholder="Nombre del titular" id="name" value={this.name} onInput={(event) => this.handleChange(event)} />
          <div class="input-group-container">
            <input class={this.error ? 'expiration error' : 'expiration'} type="text" placeholder="Caducidad" id="expiration" value={this.expiration} onInput={(event) => this.handleChange(event)} />
            <input class={this.error ? 'cvv error' : 'cvv'} type="number" placeholder="CVV" id="cvv" value={this.cvv} onInput={(event) => this.handleChange(event)} />
          </div>
        </form>
        {this.error ? <p class="error-message">Rellena correctamente todos los campos.</p> : null}
        <ion-logout action={this.handleClick.bind(this)} color={'#ffffff'} backgroundColor={'#3bbfbd'} logoutColor={'#4a4a4a'}></ion-logout>
      </div>
    );
  }
}