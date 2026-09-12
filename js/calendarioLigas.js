const escudosEquipos = {
    "ESP1": {
        "Alavés": "alaves.png",
        "Athletic Club": "athletic.png",
        "Atlético Madrid": "atletico_madrid.png",
        "FC Barcelona": "barcelona.png",
        "Real Betis": "real_betis.png",
        "RC Celta": "celta_vigo.png",
        "Deportivo A Coruña": "deportivo.png",
        "Elche CF": "elche.png",
        "RCD Espanyol": "espanyol.png",
        "Getafe CF": "getafe.png",
        "Levante UD": "levante.png",
        "Málaga CF": "malaga.png",
        "Osasuna": "osasuna.png",
        "Racing Santander": "racing.png",
        "Rayo Vallecano": "rayo_vallecano.png",
        "Real Madrid": "real_madrid.png",
        "Real Sociedad": "real_sociedad.png",
        "Sevilla FC": "sevilla.png",
        "Valencia CF": "valencia.png",
        "Villarreal CF": "villarreal.png"
    },

    "ESP2": {
        "Albacete Balompié": "albacete.png",
        "UD Almería": "almeria.png",
        "FC Andorra": "andorra.png",
        "Burgos CF": "burgos.png",
        "Cádiz CF": "cadiz.png",
        "CD Castellón": "castellon.png",
        "Celta Fortuna": "celta_vigo.png",
        "AD Ceuta": "ceuta.png",
        "Córdoba CF": "cordoba.png",
        "SD Eibar": "eibar.png",
        "CD Eldense": "eldense.png",
        "Girona FC": "girona.png",
        "Granada CF": "granada.png",
        "UD Las Palmas": "las_palmas.png",
        "CD Leganés": "leganes.png",
        "RCD Mallorca": "mallorca.png",
        "Real Oviedo": "oviedo.png",
        "Real Sociedad 'B'": "real_sociedad.png",
        "CE Sabadell": "sabadell.png",
        "Real Sporting": "sporting.png",
        "CD Tenerife": "tenerife.png",
        "Real Valladolid": "valladolid.png"
    },

    "ENG1": {
        //Coming soon
    },
}



