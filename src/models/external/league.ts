import { Schema, model, Document } from 'mongoose';

export interface LeagueDocument extends Document {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string;
  strDivision: string;
  intFormedYear: number;
  dateFirstEvent: string;
  strGender: string;
  strCountry: string;
  strWebsite: string;
  strFacebook: string;
  strTwitter: string;
  strYoutube: string;
  strRSS: string;
  strDescriptionEN: string;
  strBadge: string;
  strLogo: string;
  strPoster: string;
  strTrophy: string;
  strNaming: string;
  strLocked: string;
}

const leagueSchema = new Schema<LeagueDocument>({
  idLeague: { type: String, required: true, unique: true },
  strLeague: { type: String, required: true },
  strSport: { type: String },
  strLeagueAlternate: { type: String },
  strDivision: { type: String },
  intFormedYear: { type: Number },
  dateFirstEvent: { type: String },
  strGender: { type: String },
  strCountry: { type: String },
  strWebsite: { type: String },
  strFacebook: { type: String },
  strTwitter: { type: String },
  strYoutube: { type: String },
  strRSS: { type: String },
  strDescriptionEN: { type: String },
  strBadge: { type: String },
  strLogo: { type: String },
  strPoster: { type: String },
  strTrophy: { type: String },
  strNaming: { type: String },
  strLocked: { type: String },
});

export const League = model<LeagueDocument>('League', leagueSchema);