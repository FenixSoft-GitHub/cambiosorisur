import SpainFlag from '@/components/flags/Spain.astro';
import BrasilFlag from '@/components/flags/Brasil.astro';
import UnitedStatesFlag from '@/components/flags/UnitedStates.astro';
import type Comofunciona from '@/pages/comofunciona.astro';

// Add missing imports
export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof SpainFlag }
> = {
	pt: {
		code: 'pt',
		name: 'Portugues',
		flag: BrasilFlag,
	},
	en: {
		code: 'en',
		name: 'English',
		flag: UnitedStatesFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: SpainFlag,
	},
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
	es: {
		'nav.inicio': 'Inicio',
		'nav.nosotros': 'Nosotros',
		'nav.paises': 'Países',
		'nav.comofunciona': 'Como Funciona',
		'nav.contacto': 'Contacto',
		'nav.legal': 'Aviso Legal',
		'nav.privacidad': 'Privacidad',
		'nav.cookies': 'Cookies',
		'nav.preguntas': 'Preguntas Frecuentas',
		'nav.enviar': '¿Cómo Enviar Dinero?',
	},
	en: {
		'nav.inicio': 'Home',
		'nav.nosotros': 'About Us',
		'nav.paises': 'Countries',
		'nav.comofunciona': 'How it works',
		'nav.contacto': 'Contact Us',
		'nav.legal': 'Legal Notice',
		'nav.privacidad': 'Privacy',
		'nav.cookies': 'Cookies',
		'nav.preguntas': 'FAQ',
		'nav.enviar': 'How to Send Money?',
	},
	pt: {
		'nav.inicio': 'Inicio',
		'nav.nosotros': 'Sobre Nós',
		'nav.paises': 'Países',
		'nav.comofunciona': 'Como Funciona',
		'nav.contacto': 'Contato',
		'nav.legal': 'Aviso Legal',
		'nav.privacidad': 'Privacidade',
		'nav.cookies': 'Cookies',
		'nav.preguntas': 'Perguntas Frequentes',
		'nav.enviar': 'Como Enviar Dinheiro?',
	},
} as const;

export const routes = {
	es: {
		nosotros: 'nosotros',
		comofunciona: 'comofunciona',
		contacto: 'contacto',
		enviarDinero: 'enviarDinero',
		'aviso-legal': 'aviso-legal',
		privacidad: 'privacidad',
		cookies: 'cookies',
	},
	en: {
		vota: 'vote',
		info: 'information',
		archivo: 'archive',
		enviarDinero: 'enviarDinero',
		'aviso-legal': 'legal-notice',
		privacidad: 'privacy',
		cookies: 'cookies',
	},
	pt: {
		vota: 'vota',
		info: 'informacio',
		archivo: 'arxiu',
		enviarDinero: 'enviarDinero',
		'aviso-legal': 'avis-legal',
		privacidad: 'privacitat',
		cookies: 'cookies',
	},
};
