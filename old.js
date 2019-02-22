// Setup global variables for HomeServe Requests
const initGlobalFunctions = (globalFunctions) => {
    conversation.short_term_memory._globalFunctions = {};
    Object.keys(globalFunctions).forEach((key) => { conversation.short_term_memory._globalFunctions[key] = String(globalFunctions[key]) } );
    console.log(conversation.short_term_memory._globalFunctions);
};
//url de prod: https://api.homeserve.fr
//url de test: 'https://api-test.homeserve.fr'
conversation.short_term_memory.baseUri = 'https://api.homeserve.fr';
//token de prod : '5849366ae46d2f0001ef77c3c89fd5853be547f387875a77244ab02e'
//token de test : '5890ad4602f53a486d42e3b43d356ff4d24c4135b90adc8decb2f438'
conversation.short_term_memory.token = '5849366ae46d2f0001ef77c3c89fd5853be547f387875a77244ab02e';

conversation.short_term_memory.partnerCode = 'WEBCB_RECETTE';
conversation.short_term_memory.phoneNumberRegExpValidation = '^(06|07)[0-9]{8}$';
conversation.short_term_memory.zipCodeRegExpValidation = '^[0-9]{5}$';
conversation.short_term_memory.issueLabels = {
    'Plomberie.FuiteEau.Exterieure': 'une fuite d\'eau en extérieur',
    'Plomberie.FuiteEau.Interieure': 'une fuite d\'eau en intérieur',
    'Plomberie.FuiteEau': 'une fuite d\'eau',
    'Plomberie.Engorgement': 'un engorgement',
    'Electricite.EauChaude': 'une absence d\'eaud chaude',
    'Electricite.Panne': 'une panne d\'électricité',
    'Electricite.Radiateur': 'une panne de chauffage',
    'Electricite.Prise': 'une prise défectueuse',
    'Electricite.Interrupteur': 'un interrupteur défectueux',
    'Electricite.Ampoule': 'une ampoule à changer',
    'Gaz.Flexible': 'un flexible de gaz à changer',
    'Gaz.Robinet': 'un robinet de gaz défectueux',
    'Gaz.Fuite': 'une fuite de gaz',
    'Gaz.Controle': 'un contrôle de l\'installation gaz'
};
conversation.short_term_memory.conseils = {
    'Plomberie.FuiteEau.Exterieure': "Je vous conseille de fermer le robinet d’arrêt général ou celui du circuit concerné.",
    'Plomberie.FuiteEau.Interieure': "Si la fuite est importante, je vous conseille de fermer le robinet d'arrêt général et de couper l'électricité s'il y a des câbles électriques à proximité.",
    'Plomberie.FuiteEau': "Je vous conseille, en attendant, de fermer le robinet d'arrêt général de votre installation.",
    'Plomberie.Engorgement': "Je vous conseille de ne pas utiliser les équipements engorgés. Merci de ne pas mettre de produits chimiques, cela peut être dangereux lors du débouchage manuel.",
    'Electricite.EauChaude': "Je vous conseille de vérifier si le problème concerne toutes les arrivées d'eau ou seulement une seule.",
    'Electricite.Panne': "Je vous conseille de vérifier si la panne est générale et concerne aussi votre voisinage. Pour cela, vous devez joindre votre société distributrice d'électricité. Si c'est une panne locale, essayer d'identifier d'où vient la panne sur votre tableau éléctrique.",
    'Electricite.Radiateur': "En cas de grand froid, je vous conseille en attendant d'utiliser un chauffage d'appoint.",
    'Electricite.Prise': "Je vous conseille de tester la prise avec au moins 2 appareils. Pensez à bien couper localement le courant avant toute manipulation.",
    'Electricite.Interrupteur': "Si vous manipulez l'interupteur je vous conseille de couper le courant localement.",
    'Electricite.Ampoule': "Je vous conseille de couper le courant localement avant toute manipulation.",
    'Gaz.Flexible': "Je vous conseille de bien vérifier que le gaz est coupé avant toute manipulation.",
    'Gaz.Robinet': "Je vous conseille de bien vérifier que le gaz est coupé avant toute manipulation.",
    'Gaz.Fuite': "En cas de fuite de gaz, je vous conseille de contacter au plus vite votre fournisseur afin qu'il mette en sécurité votre logement. N'allumez pas la lumière, coupez le gaz et ouvrez les fenetres.",
    'Gaz.Controle': "SI vous avez le moindre doute sur une fuite de gaz, coupez immédiatement le gaz et contactez votre fournisseur."
};
conversation.short_term_memory.smsLinks = {
    'province': {
        'Plomberie.FuiteEau.Exterieure': 'http://bit.ly/2LMDtU2',
        'Plomberie.FuiteEau.Interieure': 'http://bit.ly/2LPTJUq',
        'Plomberie.FuiteEau': 'http://bit.ly/2OjhGoI',
        'Plomberie.Engorgement': 'http://bit.ly/2LSXA2P',
        'Electricite.EauChaude': 'http://bit.ly/2mIQCmc',
        'Electricite.Panne': 'http://bit.ly/2LQyDVU',
        'Electricite.Radiateur': 'http://bit.ly/2LqDwZB',
        'Electricite.Prise': 'http://bit.ly/2A9mqKt',
        'Electricite.Interrupteur': 'http://bit.ly/2A9mqKt',
        'Electricite.Ampoule': 'http://bit.ly/2AlPT4f',
        'Gaz.Flexible': 'http://bit.ly/2LCnTxy',
        'Gaz.Robinet': 'http://bit.ly/2uOeLMM',
        'Gaz.Fuite': 'http://bit.ly/2LGsqPo',
        'Gaz.Controle': 'http://bit.ly/2LGuIOu'
    },
    'idf': {
        'Plomberie.FuiteEau.Exterieure': 'http://bit.ly/2A9kNMR',
        'Plomberie.FuiteEau.Interieure': 'http://bit.ly/2v7yCWr',
        'Plomberie.FuiteEau': 'http://bit.ly/2LQ7nXv',
        'Plomberie.Engorgement': 'http://bit.ly/2LPr8yi',
        'Electricite.EauChaude': 'http://bit.ly/2OjlxSP',
        'Electricite.Panne': 'http://bit.ly/2LnEnu6',
        'Electricite.Radiateur': 'http://bit.ly/2LPWuVM',
        'Electricite.Prise': 'http://bit.ly/2K1uBrU',
        'Electricite.Interrupteur': 'http://bit.ly/2K1uBrU',
        'Electricite.Ampoule': 'http://bit.ly/2NI38hc',
        'Gaz.Flexible': 'http://bit.ly/2JXNBHT',
        'Gaz.Robinet': 'http://bit.ly/2LQzOVk',
        'Gaz.Fuite': 'http://bit.ly/2LCwPTz',
        'Gaz.Controle': 'http://bit.ly/2NJfp58'
    },
    'ZipCodeKO': 'http://bit.ly/2LCpq6M'
};

