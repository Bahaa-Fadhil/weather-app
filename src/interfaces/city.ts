// -----------------------------------------------------------------------------
// City info Model
// -----------------------------------------------------------------------------

export type CityInfo = Readonly<{
  city: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
}>;
