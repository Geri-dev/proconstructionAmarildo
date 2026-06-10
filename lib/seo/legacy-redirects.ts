/** Legacy flat area URLs → new county/city paths. */
export const LEGACY_AREA_REDIRECTS: { source: string; destination: string }[] = [
  { source: "/areas/clifton-nj", destination: "/areas/passaic-county/clifton" },
  { source: "/areas/paterson-nj", destination: "/areas/passaic-county/paterson" },
  { source: "/areas/hackensack-nj", destination: "/areas/bergen-county/hackensack" },
  { source: "/areas/newark-nj", destination: "/areas/essex-county/newark" },
  { source: "/areas/jersey-city-nj", destination: "/areas/hudson-county/jersey-city" },
  { source: "/areas/edison-nj", destination: "/areas/middlesex-county/edison" },
  { source: "/areas/paramus-nj", destination: "/areas/bergen-county/paramus" },
  { source: "/areas/fort-lee-nj", destination: "/areas/bergen-county/fort-lee" },
  { source: "/areas/wayne-nj", destination: "/areas/passaic-county/wayne" },
];