conversation.short_term_memory.smsPrices = {
    'province': {
        'Plomberie.FuiteEau.Exterieure': '135€', 
        'Plomberie.FuiteEau.Interieure': '160€', 
        'Plomberie.FuiteEau': '135€', 
        'Plomberie.Engorgement': '160€', 
        'Electricite.EauChaude': '120€', 
        'Electricite.Panne': '145€', 
        'Electricite.Radiateur': '120€', 
        'Electricite.Prise': '135€', 
        'Electricite.Interrupteur': '135€', 
        'Electricite.Ampoule': '135€', 
        'Gaz.Flexible': '140€', 
        'Gaz.Robinet': '165€', 
        'Gaz.Fuite': '140€', 
        'Gaz.Controle': '86€',   
    }, 
    'idf': {
        'Plomberie.FuiteEau.Exterieure': '145€', 
        'Plomberie.FuiteEau.Interieure': '170€', 
        'Plomberie.FuiteEau': '145€', 
        'Plomberie.Engorgement': '175€', 
        'Electricite.EauChaude': '135€', 
        'Electricite.Panne': '160€', 
        'Electricite.Radiateur': '135€', 
        'Electricite.Prise': '145€', 
        'Electricite.Interrupteur': '145€', 
        'Electricite.Ampoule': '145€', 
        'Gaz.Flexible': '155€', 
        'Gaz.Robinet': '185€', 
        'Gaz.Fuite': '160€', 
        'Gaz.Controle': '86€',
    }
};


conversation.short_term_memory.smsTextWithPrice = 'Suite à votre échange avec Emma, cliquez sur le lien pour finaliser votre devis sur HOMESERVE DEPANNETMOI\n\n{{link}}, tarif à partir de {{price}}\n\nA votre service';
conversation.short_term_memory.smsTextWithoutPrice = 'Suite à votre échange avec Emma, cliquez sur le lien pour finaliser votre devis sur HOMESERVE DEPANNETMOI\n\n{{link}}\n\nA votre service';


