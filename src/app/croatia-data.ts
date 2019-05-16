import { InMemoryDbService } from 'angular-in-memory-web-api';

import {County, Town, Community} from './croatia';

export class CroatiaData implements InMemoryDbService {

  createDb() {
    const counties: County[] = [
        {
            "entityType": 1,
            "ID": 1,
            "name": "ZAGREBAČKA"
        },
        {
            "entityType": 1,
            "ID": 2,
            "name": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 1,
            "ID": 3,
            "name": "SISAČKO-MOSLAVAČKA"
        },
        {
            "entityType": 1,
            "ID": 4,
            "name": "KARLOVAČKA"
        },
        {
            "entityType": 1,
            "ID": 5,
            "name": "VARAŽDINSKA"
        },
        {
            "entityType": 1,
            "ID": 6,
            "name": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 1,
            "ID": 7,
            "name": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 1,
            "ID": 8,
            "name": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 1,
            "ID": 9,
            "name": "LIČKO-SENJSKA"
        },
        {
            "entityType": 1,
            "ID": 10,
            "name": "VIROVITIČKO-PODRAVSKA"
        },
        {
            "entityType": 1,
            "ID": 11,
            "name": "POŽEŠKO-SLAVONSKA"
        },
        {
            "entityType": 1,
            "ID": 12,
            "name": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 1,
            "ID": 13,
            "name": "ZADARSKA"
        },
        {
            "entityType": 1,
            "ID": 14,
            "name": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 1,
            "ID": 15,
            "name": "ŠIBENSKO-KNINSKA"
        },
        {
            "entityType": 1,
            "ID": 16,
            "name": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 1,
            "ID": 17,
            "name": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 1,
            "ID": 18,
            "name": "ISTARSKA"
        },
        {
            "entityType": 1,
            "ID": 19,
            "name": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 1,
            "ID": 20,
            "name": "MEĐIMURSKA"
        },
        {
            "entityType": 1,
            "ID": 21,
            "name": "GRAD ZAGREB"
        }
    ];

    const towns: Town[] = [
      {
        "entityType": 2,
        "ID": 1,
        "name": "Dugo Selo",
        "countyID": 1,
        "countyName": "ZAGREBAČKA"
    },
    {
        "entityType": 2,
        "ID": 2,
        "name": "Ivanić-Grad",
        "countyID": 1,
        "countyName": "ZAGREBAČKA"
    },
    {
        "entityType": 2,
        "ID": 3,
        "name": "Jastrebarsko",
        "countyID": 1,
        "countyName": "ZAGREBAČKA"
    },
    {
        "entityType": 2,
        "ID": 4,
        "name": "Samobor",
        "countyID": 1,
        "countyName": "ZAGREBAČKA"
    },
    {
        "entityType": 2,
        "ID": 5,
        "name": "Sveta Nedelja",
        "countyID": 1,
        "countyName": "ZAGREBAČKA"
    },
    {
        "entityType": 2,
        "ID": 6,
        "name": "Sveti Ivan Zelina",
        "countyID": 1,
        "countyName": "ZAGREBAČKA"
    },
    {
        "entityType": 2,
        "ID": 7,
        "name": "Velika Gorica",
        "countyID": 1,
        "countyName": "ZAGREBAČKA"
    },
    {
        "entityType": 2,
        "ID": 8,
        "name": "Vrbovec",
        "countyID": 1,
        "countyName": "ZAGREBAČKA"
    },
    {
        "entityType": 2,
        "ID": 9,
        "name": "Zaprešić",
        "countyID": 1,
        "countyName": "ZAGREBAČKA"
    },
    {
        "entityType": 2,
        "ID": 10,
        "name": "Donja Stubica",
        "countyID": 2,
        "countyName": "KRAPINSKO-ZAGORSKA"
    },
    {
        "entityType": 2,
        "ID": 11,
        "name": "Klanjec",
        "countyID": 2,
        "countyName": "KRAPINSKO-ZAGORSKA"
    },
    {
        "entityType": 2,
        "ID": 12,
        "name": "Krapina",
        "countyID": 2,
        "countyName": "KRAPINSKO-ZAGORSKA"
    },
    {
        "entityType": 2,
        "ID": 13,
        "name": "Oroslavje",
        "countyID": 2,
        "countyName": "KRAPINSKO-ZAGORSKA"
    },
    {
        "entityType": 2,
        "ID": 14,
        "name": "Pregrada",
        "countyID": 2,
        "countyName": "KRAPINSKO-ZAGORSKA"
    },
    {
        "entityType": 2,
        "ID": 15,
        "name": "Zabok",
        "countyID": 2,
        "countyName": "KRAPINSKO-ZAGORSKA"
    },
    {
        "entityType": 2,
        "ID": 16,
        "name": "Zlatar",
        "countyID": 2,
        "countyName": "KRAPINSKO-ZAGORSKA"
    },
    {
        "entityType": 2,
        "ID": 17,
        "name": "Glina",
        "countyID": 3,
        "countyName": "SISAČKO-MOSLAVAČKA"
    },
    {
        "entityType": 2,
        "ID": 18,
        "name": "Hrvatska Kostajnica",
        "countyID": 3,
        "countyName": "SISAČKO-MOSLAVAČKA"
    },
    {
        "entityType": 2,
        "ID": 19,
        "name": "Kutina",
        "countyID": 3,
        "countyName": "SISAČKO-MOSLAVAČKA"
    },
    {
        "entityType": 2,
        "ID": 20,
        "name": "Novska",
        "countyID": 3,
        "countyName": "SISAČKO-MOSLAVAČKA"
    },
    {
        "entityType": 2,
        "ID": 21,
        "name": "Petrinja",
        "countyID": 3,
        "countyName": "SISAČKO-MOSLAVAČKA"
    },
    {
        "entityType": 2,
        "ID": 22,
        "name": "Popovača",
        "countyID": 3,
        "countyName": "SISAČKO-MOSLAVAČKA"
    },
    {
        "entityType": 2,
        "ID": 23,
        "name": "Sisak",
        "countyID": 3,
        "countyName": "SISAČKO-MOSLAVAČKA"
    },
    {
        "entityType": 2,
        "ID": 24,
        "name": "Duga Resa",
        "countyID": 4,
        "countyName": "KARLOVAČKA"
    },
    {
        "entityType": 2,
        "ID": 25,
        "name": "Karlovac",
        "countyID": 4,
        "countyName": "KARLOVAČKA"
    },
    {
        "entityType": 2,
        "ID": 26,
        "name": "Ogulin",
        "countyID": 4,
        "countyName": "KARLOVAČKA"
    },
    {
        "entityType": 2,
        "ID": 27,
        "name": "Ozalj",
        "countyID": 4,
        "countyName": "KARLOVAČKA"
    },
    {
        "entityType": 2,
        "ID": 28,
        "name": "Slunj",
        "countyID": 4,
        "countyName": "KARLOVAČKA"
    },
    {
        "entityType": 2,
        "ID": 29,
        "name": "Ivanec",
        "countyID": 5,
        "countyName": "VARAŽDINSKA"
    },
    {
        "entityType": 2,
        "ID": 30,
        "name": "Lepoglava",
        "countyID": 5,
        "countyName": "VARAŽDINSKA"
    },
    {
        "entityType": 2,
        "ID": 31,
        "name": "Ludbreg",
        "countyID": 5,
        "countyName": "VARAŽDINSKA"
    },
    {
        "entityType": 2,
        "ID": 32,
        "name": "Novi Marof",
        "countyID": 5,
        "countyName": "VARAŽDINSKA"
    },
    {
        "entityType": 2,
        "ID": 33,
        "name": "Varaždin",
        "countyID": 5,
        "countyName": "VARAŽDINSKA"
    },
    {
        "entityType": 2,
        "ID": 34,
        "name": "Varaždinske Toplice",
        "countyID": 5,
        "countyName": "VARAŽDINSKA"
    },
    {
        "entityType": 2,
        "ID": 35,
        "name": "Đurđevac",
        "countyID": 6,
        "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
    },
    {
        "entityType": 2,
        "ID": 36,
        "name": "Koprivnica",
        "countyID": 6,
        "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
    },
    {
        "entityType": 2,
        "ID": 37,
        "name": "Križevci",
        "countyID": 6,
        "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
    },
    {
        "entityType": 2,
        "ID": 38,
        "name": "Bjelovar",
        "countyID": 7,
        "countyName": "BJELOVARSKO-BILOGORSKA"
    },
    {
        "entityType": 2,
        "ID": 39,
        "name": "Čazma",
        "countyID": 7,
        "countyName": "BJELOVARSKO-BILOGORSKA"
    },
    {
        "entityType": 2,
        "ID": 40,
        "name": "Daruvar",
        "countyID": 7,
        "countyName": "BJELOVARSKO-BILOGORSKA"
    },
    {
        "entityType": 2,
        "ID": 41,
        "name": "Garešnica",
        "countyID": 7,
        "countyName": "BJELOVARSKO-BILOGORSKA"
    },
    {
        "entityType": 2,
        "ID": 42,
        "name": "Grubišno Polje",
        "countyID": 7,
        "countyName": "BJELOVARSKO-BILOGORSKA"
    },
    {
        "entityType": 2,
        "ID": 43,
        "name": "Bakar",
        "countyID": 8,
        "countyName": "PRIMORSKO-GORANSKA"
    },
    {
        "entityType": 2,
        "ID": 44,
        "name": "Cres",
        "countyID": 8,
        "countyName": "PRIMORSKO-GORANSKA"
    },
    {
        "entityType": 2,
        "ID": 45,
        "name": "Crikvenica",
        "countyID": 8,
        "countyName": "PRIMORSKO-GORANSKA"
    },
    {
        "entityType": 2,
        "ID": 46,
        "name": "Čabar",
        "countyID": 8,
        "countyName": "PRIMORSKO-GORANSKA"
    },
    {
        "entityType": 2,
        "ID": 47,
        "name": "Delnice",
        "countyID": 8,
        "countyName": "PRIMORSKO-GORANSKA"
    },
    {
        "entityType": 2,
        "ID": 48,
        "name": "Kastav",
        "countyID": 8,
        "countyName": "PRIMORSKO-GORANSKA"
    },
    {
        "entityType": 2,
        "ID": 49,
        "name": "Kraljevica",
        "countyID": 8,
        "countyName": "PRIMORSKO-GORANSKA"
    },
    {
        "entityType": 2,
        "ID": 50,
        "name": "Krk",
        "countyID": 8,
        "countyName": "PRIMORSKO-GORANSKA"
    },
    {
        "entityType": 2,
        "ID": 51,
        "name": "Mali Lošinj",
        "countyID": 8,
        "countyName": "PRIMORSKO-GORANSKA"
    },
    {
        "entityType": 2,
        "ID": 52,
        "name": "Novi Vinodolski",
        "countyID": 8,
        "countyName": "PRIMORSKO-GORANSKA"
    },
    {
        "entityType": 2,
        "ID": 53,
        "name": "Opatija",
        "countyID": 8,
        "countyName": "PRIMORSKO-GORANSKA"
    },
    {
        "entityType": 2,
        "ID": 54,
        "name": "Rab",
        "countyID": 8,
        "countyName": "PRIMORSKO-GORANSKA"
    },
    {
        "entityType": 2,
        "ID": 55,
        "name": "Rijeka",
        "countyID": 8,
        "countyName": "PRIMORSKO-GORANSKA"
    },
    {
        "entityType": 2,
        "ID": 56,
        "name": "Vrbovsko",
        "countyID": 8,
        "countyName": "PRIMORSKO-GORANSKA"
    },
    {
        "entityType": 2,
        "ID": 57,
        "name": "Gospić",
        "countyID": 9,
        "countyName": "LIČKO-SENJSKA"
    },
    {
        "entityType": 2,
        "ID": 58,
        "name": "Novalja",
        "countyID": 9,
        "countyName": "LIČKO-SENJSKA"
    },
    {
        "entityType": 2,
        "ID": 59,
        "name": "Otočac",
        "countyID": 9,
        "countyName": "LIČKO-SENJSKA"
    },
    {
        "entityType": 2,
        "ID": 60,
        "name": "Senj",
        "countyID": 9,
        "countyName": "LIČKO-SENJSKA"
    },
    {
        "entityType": 2,
        "ID": 61,
        "name": "Orahovica",
        "countyID": 10,
        "countyName": "VIROVITIČKO-PODRAVSKA"
    },
    {
        "entityType": 2,
        "ID": 62,
        "name": "Slatina",
        "countyID": 10,
        "countyName": "VIROVITIČKO-PODRAVSKA"
    },
    {
        "entityType": 2,
        "ID": 63,
        "name": "Virovitica",
        "countyID": 10,
        "countyName": "VIROVITIČKO-PODRAVSKA"
    },
    {
        "entityType": 2,
        "ID": 64,
        "name": "Kutjevo",
        "countyID": 11,
        "countyName": "POŽEŠKO-SLAVONSKA"
    },
    {
        "entityType": 2,
        "ID": 65,
        "name": "Lipik",
        "countyID": 11,
        "countyName": "POŽEŠKO-SLAVONSKA"
    },
    {
        "entityType": 2,
        "ID": 66,
        "name": "Pakrac",
        "countyID": 11,
        "countyName": "POŽEŠKO-SLAVONSKA"
    },
    {
        "entityType": 2,
        "ID": 67,
        "name": "Pleternica",
        "countyID": 11,
        "countyName": "POŽEŠKO-SLAVONSKA"
    },
    {
        "entityType": 2,
        "ID": 68,
        "name": "Požega",
        "countyID": 11,
        "countyName": "POŽEŠKO-SLAVONSKA"
    },
    {
        "entityType": 2,
        "ID": 69,
        "name": "Nova Gradiška",
        "countyID": 12,
        "countyName": "BRODSKO-POSAVSKA"
    },
    {
        "entityType": 2,
        "ID": 70,
        "name": "Slavonski Brod",
        "countyID": 12,
        "countyName": "BRODSKO-POSAVSKA"
    },
    {
        "entityType": 2,
        "ID": 71,
        "name": "Benkovac",
        "countyID": 13,
        "countyName": "ZADARSKA"
    },
    {
        "entityType": 2,
        "ID": 72,
        "name": "Biograd na Moru",
        "countyID": 13,
        "countyName": "ZADARSKA"
    },
    {
        "entityType": 2,
        "ID": 73,
        "name": "Nin",
        "countyID": 13,
        "countyName": "ZADARSKA"
    },
    {
        "entityType": 2,
        "ID": 74,
        "name": "Obrovac",
        "countyID": 13,
        "countyName": "ZADARSKA"
    },
    {
        "entityType": 2,
        "ID": 75,
        "name": "Pag",
        "countyID": 13,
        "countyName": "ZADARSKA"
    },
    {
        "entityType": 2,
        "ID": 76,
        "name": "Zadar",
        "countyID": 13,
        "countyName": "ZADARSKA"
    },
    {
        "entityType": 2,
        "ID": 77,
        "name": "Beli Manastir",
        "countyID": 14,
        "countyName": "OSJEČKO-BARANJSKA"
    },
    {
        "entityType": 2,
        "ID": 78,
        "name": "Belišće",
        "countyID": 14,
        "countyName": "OSJEČKO-BARANJSKA"
    },
    {
        "entityType": 2,
        "ID": 79,
        "name": "Donji Miholjac",
        "countyID": 14,
        "countyName": "OSJEČKO-BARANJSKA"
    },
    {
        "entityType": 2,
        "ID": 80,
        "name": "Đakovo",
        "countyID": 14,
        "countyName": "OSJEČKO-BARANJSKA"
    },
    {
        "entityType": 2,
        "ID": 81,
        "name": "Našice",
        "countyID": 14,
        "countyName": "OSJEČKO-BARANJSKA"
    },
    {
        "entityType": 2,
        "ID": 82,
        "name": "Osijek",
        "countyID": 14,
        "countyName": "OSJEČKO-BARANJSKA"
    },
    {
        "entityType": 2,
        "ID": 83,
        "name": "Valpovo",
        "countyID": 14,
        "countyName": "OSJEČKO-BARANJSKA"
    },
    {
        "entityType": 2,
        "ID": 84,
        "name": "Drniš",
        "countyID": 15,
        "countyName": "ŠIBENSKO-KNINSKA"
    },
    {
        "entityType": 2,
        "ID": 85,
        "name": "Knin",
        "countyID": 15,
        "countyName": "ŠIBENSKO-KNINSKA"
    },
    {
        "entityType": 2,
        "ID": 86,
        "name": "Skradin",
        "countyID": 15,
        "countyName": "ŠIBENSKO-KNINSKA"
    },
    {
        "entityType": 2,
        "ID": 87,
        "name": "Šibenik",
        "countyID": 15,
        "countyName": "ŠIBENSKO-KNINSKA"
    },
    {
        "entityType": 2,
        "ID": 88,
        "name": "Vodice",
        "countyID": 15,
        "countyName": "ŠIBENSKO-KNINSKA"
    },
    {
        "entityType": 2,
        "ID": 89,
        "name": "Ilok",
        "countyID": 16,
        "countyName": "VUKOVARSKO-SRIJEMSKA"
    },
    {
        "entityType": 2,
        "ID": 90,
        "name": "Otok",
        "countyID": 16,
        "countyName": "VUKOVARSKO-SRIJEMSKA"
    },
    {
        "entityType": 2,
        "ID": 91,
        "name": "Vinkovci",
        "countyID": 16,
        "countyName": "VUKOVARSKO-SRIJEMSKA"
    },
    {
        "entityType": 2,
        "ID": 92,
        "name": "Vukovar",
        "countyID": 16,
        "countyName": "VUKOVARSKO-SRIJEMSKA"
    },
    {
        "entityType": 2,
        "ID": 93,
        "name": "Županja",
        "countyID": 16,
        "countyName": "VUKOVARSKO-SRIJEMSKA"
    },
    {
        "entityType": 2,
        "ID": 94,
        "name": "Hvar",
        "countyID": 17,
        "countyName": "SPLITSKO-DALMATINSKA"
    },
    {
        "entityType": 2,
        "ID": 95,
        "name": "Imotski",
        "countyID": 17,
        "countyName": "SPLITSKO-DALMATINSKA"
    },
    {
        "entityType": 2,
        "ID": 96,
        "name": "Kaštela",
        "countyID": 17,
        "countyName": "SPLITSKO-DALMATINSKA"
    },
    {
        "entityType": 2,
        "ID": 97,
        "name": "Komiža",
        "countyID": 17,
        "countyName": "SPLITSKO-DALMATINSKA"
    },
    {
        "entityType": 2,
        "ID": 98,
        "name": "Makarska",
        "countyID": 17,
        "countyName": "SPLITSKO-DALMATINSKA"
    },
    {
        "entityType": 2,
        "ID": 99,
        "name": "Omiš",
        "countyID": 17,
        "countyName": "SPLITSKO-DALMATINSKA"
    },
    {
        "entityType": 2,
        "ID": 100,
        "name": "Sinj",
        "countyID": 17,
        "countyName": "SPLITSKO-DALMATINSKA"
    },
    {
        "entityType": 2,
        "ID": 101,
        "name": "Solin",
        "countyID": 17,
        "countyName": "SPLITSKO-DALMATINSKA"
    },
    {
        "entityType": 2,
        "ID": 102,
        "name": "Split",
        "countyID": 17,
        "countyName": "SPLITSKO-DALMATINSKA"
    },
    {
        "entityType": 2,
        "ID": 103,
        "name": "Stari Grad",
        "countyID": 17,
        "countyName": "SPLITSKO-DALMATINSKA"
    },
    {
        "entityType": 2,
        "ID": 104,
        "name": "Supetar",
        "countyID": 17,
        "countyName": "SPLITSKO-DALMATINSKA"
    },
    {
        "entityType": 2,
        "ID": 105,
        "name": "Trilj",
        "countyID": 17,
        "countyName": "SPLITSKO-DALMATINSKA"
    },
    {
        "entityType": 2,
        "ID": 106,
        "name": "Trogir",
        "countyID": 17,
        "countyName": "SPLITSKO-DALMATINSKA"
    },
    {
        "entityType": 2,
        "ID": 107,
        "name": "Vis",
        "countyID": 17,
        "countyName": "SPLITSKO-DALMATINSKA"
    },
    {
        "entityType": 2,
        "ID": 108,
        "name": "Vrgorac",
        "countyID": 17,
        "countyName": "SPLITSKO-DALMATINSKA"
    },
    {
        "entityType": 2,
        "ID": 109,
        "name": "Vrlika",
        "countyID": 17,
        "countyName": "SPLITSKO-DALMATINSKA"
    },
    {
        "entityType": 2,
        "ID": 110,
        "name": "Buje-Buie",
        "countyID": 18,
        "countyName": "ISTARSKA"
    },
    {
        "entityType": 2,
        "ID": 111,
        "name": "Buzet",
        "countyID": 18,
        "countyName": "ISTARSKA"
    },
    {
        "entityType": 2,
        "ID": 112,
        "name": "Labin",
        "countyID": 18,
        "countyName": "ISTARSKA"
    },
    {
        "entityType": 2,
        "ID": 113,
        "name": "Novigrad-Cittanova",
        "countyID": 18,
        "countyName": "ISTARSKA"
    },
    {
        "entityType": 2,
        "ID": 114,
        "name": "Pazin",
        "countyID": 18,
        "countyName": "ISTARSKA"
    },
    {
        "entityType": 2,
        "ID": 115,
        "name": "Poreč-Parenzo",
        "countyID": 18,
        "countyName": "ISTARSKA"
    },
    {
        "entityType": 2,
        "ID": 116,
        "name": "Pula-Pola",
        "countyID": 18,
        "countyName": "ISTARSKA"
    },
    {
        "entityType": 2,
        "ID": 117,
        "name": "Rovinj-Rovigno",
        "countyID": 18,
        "countyName": "ISTARSKA"
    },
    {
        "entityType": 2,
        "ID": 118,
        "name": "Umag-Umago",
        "countyID": 18,
        "countyName": "ISTARSKA"
    },
    {
        "entityType": 2,
        "ID": 119,
        "name": "Vodnjan-Dignano",
        "countyID": 18,
        "countyName": "ISTARSKA"
    },
    {
        "entityType": 2,
        "ID": 120,
        "name": "Dubrovnik",
        "countyID": 19,
        "countyName": "DUBROVAČKO-NERETVANSKA"
    },
    {
        "entityType": 2,
        "ID": 121,
        "name": "Korčula",
        "countyID": 19,
        "countyName": "DUBROVAČKO-NERETVANSKA"
    },
    {
        "entityType": 2,
        "ID": 122,
        "name": "Metković",
        "countyID": 19,
        "countyName": "DUBROVAČKO-NERETVANSKA"
    },
    {
        "entityType": 2,
        "ID": 123,
        "name": "Opuzen",
        "countyID": 19,
        "countyName": "DUBROVAČKO-NERETVANSKA"
    },
    {
        "entityType": 2,
        "ID": 124,
        "name": "Ploče",
        "countyID": 19,
        "countyName": "DUBROVAČKO-NERETVANSKA"
    },
    {
        "entityType": 2,
        "ID": 125,
        "name": "Čakovec",
        "countyID": 20,
        "countyName": "MEĐIMURSKA"
    },
    {
        "entityType": 2,
        "ID": 126,
        "name": "Mursko Središće",
        "countyID": 20,
        "countyName": "MEĐIMURSKA"
    },
    {
        "entityType": 2,
        "ID": 127,
        "name": "Prelog",
        "countyID": 20,
        "countyName": "MEĐIMURSKA"
    },
    {
        "entityType": 2,
        "ID": 128,
        "name": "Zagreb",
        "countyID": 21,
        "countyName": "GRAD ZAGREB"
    }
    ];

    const communities: Community[] = [
        {
            "entityType": 3,
            "ID": 1,
            "name": "Bedenica",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 2,
            "name": "Bistra",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 3,
            "name": "Brckovljani",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 4,
            "name": "Brdovec",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 5,
            "name": "Dubrava",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 6,
            "name": "Dubravica",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 7,
            "name": "Farkaševac",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 8,
            "name": "Gradec",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 9,
            "name": "Jakovlje",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 10,
            "name": "Klinča Sela",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 11,
            "name": "Kloštar Ivanić",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 12,
            "name": "Krašić",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 13,
            "name": "Kravarsko",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 14,
            "name": "Križ",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 15,
            "name": "Luka",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 16,
            "name": "Marija Gorica",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 17,
            "name": "Orle",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 18,
            "name": "Pisarovina",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 19,
            "name": "Pokupsko",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 20,
            "name": "Preseka",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 21,
            "name": "Pušća",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 22,
            "name": "Rakovec",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 23,
            "name": "Rugvica",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 24,
            "name": "Stupnik",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 25,
            "name": "Žumberak",
            "countyID": 1,
            "countyName": "ZAGREBAČKA"
        },
        {
            "entityType": 3,
            "ID": 26,
            "name": "Bedekovčina",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 27,
            "name": "Budinščina",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 28,
            "name": "Desinić",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 29,
            "name": "Đurmanec",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 30,
            "name": "Gornja Stubica",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 31,
            "name": "Hrašćina",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 32,
            "name": "Hum na Sutli",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 33,
            "name": "Jesenje",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 34,
            "name": "Konjščina",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 35,
            "name": "Kraljevec na Sutli",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 36,
            "name": "Krapinske Toplice",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 37,
            "name": "Kumrovec",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 38,
            "name": "Lobor",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 39,
            "name": "Mače",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 40,
            "name": "Marija Bistrica",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 41,
            "name": "Mihovljan",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 42,
            "name": "Novi Golubovec",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 43,
            "name": "Petrovsko",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 44,
            "name": "Radoboj",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 45,
            "name": "Stubičke Toplice",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 46,
            "name": "Sveti Križ Začretje",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 47,
            "name": "Tuhelj",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 48,
            "name": "Veliko Trgovišće",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 49,
            "name": "Zagorska Sela",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 50,
            "name": "Zlatar Bistrica",
            "countyID": 2,
            "countyName": "KRAPINSKO-ZAGORSKA"
        },
        {
            "entityType": 3,
            "ID": 51,
            "name": "Donji Kukuruzari",
            "countyID": 3,
            "countyName": "SISAČKO-MOSLAVAČKA"
        },
        {
            "entityType": 3,
            "ID": 52,
            "name": "Dvor",
            "countyID": 3,
            "countyName": "SISAČKO-MOSLAVAČKA"
        },
        {
            "entityType": 3,
            "ID": 53,
            "name": "Gvozd",
            "countyID": 3,
            "countyName": "SISAČKO-MOSLAVAČKA"
        },
        {
            "entityType": 3,
            "ID": 54,
            "name": "Hrvatska Dubica",
            "countyID": 3,
            "countyName": "SISAČKO-MOSLAVAČKA"
        },
        {
            "entityType": 3,
            "ID": 55,
            "name": "Jasenovac",
            "countyID": 3,
            "countyName": "SISAČKO-MOSLAVAČKA"
        },
        {
            "entityType": 3,
            "ID": 56,
            "name": "Lekenik",
            "countyID": 3,
            "countyName": "SISAČKO-MOSLAVAČKA"
        },
        {
            "entityType": 3,
            "ID": 57,
            "name": "Lipovljani",
            "countyID": 3,
            "countyName": "SISAČKO-MOSLAVAČKA"
        },
        {
            "entityType": 3,
            "ID": 58,
            "name": "Majur",
            "countyID": 3,
            "countyName": "SISAČKO-MOSLAVAČKA"
        },
        {
            "entityType": 3,
            "ID": 59,
            "name": "Martinska Ves",
            "countyID": 3,
            "countyName": "SISAČKO-MOSLAVAČKA"
        },
        {
            "entityType": 3,
            "ID": 60,
            "name": "Sunja",
            "countyID": 3,
            "countyName": "SISAČKO-MOSLAVAČKA"
        },
        {
            "entityType": 3,
            "ID": 61,
            "name": "Topusko",
            "countyID": 3,
            "countyName": "SISAČKO-MOSLAVAČKA"
        },
        {
            "entityType": 3,
            "ID": 62,
            "name": "Velika Ludina",
            "countyID": 3,
            "countyName": "SISAČKO-MOSLAVAČKA"
        },
        {
            "entityType": 3,
            "ID": 63,
            "name": "Barilović",
            "countyID": 4,
            "countyName": "KARLOVAČKA"
        },
        {
            "entityType": 3,
            "ID": 64,
            "name": "Bosiljevo",
            "countyID": 4,
            "countyName": "KARLOVAČKA"
        },
        {
            "entityType": 3,
            "ID": 65,
            "name": "Cetingrad",
            "countyID": 4,
            "countyName": "KARLOVAČKA"
        },
        {
            "entityType": 3,
            "ID": 66,
            "name": "Draganić",
            "countyID": 4,
            "countyName": "KARLOVAČKA"
        },
        {
            "entityType": 3,
            "ID": 67,
            "name": "Generalski Stol",
            "countyID": 4,
            "countyName": "KARLOVAČKA"
        },
        {
            "entityType": 3,
            "ID": 68,
            "name": "Josipdol",
            "countyID": 4,
            "countyName": "KARLOVAČKA"
        },
        {
            "entityType": 3,
            "ID": 69,
            "name": "Kamanje",
            "countyID": 4,
            "countyName": "KARLOVAČKA"
        },
        {
            "entityType": 3,
            "ID": 70,
            "name": "Krnjak",
            "countyID": 4,
            "countyName": "KARLOVAČKA"
        },
        {
            "entityType": 3,
            "ID": 71,
            "name": "Lasinja",
            "countyID": 4,
            "countyName": "KARLOVAČKA"
        },
        {
            "entityType": 3,
            "ID": 72,
            "name": "Netretić",
            "countyID": 4,
            "countyName": "KARLOVAČKA"
        },
        {
            "entityType": 3,
            "ID": 73,
            "name": "Plaški",
            "countyID": 4,
            "countyName": "KARLOVAČKA"
        },
        {
            "entityType": 3,
            "ID": 74,
            "name": "Rakovica",
            "countyID": 4,
            "countyName": "KARLOVAČKA"
        },
        {
            "entityType": 3,
            "ID": 75,
            "name": "Ribnik",
            "countyID": 4,
            "countyName": "KARLOVAČKA"
        },
        {
            "entityType": 3,
            "ID": 76,
            "name": "Saborsko",
            "countyID": 4,
            "countyName": "KARLOVAČKA"
        },
        {
            "entityType": 3,
            "ID": 77,
            "name": "Tounj",
            "countyID": 4,
            "countyName": "KARLOVAČKA"
        },
        {
            "entityType": 3,
            "ID": 78,
            "name": "Vojnić",
            "countyID": 4,
            "countyName": "KARLOVAČKA"
        },
        {
            "entityType": 3,
            "ID": 79,
            "name": "Žakanje",
            "countyID": 4,
            "countyName": "KARLOVAČKA"
        },
        {
            "entityType": 3,
            "ID": 80,
            "name": "Bednja",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 81,
            "name": "Beretinec",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 82,
            "name": "Breznica",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 83,
            "name": "Breznički Hum",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 84,
            "name": "Cestica",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 85,
            "name": "Donja Voća",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 86,
            "name": "Gornji Kneginec",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 87,
            "name": "Jalžabet",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 88,
            "name": "Klenovnik",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 89,
            "name": "Ljubešćica",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 90,
            "name": "Mali Bukovec",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 91,
            "name": "Martijanec",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 92,
            "name": "Maruševec",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 93,
            "name": "Petrijanec",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 94,
            "name": "Sračinec",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 95,
            "name": "Sveti Đurđ",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 96,
            "name": "Sveti Ilija",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 97,
            "name": "Trnovec Bartolovečki",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 98,
            "name": "Veliki Bukovec",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 99,
            "name": "Vidovec",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 100,
            "name": "Vinica",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 101,
            "name": "Visoko",
            "countyID": 5,
            "countyName": "VARAŽDINSKA"
        },
        {
            "entityType": 3,
            "ID": 102,
            "name": "Drnje",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 103,
            "name": "Đelekovec",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 104,
            "name": "Ferdinandovac",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 105,
            "name": "Gola",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 106,
            "name": "Gornja Rijeka",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 107,
            "name": "Hlebine",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 108,
            "name": "Kalinovac",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 109,
            "name": "Kalnik",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 110,
            "name": "Kloštar Podravski",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 111,
            "name": "Koprivnički Bregi",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 112,
            "name": "Koprivnički Ivanec",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 113,
            "name": "Legrad",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 114,
            "name": "Molve",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 115,
            "name": "Novigrad Podravski",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 116,
            "name": "Novo Virje",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 117,
            "name": "Peteranec",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 118,
            "name": "Podravske Sesvete",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 119,
            "name": "Rasinja",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 120,
            "name": "Sokolovac",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 121,
            "name": "Sveti Ivan Žabno",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 122,
            "name": "Sveti Petar Orehovec",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 123,
            "name": "Virje",
            "countyID": 6,
            "countyName": "KOPRIVNIČKO-KRIŽEVAČKA"
        },
        {
            "entityType": 3,
            "ID": 124,
            "name": "Berek",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 125,
            "name": "Dežanovac",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 126,
            "name": "Đulovac",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 127,
            "name": "Hercegovac",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 128,
            "name": "Ivanska",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 129,
            "name": "Kapela",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 130,
            "name": "Končanica",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 131,
            "name": "Nova Rača",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 132,
            "name": "Rovišće",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 133,
            "name": "Severin",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 134,
            "name": "Sirač",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 135,
            "name": "Šandrovac",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 136,
            "name": "Štefanje",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 137,
            "name": "Velika Pisanica",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 138,
            "name": "Velika Trnovitica",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 139,
            "name": "Veliki Grđevac",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 140,
            "name": "Veliko Trojstvo",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 141,
            "name": "Zrinski Topolovac",
            "countyID": 7,
            "countyName": "BJELOVARSKO-BILOGORSKA"
        },
        {
            "entityType": 3,
            "ID": 142,
            "name": "Baška",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 143,
            "name": "Brod Moravice",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 144,
            "name": "Čavle",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 145,
            "name": "Dobrinj",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 146,
            "name": "Fužine",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 147,
            "name": "Jelenje",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 148,
            "name": "Klana",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 149,
            "name": "Kostrena",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 150,
            "name": "Lokve",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 151,
            "name": "Lopar",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 152,
            "name": "Lovran",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 153,
            "name": "Malinska-Dubašnica",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 154,
            "name": "Matulji",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 155,
            "name": "Mošćenička Draga",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 156,
            "name": "Mrkopalj",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 157,
            "name": "Omišalj",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 158,
            "name": "Punat",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 159,
            "name": "Ravna Gora",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 160,
            "name": "Skrad",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 161,
            "name": "Vinodolska ",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 162,
            "name": "Viškovo",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 163,
            "name": "Vrbnik",
            "countyID": 8,
            "countyName": "PRIMORSKO-GORANSKA"
        },
        {
            "entityType": 3,
            "ID": 164,
            "name": "Brinje",
            "countyID": 9,
            "countyName": "LIČKO-SENJSKA"
        },
        {
            "entityType": 3,
            "ID": 165,
            "name": "Donji Lapac",
            "countyID": 9,
            "countyName": "LIČKO-SENJSKA"
        },
        {
            "entityType": 3,
            "ID": 166,
            "name": "Karlobag",
            "countyID": 9,
            "countyName": "LIČKO-SENJSKA"
        },
        {
            "entityType": 3,
            "ID": 167,
            "name": "Lovinac",
            "countyID": 9,
            "countyName": "LIČKO-SENJSKA"
        },
        {
            "entityType": 3,
            "ID": 168,
            "name": "Perušić",
            "countyID": 9,
            "countyName": "LIČKO-SENJSKA"
        },
        {
            "entityType": 3,
            "ID": 169,
            "name": "Plitvička Jezera",
            "countyID": 9,
            "countyName": "LIČKO-SENJSKA"
        },
        {
            "entityType": 3,
            "ID": 170,
            "name": "Udbina",
            "countyID": 9,
            "countyName": "LIČKO-SENJSKA"
        },
        {
            "entityType": 3,
            "ID": 171,
            "name": "Vrhovine",
            "countyID": 9,
            "countyName": "LIČKO-SENJSKA"
        },
        {
            "entityType": 3,
            "ID": 172,
            "name": "Crnac",
            "countyID": 10,
            "countyName": "VIROVITIČKO-PODRAVSKA"
        },
        {
            "entityType": 3,
            "ID": 173,
            "name": "Čačinci",
            "countyID": 10,
            "countyName": "VIROVITIČKO-PODRAVSKA"
        },
        {
            "entityType": 3,
            "ID": 174,
            "name": "Čađavica",
            "countyID": 10,
            "countyName": "VIROVITIČKO-PODRAVSKA"
        },
        {
            "entityType": 3,
            "ID": 175,
            "name": "Gradina",
            "countyID": 10,
            "countyName": "VIROVITIČKO-PODRAVSKA"
        },
        {
            "entityType": 3,
            "ID": 176,
            "name": "Lukač",
            "countyID": 10,
            "countyName": "VIROVITIČKO-PODRAVSKA"
        },
        {
            "entityType": 3,
            "ID": 177,
            "name": "Mikleuš",
            "countyID": 10,
            "countyName": "VIROVITIČKO-PODRAVSKA"
        },
        {
            "entityType": 3,
            "ID": 178,
            "name": "Nova Bukovica",
            "countyID": 10,
            "countyName": "VIROVITIČKO-PODRAVSKA"
        },
        {
            "entityType": 3,
            "ID": 179,
            "name": "Pitomača",
            "countyID": 10,
            "countyName": "VIROVITIČKO-PODRAVSKA"
        },
        {
            "entityType": 3,
            "ID": 180,
            "name": "Sopje",
            "countyID": 10,
            "countyName": "VIROVITIČKO-PODRAVSKA"
        },
        {
            "entityType": 3,
            "ID": 181,
            "name": "Suhopolje",
            "countyID": 10,
            "countyName": "VIROVITIČKO-PODRAVSKA"
        },
        {
            "entityType": 3,
            "ID": 182,
            "name": "Špišić Bukovica",
            "countyID": 10,
            "countyName": "VIROVITIČKO-PODRAVSKA"
        },
        {
            "entityType": 3,
            "ID": 183,
            "name": "Voćin",
            "countyID": 10,
            "countyName": "VIROVITIČKO-PODRAVSKA"
        },
        {
            "entityType": 3,
            "ID": 184,
            "name": "Zdenci",
            "countyID": 10,
            "countyName": "VIROVITIČKO-PODRAVSKA"
        },
        {
            "entityType": 3,
            "ID": 185,
            "name": "Brestovac",
            "countyID": 11,
            "countyName": "POŽEŠKO-SLAVONSKA"
        },
        {
            "entityType": 3,
            "ID": 186,
            "name": "Čaglin",
            "countyID": 11,
            "countyName": "POŽEŠKO-SLAVONSKA"
        },
        {
            "entityType": 3,
            "ID": 187,
            "name": "Jakšić",
            "countyID": 11,
            "countyName": "POŽEŠKO-SLAVONSKA"
        },
        {
            "entityType": 3,
            "ID": 188,
            "name": "Kaptol",
            "countyID": 11,
            "countyName": "POŽEŠKO-SLAVONSKA"
        },
        {
            "entityType": 3,
            "ID": 189,
            "name": "Velika",
            "countyID": 11,
            "countyName": "POŽEŠKO-SLAVONSKA"
        },
        {
            "entityType": 3,
            "ID": 190,
            "name": "Bebrina",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 191,
            "name": "Brodski Stupnik",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 192,
            "name": "Bukovlje",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 193,
            "name": "Cernik",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 194,
            "name": "Davor",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 195,
            "name": "Donji Andrijevci",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 196,
            "name": "Dragalić",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 197,
            "name": "Garčin",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 198,
            "name": "Gornja Vrba",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 199,
            "name": "Gornji Bogićevci",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 200,
            "name": "Gundinci",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 201,
            "name": "Klakar",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 202,
            "name": "Nova Kapela",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 203,
            "name": "Okučani",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 204,
            "name": "Oprisavci",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 205,
            "name": "Oriovac",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 206,
            "name": "Podcrkavlje",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 207,
            "name": "Rešetari",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 208,
            "name": "Sibinj",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 209,
            "name": "Sikirevci",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 210,
            "name": "Slavonski Šamac",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 211,
            "name": "Stara Gradiška",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 212,
            "name": "Staro Petrovo Selo",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 213,
            "name": "Velika Kopanica",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 214,
            "name": "Vrbje",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 215,
            "name": "Vrpolje",
            "countyID": 12,
            "countyName": "BRODSKO-POSAVSKA"
        },
        {
            "entityType": 3,
            "ID": 216,
            "name": "Bibinje",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 217,
            "name": "Galovac",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 218,
            "name": "Gračac",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 219,
            "name": "Jasenice",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 220,
            "name": "Kali",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 221,
            "name": "Kolan",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 222,
            "name": "Kukljica",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 223,
            "name": "Lišane Ostrovičke",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 224,
            "name": "Novigrad",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 225,
            "name": "Pakoštane",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 226,
            "name": "Pašman",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 227,
            "name": "Polača",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 228,
            "name": "Poličnik",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 229,
            "name": "Posedarje",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 230,
            "name": "Povljana",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 231,
            "name": "Preko",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 232,
            "name": "Privlaka",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 233,
            "name": "Ražanac",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 234,
            "name": "Sali",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 235,
            "name": "Stankovci",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 236,
            "name": "Starigrad",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 237,
            "name": "Sukošan",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 238,
            "name": "Sveti Filip i Jakov",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 239,
            "name": "Škabrnja",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 240,
            "name": "Tkon",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 241,
            "name": "Vir",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 242,
            "name": "Vrsi",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 243,
            "name": "Zemunik Donji",
            "countyID": 13,
            "countyName": "ZADARSKA"
        },
        {
            "entityType": 3,
            "ID": 244,
            "name": "Antunovac",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 245,
            "name": "Bilje",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 246,
            "name": "Bizovac",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 247,
            "name": "Čeminac",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 248,
            "name": "Čepin",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 249,
            "name": "Darda",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 250,
            "name": "Donja Motičina",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 251,
            "name": "Draž",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 252,
            "name": "Drenje",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 253,
            "name": "Đurđenovac",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 254,
            "name": "Erdut",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 255,
            "name": "Ernestinovo",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 256,
            "name": "Feričanci",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 257,
            "name": "Gorjani",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 258,
            "name": "Jagodnjak",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 259,
            "name": "Kneževi Vinogradi",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 260,
            "name": "Koška",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 261,
            "name": "Levanjska Varoš",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 262,
            "name": "Magadenovac",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 263,
            "name": "Marijanci",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 264,
            "name": "Petlovac",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 265,
            "name": "Petrijevci",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 266,
            "name": "Podgorač",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 267,
            "name": "Podravska Moslavina",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 268,
            "name": "Popovac",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 269,
            "name": "Punitovci",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 270,
            "name": "Satnica Đakovačka",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 271,
            "name": "Semeljci",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 272,
            "name": "Strizivojna",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 273,
            "name": "Šodolovci",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 274,
            "name": "Trnava",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 275,
            "name": "Viljevo",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 276,
            "name": "Viškovci",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 277,
            "name": "Vladislavci",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 278,
            "name": "Vuka",
            "countyID": 14,
            "countyName": "OSJEČKO-BARANJSKA"
        },
        {
            "entityType": 3,
            "ID": 279,
            "name": "Bilice",
            "countyID": 15,
            "countyName": "ŠIBENSKO-KNINSKA"
        },
        {
            "entityType": 3,
            "ID": 280,
            "name": "Biskupija",
            "countyID": 15,
            "countyName": "ŠIBENSKO-KNINSKA"
        },
        {
            "entityType": 3,
            "ID": 281,
            "name": "Civljane",
            "countyID": 15,
            "countyName": "ŠIBENSKO-KNINSKA"
        },
        {
            "entityType": 3,
            "ID": 282,
            "name": "Ervenik",
            "countyID": 15,
            "countyName": "ŠIBENSKO-KNINSKA"
        },
        {
            "entityType": 3,
            "ID": 283,
            "name": "Kijevo",
            "countyID": 15,
            "countyName": "ŠIBENSKO-KNINSKA"
        },
        {
            "entityType": 3,
            "ID": 284,
            "name": "Kistanje",
            "countyID": 15,
            "countyName": "ŠIBENSKO-KNINSKA"
        },
        {
            "entityType": 3,
            "ID": 285,
            "name": "Murter-Kornati",
            "countyID": 15,
            "countyName": "ŠIBENSKO-KNINSKA"
        },
        {
            "entityType": 3,
            "ID": 286,
            "name": "Pirovac",
            "countyID": 15,
            "countyName": "ŠIBENSKO-KNINSKA"
        },
        {
            "entityType": 3,
            "ID": 287,
            "name": "Primošten",
            "countyID": 15,
            "countyName": "ŠIBENSKO-KNINSKA"
        },
        {
            "entityType": 3,
            "ID": 288,
            "name": "Promina",
            "countyID": 15,
            "countyName": "ŠIBENSKO-KNINSKA"
        },
        {
            "entityType": 3,
            "ID": 289,
            "name": "Rogoznica",
            "countyID": 15,
            "countyName": "ŠIBENSKO-KNINSKA"
        },
        {
            "entityType": 3,
            "ID": 290,
            "name": "Ružić",
            "countyID": 15,
            "countyName": "ŠIBENSKO-KNINSKA"
        },
        {
            "entityType": 3,
            "ID": 291,
            "name": "Tisno",
            "countyID": 15,
            "countyName": "ŠIBENSKO-KNINSKA"
        },
        {
            "entityType": 3,
            "ID": 292,
            "name": "Tribunj",
            "countyID": 15,
            "countyName": "ŠIBENSKO-KNINSKA"
        },
        {
            "entityType": 3,
            "ID": 293,
            "name": "Unešić",
            "countyID": 15,
            "countyName": "ŠIBENSKO-KNINSKA"
        },
        {
            "entityType": 3,
            "ID": 294,
            "name": "Andrijaševci",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 295,
            "name": "Babina Greda",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 296,
            "name": "Bogdanovci",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 297,
            "name": "Borovo",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 298,
            "name": "Bošnjaci",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 299,
            "name": "Cerna",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 300,
            "name": "Drenovci",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 301,
            "name": "Gradište",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 302,
            "name": "Gunja",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 303,
            "name": "Ivankovo",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 304,
            "name": "Jarmina",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 305,
            "name": "Lovas",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 306,
            "name": "Markušica",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 307,
            "name": "Negoslavci",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 308,
            "name": "Nijemci",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 309,
            "name": "Nuštar",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 310,
            "name": "Privlaka",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 311,
            "name": "Stari Jankovci",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 312,
            "name": "Stari Mikanovci",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 313,
            "name": "Štitar",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 314,
            "name": "Tompojevci",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 315,
            "name": "Tordinci",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 316,
            "name": "Tovarnik",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 317,
            "name": "Trpinja",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 318,
            "name": "Vođinci",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 319,
            "name": "Vrbanja",
            "countyID": 16,
            "countyName": "VUKOVARSKO-SRIJEMSKA"
        },
        {
            "entityType": 3,
            "ID": 320,
            "name": "Baška Voda",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 321,
            "name": "Bol",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 322,
            "name": "Brela",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 323,
            "name": "Cista Provo",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 324,
            "name": "Dicmo",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 325,
            "name": "Dugi Rat",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 326,
            "name": "Dugopolje",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 327,
            "name": "Gradac",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 328,
            "name": "Hrvace",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 329,
            "name": "Jelsa",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 330,
            "name": "Klis",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 331,
            "name": "Lećevica",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 332,
            "name": "Lokvičići",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 333,
            "name": "Lovreć",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 334,
            "name": "Marina",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 335,
            "name": "Milna",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 336,
            "name": "Muć",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 337,
            "name": "Nerežišća",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 338,
            "name": "Okrug",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 339,
            "name": "Otok",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 340,
            "name": "Podbablje",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 341,
            "name": "Podgora",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 342,
            "name": "Podstrana",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 343,
            "name": "Postira",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 344,
            "name": "Prgomet",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 345,
            "name": "Primorski Dolac",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 346,
            "name": "Proložac",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 347,
            "name": "Pučišća",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 348,
            "name": "Runovići",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 349,
            "name": "Seget",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 350,
            "name": "Selca",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 351,
            "name": "Sućuraj",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 352,
            "name": "Sutivan",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 353,
            "name": "Šestanovac",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 354,
            "name": "Šolta",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 355,
            "name": "Tučepi",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 356,
            "name": "Zadvarje",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 357,
            "name": "Zagvozd",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 358,
            "name": "Zmijavci",
            "countyID": 17,
            "countyName": "SPLITSKO-DALMATINSKA"
        },
        {
            "entityType": 3,
            "ID": 359,
            "name": "Bale-Valle",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 360,
            "name": "Barban",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 361,
            "name": "Brtonigla-Verteneglio",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 362,
            "name": "Cerovlje",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 363,
            "name": "Fažana-Fasana",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 364,
            "name": "Funtana-Fontane",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 365,
            "name": "Gračišće",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 366,
            "name": "Grožnjan-Grisignana",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 367,
            "name": "Kanfanar",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 368,
            "name": "Karojba",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 369,
            "name": "Kaštelir-Labinci-Castelliere-S. Domenica",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 370,
            "name": "Kršan",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 371,
            "name": "Lanišće",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 372,
            "name": "Ližnjan-Lisignano",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 373,
            "name": "Lupoglav",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 374,
            "name": "Marčana",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 375,
            "name": "Medulin",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 376,
            "name": "Motovun-Montona",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 377,
            "name": "Oprtalj-Portole",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 378,
            "name": "Pićan",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 379,
            "name": "Raša",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 380,
            "name": "Sveta Nedelja",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 381,
            "name": "Sveti Lovreč",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 382,
            "name": "Sveti Petar u Šumi",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 383,
            "name": "Svetvinčenat",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 384,
            "name": "Tar-Vabriga-Torre Abrega",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 385,
            "name": "Tinjan",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 386,
            "name": "Višnjan-Visignano",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 387,
            "name": "Vižinada-Visinada",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 388,
            "name": "Vrsar-Orsera",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 389,
            "name": "Žminj",
            "countyID": 18,
            "countyName": "ISTARSKA"
        },
        {
            "entityType": 3,
            "ID": 390,
            "name": "Blato",
            "countyID": 19,
            "countyName": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 3,
            "ID": 391,
            "name": "Dubrovačko primorje",
            "countyID": 19,
            "countyName": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 3,
            "ID": 392,
            "name": "Janjina",
            "countyID": 19,
            "countyName": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 3,
            "ID": 393,
            "name": "Konavle",
            "countyID": 19,
            "countyName": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 3,
            "ID": 394,
            "name": "Kula Norinska",
            "countyID": 19,
            "countyName": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 3,
            "ID": 395,
            "name": "Lastovo",
            "countyID": 19,
            "countyName": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 3,
            "ID": 396,
            "name": "Lumbarda",
            "countyID": 19,
            "countyName": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 3,
            "ID": 397,
            "name": "Mljet",
            "countyID": 19,
            "countyName": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 3,
            "ID": 398,
            "name": "Orebić",
            "countyID": 19,
            "countyName": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 3,
            "ID": 399,
            "name": "Pojezerje",
            "countyID": 19,
            "countyName": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 3,
            "ID": 400,
            "name": "Slivno",
            "countyID": 19,
            "countyName": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 3,
            "ID": 401,
            "name": "Smokvica",
            "countyID": 19,
            "countyName": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 3,
            "ID": 402,
            "name": "Ston",
            "countyID": 19,
            "countyName": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 3,
            "ID": 403,
            "name": "Trpanj",
            "countyID": 19,
            "countyName": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 3,
            "ID": 404,
            "name": "Vela Luka",
            "countyID": 19,
            "countyName": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 3,
            "ID": 405,
            "name": "Zažablje",
            "countyID": 19,
            "countyName": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 3,
            "ID": 406,
            "name": "Župa dubrovačka",
            "countyID": 19,
            "countyName": "DUBROVAČKO-NERETVANSKA"
        },
        {
            "entityType": 3,
            "ID": 407,
            "name": "Belica",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 408,
            "name": "Dekanovec",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 409,
            "name": "Domašinec",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 410,
            "name": "Donja Dubrava",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 411,
            "name": "Donji Kraljevec",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 412,
            "name": "Donji Vidovec",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 413,
            "name": "Goričan",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 414,
            "name": "Gornji Mihaljevec",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 415,
            "name": "Kotoriba",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 416,
            "name": "Mala Subotica",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 417,
            "name": "Nedelišće",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 418,
            "name": "Orehovica",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 419,
            "name": "Podturen",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 420,
            "name": "Pribislavec",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 421,
            "name": "Selnica",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 422,
            "name": "Strahoninec",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 423,
            "name": "Sveta Marija",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 424,
            "name": "Sveti Juraj na Bregu",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 425,
            "name": "Sveti Martin na Muri",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 426,
            "name": "Šenkovec",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 427,
            "name": "Štrigova",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        },
        {
            "entityType": 3,
            "ID": 428,
            "name": "Vratišinec",
            "countyID": 20,
            "countyName": "MEĐIMURSKA"
        }
      ];
      return {counties, towns, communities};
    } }
