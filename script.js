const voice = document.querySelector('#voice');
const text = document.querySelector('#text');

const voiceOptions = {
	mike: {
		name: 'Mike',
		language: 'en-us',
	},
	dinis: {
		name: 'Dinis',
		language: 'pt-br',
	},
};

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

	console.log({ voice: voiceOptions[voice.value], text: text.value });
};