initGlobalFunctions({
    
    askAnotherTimePhoneNumber: () => {
        if (!conversation.short_term_memory.newPhoneNumberRetry) {
            conversation.short_term_memory.newPhoneNumberRetry = 0;
        }
        conversation.short_term_memory.newPhoneNumberRetry += 1;
             
        switch (conversation.short_term_memory.newPhoneNumberRetry) {
            case 1:
                output.answer = 'Je n\'ai pas compris.Quel est votre numéro de téléphone portable ?';
                break;
            case 2:
                output.answer = 'Je vous ai toujours pas compris.Vous pouvez-dire les 10 chiffres de votre numero de telephone de la façon suivante : 06 87 88 99 00.\nA vous, quel votre numéro de téléphone portable ?';
                break;
            case 3:
                output.answer = 'Je vous ai toujours pas compris. Vous pouvez-dire les 10 chiffres de votre numéro de téléphone de la façon suivante : 06 87 88 99 00. A vous ! Quel votre numéro de téléphone portable ?';
                break;
            default:
                output.answer = `Je ne suis pas parvenu à comprendre ce nouveau numéro.`;
                callBackAnnounce();
                break;
        }
    },
    
    extractPhoneNumber: () => {
        return input.system_entities && input.system_entities.phone_number && input.system_entities.phone_number.length>=1  ? input.system_entities.phone_number[0].value : null;
    },
    extractNumber: () => {
        const number = input.system_entities && input.system_entities.number && input.system_entities.number.length>=1  ? input.system_entities.number[0].string : null;
        const arrondissement = input.custom_entities && input.custom_entities.arrondissement  && input.custom_entities.arrondissement.length>=1  ? input.custom_entities.arrondissement[0].value : null;
        return arrondissement || number;
    },
    
    isPhoneNumberValidated: (number) => {
        const phoneNumber = number.replace(/\s/g, '');
        const phoneNumberRegExpValidation = new RegExp(conversation.short_term_memory.phoneNumberRegExpValidation, 'im');
        return phoneNumberRegExpValidation.test(phoneNumber);    
    },
    
    addSuggestions: (quickReplies) => {
        const suggestions = quickReplies.map((item) => { return { title: item }; });
    
        assistant_answer.card = {
            inputPrompt: {
                richInitialPrompt: {
                    items: [{
                        simpleResponse: {
                            ssml: `<speak>${output.answer.toString()}</speak>`,
                        }
                    }],
                    suggestions
                }
            },
            possibleIntents: [{
                intent: 'actions.intent.TEXT'
            }]
        };
    },
    
    callBackAnnounce: () => {
        const moment = require('moment-timezone');
        const now = moment();
        const opening = moment("05:00", 'HH:mm'); // 7h
        const closing = moment("19:00", 'HH:mm'); // 21h 
        const opened = now.isBetween(opening, closing);
        //var opened = false        
        const user = conversation.long_term_memory.user;
        const userFullName = `${user.firstName} ${user.lastName}`;
        
        if (opened) {
            output.answer = ` Le contrat est au nom de ${userFullName}. Un conseiller va vous contacter dans quelques minutes par téléphone pour affiner le diagnostic avec vous. En attendant, souhaitez-vous avoir des conseils ?`;
        } else {
            output.answer = ` Le contrat est au nom de ${userFullName}. J'ai bien enregistré votre demande et un conseiller va vous rappeler entre  7h30 et 8h30. En attendant, souhaitez-vous avoir des conseils ?`;
        } 
        globalFunctions.addSuggestions(['Oui', 'Non']);
    },

    
    askPhoneCallBack: (cb) => {
        const baseUri = conversation.short_term_memory.baseUri;
        const token = conversation.short_term_memory.token;
        const phoneNumber = conversation.short_term_memory.newPhoneNumber || conversation.short_term_memory.phoneNumber;
        const partnerCode = conversation.short_term_memory.partnerCode;
        
        const moment = require('moment-timezone');
        const now = moment();
        const closing = moment("19:30", 'HH:mm'); // 21h 30
        const opening = moment("05:00", 'HH:mm').add(1,'days'); // 7h
        var closed = now.isBetween(closing, opening);        
        //var closed = true
        console.log(`Closed : ${closed}`);
        
        if (!closed) {
            const request = require('request');
            const options = {
                method: 'POST',
                url: `${baseUri}/services/webcallback/v1/webCallBack`,
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                json: {
                	phone: phoneNumber,
                	partner: partnerCode,
                },
            };
            request(options, function(error, response, body) {
                console.log('Call back response : ');
                console.log(body);
                
                return cb(error);
            });
        } else {
            
            var clientId = false
            if(conversation.short_term_memory.clientId !== undefined) {
                clientId = conversation.short_term_memory.clientId;
                
            }
            else if(conversation.short_term_memory.user.id !== undefined) {
                clientId = conversation.short_term_memory.user.id;

            }
            
            const phoneNumber = conversation.short_term_memory.newPhoneNumber || conversation.short_term_memory.phoneNumber;
            const nodemailer = require('nodemailer');
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "bot.homeserve@gmail.com",
                    pass: "homeserveAV2018!"
                }
                
            }); // voir doc nodemailer
            let message = ` Le/la client.e ${conversation.long_term_memory.user.title} ${conversation.long_term_memory.user.lastName} aimerait être rappelé.e. au ${phoneNumber}`+"<br>";
            if(clientId) {
                message += `Voici son numéro client : ${clientId}`+"<br>";
            }
            message += `Cordialement,`+"<br>"+`Emma de Homeserve`;
            let mailOptions = {
                from: 'bot.homeserve@gmail.com',
                to: "supervision@homeserve.fr",
                subject: `Client.e a rappeler`,
                html: message
            };
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                	console.log(error);
                    callback(output);
                }else{
                	console.log(info);
                    callback(output);
                }
            });
            //callback(output);
            
        }
        
    },
    
    identifyClientByClientId: (cb) => {
        const clientId = conversation.short_term_memory.clientId;
        const baseUri = conversation.short_term_memory.baseUri;
        const token = conversation.short_term_memory.token;
        
        const request = require('request');
        const options = {
            method: 'GET',
            url: `${baseUri}/core/v1/customers/${clientId}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
        console.log(options);
        request(options, function(error, response, body) {
            if (response.statusCode===200) {
                let user = null;
                try {
                    user = JSON.parse(body);
                    console.log(user);
                    return cb(user);
                } catch (error) {
                    console.log('err1');
                    //console.log(error.toString());
                    console.log(response);
                    return cb(null);
                }
            } else {
                console.log('err2')
                console.log(body.toString());
                return cb(null);
            }
        });
    },
    
    
    identifyClientByPhoneNumber: (cb) => {
        const phoneNumber = conversation.short_term_memory.phoneNumber;
        const zipCode = conversation.short_term_memory.zipCode;
        const baseUri = conversation.short_term_memory.baseUri;
        const token = conversation.short_term_memory.token;
        
        const request = require('request');
        const options = {
            method: 'GET',
            url: `${baseUri}/core/v1/customers`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            qs: {
                postCode: zipCode,
                phone: phoneNumber,
            },
        };
        console.log(options);
        request(options, function(error, response, body) {
            if (response.statusCode===200) {
                let users = null;
                try {
                    users = JSON.parse(body);
                    console.log(users.data);
                    if (users.data.length > 0) {
                        const user = users.data.pop();
                        return cb(user);    
                    } else {
                        console.log(`User not found with Phone & zopCode`);
                        return cb(null);
                    }
                } catch (e) {
                    console.log(response);
                    return cb(null);
                }
            } else {
                return cb(null);
            }
        });
    },
    
    generateIdentifiedClientResponse: (user) => {
        const moment = require('moment-timezone');
        const now = moment();
        const opening = moment("05:00", 'HH:mm'); // 7h
        const closing = moment("19:00", 'HH:mm'); // 21h 
        const opened = now.isBetween(opening, closing);
        //var opened = false
    
        console.log("identified")
        const userFullName = `${user.firstName} ${user.lastName}`;
        conversation.short_term_memory.userFullName = userFullName
        if (opened) {
            output.answer = `Le contrat est au nom de ${userFullName}. Un conseiller va vous contacter dans quelques minutes par téléphone pour affiner le diagnostic avec vous. En attendant, souhaitez-vous avoir des conseils ?`;
            globalFunctions.addSuggestions(['Oui', 'Non']);
            conversation.short_term_memory.want_an_advice_state = true;

            
        } else {
            output.answer = `Le contrat est au nom de ${userFullName}. J'ai bien enregistré votre demande et un conseiller va vous rappeler entre  7h30 et 8h30. En attendant, souhaitez-vous avoir des conseils ?`
        }
    },
        
    
    generateNotIdentifiedClientResponse: () => {
        const moment = require('moment-timezone');
        const now = moment();
        const opening = moment("05:00", 'HH:mm'); // 7h
        const closing = moment("19:00", 'HH:mm'); // 21h 
        const opened = now.isBetween(opening, closing);
        console.log("Not identified")
        //var opened = false
        
        if (opened) {
            output.answer = `Malheureusement, je ne suis pas parvenu à récupérer votre contrat mais un conseiller va vous contacter dans quelques minutes sur le numéro que vous nous avez communiqué. En attendant,souhaitez-vous avoir quelques conseils ?`;
        } else {
            output.answer = `Malheureusement, je ne suis pas parvenu à récupérer votre contrat mais un conseiller va vous contacter sur le numéro que vous nous avez indiqué entre 7h30 et 8h30h . En attendant,souhaitez-vous avoir des conseils ?`;
        }
        
        conversation.short_term_memory.not_identified_client = true;
    },
    prepareAdviceAndConclusionResponse: () => {
        const moment = require('moment-timezone');
        const nowHours = moment().tz('Europe/Paris').format('HH');
        //var nowHours = 23;
        console.log(`Il est ${nowHours}h`);
        
        let conclusion = null;
        if (nowHours>=18) {
            conclusion = ` Pour consulter notre politique de protection de données personnelles, rendez-vous sur notre site www.homeserve.fr. A bientôt et bonne soirée`;
        } else {
            conclusion = ` Pour consulter notre politique de protection de données personnelles, rendez-vous sur notre site www.homeserve.fr. A bientôt et belle journée.`;
        }
        const conseils = conversation.short_term_memory.conseils;
        const conseil = conseils[conversation.short_term_memory.issue];
        if (conseil) {
            output.answer = `${conseil}${conclusion}`;
        } else {
            output.answer = `Erreur: il devrait y avoir un souci enregistré ${conversation.short_term_memory.issue}`;
        }
        
        output.end_session = true;
    },
    checkZipCode: (zipCodeExpected, userDatas) => 
        userDatas.addresses.some(address => address.postCode.substring(0,zipCodeExpected.length) === zipCodeExpected),
    getMobileNumber: (userDatas) => {
        const mobilePhoneNumbers = userDatas.phones.filter(phone => phone.type === 'mobile');
        if (mobilePhoneNumbers.length > 0) {
            return mobilePhoneNumbers[0].number;
        } else if (userDatas.phones.length > 0) {
            return userDatas.phones[0].number;
        } else {
            return null;
        }
    },
    
    phoneNumberChoose: (user, phoneNumber) => {
        if (phoneNumber) {
            conversation.short_term_memory.phoneNumber = phoneNumber;
            if (user.phones.length > 1) {
                output.answer = `Parfait, j'ai bien trouvé votre contrat qui comporte plusieurs numéros dont le ${phoneNumber}. Souhaitez-vous être contacté sur celui là ou préférez-vous en utiliser un autre ?`;
            } else {
                output.answer = `Parfait, le numéro de téléphone inscrit dans votre contrat est le ${phoneNumber}. Souhaitez-vous être contacté sur ce numéro ou préférez-vous en utiliser un autre ?`;
            }
        } else {
            output.answer = `Votre contrat ne comporte pas de numéro de téléphone. Sur quel numéro souhaitez-vous être contacté ?`;
            conversation.short_term_memory.phoneNumberAsked = true;
        }
    },
    manageWrongPhoneNumber: () => {
        if (!conversation.short_term_memory.phoneNumberRetry) {
            conversation.short_term_memory.phoneNumberRetry = 0;
        }
        conversation.short_term_memory.phoneNumberRetry += 1;
        
        switch (conversation.short_term_memory.phoneNumberRetry) {
            case 1:
                output.answer = `${input.intent !== 'Non' ? 'Je n\'ai pas compris. ' : ''} Quel est votre numéro de téléphone portable ?`;
                break;
            case 2:
                output.answer = `${input.intent !== 'Non' ? 'Je ne vous ai toujours pas compris.' : ''}  Vous pouvez dire les 10 chiffres de votre numéro de téléphone de la façon suivante : 06 87 88 99 00. A vous, quel est votre numéro de téléphone portable ?`;
                break;
            default:
                output.answer = `Malheureusement, je ne suis pas parvenue à récupérer votre numéro de téléphone. Je vous invite à établir un devis sur notre site depannetmoi.homeserve.fr. A bientôt !`;
                output.end_session = true;
                break;
        }
    },
    
    isIDF: (zipCode) => {
        const idfZipCodes = [
            '75', '91', '92',	'93', '94', '95', '77', '78', '74',
            '39220', '01170', '01210', '01220', '01280', '01410',
            '01630', '01710', '39310', '39370' ];
        return idfZipCodes.some(expectedCode => {
            if (zipCode.length >= expectedCode.length) {
                return zipCode.substring(0, expectedCode.length) === expectedCode;
            }
            return false;
        });
    },
    
    getPrice: () => {
        if (conversation.short_term_memory.zipCode) {
            const region = isIDF(conversation.short_term_memory.zipCode) ? 'idf' : 'province';
            const issue = conversation.short_term_memory.issue;
            return conversation.short_term_memory.smsPrices[region][issue];
        } 
        return null;
    },
    
    sendSMS: (cb) => {
        
        let smsText = conversation.short_term_memory.zipCode ? conversation.short_term_memory.smsTextWithPrice : conversation.short_term_memory.smsTextWithoutPrice
        let smsLink;
        let smsPrice;
        console.log(`zipCode: ${conversation.short_term_memory.zipCode}`);
        if (conversation.short_term_memory.zipCode) {
            const region = isIDF(conversation.short_term_memory.zipCode) ? 'idf' : 'province';
            console.log(`region: ${region}`);
            const issue = conversation.short_term_memory.issue;
            conversation.long_term_memory.smsIssue = issue;
            smsLink = conversation.short_term_memory.smsLinks[region][issue];
            smsPrice = getPrice();
        } else {
            smsLink = conversation.short_term_memory.smsLinks['ZipCodeKO'];
        }
        
        
        const smsPhoneNumber = conversation.short_term_memory.newPhoneNumber || conversation.short_term_memory.phoneNumber;
        conversation.long_term_memory.smsPhoneNumber = smsPhoneNumber;
        
        smsText = smsText.replace(/{{link}}/mgi, smsLink).replace(/{{price}}/mgi, smsPrice);
        console.log(`SMS TEXT : ${smsText}`);
        
        const baseUri = conversation.short_term_memory.baseUri;
        const token = conversation.short_term_memory.token;
        const request = require('request');
        const options = {
            method: 'POST',
            url: `${baseUri}/services/sms/v1/sms`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            json: {
            	number: smsPhoneNumber,
            	message: smsText,
            },
        };
        request(options, function(error, response, body) {
            console.log('Send SMS response : ');
            console.log(body);
            return cb();
        });
    },
    
    prepareConclusionResponse: () => {
        const moment = require('moment-timezone');
        const nowHours = moment().tz('Europe/Paris').format('HH');
        //var nowHours = 23;
        console.log(`Il est ${nowHours}h`);
        let conclusion = null;
        
        if (nowHours>=18) {
            conclusion = ` Pour consulter notre politique de protection de données personnelles, rendez-vous sur notre site homeserve.fr. A bientôt et bonne soirée`;
        } else {
            conclusion = ` Pour consulter notre politique de protection de données personnelles, rendez-vous sur notre site homeserve.fr. A bientôt et belle journée.`;
        }
        output.answer = `D'accord, je reste à votre service en cas de besoin. ${conclusion}`;
    }

});

