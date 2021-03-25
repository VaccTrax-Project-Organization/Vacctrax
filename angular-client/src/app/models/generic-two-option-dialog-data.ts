export class GenericTwoOptionDialogData {
  constructor(public title: string,
              public description: string,
              public acceptMessage: string = 'Yes',
              public declineMessage: string = 'No') {
  }
}
