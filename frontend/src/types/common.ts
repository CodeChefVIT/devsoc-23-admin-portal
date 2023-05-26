export interface UserObject {
  Id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  token: string;
  userRole: string;
  college: string;
  collegeYear: string;
  birthData: string;
  inTeam: boolean;
  createdTime: string;
  updatedTime: string;
  teamId: string;
  userId: string;
}

export interface User {
  status: string;
  token: string;
  user: UserObject;
}

export interface RefreshToken {
  accessToken: string;
  status: string;
}

export interface Team {
  Id: string;
  teamName: string;
  TeamLeaderId: string;
  teamMembers: string[];
  teamSize: number;
  ProjectId: string;
  projectExists: boolean;
  round: number;
  inviteCode: string;
  createdTime: string;
  updatedTime: string;
}

export interface Project {
  Id: string;
  TeamId: string;
  idea: string;
  ideaLink: string;
  projectName: string;
  projectTagLine: string;
  projectStack: string;
  projectDescription: string;
  projectStatus: string;
  projectDriveLink: string;
  projectVideoLink: string;
  projectFigmaLink: string;
  projectGithubLink: string;
  projectTrack: string;
  projectTags: string;
  like: number;
  likesId: string;
}

export interface Error {
  err: string;
  status: boolean;
}