conversation.short_term_memory.globalFunctions = `() => {
    const _functions = {};
    Object.keys(conversation.short_term_memory._globalFunctions).forEach((key) => { _functions[key] = eval(conversation.short_term_memory._globalFunctions[key]) });
    return _functions;
};
`;


///////////////////////////////////////


if (!conversation.long_term_memory.last_launch) {
    output.answer = 'Bonjour et bienvenue chez HomeServe,<break time="300ms"/> spécialiste des services pour la maison.<break time="500ms"/> Je suis Emma,<break time="300ms"/> je suis là pour vous aider<break time="100ms"/> et prendre en charge votre demande.<break time="500ms"/> En fonction de votre problème dites<break time="300ms"/> PLOMBERIE,<break time="300ms"/> ÉLECTRICITÉ<break time="300ms"/> ou GAZ.';
} else if (!conversation.long_term_memory.user) {
    output.answer = 'Bonjour, je suis Emma de HomeServe,<break time="300ms"/> que puis-je faire pour vous aujourd\'hui ?<break time="500ms"/> En fonction de votre problème dites,<break time="300ms"/> PLOMBERIE,<break time="300ms"/> ÉLECTRICITÉ<break time="300ms"/> ou GAZ.';
} else {
    output.answer = `Bonjour ${conversation.long_term_memory.user.title} ${conversation.long_term_memory.user.lastName}. Je suis Emma de HomeServe. Que puis-je faire pour vous aujourd\'hui ?`;
}
conversation.long_term_memory.last_launch = new Date();




