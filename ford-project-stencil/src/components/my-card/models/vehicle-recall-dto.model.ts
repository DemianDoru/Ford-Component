export class VehicleRecallDto {
  public count: number;
  public message: string;
  public results: Array<Results> = new Array<Results>();
}

export class Results {
  public component: string;
  public summary: string;
  public conequence: string;
  public modelYear: string;
  public make: string;
  public model: string;
}
