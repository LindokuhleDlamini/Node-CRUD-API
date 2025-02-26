import { TeamService } from '../services/external/teamService';

const teamService = new TeamService();

export const getByLeague = async (req: any, res: any) => {
  try {
    const { league } = req.query;
    if (!league) {
      return res.status(400).json({ error: 'League name is required' });
    }

    const teams = await teamService.getTeamsByLeague(league as string);
    res.json(teams);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getById = async (req: any, res: any) => {
    try {
      const { Id } = req.query;
      if (!Id) {
        return res.status(400).json({ error: 'League name is required' });
      }
  
      const team = await teamService.getTeamById(Id as string);
      res.json(team);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };