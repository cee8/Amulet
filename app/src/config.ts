import { getSiteURL } from '@/lib/get-site-url';
import { LogLevel } from './lib/logger';

declare const process: {
  env: {
    NEXT_PUBLIC_LOG_LEVEL: string;
  };
}; //DO I KEEP THIS I PUT IT IN

export interface Config {
  site: { name: string; description: string; themeColor: string; url: string };
  logLevel: keyof typeof LogLevel;
}

export const config: Config = {
  site: { name: 'Devias Kit', description: '', themeColor: '#090a0b', url: getSiteURL() },
  logLevel: (import.meta.env.VITE_PUBLIC_LOG_LEVEL as keyof typeof LogLevel) ?? LogLevel.ALL,
};