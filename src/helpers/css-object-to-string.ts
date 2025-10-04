import type { CSSProperty } from 'astro/types';

export const cssObjectToString = (styles: Partial<Record<string, CSSProperty>>): string => {
	return Object.entries(styles)
		.filter(([, value]) => value !== undefined)
		.map(([key, value]) => {
			const kebabKey = key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
			return `${kebabKey}: ${String(value)}`;
		})
		.join('; ');
};
