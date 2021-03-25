export class GenericTwoOptionDialogData {
  // This class will allow a data going to the 'GenericTwoOptionDialogComponent'
  // be fully customized in terms of text values displayed to the user

  constructor(public title: string,
              public description: string,
              public acceptMessage: string = 'Yes',
              public declineMessage: string = 'No') {
  }
}
