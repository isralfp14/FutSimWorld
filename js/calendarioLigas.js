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
        //Coming soon
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
        // ],

        // // Jornada 7
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
        // ],

        // // Jornada 8
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
        // ],

        // // Jornada 9
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
        // ],

        // // Jornada 10
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
        // ],

        // // Jornada 11
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
        // ],

        // // Jornada 12
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
        // ],

        // // Jornada 13
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
        // ],

        // // Jornada 14
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
        // ],

        // // Jornada 15
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
        // ],

        // // Jornada 16
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
        // ],

        // // Jornada 17
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
        // ],

        // // Jornada 18
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
        // ],

        // // Jornada 19
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
        // ],

        // // Jornada 20
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
        // ],

        // // Jornada 21
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
        // ],

        // // Jornada 22
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
        // ],

        // // Jornada 23
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
        // ],

        // // Jornada 24
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
        // ],

        // // Jornada 25
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
        // ],

        // // Jornada 26
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
        // ],

        // // Jornada 27
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
        // ],

        // // Jornada 28
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
        // ],

        // // Jornada 29
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
        // ],

        // // Jornada 30
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
        // ],

        // // Jornada 31
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
        // ],

        // // Jornada 32
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
        // ],

        // // Jornada 33
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
        // ],

        // // Jornada 34
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
        // ],

        // // Jornada 35
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
        // ],

        // // Jornada 36
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
        // ],

        // // Jornada 37
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
        // ],

        // // Jornada 38
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
        // ],

    ],

    /* - - - - - - - LALIGA HYPERMOTION - - - - - - - */
    "ESP2": [
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
            { local: "", visitante: "" },
        ],
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