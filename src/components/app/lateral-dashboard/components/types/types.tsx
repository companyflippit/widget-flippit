import { Component, EventEmitter, Event, State } from '@stencil/core';
import { removeCookies } from '../../../../../tools/cookie';

@Component({
  tag: 'ion-types',
  styleUrl: 'types.scss'
})
export class TypesComponent {
  @Event() navigate: EventEmitter;
  @State() types = {
    a: false,
    b: true,
    c: false,
  };
  logOut() {
    removeCookies();
    this.navigate.emit('login');
  }
  changeType(type) {
    this.types = {
      a: false,
      b: false,
      c: false,
    };
    this.types[type] = true;
  }
  selectType() {
    const type = Object.keys(this.types).filter(e => this.types[e])[0];
    console.log(type);
    this.navigate.emit('buy');
  }
  componentWillLoad() { }
  render() {
    return (
      <div class="flippit-types-container">
        <h2>Recarga tus Flips</h2>
        <div class={this.types.a ? 'rectangle rectangle-active' : 'rectangle'} onClick={() => this.changeType('a')}>
          <div class="left">
            <h3>Paquete básico: 5 €</h3>
            <p>0,10 céntimos cada Flipp</p>
          </div>
          <div class="center"></div>
          <div class="right">
            <p class="number">50</p>
            <p class="flipps">Flipps</p>
          </div>
          <div class="circle">
            <svg width="10px" height="7px" viewBox="0 0 10 7">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <g transform="translate(-475.000000, -121.000000)" stroke="#FFFFFF">
                  <g transform="translate(166.000000, 47.000000)">
                    <g transform="translate(290.500000, 68.500000)">
                      <g transform="translate(19.250000, 6.250000)">
                        <polyline points="8 0 2.5 5.5 0 3"></polyline>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class={this.types.b ? 'rectangle rectangle-active' : 'rectangle'} onClick={() => this.changeType('b')}>
          <div class="left">
            <h3>Paquete básico: 10 €</h3>
            <p>0,08 céntimos cada Flipp</p>
          </div>
          <div class="center"></div>
          <div class="right">
            <p class="number">120</p>
            <p class="flipps">Flipps</p>
          </div>
          <div class="circle">
            <svg width="10px" height="7px" viewBox="0 0 10 7">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <g transform="translate(-475.000000, -121.000000)" stroke="#FFFFFF">
                  <g transform="translate(166.000000, 47.000000)">
                    <g transform="translate(290.500000, 68.500000)">
                      <g transform="translate(19.250000, 6.250000)">
                        <polyline points="8 0 2.5 5.5 0 3"></polyline>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class={this.types.c ? 'rectangle rectangle-active' : 'rectangle'} onClick={() => this.changeType('c')}>
          <div class="left">
            <h3>Paquete básico: 20 €</h3>
            <p>0,05 céntimos cada Flipp</p>
          </div>
          <div class="center"></div>
          <div class="right">
            <p class="number">150</p>
            <p class="flipps">Flipps</p>
          </div>
          <div class="circle">
            <svg width="10px" height="7px" viewBox="0 0 10 7">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <g transform="translate(-475.000000, -121.000000)" stroke="#FFFFFF">
                  <g transform="translate(166.000000, 47.000000)">
                    <g transform="translate(290.500000, 68.500000)">
                      <g transform="translate(19.250000, 6.250000)">
                        <polyline points="8 0 2.5 5.5 0 3"></polyline>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <ion-logout action={this.selectType.bind(this)}></ion-logout>
      </div>
    );
  }
}