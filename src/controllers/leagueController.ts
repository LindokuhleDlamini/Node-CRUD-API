import { LeagueService } from '../services/external/leagueService';

const leagueService = new LeagueService();

export const getByName = async (req: any, res: any) => {
  try {
    const { league } = req.query;
    if (!league) {
      return res.status(400).json({ error: 'League name is required' });
    }

    const leagueData = await leagueService.getByName(league as string);
    res.json(leagueData);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getAll = async (req: any, res: any) => {
    try {
      const leagueData = await leagueService.getAll();
      res.json(leagueData);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };