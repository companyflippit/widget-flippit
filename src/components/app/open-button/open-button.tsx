import { Component, Prop, EventEmitter, Event, State, Listen } from '@stencil/core';

@Component({
  tag: 'ion-open-button',
  styleUrl: 'open-button.scss',
  shadow: true
})
export class OpenButtonComponent {
  @Prop() buttonHide: boolean;
  @Event() buttonHandler: EventEmitter;
  @State() callToActionHide = false;

  @Listen('callToActionHide')
  callToActionHandler() {
    this.callToActionHide = true;
  }
  render() {
    return !this.buttonHide ? (
      <div class="flippit-open-button-container">
        <div class="open-button-mobile">
          {this.callToActionHide ? null : <ion-call-to-action></ion-call-to-action>}
          <div class="button" onClick={() => this.buttonHandler.emit()}>
            <svg class="flippitInit" viewBox="0 0 11 11">
              <g id="02_User" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="3-estados" transform="translate(-326.000000, -465.000000)" stroke="#ffffff" stroke-width="1.2">
                  <path d="M328.761242,469.683109 C328.88524,469.592692 328.966467,469.469243 329.004923,469.312761 C329.102227,467.466818 330.629817,466 332.5,466 C334.432997,466 336,467.567003 336,469.5 C336,471.342176 334.576787,472.851942 332.769915,472.989747 C332.569416,473.059481 332.405804,473.173476 332.279078,473.331734 C331.858942,474.312727 330.884732,475 329.75,475 C328.231217,475 327,473.768783 327,472.25 C327,471.079748 327.730974,470.080224 328.761242,469.683109 Z" id="Combined-Shape"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="open-button-desktop">
          <ion-arrow arrowUp={true} onClick={() => this.buttonHandler.emit()}></ion-arrow>
          {this.callToActionHide ? null : <ion-call-to-action></ion-call-to-action>}
        </div>
      </div>
    ) : null;
  }
}
