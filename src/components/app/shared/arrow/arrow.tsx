import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'ion-arrow',
  styleUrl: 'arrow.scss',
  shadow: true
})
export class ArrowComponent {
  @Prop() arrowUp: boolean;
  render() {
    return this.arrowUp ? (
      <button>
        {/* <svg width="12px" height="7px" viewBox="0 0 10 5">
          <g id="02_User" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="3-estados" transform="translate(-325.000000, -88.000000)" stroke="#3D1980">
              <g id="Group-4" transform="translate(166.000000, 47.000000)">
                <g id="flip-bar" transform="translate(165.000000, 65.500000) rotate(-270.000000) translate(-165.000000, -65.500000) translate(128.500000, -70.500000)">
                  <polyline id="Right-arrow-Copy-2" transform="translate(14.014925, 137.000000) scale(1, -1) translate(-14.014925, -137.000000) " points="16.0245065 141 12.0049751 136.999816 16.0248756 133"></polyline>
                </g>
              </g>
            </g>
          </g>
        </svg> */}
        <svg class="flippitInit" viewBox="0 0 11 11">
          <g id="02_User" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="3-estados" transform="translate(-326.000000, -465.000000)" stroke="#3D1980" stroke-width="1.2">
              <path d="M328.761242,469.683109 C328.88524,469.592692 328.966467,469.469243 329.004923,469.312761 C329.102227,467.466818 330.629817,466 332.5,466 C334.432997,466 336,467.567003 336,469.5 C336,471.342176 334.576787,472.851942 332.769915,472.989747 C332.569416,473.059481 332.405804,473.173476 332.279078,473.331734 C331.858942,474.312727 330.884732,475 329.75,475 C328.231217,475 327,473.768783 327,472.25 C327,471.079748 327.730974,470.080224 328.761242,469.683109 Z" id="Combined-Shape"></path>
            </g>
          </g>
        </svg>
      </button>
    ) :
      <button>
        <svg width="12px" height="6px" viewBox="0 0 12 6">
          <g id="02_User" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="3-estados" transform="translate(-325.000000, -87.000000)" stroke="#3D1980">
              <g id="Group-4" transform="translate(166.000000, 47.000000)">
                <g id="flip-bar" transform="translate(165.000000, 65.500000) rotate(-270.000000) translate(-165.000000, -65.500000) translate(128.500000, -70.500000)">
                  <polyline id="Right-arrow-Copy-2" transform="translate(13.512438, 136.000000) scale(-1, 1) translate(-13.512438, -136.000000) " points="16.0244142 141 11 135.99977 16.0248756 131"></polyline>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </button>

  }
}
