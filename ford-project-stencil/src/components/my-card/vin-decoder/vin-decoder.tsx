import { Component, h, Prop, State } from '@stencil/core';
import { DataService } from '../services/data.service';
import { VinData } from '../vin-decoder';

@Component({
  tag: 'vin-decoder',
  styleUrl: 'vin-decoder.css',
  shadow: true,
})
export class VinDecoder {
  @Prop() vin: string;
  @State() fetchedData: VinData[] = [];
  @State() vehicleDetails: any;
  private dataService: DataService = new DataService();

  async componentWillLoad() {
    if (this.vin) {
      await this.fetchData();
    }
  }

  async fetchData() {
    try {
      const response = await this.dataService.fetchDataFromAPI(this.vin);
      console.log('API Response:', response);
      const vehicleData = response?.decode?.vehicle[0];
      const vehicleDetails = response?.decode?.vehicle[0]
      if (vehicleData && vehicleData.equip && vehicleData.equip.length > 0) {
        const fetchedData = vehicleData.equip;
        console.log('Fetched Data:', fetchedData);
        this.fetchedData = fetchedData;
      } else {
        console.error('No valid data for vehicle equipment.');
        this.fetchedData = [];
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      this.fetchedData = [];
    }
  }

  render() {
    return (
      <div>
        {this.fetchedData.length > 0 && (
          <div>
            <h3>Select Equipment Detail:</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Value</th>
                  <th>Unit</th>
                </tr>
              </thead>
              <tbody>
                {this.fetchedData.map((detail, index) => (
                  <tr key={index}>
                    <td>{detail.name}</td>
                    <td>{detail.value}</td>
                    <td>{detail.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Detail component</th>
                  <th>Summary</th>
                  <th>Conequence</th>
                </tr>
              </thead>
              <tbody>
                {this.vehicleDetails.results.map((detail: { component: any; summary: any; conequence: any; }) => (
                  <div class="results">
                    <div class="title">{detail.component}</div>
                    <div class="content">{detail.summary}</div>
                    <div class="content">{detail.conequence}</div>
                  </div>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* <div class={this.isIos ? 'safeArea' : ''}> */}
        <div class="container">
          {/* <ion-icon onClick={() => this.backButton()} name="chevron-back-outline"></ion-icon> */}
          {this.vehicleDetails && (
            <ion-text color="light">
              <h1>
                {this.vehicleDetails.results[0].make}
                {this.vehicleDetails.results[0].model}
              </h1>
            </ion-text>
          )}
          {this.vehicleDetails && (
            <ion-text color="light">
              <div class="details">{this.vehicleDetails.results[0].modelYear}</div>
            </ion-text>
          )}
          {this.vehicleDetails && (
            <ion-text color="light">
              <div class="details">VIN: {this.vin}</div>
            </ion-text>
          )}
          {this.vehicleDetails && (
            <ion-text color="light">
              <h4>Recalls</h4>
            </ion-text>
          )}
          {this.vehicleDetails && (
            <ion-list lines="none">
              {this.vehicleDetails.results.map(detail => (
                <div class="results">
                  <div class="title">{detail.component}</div>
                  <div class="content">{detail.summary}</div>
                  <div class="content">{detail.conequence}</div>
                </div>
              ))}
            </ion-list>
          )}
        </div>
      </div>
    );
  }
}
