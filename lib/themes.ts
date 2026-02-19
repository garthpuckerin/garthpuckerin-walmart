// Keep the richer Walmart-themed tokens below; removed the earlier simpler tokens to avoid duplicate exports.
export interface ThemeColors {
  bg: string;
  surface: string;
  border: string;
  text: string;
  textMuted: string;
  textSubtle: string;
  textBody: string;
  textSecondary: string;
  headerBg: string;
  tagBg: string;
  tagColor: string;
  expHover: string;
  footerBg: string;
  toggleBg: string;
  toggleColor: string;
  surface2: string;
  cardHoverBg: string;
  cardHoverText: string;
  cardHoverMuted: string;
  alignCardBg: string;
  alignCardBorder: string;
  badgeBg: string;
  badgeText: string;
}

// Walmart blue — primary accent in both modes
export const ACCENT_LIGHT = '#0071CE';
export const ACCENT_DARK = '#4AAEE8';

export const THEMES: Record<'light' | 'dark', ThemeColors> = {
  light: {
    bg: '#f4f7fb',
    surface: '#ffffff',
    border: '#dce5f0',
    text: '#071628',
    textMuted: '#5a6e84',
    textSubtle: '#96aabf',
    textBody: '#2c3e52',
    textSecondary: '#4a5f75',
    headerBg: 'rgba(244,247,251,0.96)',
    tagBg: '#e4f0fb',
    tagColor: '#005eb8',
    expHover: '#eef4fb',
    footerBg: '#ffffff',
    toggleBg: '#071628',
    toggleColor: '#f4f7fb',
    surface2: '#eaf2fc',
    cardHoverBg: '#0071CE',
    cardHoverText: '#ffffff',
    cardHoverMuted: 'rgba(255,255,255,0.72)',
    alignCardBg: '#ffffff',
    alignCardBorder: '#dce5f0',
    badgeBg: '#e0f0ff',
    badgeText: '#0060b0',
  },
  dark: {
    bg: '#050d1c',
    surface: '#091628',
    border: '#102038',
    text: '#deeaf8',
    textMuted: '#526880',
    textSubtle: '#2e4460',
    textBody: '#7a9ab8',
    textSecondary: '#5e7e98',
    headerBg: 'rgba(5,13,28,0.96)',
    tagBg: '#0a1e38',
    tagColor: '#54a8e0',
    expHover: '#0b1c30',
    footerBg: '#091628',
    toggleBg: '#deeaf8',
    toggleColor: '#050d1c',
    surface2: '#0c1e34',
    cardHoverBg: '#0071CE',
    cardHoverText: '#ffffff',
    cardHoverMuted: 'rgba(255,255,255,0.65)',
    alignCardBg: '#091628',
    alignCardBorder: '#102038',
    badgeBg: '#0a2040',
    badgeText: '#4AAEE8',
  },
};
