// import { Component, h, State } from '@stencil/core';
// import { DataService } from '../../my-card/services/data.service';

// @Component({
//   tag: 'vehicle-recall-details',
//   styleUrl: 'vehicle-recall-details.css',
// })
// export class VehicleRecallDetails {
//   @State() vehicleDetails: any;
//   @State() vin: any = {
//     vin: '',
//   };
//   // @State() isIos: boolean = false;

//   componentWillLoad() {
//     // this.isIos = this.checkPlatform();
//     this.getVin();
//     this.subscribeToVehicleDetails(this.vin);
//   }

//   backButton() {
//     // Implementation of back button logic
//   }

//   subscribeToVehicleDetails(vin) {
//     // Implementation of subscribing to vehicle details
//   }

//   getVin() {
//     // Implementation of getting VIN
//   }

//   render() {
//     return (
//       <ion-content>
//         <div class={this.isIos ? 'safeArea' : ''}>
//           <div class="container">
//             <ion-icon onClick={() => this.backButton()} name="chevron-back-outline"></ion-icon>
//             {this.vehicleDetails && (
//               <ion-text color="light">
//                 <h1>
//                   {this.vehicleDetails.results[0].make}
//                   {this.vehicleDetails.results[0].model}
//                 </h1>
//               </ion-text>
//             )}
//             {this.vehicleDetails && (
//               <ion-text color="light">
//                 <div class="details">{this.vehicleDetails.results[0].modelYear}</div>
//               </ion-text>
//             )}
//             {this.vehicleDetails && (
//               <ion-text color="light">
//                 <div class="details">VIN: {this.vin.vin}</div>
//               </ion-text>
//             )}
//             {this.vehicleDetails && (
//               <ion-text color="light">
//                 <h4>Recalls</h4>
//               </ion-text>
//             )}
//             {this.vehicleDetails && (
//               <ion-list lines="none">
//                 {this.vehicleDetails.results.map(detail => (
//                   <div class="results">
//                     <div class="title">{detail.component}</div>
//                     <div class="content">{detail.summary}</div>
//                     <div class="content">{detail.conequence}</div>
//                   </div>
//                 ))}
//               </ion-list>
//             )}
//           </div>
//         </div>
//       </ion-content>
//     );
//   }
// }
