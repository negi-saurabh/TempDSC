export class Site {
  constructor(
    type: string,
    nameOfBuilding: string,
    openHours: string,
    floor: number,
    siteId?: number
){
this.siteId = siteId;
this.type = type;
this.nameOfBuilding = nameOfBuilding;
this.floor= floor;
this.openHours= openHours;

}
  siteId: number;
  type: string;
  nameOfBuilding: string;
  floor: number;
  openHours: string;
}