// Warning: the callback below ends the code execution, 
// place it wisely so you don't interrupt any asynchronous task such as API calls...
callback(output);

// Mises mémoires des types de sinistre
// Fuite de gaz :
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
console.log("here")
conversation.short_term_memory.issue = `Gaz.Fuite`;
globalFunctions.addSuggestions(["Oui", "Non"]);
callback(output);
Contrôle de gaz :
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
conversation.short_term_memory.issue = `Gaz.Controle`;
globalFunctions.addSuggestions(['Oui', 'Non']);
callback(output);

// Changer Flexible :
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
conversation.short_term_memory.issue = `Gaz.Flexible`;
globalFunctions.addSuggestions(['Oui', 'Non']);
callback(output);

// Robinet de Gaz :
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
conversation.short_term_memory.issue = `Gaz.Robinet`;
globalFunctions.addSuggestions(['Oui', 'Non']);
callback(output);

// Electricité 
// Plus d’eau chaude :
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
conversation.short_term_memory.issue = `Electricite.EauChaude`;
globalFunctions.addSuggestions(['Oui', 'Non']);
callback(output);

// Electricité Panne :
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
conversation.short_term_memory.issue = `Electricite.Panne`;
globalFunctions.addSuggestions(['Oui', 'Non']);
callback(output);
// Plus de chauffage :
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
conversation.short_term_memory.issue = `Electricite.Radiateur`;
globalFunctions.addSuggestions(['Oui', 'Non']);
callback(output);

// Prise défectueuse :
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
conversation.short_term_memory.issue = `Electricite.Prise`;
globalFunctions.addSuggestions(['Oui', 'Non']);
callback(output);



// Interrupteur Défectueux :
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
conversation.short_term_memory.issue = `Electricite.Interrupteur`;
globalFunctions.addSuggestions(['Oui', 'Non']);
callback(output);

// Changement d’Ampoule :
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
conversation.short_term_memory.issue = `Electricite.Ampoule`;
globalFunctions.addSuggestions(['Oui', 'Non']);
callback(output);

// Fuite d’Eau Extérieure :
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
conversation.short_term_memory.issue = `Plomberie.FuiteEau.Exterieure`;
globalFunctions.addSuggestions(['Oui', 'Non']);
callback(output);

// Fuite d’Eau Intérieure :
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
conversation.short_term_memory.issue = `Plomberie.FuiteEau.Interieure`;
globalFunctions.addSuggestions(['Oui', 'Non']);

// Fuite d’Eau :
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
conversation.short_term_memory.issue = `Plomberie.FuiteEau`;
globalFunctions.addSuggestions(['Oui', 'Non']);
callback(output);

// Engorgement :
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
conversation.short_term_memory.issue = `Plomberie.Engorgement`;
globalFunctions.addSuggestions(['Oui', 'Non']);
callback(output);

// Mise en mémoire des conditions de sécurité de l’habitation
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
globalFunctions.addSuggestions(['Oui', 'Non']);
callback(output);

// Mise en mémoire Fuite de Gaz & Habitation en sécurité
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
conversation.short_term_memory.issue = `Gaz.Fuite`;
globalFunctions.addSuggestions(['Oui', 'Non']);
callback(output);

// Suppression des données utilisateurs
// Nettoyage des mémoires courtes et longs termes
delete conversation.short_term_memory.zipCode;
delete conversation.short_term_memory.phoneNumber;
delete conversation.short_term_memory.newPhoneNumber;
delete conversation.short_term_memory.clientId;
delete conversation.short_term_memory.issue;
delete conversation.long_term_memory.user;
// Warning: the callback below ends the code execution, 
// place it wisely so you don't interrupt any asynchronous task such as API calls...
callback(output);

// Ask Number
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
const { isPhoneNumberValidated, extractNumber } = globalFunctions;
console.log('Bot Action After Phone Number ou ZipCode');
const number = extractNumber();
console.log(`Number : ${number}`);
// Check zip Code structure
const zipCode = number;
const zipCodeRegExpValidation = new RegExp(conversation.short_term_memory.zipCodeRegExpValidation, 'im');
const zipCodeValidated = zipCodeRegExpValidation.test(zipCode);
if (input.intent !== 'Non' && zipCodeValidated) {
    conversation.short_term_memory.zipCode = zipCode;
    conversation.short_term_memory.zipCodeRetry = 0;
    output.answer = `OK ! J'ai bien compris ${zipCode}. Est-ce bien cela ?`;
    globalFunctions.addSuggestions(['Oui', 'Non']);
} else {
    if (!conversation.short_term_memory.zipCodeRetry) {
        conversation.short_term_memory.zipCodeRetry = 0;
    }
    conversation.short_term_memory.zipCodeRetry += 1;
    
    switch (conversation.short_term_memory.zipCodeRetry) {
        case 1:
            output.answer = `${input.intent !== 'Non' ? 'Je n\'ai pas compris. ' : ''}Vous pouvez dire 75017. Quel est votre code postal ?`;
            break;
        case 2:
            output.answer = `${input.intent !== 'Non' ? 'Je n\'ai pas compris. ' : ''}Pour vous géolocaliser, j'ai besoin de votre code postal complet ?
Quel est-il ?`;
            break;
        default: 
            output.answer = `Pas de souci, nous allons procéder autrement. Pouvez-vous me donner votre numéro de téléphone ? Si possible, le numéro inscrit dans votre contrat.`;
    }
}
    
// Warning: the callboack below ends the code execution, 
// place it wisely so you don't interrupt any asynchronous task such as API calls...
callback(output);
// Vérification du numéro de telephone 
conversation.short_term_memory.phoneNumberAsked = true;
callback(output);
// Récupération numéro client
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
const { prepareAdviceAndConclusionResponse } = globalFunctions;

if (conversation.short_term_memory.want_an_advice_state) {
   prepareAdviceAndConclusionResponse();
   
} else if (conversation.long_term_memory.zipCode) {
    output.answer = 'OK, pouvez-vous me donner les chiffres de votre numéro client qui suivent la lettre C sur votre contrat.';
}



