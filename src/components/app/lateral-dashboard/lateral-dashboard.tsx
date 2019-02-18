import { Component, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'ion-lateral-dashboard',
  styleUrl: 'lateral-dashboard.scss',
  shadow: true
})
export class LateralDashboardComponent {
  @Prop() dashboardHide: boolean;
  @Prop() profileGradient: string;
  @Event() dashboardHandler: EventEmitter;
  @Event() navigate: EventEmitter;
  @Prop() closeIconFill: string;

  render() {
    return !this.dashboardHide ? (
      <div class="flippit-lateral-dashboard-container backgroundColor">
        <style>{`
          .backgroundColor{
            background-image: ${this.profileGradient};
            box-shadow: 0 36px 540px 0 rgba(0, 0, 0, 0.15);
          }
          svg{
            fill: ${this.closeIconFill}
          }
        `}</style>
        <div class="flippit-lateral-dashboard-content">
          <div class="flippit-lateral-dashboard-content-header">
            <div class="closeIcon" onClick={() => this.dashboardHandler.emit('button')}>
              <svg viewBox="0 0 20 20">
                <g id="closeIcon" transform="translate(-1358.000000, -62.000000)">
                  <path d="M1369.53557,72 L1377.68181,63.8537557 C1378.10606,63.4302262 1378.10606,62.7417195 1377.68181,62.31819 C1377.25756,61.8939367 1376.5705,61.8939367 1376.14624,62.31819 L1368,70.4644344 L1359.85376,62.31819 C1359.4295,61.8939367 1358.74244,61.8939367 1358.31819,62.31819 C1357.89394,62.7417195 1357.89394,63.4302262 1358.31819,63.8537557 L1366.46443,72 L1358.31819,80.1462443 C1357.89394,80.5697738 1357.89394,81.2582805 1358.31819,81.68181 C1358.53032,81.8939367 1358.80833,81.999638 1359.08633,81.999638 C1359.36434,81.999638 1359.64163,81.8939367 1359.85376,81.68181 L1368,73.5355656 L1376.14624,81.68181 C1376.35837,81.8939367 1376.63638,81.999638 1376.91439,81.999638 C1377.1924,81.999638 1377.46968,81.8939367 1377.68181,81.68181 C1378.10606,81.2582805 1378.10606,80.5697738 1377.68181,80.1462443 L1369.53557,72"></path>
                </g>
              </svg>
            </div>
          </div>
          <div class="flippit-lateral-dashboard-content-body">
            <ion-router></ion-router>
          </div>
        </div>
      </div>
    ) : null;
  }
}