export const lang = ['Brazilian Portuguese Female', 'Brazilian Portuguese Male',
    'US English Female',
    'US English Male'
];
const langPT = ['Português Brasileiro Mulher', 'Português Brasileiro Homem'];
let indexlang = 0;
let flag = true;
let flaglang = true;

export function blindmodelanguage(cb) {
    const selected = false;
    responsiveVoice.speak(`Escolha a Linguagem,
     Pressione L para Selecionar, e Enter para confirmar`, lang[0], {
        rate: 1
    });
    responsiveVoice.speak(`Choose a Language,
     press L to select, and Enter to confirm`, lang[2], {
        rate: 1
    });

    document.addEventListener('keydown', function(b) {
        if (flaglang === true) {
            if (b.key === 'l' && indexlang < 3) {
                indexlang++;
                if (indexlang < 2) {
                    responsiveVoice.speak(langPT[indexlang], lang[indexlang], {
                        rate: 1
                    });
                    // onsole.log(langPT[indexlang], lang[indexlang]);
                } else {
                    responsiveVoice.speak(lang[indexlang], lang[indexlang], {
                        rate: 1
                    });
                }
            } else if (b.key === 'l' && indexlang === 3) {
                indexlang = 0;
                responsiveVoice.speak(langPT[indexlang], lang[indexlang], {
                    rate: 1
                });
            }

            if (b.key === 'Enter') {
                cb(indexlang);
                flaglang = false;
            }
        }
    });
    if (selected === true) {
        return indexlang;
    }
}

export function blindmode(cb) {
    let decision;
    responsiveVoice.speak(`Deseja ativar o modo
     adaptado para cegos? Pressione S para sim,
      e N para não`, lang[0], {
        rate: 1
    });
    responsiveVoice.speak(`Do you wish to activate
     the mode adapted for blind people? Press S
      if yes, and N if not`, lang[2], {
        rate: 1
    });

    document.addEventListener('keydown', blindModeEvent);

    function blindModeEvent(b) {
        if (flag === true) {
            if (b.key === 's') {
                decision = true;
                cb(decision);
                flag = false;
            } else if (b.key === 'n') {
                decision = false;
                cb(decision);
                flag = false;
            }
        }
    }
}
