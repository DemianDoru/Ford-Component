export class VinDecoderDto {
  public decode: decode;
}

export class decode {
  public status: string;
  public Valid: string;
  public vehicle: Array<vehicle> = new Array<vehicle>();
  public version: string;
  public vin: string;
}

export class vehicle {
  public body: string;
  public driveline: string;
  public engine: string;
  public equip: Array<Equip> = new Array<Equip>();
  public id: string;
  public make: string;
  public model: string;
  public trim: string;
  public year: string;
}

export class Equip {
  public name: string;
  public unit: string;
  public value: string;
}
