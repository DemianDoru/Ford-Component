// vin-decoder.tsx

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
  @State() vehicleRecalls: any;
  private dataService: DataService = new DataService();

  async componentWillLoad() {
    if (this.vin) {
      await this.fetchData();
      await this.fetchRecalls();
    }
  }

  async fetchData() {
    try {
      const response = await this.dataService.fetchDataFromAPI(this.vin);
      console.log('API Response:', response);
      const vehicleData = response?.decode?.vehicle[0];
      if (vehicleData && vehicleData.equip && vehicleData.equip.length > 0) {
        const fetchedData = vehicleData.equip;
        console.log('Fetched Data:', fetchedData);
        this.fetchedData = fetchedData;
      } else {
        console.error('No valid data for vehicle equipment.');
        this.fetchedData = [];
      }
      this.vehicleDetails = vehicleData;
    } catch (error) {
      console.error('Error fetching data:', error);
      this.fetchedData = [];
    }
  }

  async fetchRecalls() {
    try {
      const response = await this.dataService.getVehicleRecalls(this.vin);
      console.log('Recalls API Response:', response);
      this.vehicleRecalls = response?.results;
    } catch (error) {
      console.error('Error fetching recalls:', error);
      this.vehicleRecalls = [];
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
          </div>
        )}

        {this.vehicleRecalls?.length > 0 && (
          <div>
            <h3>Recalls:</h3>
            <table>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Summary</th>
                  <th>Consequence</th>
                </tr>
              </thead>
              <tbody>
                {this.vehicleRecalls.map((recall, index) => (
                  <tr key={index}>
                    <td>{recall.component}</td>
                    <td>{recall.summary}</td>
                    <td>{recall.consequence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}
