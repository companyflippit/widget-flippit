import { Component, State, Listen, EventEmitter, Event } from '@stencil/core';
import { getCookie, removeCookies } from '../../../../../tools/cookie';

@Component({
  tag: 'ion-router',
  styleUrl: 'router.scss'

})
export class RouterComponent {
  @State() route: string = 'home';
  @Event() dashboardColor: EventEmitter;
  @Event() navigate: EventEmitter;

  @Listen('navigate')
  routerNavigate(event: CustomEvent) {
    this.route = event.detail;
    this.dashboardColor.emit(event.detail);
    window.localStorage.setItem('FLIPPIT_route', event.detail);
  }
  componentWillLoad() {
    const accessToken = getCookie('FLIPPIT_accessToken');
    const refreshToken = getCookie('FLIPPIT_refreshToken');
    if (!accessToken || !refreshToken) {
      switch (window.localStorage.getItem('FLIPPIT_route')) {
        case 'onboarding':
          this.navigate.emit('onboarding');
          break;
        case 'onboarding2':
          this.navigate.emit('onboarding2');
          break;
        case 'onboarding3':
          this.navigate.emit('onboarding3');
          break;
        default:
          this.navigate.emit('onboarding');
          break;
      }
      this.dashboardColor.emit('login');

    } else if (
      window.localStorage.getItem('FLIPPIT_route') === 'onboarding' ||
      window.localStorage.getItem('FLIPPIT_route') === 'login' ||
      window.localStorage.getItem('FLIPPIT_route') === 'signup') {
      this.navigate.emit('onboarding');
      removeCookies();
    }
    else if (accessToken) {
      this.route = window.localStorage.getItem('FLIPPIT_route');
    }
  }

  router() {
    switch (this.route) {
      case 'login':
        this.componentWillLoad();
        return <ion-login></ion-login>;
      case 'signup':
        this.componentWillLoad();
        return <ion-signup></ion-signup>;
      case 'home':
        return <ion-home></ion-home>;
      case 'profile':
        return <ion-profile></ion-profile>;
      case 'types':
        return <ion-types></ion-types>;
      case 'buy':
        return <ion-buy></ion-buy>;
      // case 'phone':
      //   this.componentWillLoad();
      //   return <ion-phone></ion-phone>;
      case 'validationCode':
        this.componentWillLoad();
        return <ion-validation-code></ion-validation-code>;
      case 'validationCompleted':
        this.componentWillLoad();
        return <ion-validation-completed></ion-validation-completed>;
      case 'onboarding':
        this.componentWillLoad();
        return <ion-onboarding></ion-onboarding>;
      case 'onboarding2':
        this.componentWillLoad();
        return <ion-onboarding-2></ion-onboarding-2>;
      case 'onboarding3':
        this.componentWillLoad();
        return <ion-onboarding-3></ion-onboarding-3>;
    }
  }
  render() {
    const showFlippitLogo = 
      this.route === 'login' ||
      this.route === 'signup' ||
      this.route === 'phone' ||
      this.route === 'validationCode' ||
      this.route === 'validationCompleted'||
      this.route === 'onboarding' ||
      this.route === 'onboarding2' ||
      this.route === 'onboarding3';
    return (
      <div class="router-container">
        <div class="container-header">
          {showFlippitLogo ? (<div class="logo">
            <svg>
              <g fill="none">
                <g transform="translate(-1069.000000, -54.000000)">
                  <g transform="translate(1072.000000, 57.000000)">
                    <path id="iconLogo" stroke-width="5.12" d="M5.6437575,12.3177517 C6.04109933,12.0245099 6.30138499,11.6241337 6.42461449,11.1166232 C6.73641801,5.12978069 11.6314568,0.372534697 17.6243094,0.372534697 C23.8184422,0.372534697 28.839779,5.45470781 28.839779,11.723886 C28.839779,17.6985097 24.279208,22.5950496 18.4892291,23.041984 C17.8467489,23.2681476 17.3224666,23.6378629 16.9163821,24.15113 C15.5700907,27.3327295 12.4483115,29.5617239 8.8121547,29.5617239 C3.94533604,29.5617239 0,25.5685879 0,20.642805 C0,16.8473929 2.34234759,13.6056936 5.6437575,12.3177517 Z"></path>
                    <path id="textLogo" d="M50.6253979,6.72748375 L50.6253979,9.93979155 L41.1311944,9.93979155 L41.1311944,16.3090225 L50.6253979,16.3090225 L50.6253979,19.5490226 L41.1311944,19.5490226 L41.1311944,25.9459459 L37.9847005,25.9459459 L37.9847005,6.72748375 L50.6253979,6.72748375 Z M55.2964563,6.72748375 L58.4429503,6.72748375 L58.4429503,22.7336381 L67.9371537,22.7336381 L67.9371537,25.9459459 L55.2964563,25.9459459 L55.2964563,6.72748375 Z M72.6082121,6.72748375 L75.7547061,6.72748375 L75.7547061,25.9459459 L72.6082121,25.9459459 L72.6082121,6.72748375 Z M83.5722584,9.93979155 L83.5722584,16.3367148 L89.919968,16.3367148 C90.7772778,16.3367148 91.5160125,16.0228718 92.1361941,15.3951764 C92.7563758,14.7674809 93.0664619,14.019796 93.0664619,13.1520994 C93.0664619,12.265941 92.7563758,11.5090255 92.1361941,10.88133 C91.5160125,10.2536346 90.7772778,9.93979155 89.919968,9.93979155 L83.5722584,9.93979155 Z M83.5722584,19.5490226 L83.5722584,25.9459459 L80.4257645,25.9459459 L80.4257645,6.72748375 L89.919968,6.72748375 C91.6528284,6.72748375 93.1394179,7.3551698 94.3797811,8.61056073 C95.6201444,9.86595167 96.2403167,11.3797827 96.2403167,13.1520994 C96.2403167,14.9059543 95.6201444,16.4197854 94.3797811,17.693638 C93.1394179,18.9305673 91.6528284,19.5490226 89.919968,19.5490226 L83.5722584,19.5490226 Z M103.256764,9.93979155 L103.256764,16.3367148 L109.604474,16.3367148 C110.461783,16.3367148 111.200518,16.0228718 111.8207,15.3951764 C112.440881,14.7674809 112.750968,14.019796 112.750968,13.1520994 C112.750968,12.265941 112.440881,11.5090255 111.8207,10.88133 C111.200518,10.2536346 110.461783,9.93979155 109.604474,9.93979155 L103.256764,9.93979155 Z M103.256764,19.5490226 L103.256764,25.9459459 L100.11027,25.9459459 L100.11027,6.72748375 L109.604474,6.72748375 C111.337334,6.72748375 112.823924,7.3551698 114.064287,8.61056073 C115.30465,9.86595167 115.924822,11.3797827 115.924822,13.1520994 C115.924822,14.9059543 115.30465,16.4197854 114.064287,17.693638 C112.823924,18.9305673 111.337334,19.5490226 109.604474,19.5490226 L103.256764,19.5490226 Z M120.595881,6.72748375 L123.742375,6.72748375 L123.742375,25.9459459 L120.595881,25.9459459 L120.595881,6.72748375 Z M128.413433,6.72748375 L144.255346,6.72748375 L144.255346,9.93979155 L137.934997,9.93979155 L137.934997,25.9459459 L134.761143,25.9459459 L134.761143,9.93979155 L128.413433,9.93979155 L128.413433,6.72748375 Z"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>)
            : <ion-header></ion-header>}
        </div>
        {this.router()}
      </div>
    );
  }
}