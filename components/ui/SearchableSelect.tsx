"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import { fontBody } from "@/app/fonts";

export type SearchableSelectOption = {
  value: string;
  label: string;
};

type SearchableSelectProps = {
  id?: string;
  label: string;
  placeholder?: string;
  searchPlaceholder?: string;
  options: SearchableSelectOption[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  theme?: "light" | "dark";
  className?: string;
  menuLayout?: "floating" | "inline";
};

export function SearchableSelect({
  id,
  label,
  placeholder = "Select an option",
  searchPlaceholder = "Search...",
  options,
  value,
  onChange,
  disabled = false,
  required = false,
  name,
  theme = "light",
  className = "",
  menuLayout = "floating",
}: SearchableSelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const listboxId = `${selectId}-listbox`;
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const isDark = theme === "dark";

  const selectedOption = options.find((option) => option.value === value);

  const filteredOptions = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return options;
    return options.filter((option) =>
      option.label.toLowerCase().includes(normalized),
    );
  }, [options, query]);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setHighlightedIndex(0);
      requestAnimationFrame(() => searchInputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [query]);

  const triggerClass = isDark
    ? "border-white/15 bg-neutral-900 text-white placeholder:text-white/40"
    : "border-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400";

  const panelClass = isDark
    ? "border-white/10 bg-neutral-950 shadow-xl shadow-black/40"
    : "border-neutral-200 bg-white shadow-xl shadow-black/10";

  const itemClass = isDark
    ? "text-white/90 hover:bg-white/10 data-[active=true]:bg-white/10"
    : "text-neutral-700 hover:bg-neutral-100 data-[active=true]:bg-neutral-100";

  function selectOption(option: SearchableSelectOption) {
    onChange(option.value);
    setOpen(false);
    setQuery("");
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (disabled) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!open) {
          setOpen(true);
          return;
        }
        setHighlightedIndex((index) =>
          index < filteredOptions.length - 1 ? index + 1 : 0,
        );
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!open) {
          setOpen(true);
          return;
        }
        setHighlightedIndex((index) =>
          index > 0 ? index - 1 : filteredOptions.length - 1,
        );
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (!open) {
          setOpen(true);
          return;
        }
        if (filteredOptions[highlightedIndex]) {
          selectOption(filteredOptions[highlightedIndex]);
        }
        break;
      case "Escape":
        event.preventDefault();
        setOpen(false);
        break;
      case "Tab":
        setOpen(false);
        break;
      default:
        break;
    }
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <label
        htmlFor={selectId}
        className={`${fontBody} mb-1.5 block text-sm font-medium ${isDark ? "text-white/90" : "text-neutral-800"}`}
      >
        {label}
      </label>

      <button
        id={selectId}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-haspopup="listbox"
        aria-required={required}
        disabled={disabled}
        onClick={() => !disabled && setOpen((current) => !current)}
        onKeyDown={handleKeyDown}
        className={`${fontBody} flex min-h-[44px] w-full items-center justify-between gap-2 rounded-xl border px-4 py-2.5 text-left text-sm transition-colors focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20 disabled:cursor-not-allowed disabled:opacity-50 sm:text-base ${triggerClass}`}
      >
        <span className={selectedOption ? "" : "text-inherit opacity-60"}>
          {selectedOption?.label ?? placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 opacity-60 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {name ? (
        <input type="hidden" name={name} value={value} required={required} />
      ) : null}

      {open ? (
        <div
          className={
            menuLayout === "inline"
              ? `relative z-10 mt-1.5 overflow-hidden rounded-xl border ${panelClass}`
              : `absolute left-0 right-0 top-[calc(100%+0.375rem)] z-50 overflow-hidden rounded-xl border ${panelClass}`
          }
        >
          <div
            className={`border-b px-3 py-2 ${isDark ? "border-white/10" : "border-neutral-200"}`}
          >
            <div className="relative">
              <Search
                className={`pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 ${isDark ? "text-white/40" : "text-neutral-400"}`}
                aria-hidden
              />
              <input
                ref={searchInputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={searchPlaceholder}
                aria-label={`Search ${label}`}
                className={`${fontBody} w-full rounded-lg border-0 bg-transparent py-2 pl-9 pr-3 text-sm outline-none ${isDark ? "text-white placeholder:text-white/40" : "text-neutral-900 placeholder:text-neutral-400"}`}
              />
            </div>
          </div>

          <ul
            id={listboxId}
            role="listbox"
            aria-label={label}
            className="max-h-56 overflow-y-auto overscroll-contain py-1"
          >
            {filteredOptions.length === 0 ? (
              <li
                className={`${fontBody} px-4 py-3 text-sm ${isDark ? "text-white/50" : "text-neutral-500"}`}
              >
                No results found
              </li>
            ) : (
              filteredOptions.map((option, index) => {
                const isSelected = option.value === value;
                const isHighlighted = index === highlightedIndex;

                return (
                  <li
                    key={option.value}
                    role="option"
                    aria-selected={isSelected}
                    data-active={isHighlighted}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => selectOption(option)}
                    className={`${fontBody} flex cursor-pointer items-center justify-between gap-2 px-4 py-2.5 text-sm transition-colors ${itemClass}`}
                  >
                    <span>{option.label}</span>
                    {isSelected ? (
                      <Check className="h-4 w-4 shrink-0 text-brand-orange" aria-hidden />
                    ) : null}
                  </li>
                );
              })
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
