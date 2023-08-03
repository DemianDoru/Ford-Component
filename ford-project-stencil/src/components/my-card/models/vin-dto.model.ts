export class VinDto {
  public vin: string;

  constructor(formValue: IVinDto) {
    this.vin = formValue.vin;
  }
}

export interface IVinDto {
  vin?: string;
}
