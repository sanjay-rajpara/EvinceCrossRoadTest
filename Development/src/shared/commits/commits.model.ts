 
export class CommitsState {
  _error: any;
  _loading: boolean;
  _action: string;  
   data: RootObject;
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

export interface Author {
  name: string;
  email: string;
  date: Date;
}

export interface Committer {
  name: string;
  email: string;
  date: Date;
}

export interface Tree {
  sha: string;
  url: string;
}

export interface Verification {
  verified: boolean;
  reason: string;
  signature: string;
  payload: string;
}

export interface Commit {
  author: Author;
  committer: Committer;
  message: string;
  tree: Tree;
  url: string;
  comment_count: number;
  verification: Verification;
}

export interface Author2 {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Committer2 {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Parent {
  sha: string;
  url: string;
  html_url: string;
}

export interface RootObject {
  sha: string;
  node_id: string;
  commit: Commit;
  url: string;
  html_url: string;
  comments_url: string;
  author: Author2;
  committer: Committer2;
  parents: Parent[];
}

 
