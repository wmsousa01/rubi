// Fonte única dos dados cadastrais da empresa.
// Estes dados são exigidos no rodapé para a verificação do Meta Business /
// WhatsApp Business API e precisam bater exatamente com o cartão CNPJ.
const empresa = {
	nomeFantasia: 'Rubi Hospitalar',
	razaoSocial: 'Rubi Comercio de Materiais Hospitalares LTDA',
	cnpj: '19.074.620/0001-01',

	inscricoesEstaduais: [
		{ uf: 'SP', numero: '455.343.367.112' },
		{ uf: 'SP', numero: '662.037.701.119' },
		{ uf: 'MG', numero: '004105231.00-10' },
	],

	endereco: {
		logradouro: 'Rua Chico de Paula',
		numero: '349',
		bairro: 'Centro',
		cidade: 'Mogi Guaçu',
		uf: 'SP',
		cep: '13840-001',
	},

	// Telefone fixo cadastrado no cartão CNPJ (usado na ativação do número oficial).
	telefone: {
		exibicao: '(19) 3841-8621',
		e164: '+551938418621',
	},

	whatsapp: {
		exibicao: '(19) 99661-3747',
		link: 'https://wa.me/5519996613747',
	},

	// E-mail precisa usar o mesmo domínio do site.
	email: 'contato@rubihospitalar.com.br',
	site: 'https://www.rubihospitalar.com.br',

	horarios: [
		{ dias: 'Segunda a sexta-feira', horario: '08:00 às 18:00' },
		{ dias: 'Sábado e domingo', horario: 'Fechado' },
	],

	redes: {
		facebook: 'https://www.facebook.com/rubihospitalar',
		instagram: 'https://www.instagram.com/rubihospitalar/',
	},
};

export const enderecoCompleto = [
	`${empresa.endereco.logradouro}, ${empresa.endereco.numero}`,
	empresa.endereco.bairro,
	`${empresa.endereco.cidade} - ${empresa.endereco.uf}`,
	`CEP ${empresa.endereco.cep}`,
].join(' — ');

export default empresa;
