import SpainFlag from '@/components/flags/Venezuela.astro';
import BrasilFlag from '@/components/flags/Brasil.astro';
import UnitedStatesFlag from '@/components/flags/UnitedStates.astro';


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
		'nav.enviar': '¿Cómo Enviar Dinero?',
		'nav.preguntas': 'Preguntas Frecuentas',
		'nav.legal': 'Aviso Legal',
		'nav.privacidad': 'Privacidad',
		'nav.cookies': 'Cookies',
	},
	en: {
		'nav.inicio': 'Home',
		'nav.nosotros': 'About Us',
		'nav.paises': 'Countries',
		'nav.comofunciona': 'How it works',
		'nav.contacto': 'Contact Us',
		'nav.enviar': 'How to Send Money?',
		'nav.preguntas': 'FAQ',
		'nav.legal': 'Legal Notice',
		'nav.privacidad': 'Privacy',
		'nav.cookies': 'Cookies',
	},
	pt: {
		'nav.inicio': 'Inicio',
		'nav.nosotros': 'Sobre Nós',
		'nav.paises': 'Países',
		'nav.comofunciona': 'Como Funciona',
		'nav.contacto': 'Contato',
		'nav.enviar': 'Como Enviar Dinheiro?',
		'nav.preguntas': 'Perguntas Frequentes',
		'nav.legal': 'Aviso Legal',
		'nav.privacidad': 'Privacidade',
		'nav.cookies': 'Cookies',
	},
} as const;

export const routes = {
	es: {
		nosotros: 'nosotros',
		paises: 'paises',
		comofunciona: 'comofunciona',
		contacto: 'contacto',
		enviarDinero: 'enviarDinero',
		'aviso-legal': 'aviso-legal',
		cookies: 'cookies',
		privacidad: 'privacidad',
	},
	en: {
		nosotros: 'aboutUs',
		paises: 'countries',
		comofunciona: 'howItWorks',
		contacto: 'contact',
		enviarDinero: 'sendMoney',
		'comofunciona#faq': 'howItWorks#faq',
		'aviso-legal': 'aviso-legal',
		cookies: 'cookies',
		privacidad: 'privacidad',
	},
	pt: {
		nosotros: 'nos',
		paises: 'paises',
		comofunciona: 'comofunciona',
		contacto: 'contato',
		enviarDinero: 'enviarDinheiro',
		'aviso-legal': 'aviso-legal',
		cookies: 'cookies',
		privacidad: 'privacidad',
		'404': '404',
	},
};