// Warning: the callboack below ends the code execution, 
// place it wisely so you don't interrupt any asynchronous task such as API calls...
callback(output);
// Vérification du numéro client capté par l’application
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
const { isPhoneNumberValidated, extractNumber } = globalFunctions;

//const number = extractNumber();
let number = '';
if (input.system_entities.phone_number !== undefined){
    console.log(input.system_entities.phone_number[0].value);
    number = input.system_entities.phone_number[0].value;
} else if (input.system_entities.number !== undefined){
    console.log(input.system_entities.number[0].value)
    number = input.system_entities.number.reduce((acc, cur) => acc + cur.value.toString(), "");
}

console.log(number);
if (!conversation.short_term_memory.phoneNumberAsked) {
    // Client Id Case
    if (input.intent==='Non') {
    
        if (!conversation.short_term_memory.clientIdRetry) {
            conversation.short_term_memory.clientIdRetry = 0;
        }
        conversation.short_term_memory.clientIdRetry += 1;
        switch (conversation.short_term_memory.clientIdRetry) {
            case 1:
                output.answer = `Très bien. On recommence. Pouvez-vous me donner les chiffres de votre N° client qui suivent la lettre C sur votre contrat. `;    
                break;
            default:
                output.answer = 'Je ne suis pas parvenu à vous identifier. Nous allons essayé autrement ! Quel est votre numéro de téléphone inscrit dans votre contrat ?';
                conversation.short_term_memory.phoneNumberAsked = true;
            break;
        }
    } else {
        const clientId = number;
        console.log(clientId)
        console.log(number)
        let isClientIdNumerical = false;
        //number = number.replace("-","")
        try {
            let _ = parseInt(clientId, 10);
            isClientIdNumerical = true;
        } catch (e) {}
        
        if (clientId && isClientIdNumerical) {
            conversation.short_term_memory.clientId = clientId;
            output.answer = `OK ! je confirme : <prosody rate="70%"><say-as interpret-as="verbatim">${clientId}</say-as></prosody>, c'est bien ça ?`;
            globalFunctions.addSuggestions(['Oui', 'Non']);
        } else {
            output.answer = 'Je n\'ai pas compris votre numéro client. Veuillez retenter.';
        }
    }
    
    
} else {
    // Phone Number case
    const phoneNumber = number;
    if (input.intent !== 'Non' && isPhoneNumberValidated(phoneNumber)) {
        conversation.short_term_memory.phoneNumber = phoneNumber.replace(/\s/gi, '');
        conversation.short_term_memory.phoneNumberRetry = 0;
        output.answer = `OK ! je confirme : ${phoneNumber}, c'est bien ça ?`;
        globalFunctions.addSuggestions(['Oui', 'Non']);
    } else {
        if (!conversation.short_term_memory.phoneNumberRetry) {
            conversation.short_term_memory.phoneNumberRetry = 0;
        }
        conversation.short_term_memory.phoneNumberRetry += 1;
        
        switch (conversation.short_term_memory.phoneNumberRetry) {
            case 1:
                output.answer = `${input.intent !== 'Non' ? 'Je n\'ai pas compris. ' : ''}Pouvez-vous me donner votre numéro de téléphone ? Si possible, le numéro inscrit dans votre contrat.`;
                break;
            case 2:
                output.answer = `${input.intent !== 'Non' ? 'Je n\'ai pas compris. ' : ''}Vous pouvez dire les 10 chiffres de votre numéro de téléphone de la façon suivante : 06 87 88 99 00. A vous, quel votre numéro de téléphone ?`;
                break;
            default:
                output.answer = `Malheureusement, je ne suis pas parvenue à récupérer votre numéro de téléphone. Je vous invite à nous retrouver sur votre espace client sur notre site homeserve.fr. A bientôt !`;
                output.end_session = true;
                break;
        }
    }
}


// Warning: the callboack below ends the code execution, 
// place it wisely so you don't interrupt any asynchronous task such as API calls...
callback(output);
Identification client
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
const { 
    checkZipCode, 
    getMobileNumber, 
    phoneNumberChoose, 
    identifyClientByClientId, 
    identifyClientByPhoneNumber, 
    generateNotIdentifiedClientResponse, 
    prepareConclusionResponse,
    extractPhoneNumber,
    isPhoneNumberValidated,
    askAnotherTimePhoneNumber,
} = globalFunctions;

const zipCode = conversation.short_term_memory.zipCode;
const phoneNumber = extractPhoneNumber();

