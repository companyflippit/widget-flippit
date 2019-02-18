import { Component, Event, EventEmitter, Prop, State, Listen, Watch } from '@stencil/core';
import { httpGet } from '../../../tools/request';
import { environment } from '../../../config/environment';
import { getCookie } from '../../../tools/cookie';

@Component({
  tag: 'ion-slider',
  styleUrl: 'slider.scss',
  shadow: true
})
export class SliderComponent {
  @Prop() sliderHide: boolean;
  @Prop() initialBalance: number;
  @Event() buttonHandler: EventEmitter;
  @Event() dashboardHandler: EventEmitter;
  @State() confirmFlipHide: boolean = true;
  @State() firstUpdateConfirmFlipHide: boolean = true;
  @State() error: boolean = false; 
  @State() confirmation: boolean = false; 
  @State() flips = 0;
  @State() balance = 0;
  @State() update = false;

  @Listen('rangeEmitter')
  flipsHandler(event) {
    if(getCookie('FLIPPIT_accessToken') === '') {
      this.confirmFlipHide = true;
    } else if(this.firstUpdateConfirmFlipHide) {
      this.firstUpdateConfirmFlipHide = false;
      this.flips = event.detail;
    }
    else {
      this.confirmFlipHide = false;
      this.flips = event.detail;
    }
  }
  // handleSubmit() {
  //   httpPatch(`${environment.baseUrl}/api/wallet`, { balance: this.flips }, getCookie('FLIPPIT_accessToken'))
  //   .then(response => response.json())
  //   .then((res) => {
  //     if(res.status !== 200) {
  //       this.setMessage('error');
  //       return;
  //     }
  //     this.balance = res.data.balance;
  //     this.setMessage('confirmation');
  //   })
  // }
  setMessage(type) {
    'error' === type ? this.error = true : this.confirmation = true;
    this.confirmFlipHide = true;
    setTimeout(() => {
      this.error = false;
      this.confirmation = false;
    }, 1000)
  }
  @Watch('initialBalance')
  setInitialBalance(newValue: number) {
    this.balance = newValue;
  }
  componentWillLoad() {
    if(getCookie('FLIPPIT_accessToken')) {
      httpGet(`${environment.baseUrl}/api/wallet`, getCookie('FLIPPIT_accessToken'))
      .then(response => response.json())
      .then((res) => {
        if(res.status !== 200) {
          return;
        }
        this.balance = res.data.balance;
      });
    }
  }
  render() {
    return !this.sliderHide ? (
      <div class="flippit-slider-container">
        <div class="flippit-close-button-container">
          <ion-arrow onClick={() => this.buttonHandler.emit()} arrowUp={false}></ion-arrow>
        </div>
        {this.confirmFlipHide ? null : <ion-confirm></ion-confirm>}
        <div class="slider">
          <div class="profile-container">
            <svg width="14px" height="17px" viewBox="0 0 14 17" onClick={() => this.dashboardHandler.emit('dashboard')}>
              <g id="02_User" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <g id="3-estados" transform="translate(-234.000000, -108.000000)" stroke="#3D1980" stroke-width="2">
                  <g id="Group-4" transform="translate(166.000000, 47.000000)">
                    <g id="flip-bar" transform="translate(165.000000, 65.500000) rotate(-270.000000) translate(-165.000000, -65.500000) translate(128.500000, -70.500000)">
                      <g id="Group-2" transform="translate(33.000000, 187.000000)">
                        <g id="user" transform="translate(7.500000, 39.000000) rotate(-90.000000) translate(-7.500000, -39.000000) translate(1.500000, 31.500000)">
                          <path d="M12,14.2 L12,12.5333333 C12,10.6923842 10.6568542,9.2 9,9.2 L3,9.2 C1.34314575,9.2 0,10.6923842 0,12.5333333 L0,14.2" id="Shape"></path>
                          <circle id="Oval" cx="6" cy="3" r="3"></circle>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <div class="number-of-flips-container">
              {this.balance} Flips
            </div>
          </div>
          <div class="vertical-line" />
          <div class="input-range-container">
            {this.confirmation || this.error ? <ion-message flips={this.flips} error={this.error} confirmation={this.confirmation}></ion-message> : <ion-input-range></ion-input-range>}
          </div>
        </div>
      </div>
    ) : null;
  }
}
