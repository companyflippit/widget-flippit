import { Component, State, Listen } from '@stencil/core';

@Component({
  tag: 'ion-app',
  styleUrl: 'app.scss',
  shadow: true
})
export class AppComponent {
  @State() buttonHide: boolean = false;
  @State() sliderHide: boolean = true;
  @State() dashboardHide: boolean = true;
  @State() profileGradient: string = 'linear-gradient(138deg, #45f2b7, #4396ff)';
  @State() closeIconFill: string = 'white';

  @State() gradients = {
    home: 'linear-gradient(138deg, #45f2b7, #4396ff)',
    profile: 'linear-gradient(138deg, #4223ae, #ff0079)',
    buy: 'linear-gradient(138deg, #ffffff, #ffffff)'
  }
  @State() initialBalance = 0;
  @Listen('buttonHandler')
  buttonHandler() {
    this.buttonHide = !this.buttonHide;
    this.sliderHide = !this.sliderHide;
  }
  @Listen('dashboardHandler')
  @Listen('giveFlips')
  dashboardHandler() {
    this.sliderHide = !this.sliderHide;
    this.dashboardHide = !this.dashboardHide;
  }
  @Listen('dashboardColor')
  dashboardColorHandler(event) {
    this.closeIconFill = 'white';
    if(event.detail === 'profile') {
      this.profileGradient = this.gradients.profile;
    } else if (event.detail === 'buy'){
      this.profileGradient = this.gradients.buy;
      this.closeIconFill = '#3BBFBD';
    } else {
      this.profileGradient = this.gradients.home;
    }
  }
  @Listen('wallet')
  setWalletBalance(event) {
    this.initialBalance = event.detail.balance;
  }
  componentWillLoad() {
    if(!window.localStorage.getItem('FLIPPIT_route')) {
      window.localStorage.setItem('FLIPPIT_route', 'home');
      this.dashboardColorHandler({ detail: 'home' });
    } else if(window.localStorage.getItem('FLIPPIT_route') === 'profile'){
      this.profileGradient = this.gradients.profile;
    }
  }
  render() {
    return (
      <div>
        <ion-open-button buttonHide={this.buttonHide}></ion-open-button>
        <ion-slider sliderHide={this.sliderHide} initialBalance={this.initialBalance}></ion-slider>
        <ion-lateral-dashboard 
          closeIconFill={this.closeIconFill}
          dashboardHide={this.dashboardHide}
          profileGradient={this.profileGradient}
        ></ion-lateral-dashboard>
      </div>
    )
  }
}