if (conversation.short_term_memory.clientId && !conversation.long_term_memory.user) {
    console.log(`Try to find with client Id : ${conversation.short_term_memory.clientId}`)
    identifyClientByClientId((user) => {
        if (user) {
            conversation.long_term_memory.user = user;
            if (checkZipCode(zipCode, user)) {
                const phoneNumber = getMobileNumber(user);
                
                phoneNumberChoose(user, phoneNumber);
                
            } else {
                output.answer = 'Je ne suis pas parvenu à vous identifier. Nous allons essayer autrement ! Quel est votre numéro de téléphone inscrit dans votre contrat ?';
                // Clean Wrong clientId
                delete conversation.short_term_memory.clientId;
            }
        }  else {
            output.answer = 'Je ne suis pas parvenu à vous identifier. Nous allons essayer autrement ! Quel est votre numéro de téléphone inscrit dans votre contrat ?';
            
            // Clean Wrong clientId
            delete conversation.short_term_memory.clientId;
        }
        callback(output);
    });
    
} else if (input.intent !== 'Non' && !phoneNumber) {
    identifyClientByPhoneNumber((user) => {
        if (user) {
            conversation.long_term_memory.user = user;
            const phoneNumber = getMobileNumber(user);
            phoneNumberChoose(user, phoneNumber);
        }  else {
            generateNotIdentifiedClientResponse();
        }
        callback(output);
    });
} else if (input.intent === 'Non' && conversation.short_term_memory.not_identified_client) { // Client not identified
    prepareConclusionResponse();
    output.end_session = true;
    callback(output);
} else if (input.intent === 'Non') {  // Client identified
    askAnotherTimePhoneNumber();
    callback(output);
} else if (phoneNumber) {
    
    if (isPhoneNumberValidated(phoneNumber)) {
        conversation.short_term_memory.newPhoneNumber = phoneNumber;
        conversation.short_term_memory.newPhoneNumberRetry = 1;
        output.answer = `OK ! je confirme : ${phoneNumber}, c'est bien ça ?`;
        globalFunctions.addSuggestions(['Oui', 'Non']);
    } else {
        askAnotherTimePhoneNumber();
    }
    conversation.short_term_memory.newPhoneNumber = phoneNumber;
    callback(output);
Requête de callback
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
const { askPhoneCallBack, generateIdentifiedClientResponse } = globalFunctions;

const user = conversation.long_term_memory.user;
generateIdentifiedClientResponse(user);
askPhoneCallBack(() => {
    callback(output);
    
});
// Vérification Client
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
const { askPhoneCallBack, callBackAnnounce, prepareAdviceAndConclusionResponse } = globalFunctions;

if (conversation.short_term_memory.not_identified_client) { // Client not identified
    prepareAdviceAndConclusionResponse();
    callback(output);
        
} else { // Client identified
    console.log('Client identified')
    if (conversation.short_term_memory.newPhoneNumber && conversation.long_term_memory.user) {
        conversation.long_term_memory.user.phones = conversation.long_term_memory.user.phones
            .filter(phone => phone.type !== 'mobile');
        conversation.long_term_memory.user.phones.push({
                type: "mobile",
                number: conversation.short_term_memory.newPhoneNumber
            });
        console.log(conversation.long_term_memory.user.phones);
    }
    callBackAnnounce();
    askPhoneCallBack(() => {
        callback(output);
    });    
}

// Fin de discussion
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
const { prepareAdviceAndConclusionResponse } = globalFunctions;

prepareAdviceAndConclusionResponse();

// Warning: the callboack below ends the code execution, 
// place it wisely so you don't interrupt any asynchronous task such as API calls...
callback(output);
// Fin de dicussion (2)
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
const { prepareConclusionResponse } = globalFunctions;

prepareConclusionResponse();
output.end_session = true;

// Warning: the callboack below ends the code execution, 
// place it wisely so you don't interrupt any asynchronous task such as API calls...
callback(output);
// Contrat HomeServe
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
const { 
    getMobileNumber, 
    phoneNumberChoose,
    extractPhoneNumber,
    prepareConclusionResponse,
    isPhoneNumberValidated,
    addSuggestions,
    askAnotherTimePhoneNumber,
} = globalFunctions;

const user = conversation.long_term_memory.user;
const phoneNumber = extractPhoneNumber();

if (user) {
    if (!phoneNumber) {
        const mobilePhoneNumber = getMobileNumber(user);
        console.log(`mobilePhoneNumber : ${mobilePhoneNumber}`);
        if (!mobilePhoneNumber) {
            delete conversation.long_term_memory.user;
            //output.answer = 'Très bien, avez-vous un contrat Homeserve ?';
            output.answer = 'Très bien, avez-vous un contrat <sub alias="home sèrve">Homeserve ?</sub>';
            globalFunctions.addSuggestions(['Oui', 'Non']);
        } else {
            phoneNumberChoose(user, mobilePhoneNumber);    
        }
    } else {
        if (isPhoneNumberValidated(phoneNumber)) {
            conversation.short_term_memory.newPhoneNumber = phoneNumber;
            conversation.short_term_memory.newPhoneNumberRetry = 1;
            output.answer = `OK ! je confirme : ${phoneNumber}, c'est bien ça ?`;
            addSuggestions(['Oui', 'Non']);
        } else {
            askAnotherTimePhoneNumber();
        }
        conversation.short_term_memory.newPhoneNumber = phoneNumber;
        callback(output);
    }
} else {
    //output.answer = 'Très bien, avez-vous un contrat Homeserve ?';
    output.answer = 'Très bien, avez-vous un contrat <sub alias="home sèrve">Homeserve ?</sub>';
    globalFunctions.addSuggestions(['Oui', 'Non']);
}

// Warning: the callboack below ends the code execution, 
// place it wisely so you don't interrupt any asynchronous task such as API calls...
callback(output);
Proposition envoi SMS
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();

output.answer = `Pas de problème. J'ai une solution pour vous avec notre site HomeServe DepannEtMoi, qui permet de faire un diagnostic pour un dépannage d'urgence à la demande. 
Souhaitez-vous recevoir un lien par SMS pour affiner votre diagnostic ? `;
globalFunctions.addSuggestions(['Oui', 'Non']);
callback(output);
 Numéro de Portable
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
const { manageWrongPhoneNumber, isPhoneNumberValidated, extractPhoneNumber } = globalFunctions;

console.log('Bot Action After Phone Number');

const number = extractPhoneNumber();
console.log(`Number : ${number}`);

if (input.intent==='Non') {
    manageWrongPhoneNumber();
    
} else if (number) {

    if (!conversation.short_term_memory.phoneNumber || (!conversation.short_term_memory.phoneNumberRetry || conversation.short_term_memory.phoneNumberRetry < 3)) { 
        // PhoneNumber Case
        
        const phoneNumber = number;
        if (isPhoneNumberValidated(phoneNumber)) {
            conversation.short_term_memory.phoneNumber = phoneNumber.replace(/\s/gi, '');
            conversation.short_term_memory.phoneNumberRetry = 0;
            output.answer = `OK ! je confirme : ${phoneNumber}, c'est bien ça ?`;
            globalFunctions.addSuggestions(['Oui', 'Non']);
        } else {
            manageWrongPhoneNumber();
        }
    }
} else {
    output.answer = 'Je n\'ai pas compris. Quel est votre numéro de téléphone portable ?';
}

// Warning: the callboack below ends the code execution, 
// place it wisely so you don't interrupt any asynchronous task such as API calls...
callback(output);
Envoi du SMS
console.log('Bot Action After Phone Number ou ZipCode Prospect');


const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
const { 
    isIDF, 
    getPrice, 
    sendSMS, 
    prepareAdviceAndConclusionResponse, 
    prepareConclusionResponse,
    extractNumber
} = globalFunctions;

const number = extractNumber();

// Check zip Code structure
const zipCode = number;
const zipCodeRegExpValidation = new RegExp(conversation.short_term_memory.zipCodeRegExpValidation, 'im');
const zipCodeValidated = zipCodeRegExpValidation.test(zipCode);
console.log(`number: ${number}`);
console.log(`zipCodeValidated: ${zipCodeValidated}`);

if (input.intent === 'Oui'  && conversation.short_term_memory.smsSent) {
    console.log(`Oui + SMS Sent`);
    prepareAdviceAndConclusionResponse();
    callback(output);
} else if (input.intent === 'Non'  && conversation.short_term_memory.smsSent) {
    console.log(`Non + SMS Sent`);
    prepareConclusionResponse();
    output.end_session = true;
    callback(output);
} else if (input.intent === 'Oui') {
    console.log(`Oui`);
    console.log(`Préparation de l'envoi du sms`);
    conversation.short_term_memory.zipCodeRetry = 0;
    const issue = conversation.short_term_memory.issue;
    const issueLabels = conversation.short_term_memory.issueLabels;
    const price = getPrice();
    console.log(`Price : ${price}`);
    output.answer = `Je vous envoie un SMS pour établir votre devis. Sachez-que pour la prestation "${issueLabels[issue]}", nos tarifs sont à partir de ${price}. En attendant, souhaitez-vous recevoir quelques conseils ?`;
    globalFunctions.addSuggestions(['Oui', 'Non']);
    console.log(`Envoi du SMS`);
    sendSMS(() => {
        conversation.short_term_memory.smsSent = true;
        console.log(`Envoyé`);
        callback(output);
    });
} else if (input.intent !== 'Non' && zipCodeValidated) {
    console.log(`!Non + Zip Validated`);
    conversation.short_term_memory.zipCode = zipCode;
    output.answer = `OK ! J'ai bien compris ${zipCode}. Est-ce bien cela ?`;
    callback(output);
} else {
    if (!conversation.short_term_memory.zipCodeRetry) {
        conversation.short_term_memory.zipCodeRetry = 0;
    }
    conversation.short_term_memory.zipCodeRetry += 1;
    
    switch (conversation.short_term_memory.zipCodeRetry) {
        case 1:
            output.answer = `${input.intent !== 'Non' ? 'Je n\'ai pas compris. ' : ''}Vous pouvez dire 75017. Quel est votre code postal ?`;
            callback(output);
            break;
        case 2:
            output.answer = `${input.intent !== 'Non' ? 'Je n\'ai toujours pas compris. ' : ''}Pour vous géolocaliser, j'ai besoin de votre code postal complet ?
Quel est-il ?`;
            callback(output);
            break;
        default: 
            output.answer = `Je n'ai pas compris votre code postal mais je vous envoie tout de même un SMS pour établir votre devis. En attendant, souhaitez-vous recevoir quelques conseils ?`;
            delete conversation.short_term_memory.zipCode;
            sendSMS(() => {
                conversation.short_term_memory.smsSent = true;
                callback(output);
            });
    }
}
SMS KO
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
const { addSuggestions } = globalFunctions; 
const { issueLabels } = conversation.short_term_memory;

const smsIssue = conversation.long_term_memory.smsIssue;
const smsPhoneNumber = conversation.long_term_memory.smsPhoneNumber;

if (!smsIssue || !smsPhoneNumber) {
    output.answer = `Oops... Je ne me rappelle pas avoir noté de vous envoyer un SMS. Je suis désolé. Souhaitez-vous qualifier de nouveau votre problème ?`;
} else {
    output.answer = `Oops... Je vais remédier à cela. Pour rappel, votre demande concerne ${issueLabels[smsIssue]}. C'est bien ça ? `;
}
addSuggestions(['Oui', 'Non']);


// Warning: the callboack below ends the code execution, 
// place it wisely so you don't interrupt any asynchronous task such as API calls...
callback(output);
Confirmation type de demande
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
const { addSuggestions } = globalFunctions;

const smsIssue = conversation.long_term_memory.smsIssue;
const smsPhoneNumber = conversation.long_term_memory.smsPhoneNumber;
if (!smsIssue || !smsPhoneNumber) {
    output.answer = `Très bien, vous rencontrez un problème de plomberie, d'éléctricité ou de gaz ?`;
} else {
    output.answer = `D'accord, je vous ai envoyé un SMS au ${smsPhoneNumber}. Ce numéro est-il correct ?`
    addSuggestions(['Oui', 'Non']);
}

// Warning: the callboack below ends the code execution, 
// place it wisely so you don't interrupt any asynchronous task such as API calls...
callback(output);
Non confirmation de la demande
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
const { prepareConclusionResponse } = globalFunctions;
const smsIssue = conversation.long_term_memory.smsIssue;
const smsPhoneNumber = conversation.long_term_memory.smsPhoneNumber;

if (!smsIssue || !smsPhoneNumber) {
    prepareConclusionResponse();
    output.end_session = true;
} else {
    output.answer = `Ah, dans ce cas, je vous invite à requalifier votre problème.\nPar exemple si vous avez un problème de plomberie, dites plomberie.\nA vous !`;
}
// Warning: the callboack below ends the code execution, 
// place it wisely so you don't interrupt any asynchronous task such as API calls...
callback(output);
// Récupération numéro de téléphone
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
const { addSuggestions } = globalFunctions;

const number = input.entities.number && input.entities.number[1] ? input.entities.number[1].string : input.text;
const newPhoneNumber = number;
const phoneNumberRegExpValidation = new RegExp(conversation.short_term_memory.phoneNumberRegExpValidation, 'im');
console.log(phoneNumberRegExpValidation);
const phoneNumberValidated = phoneNumberRegExpValidation.test(newPhoneNumber);
if (input.intent !== 'Non' && phoneNumberValidated) {
    conversation.short_term_memory.newPhoneNumber = newPhoneNumber;
    conversation.short_term_memory.newPhoneNumberRetry = 1;
    output.answer = `OK ! je confirme : ${newPhoneNumber}, c'est bien ça ?`;
    addSuggestions(['Oui', 'Non']);
} else {
    if (!conversation.short_term_memory.newPhoneNumberRetry) {
        conversation.short_term_memory.newPhoneNumberRetry = 0;
    }
    conversation.short_term_memory.newPhoneNumberRetry += 1;
    switch (conversation.short_term_memory.newPhoneNumberRetry) {
        case 1:
            output.answer = 'Je n\'ai pas compris.Quel est votre numéro de téléphone portable ?';
            break;
        case 2:
            output.answer = 'Je ne vous ai toujours pas compris.Vous pouvez-dire les 10 chiffres de votre numero de telephone de la façon suivante : 06 87 88 99 00. A vous, quel votre numéro de téléphone portable ?';
            break;
        default:
            output.answer = 'Malheureusement, je ne suis pas parvenue à récupérer votre numéro de téléphone. Je vous invite à établir un devis sur notre site depannetmoi.homeserve.fr. A bientôt !';
            output.end_session = true;
            break;
    }
}

// Warning: the callboack below ends the code execution, 
// place it wisely so you don't interrupt any asynchronous task such as API calls...
callback(output);
// Envoi SMS (2)
const globalFunctions = eval(conversation.short_term_memory.globalFunctions)();
const { isIDF, getPrice, sendSMS } = globalFunctions;

console.log('Bot Action After Phone Number ou ZipCode Prospect');

sendSMS(() => {
    output.answer = `C'est fait. Vous le recevrez d'ici quelques instants ! que puis-je faire d'autre pour vous ?`;
    callback(output);
});
