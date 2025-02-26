import { Schema, model, Document } from 'mongoose';

export interface TeamDocument extends Document {
  idTeam: string;
  strTeam: string;
  strTeamShort: string;
  strAlternate: string;
  intFormedYear: number;
  strSport: string;
  strLeague: string;
  idLeague: string;
  strStadium: string;
  strStadiumThumb: string;
  strStadiumDescription: string;
  strStadiumLocation: string;
  intStadiumCapacity: number;
  strWebsite: string;
  strFacebook: string;
  strTwitter: string;
  strInstagram: string;
  strDescriptionEN: string;
  strCountry: string;
  strTeamBadge: string;
  strTeamJersey: string;
  strTeamLogo: string;
  strTeamFanart1: string;
  strTeamFanart2: string;
  strTeamFanart3: string;
  strTeamFanart4: string;
  strYoutube: string;
  strRSS: string;
}

const teamSchema = new Schema<TeamDocument>({
  idTeam: { type: String, required: true, unique: true },
  strTeam: { type: String, required: true },
  strTeamShort: { type: String },
  strAlternate: { type: String },
  intFormedYear: { type: Number },
  strSport: { type: String },
  strLeague: { type: String },
  idLeague: { type: String },
  strStadium: { type: String },
  strStadiumThumb: { type: String },
  strStadiumDescription: { type: String },
  strStadiumLocation: { type: String },
  intStadiumCapacity: { type: Number },
  strWebsite: { type: String },
  strFacebook: { type: String },
  strTwitter: { type: String },
  strInstagram: { type: String },
  strDescriptionEN: { type: String },
  strCountry: { type: String },
  strTeamBadge: { type: String },
  strTeamJersey: { type: String },
  strTeamLogo: { type: String },
  strTeamFanart1: { type: String },
  strTeamFanart2: { type: String },
  strTeamFanart3: { type: String },
  strTeamFanart4: { type: String },
  strYoutube: { type: String },
  strRSS: { type: String },
});

export const Team = model<TeamDocument>('Team', teamSchema);