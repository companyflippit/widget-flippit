import { Component } from '@stencil/core';

@Component({
  tag: 'ion-confirm',
  styleUrl: 'confirm.scss',
  shadow: true
})
export class ConfirmComponent {
  render() {
    return (
      <div class="confirm-flips">
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
    )
  }
}
