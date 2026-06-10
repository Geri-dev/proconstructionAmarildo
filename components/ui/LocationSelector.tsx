"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getCitiesByCountySlug,
  getNavCounties,
  type CityLocation,
} from "@/lib/seo/areas";
import { SearchableSelect } from "@/components/ui/SearchableSelect";

type LocationSelectorProps = {
  countyValue?: string;
  cityValue?: string;
  onCountyChange?: (countySlug: string) => void;
  onCityChange?: (citySlug: string) => void;
  onLocationChange?: (countySlug: string, citySlug: string) => void;
  countyName?: string;
  cityName?: string;
  disabled?: boolean;
  required?: boolean;
  theme?: "light" | "dark";
  className?: string;
  countyLabel?: string;
  cityLabel?: string;
};

const counties = getNavCounties();

export function LocationSelector({
  countyValue: controlledCounty,
  cityValue: controlledCity,
  onCountyChange,
  onCityChange,
  onLocationChange,
  countyName,
  cityName,
  disabled = false,
  required = false,
  theme = "light",
  className = "",
  countyLabel = "Area",
  cityLabel = "City",
}: LocationSelectorProps) {
  const [internalCounty, setInternalCounty] = useState(controlledCounty ?? "");
  const [internalCity, setInternalCity] = useState(controlledCity ?? "");

  const countySlug = controlledCounty ?? internalCounty;
  const citySlug = controlledCity ?? internalCity;

  useEffect(() => {
    if (controlledCounty !== undefined) {
      setInternalCounty(controlledCounty);
    }
  }, [controlledCounty]);

  useEffect(() => {
    if (controlledCity !== undefined) {
      setInternalCity(controlledCity);
    }
  }, [controlledCity]);

  const countyOptions = useMemo(
    () =>
      counties.map((county) => ({
        value: county.slug,
        label: county.name,
      })),
    [],
  );

  const cityOptions = useMemo(() => {
    const cities: CityLocation[] = getCitiesByCountySlug(countySlug);
    return cities.map((city) => ({
      value: city.slug,
      label: city.name,
    }));
  }, [countySlug]);

  function handleCountyChange(nextCounty: string) {
    if (controlledCounty === undefined) {
      setInternalCounty(nextCounty);
      setInternalCity("");
    }
    onCountyChange?.(nextCounty);
  }

  function handleCityChange(nextCity: string) {
    if (controlledCity === undefined) {
      setInternalCity(nextCity);
    }
    onCityChange?.(nextCity);
    if (countySlug && nextCity) {
      onLocationChange?.(countySlug, nextCity);
    }
  }

  return (
    <div className={`grid gap-3 sm:grid-cols-2 sm:gap-4 ${className}`}>
      <SearchableSelect
        label={countyLabel}
        placeholder="Select county"
        searchPlaceholder="Search counties..."
        options={countyOptions}
        value={countySlug}
        onChange={handleCountyChange}
        disabled={disabled}
        required={required}
        name={countyName}
        theme={theme}
      />
      <SearchableSelect
        label={cityLabel}
        placeholder={countySlug ? "Select city" : "Select a county first"}
        searchPlaceholder="Search cities..."
        options={cityOptions}
        value={citySlug}
        onChange={handleCityChange}
        disabled={disabled || !countySlug}
        required={required}
        name={cityName}
        theme={theme}
      />
    </div>
  );
}