const bbddLigas = {
    /* - - - - - - - LALIGA EA SPORTS - - - - - - - */

    "ESP1": [

        // Jornada 1
        [
            { local: alaves, visitante: getafe },
            { local: atletico, visitante: malaga },
            { local: celta, visitante: osasuna },
            { local: depor, visitante: elche },
            { local: espanyol, visitante: "Levante UD" },
            { local: barcelona, visitante: athletic },
            { local: racing, visitante: villarreal },
            { local: rmadrid, visitante: rsociedad },
            { local: sevilla, visitante: rayo },
            { local: valencia, visitante: betis },
        ],

        // Jornada 2
        [
            { local: athletic, visitante: sevilla },
            { local: atletico, visitante: villarreal },
            { local: betis, visitante: rsociedad },
            { local: elche, visitante: barcelona },
            { local: espanyol, visitante: rmadrid },
            { local: getafe, visitante: racing },
            { local: malaga, visitante: depor },
            { local: osasuna, visitante: levante },
            { local: rayo, visitante: alaves },
            { local: valencia, visitante: celta },
        ],

        // Jornada 3
        [
            { local: alaves, visitante: villarreal },
            { local: celta, visitante: athletic },
            { local: depor, visitante: valencia },
            { local: barcelona, visitante: rayo },
            { local: levante, visitante: betis },
            { local: osasuna, visitante: getafe },
            { local: racing, visitante: elche },
            { local: rmadrid, visitante: malaga },
            { local: rsociedad, visitante: espanyol },
            { local: sevilla, visitante: atletico },
        ],

        // Jornada 4
        [
            { local: alaves, visitante: osasuna },
            { local: athletic, visitante: atletico },
            { local: betis, visitante: rmadrid },
            { local: elche, visitante: rsociedad },
            { local: espanyol, visitante: sevilla },
            { local: getafe, visitante: celta },
            { local: malaga, visitante: levante },
            { local: rayo, visitante: racing },
            { local: valencia, visitante: barcelona },
            { local: villarreal, visitante: depor },
        ],

        // Jornada 5
        [
            { local: athletic, visitante: elche },
            { local: celta, visitante: malaga },
            { local: getafe, visitante: depor },
            { local: levante, visitante: barcelona },
            { local: osasuna, visitante: espanyol },
            { local: racing, visitante: alaves },
            { local: rmadrid, visitante: rayo },
            { local: rsociedad, visitante: atletico },
            { local: sevilla, visitante: valencia },
            { local: villarreal, visitante: betis },
        ],

        // Jornada 6
        [
            { local: alaves, visitante: valencia },
            { local: atletico, visitante: osasuna },
            { local: betis, visitante: getafe },
            { local: depor, visitante: sevilla },
            { local: elche, visitante: rmadrid },
            { local: barcelona, visitante: racing },
            { local: levante, visitante: athletic },
            { local: malaga, visitante: villarreal },
            { local: rayo, visitante: espanyol },
            { local: rsociedad, visitante: celta },
        ],

        // Jornada 7
        [
            { local: athletic, visitante: alaves },
            { local: atletico, visitante: rmadrid },
            { local: celta, visitante: racing },
            { local: depor, visitante: betis },
            { local: espanyol, visitante: elche },
            { local: getafe, visitante: malaga },
            { local: osasuna, visitante: rayo },
            { local: sevilla, visitante: barcelona },
            { local: valencia, visitante: rsociedad },
            { local: villarreal, visitante: levante },
        ],

        // Jornada 8
        [
            { local: alaves, visitante: atletico },
            { local: betis, visitante: osasuna },
            { local: elche, visitante: celta },
            { local: barcelona, visitante: getafe },
            { local: levante, visitante: sevilla },
            { local: malaga, visitante: espanyol },
            { local: racing, visitante: valencia },
            { local: rayo, visitante: athletic },
            { local: rmadrid, visitante: villarreal },
            { local: rsociedad, visitante: depor },
        ],

        // Jornada 9
        [
            { local: betis, visitante: barcelona },
            { local: celta, visitante: alaves },
            { local: depor, visitante: levante },
            { local: espanyol, visitante: atletico },
            { local: getafe, visitante: rayo },
            { local: malaga, visitante: rsociedad },
            { local: osasuna, visitante: racing },
            { local: rmadrid, visitante: sevilla },
            { local: valencia, visitante: athletic },
            { local: villarreal, visitante: elche },
        ],

        // Jornada 10
        [
            { local: alaves, visitante: malaga },
            { local: athletic, visitante: getafe },
            { local: atletico, visitante: depor },
            { local: celta, visitante: betis },
            { local: barcelona, visitante: rmadrid },
            { local: racing, visitante: espanyol },
            { local: rayo, visitante: elche },
            { local: rsociedad, visitante: levante },
            { local: sevilla, visitante: osasuna },
            { local: valencia, visitante: villarreal },
        ],

        // Jornada 11
        [
            { local: athletic, visitante: rsociedad },
            { local: betis, visitante: malaga },
            { local: depor, visitante: osasuna },
            { local: elche, visitante: valencia },
            { local: barcelona, visitante: alaves },
            { local: getafe, visitante: sevilla },
            { local: levante, visitante: atletico },
            { local: racing, visitante: rmadrid },
            { local: rayo, visitante: celta },
            { local: villarreal, visitante: espanyol },
        ],

        // Jornada 12
        [
            { local: atletico, visitante: barcelona },
            { local: celta, visitante: levante },
            { local: elche, visitante: betis },
            { local: espanyol, visitante: depor },
            { local: malaga, visitante: racing },
            { local: osasuna, visitante: athletic },
            { local: rsociedad, visitante: rayo },
            { local: sevilla, visitante: alaves },
            { local: valencia, visitante: rmadrid },
            { local: villarreal, visitante: getafe },
        ],

        // Jornada 13
        [
            { local: alaves, visitante: depor },
            { local: athletic, visitante: espanyol },
            { local: barcelona, visitante: villarreal },
            { local: getafe, visitante: atletico },
            { local: levante, visitante: elche },
            { local: osasuna, visitante: malaga },
            { local: racing, visitante: rsociedad },
            { local: rayo, visitante: valencia },
            { local: rmadrid, visitante: celta },
            { local: sevilla, visitante: betis },
        ],

        // Jornada 14
        [
            { local: betis, visitante: rayo },
            { local: celta, visitante: villarreal },
            { local: depor, visitante: barcelona },
            { local: elche, visitante: atletico },
            { local: espanyol, visitante: getafe },
            { local: levante, visitante: racing },
            { local: malaga, visitante: athletic },
            { local: rmadrid, visitante: alaves },
            { local: rsociedad, visitante: sevilla },
            { local: valencia, visitante: osasuna },
        ],

        // Jornada 15
        [
            { local: alaves, visitante: espanyol },
            { local: athletic, visitante: rmadrid },
            { local: atletico, visitante: betis },
            { local: barcelona, visitante: celta },
            { local: getafe, visitante: valencia },
            { local: osasuna, visitante: elche },
            { local: racing, visitante: depor },
            { local: rayo, visitante: levante },
            { local: sevilla, visitante: malaga },
            { local: villarreal, visitante: rsociedad },
        ],

        // Jornada 16
        [
            { local: atletico, visitante: valencia },
            { local: betis, visitante: racing },
            { local: depor, visitante: athletic },
            { local: elche, visitante: sevilla },
            { local: espanyol, visitante: celta },
            { local: levante, visitante: alaves },
            { local: malaga, visitante: barcelona },
            { local: rmadrid, visitante: osasuna },
            { local: rsociedad, visitante: getafe },
            { local: villarreal, visitante: rayo },
        ],

        // Jornada 17
        [
            { local: alaves, visitante: elche },
            { local: athletic, visitante: betis },
            { local: celta, visitante: atletico },
            { local: depor, visitante: rmadrid },
            { local: barcelona, visitante: rsociedad },
            { local: getafe, visitante: levante },
            { local: osasuna, visitante: villarreal },
            { local: rayo, visitante: malaga },
            { local: sevilla, visitante: racing },
            { local: valencia, visitante: espanyol },
        ],

        // Jornada 18
        [
            { local: betis, visitante: alaves },
            { local: celta, visitante: depor },
            { local: espanyol, visitante: barcelona },
            { local: levante, visitante: valencia },
            { local: malaga, visitante: elche },
            { local: racing, visitante: athletic },
            { local: rayo, visitante: atletico },
            { local: rmadrid, visitante: getafe },
            { local: rsociedad, visitante: osasuna },
            { local: villarreal, visitante: sevilla },
        ],

        // Jornada 19
        [
            { local: alaves, visitante: rsociedad },
            { local: athletic, visitante: villarreal },
            { local: atletico, visitante: racing },
            { local: depor, visitante: rayo },
            { local: elche, visitante: getafe },
            { local: espanyol, visitante: betis },
            { local: osasuna, visitante: barcelona },
            { local: rmadrid, visitante: levante },
            { local: sevilla, visitante: celta },
            { local: valencia, visitante: malaga },
        ],

        // Jornada 20
        [
            { local: atletico, visitante: rsociedad },
            { local: betis, visitante: depor },
            { local: celta, visitante: valencia },
            { local: barcelona, visitante: elche },
            { local: getafe, visitante: athletic },
            { local: levante, visitante: espanyol },
            { local: malaga, visitante: rmadrid },
            { local: racing, visitante: osasuna },
            { local: rayo, visitante: sevilla },
            { local: villarreal, visitante: alaves },
        ],

        // Jornada 21
        [
            { local: alaves, visitante: barcelona },
            { local: athletic, visitante: levante },
            { local: depor, visitante: atletico },
            { local: elche, visitante: rayo },
            { local: espanyol, visitante: villarreal },
            { local: getafe, visitante: osasuna },
            { local: racing, visitante: celta },
            { local: rmadrid, visitante: betis },
            { local: rsociedad, visitante: malaga },
            { local: valencia, visitante: sevilla },
        ],

        // Jornada 22
        [
            { local: atletico, visitante: espanyol },
            { local: betis, visitante: elche },
            { local: celta, visitante: getafe },
            { local: barcelona, visitante: valencia },
            { local: levante, visitante: rsociedad },
            { local: malaga, visitante: alaves },
            { local: osasuna, visitante: depor },
            { local: rayo, visitante: rmadrid },
            { local: sevilla, visitante: athletic },
            { local: villarreal, visitante: racing },
        ],

        // Jornada 23
        [
            { local: alaves, visitante: celta },
            { local: athletic, visitante: osasuna },
            { local: betis, visitante: sevilla },
            { local: depor, visitante: malaga },
            { local: elche, visitante: levante },
            { local: espanyol, visitante: rayo },
            { local: barcelona, visitante: atletico },
            { local: getafe, visitante: villarreal },
            { local: rsociedad, visitante: rmadrid },
            { local: valencia, visitante: racing },
        ],

        // Jornada 24
        [
            { local: celta, visitante: rayo },
            { local: elche, visitante: depor },
            { local: levante, visitante: malaga },
            { local: osasuna, visitante: atletico },
            { local: racing, visitante: getafe },
            { local: rmadrid, visitante: athletic },
            { local: rsociedad, visitante: betis },
            { local: sevilla, visitante: espanyol },
            { local: valencia, visitante: alaves },
            { local: villarreal, visitante: barcelona },
        ],

        // Jornada 25
        [
            { local: alaves, visitante: racing },
            { local: athletic, visitante: celta },
            { local: atletico, visitante: elche },
            { local: depor, visitante: rsociedad },
            { local: espanyol, visitante: osasuna },
            { local: barcelona, visitante: levante },
            { local: malaga, visitante: betis },
            { local: rayo, visitante: getafe },
            { local: sevilla, visitante: rmadrid },
            { local: villarreal, visitante: valencia },
        ],

        // Jornada 26
        [
            { local: athletic, visitante: barcelona },
            { local: betis, visitante: villarreal },
            { local: celta, visitante: espanyol },
            { local: getafe, visitante: alaves },
            { local: levante, visitante: depor },
            { local: malaga, visitante: atletico },
            { local: osasuna, visitante: sevilla },
            { local: racing, visitante: rayo },
            { local: rmadrid, visitante: valencia },
            { local: rsociedad, visitante: elche },
        ],

        // Jornada 27
        [
            { local: alaves, visitante: athletic },
            { local: atletico, visitante: celta },
            { local: depor, visitante: getafe },
            { local: elche, visitante: malaga },
            { local: espanyol, visitante: racing },
            { local: barcelona, visitante: betis },
            { local: rayo, visitante: osasuna },
            { local: sevilla, visitante: rsociedad },
            { local: valencia, visitante: levante },
            { local: villarreal, visitante: rmadrid },
        ],

        // Jornada 28
        [
            { local: alaves, visitante: sevilla },
            { local: athletic, visitante: valencia },
            { local: betis, visitante: levante },
            { local: elche, visitante: villarreal },
            { local: barcelona, visitante: depor },
            { local: getafe, visitante: rsociedad },
            { local: malaga, visitante: rayo },
            { local: osasuna, visitante: celta },
            { local: racing, visitante: atletico },
            { local: rmadrid, visitante: espanyol },
        ],

        // Jornada 29
        [
            { local: atletico, visitante: getafe },
            { local: celta, visitante: rmadrid },
            { local: espanyol, visitante: athletic },
            { local: levante, visitante: osasuna },
            { local: racing, visitante: betis },
            { local: rayo, visitante: barcelona },
            { local: rsociedad, visitante: alaves },
            { local: sevilla, visitante: elche },
            { local: valencia, visitante: depor },
            { local: villarreal, visitante: malaga },
        ],

        // Jornada 30
        [
            { local: athletic, visitante: racing },
            { local: betis, visitante: celta },
            { local: depor, visitante: villarreal },
            { local: elche, visitante: alaves },
            { local: barcelona, visitante: sevilla },
            { local: getafe, visitante: espanyol },
            { local: levante, visitante: rayo },
            { local: malaga, visitante: osasuna },
            { local: rmadrid, visitante: atletico },
            { local: rsociedad, visitante: valencia },
        ],

        // Jornada 31
        [
            { local: alaves, visitante: betis },
            { local: atletico, visitante: levante },
            { local: celta, visitante: elche },
            { local: espanyol, visitante: malaga },
            { local: osasuna, visitante: rmadrid },
            { local: racing, visitante: barcelona },
            { local: rayo, visitante: rsociedad },
            { local: sevilla, visitante: depor },
            { local: valencia, visitante: getafe },
            { local: villarreal, visitante: athletic },
        ],

        // Jornada 32
        [
            { local: alaves, visitante: rayo },
            { local: atletico, visitante: sevilla },
            { local: betis, visitante: athletic },
            { local: depor, visitante: celta },
            { local: elche, visitante: osasuna },
            { local: barcelona, visitante: espanyol },
            { local: getafe, visitante: rmadrid },
            { local: levante, visitante: villarreal },
            { local: malaga, visitante: valencia },
            { local: rsociedad, visitante: racing },
        ],

        // Jornada 33
        [
            { local: athletic, visitante: depor },
            { local: celta, visitante: barcelona },
            { local: espanyol, visitante: rsociedad },
            { local: getafe, visitante: betis },
            { local: osasuna, visitante: alaves },
            { local: racing, visitante: malaga },
            { local: rmadrid, visitante: elche },
            { local: sevilla, visitante: levante },
            { local: valencia, visitante: rayo },
            { local: villarreal, visitante: atletico },
        ],

        // Jornada 34
        [
            { local: atletico, visitante: alaves },
            { local: betis, visitante: valencia },
            { local: celta, visitante: sevilla },
            { local: depor, visitante: racing },
            { local: elche, visitante: espanyol },
            { local: barcelona, visitante: osasuna },
            { local: levante, visitante: rmadrid },
            { local: malaga, visitante: getafe },
            { local: rayo, visitante: villarreal },
            { local: rsociedad, visitante: athletic },
        ],

        // Jornada 35
        [
            { local: alaves, visitante: levante },
            { local: athletic, visitante: malaga },
            { local: betis, visitante: espanyol },
            { local: getafe, visitante: elche },
            { local: osasuna, visitante: rsociedad },
            { local: racing, visitante: sevilla },
            { local: rayo, visitante: depor },
            { local: rmadrid, visitante: barcelona },
            { local: valencia, visitante: atletico },
            { local: villarreal, visitante: celta },
        ],

        // Jornada 36
        [
            { local: atletico, visitante: rayo },
            { local: depor, visitante: alaves },
            { local: elche, visitante: athletic },
            { local: espanyol, visitante: valencia },
            { local: levante, visitante: getafe },
            { local: malaga, visitante: celta },
            { local: osasuna, visitante: betis },
            { local: rmadrid, visitante: racing },
            { local: rsociedad, visitante: barcelona },
            { local: sevilla, visitante: villarreal },
        ],

        // Jornada 37
        [
            { local: alaves, visitante: rmadrid },
            { local: atletico, visitante: athletic },
            { local: celta, visitante: rsociedad },
            { local: depor, visitante: espanyol },
            { local: barcelona, visitante: malaga },
            { local: racing, visitante: levante },
            { local: rayo, visitante: betis },
            { local: sevilla, visitante: getafe },
            { local: valencia, visitante: elche },
            { local: villarreal, visitante: osasuna },
        ],

        // Jornada 38
        [
            { local: athletic, visitante: rayo },
            { local: betis, visitante: atletico },
            { local: elche, visitante: racing },
            { local: espanyol, visitante: alaves },
            { local: getafe, visitante: barcelona },
            { local: levante, visitante: celta },
            { local: malaga, visitante: sevilla },
            { local: osasuna, visitante: valencia },
            { local: rmadrid, visitante: depor },
            { local: rsociedad, visitante: villarreal },
        ],

    ],

    /* - - - - - - - LALIGA HYPERMOTION - - - - - - - */
    "ESP2": [
        // Jornada 1
        [
            { local: almeria, visitante: eldense },
            { local: andorra, visitante: ceuta },
            { local: burgos, visitante: cordoba },
            { local: cadiz, visitante: celtaB },
            { local: eibar, visitante: tenerife },
            { local: girona, visitante: leganes },
            { local: lpalmas, visitante: albacete },
            { local: mallorca, visitante: valladolid },
            { local: oviedo, visitante: granada },
            { local: rsociedadB, visitante: castellon },
            { local: sporting, visitante: sabadell },
        ],

        // Jornada 2
        [
            { local: albacete, visitante: rsociedadB },
            { local: castellon, visitante: sabadell },
            { local: celtaB, visitante: andorra },
            { local: ceuta, visitante: lpalmas },
            { local: cordoba, visitante: girona },
            { local: eibar, visitante: valladolid },
            { local: eldense, visitante: cadiz },
            { local: granada, visitante: mallorca },
            { local: oviedo, visitante: leganes },
            { local: sporting, visitante: burgos },
            { local: tenerife, visitante: almeria },
        ],

        // // Jornada 3
        // [
        //     { local: , visitante:  },
        //     { local: , visitante:  },
        //     { local: , visitante:  },
        //     { local: , visitante:  },
        //     { local: , visitante:  },
        //     { local: , visitante:  },
        //     { local: , visitante:  },
        //     { local: , visitante:  },
        //     { local: , visitante:  },
        //     { local: , visitante:  },
        //     { local: , visitante:  },
        // ],
    ],

    /* - - - - - - - PREMIER LEAGUE - - - - - - - */

    "ENG1": [

        // Jornada 1
        [
            { local: "", visitante: "" },
            { local: "", visitante: "" },
            { local: "", visitante: "" },
            { local: "", visitante: "" },
            { local: "", visitante: "" },
            { local: "", visitante: "" },
            { local: "", visitante: "" },
            { local: "", visitante: "" },
            { local: "", visitante: "" },
            { local: "", visitante: "" },
        ],

    ],
}