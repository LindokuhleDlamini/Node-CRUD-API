import axios from 'axios';
import dotenv from 'dotenv';
import { LeagueDocument } from '../../models/external/league';

dotenv.config();

export class LeagueService {
  private baseUrl = process.env.BASEURL;

  async getByName(leagueName: string): Promise<LeagueDocument> {
    try {
      const response = await axios.get(`${this.baseUrl}/search_all_leagues.php?l=${encodeURIComponent(leagueName)}`);
      const league = response.data.leagues[0];

      return league;
    } catch (error: any) {
      throw new Error(`Failed to fetch league data: ${error.message}`);
    }
  }

  async getAll(): Promise<LeagueDocument[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/all_leagues.php`);
      const leagues = response.data.leagues;

      return leagues;
    } catch (error: any) {
      throw new Error(`Failed to fetch leagues: ${error.message}`);
    }
  }

}