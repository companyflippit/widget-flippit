import { Component, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'ion-call-to-action',
  styleUrl: 'callToAction.scss',
  shadow: true
})

export class CallToActionComponent {
  @Event() callToActionHide: EventEmitter;
  render() {
    return (
      <div class="call-to-action">
        <div class="arrow-after"></div>
        <p>Si te gusta el artículo, puedes apoyar al autor aquí</p>
        <svg width="11px" height="10px" viewBox="0 0 11 10" onClick={() => this.callToActionHide.emit()}>
          <g id="01_FAB" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Home-0301" transform="translate(-902.000000, -616.000000)" fill="#4B4B4B">
              <g id="flip-bar" transform="translate(720.000000, 647.500000) rotate(-270.000000) translate(-720.000000, -647.500000) translate(667.500000, 438.500000)">
                <polygon id="path-1-path" points="21 26.0357143 25.2142857 21.75 21 17.4642857 21.7023809 16.75 25.9166667 21.0357143 30.1309524 16.75 30.8333333 17.4642857 26.6190476 21.75 30.8333333 26.0357143 30.1309524 26.75 25.9166667 22.4642857 21.7023809 26.75"></polygon>
              </g>
            </g>
          </g>
        </svg>
      </div>
    )
  }
}
