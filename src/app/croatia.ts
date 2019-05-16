export interface County {
  entityType: number;
  ID?: number;
  name?: string;
}

export interface Town {
  entityType: number;
  ID?: number;
  name?: string;
  countyID: number;
  countyName: string;
}

export interface Community {
  entityType: number;
  ID?: number;
  name?: string;
  countyID: number;
  countyName: string;
}
