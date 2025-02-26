import axios from 'axios';
import { TeamDocument } from '../../models/external/team';
import dotenv from 'dotenv';

dotenv.config();

export class TeamService {
  private baseUrl = process.env.BASEURL;

  async getTeamsByLeague(leagueName: string): Promise<Array<TeamDocument>> {
    try {
      const response = await axios.get(`${this.baseUrl}/search_all_teams.php?l=${encodeURIComponent(leagueName)}`);
      const teams = response.data.teams;

      return teams;
    } catch (error: any) {
      throw new Error(`Failed to fetch team data: ${error.message}`);
    }
  }

  async getTeamById(teamId: string): Promise<TeamDocument> {
    try {
      const response = await axios.get(`${this.baseUrl}/api/sports/teams/${teamId}`);
      const team = response.data.teams[0];
      return team;
    } catch (error: any) {
      throw new Error(`Failed to fetch team data: ${error.message}`);
    }
  }
}