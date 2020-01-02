 
export class CommitsState {
  _error: any;
  _loading: boolean;
  _action: string;   data: any;
  subgroups: any;
  status:any;
}

export const commitsInitialState: CommitsState = {
  _error: false,
  _loading: false,
  _action: null,
 
  data: null,
  subgroups: null,
  status:null
};

export class CommitsItemModel {
  id: string;
  company: string;
  feedback: string;
  folder_type: string;
  image_name: number;
  image_wh: string[];
  json_name: boolean;
  locationID: string;
  missionID: string;
  n_products: string;
  realogram_compliance: any;
  status: any;
  target_accountID: string;
  toolkitID: string;
  trigger_time: string; 
}

 
