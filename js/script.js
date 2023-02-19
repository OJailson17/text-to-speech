const voice = document.querySelector('#voice');
const text = document.querySelector('#text');

const voiceOptions = {
	dinis: {
		name: 'Dinis',
		language: 'pt-br',
	},
	marcia: {
		name: 'Marcia',
		language: 'pt-br',
	},
	ligia: {
		name: 'Ligia',
		language: 'pt-br',
	},
	yara: {
		name: 'Yara',
		language: 'pt-br',
	},
	mike: {
		name: 'Mike',
		language: 'en-us',
	},
	linda: {
		name: 'Linda',
		language: 'en-us',
	},
	amy: {
		name: 'Amy',
		language: 'en-us',
	},
	john: {
		name: 'John',
		language: 'en-us',
	},
	mary: {
		name: 'Mary',
		language: 'en-us',
	},
};

// Function responsible for converting text to speech
const textToSpeech = () => {
	VoiceRSS.speech({
		key: '45ec954d8ec8428795f042cafca4bd38',
		src: text.value,
		hl: voiceOptions[voice.value].language,
		v: voiceOptions[voice.value].name,
		r: 0,
		c: 'mp3',
		f: '44khz_16bit_stereo',
		ssml: false,
	});
};
