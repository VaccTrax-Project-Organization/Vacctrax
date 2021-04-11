export class Vaccine {
  constructor(public _id: string = '',
              public name: string = '',
              public isRationed: boolean = false,
              public manufacturer: string = '',
              public shelfLife: number = null,
              public approvedProvinces: string = '',
              public vaccineId: number = null) {
  }
}
