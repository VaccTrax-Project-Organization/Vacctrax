export class Vaccine {
  constructor(public _id: string,
              public name: string,
              public isRationed: boolean,
              public manufacturer: string,
              public shelfLife: number,
              public approvedProvinces: string,
              public vaccineId: number) {
  }
}
