import { Component, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ion-onboarding',
  styleUrl: 'onboarding.scss'
})
export class onboardingComponent {
  @Event() navigate: EventEmitter;
  componentWillLoad() {}
  render() {
    return (
      <div class="onboarding-container">
        <div class="svg-container">
        <img src="https://res.cloudinary.com/dqoospd3u/image/upload/v1547562722/onboarding1.png" />
          <svg onClick={() => this.navigate.emit('onboarding2')} class="arrowRight" width="28px" height="23px" viewBox="0 0 28 23">
            <g id="02_User" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.396897">
              <g id="Onboarding-0101" transform="translate(-1355.000000, -346.000000)" fill="#FFFFFF">
                <g id="icon/arrow/white" transform="translate(1369.000000, 357.000000) rotate(-180.000000) translate(-1369.000000, -357.000000) translate(1355.000000, 345.000000)">
                  <path d="M26.2429058,10.1867218 L4.82125521,10.1867218 L12.7414934,2.13595195 C13.2088317,1.66011296 13.2159485,0.882881981 12.7573086,0.398033991 C12.297087,-0.0859949981 11.5466571,-0.092546998 11.0793188,0.381653992 L1.11259736,10.5126838 C0.886440395,10.7428228 0.758337501,11.0564998 0.757546742,11.3840998 C0.755965225,11.7116997 0.880905084,12.0270147 1.10468977,12.2587917 L11.0880171,22.5986665 C11.3197094,22.8386335 11.6233607,22.9582075 11.927012,22.9582075 C12.2298726,22.9582075 12.5335239,22.8386335 12.7652161,22.5986665 C13.2286007,22.1187325 13.2286007,21.3406825 12.7652161,20.8615675 L4.83074431,12.6437217 L26.2429058,12.6437217 C26.8976539,12.6437217 27.4290437,12.0933537 27.4290437,11.4152218 C27.4290437,10.7362708 26.8976539,10.1867218 26.2429058,10.1867218" id="1A"></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <h2 class="title">Hay artículos que lo dan todo</h2>
        <h3 class="subtitle">Leer un buen blog apetece tanto como beberse un buen café por la mañana.</h3>
        <div class="onboarding-footer">
          <div class="link-left" onClick={() => this.navigate.emit('login')}>Iniciar sesión</div>
          <div class="circles-container">
            <div class="circle circle-active"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
          <div class="link-right" onClick={() => this.navigate.emit('signup')}>Nuevo usuario</div>
        </div>
      </div>
    );
  }
}