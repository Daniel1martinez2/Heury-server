import {ObservationType} from './ObservationType'; 
import {ProjectUserType} from './ProjectUserType'; 
export type ProjectType = {
  name: string;
  id: string;
  users: ProjectUserType[]; 
  observations: ObservationType[]; 
  coverImage?: string;
}