export interface User {
  status: string;
  token: string;
  user: {
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
  };
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

export interface Error {
  err: string;
  status: boolean;
}
