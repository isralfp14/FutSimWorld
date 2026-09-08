document.addEventListener("DOMContentLoaded", function () {

    const marcador = document.querySelectorAll("input[name=score]");
    // const contenedorTabla = document.querySelector(".container");
    // const tablaClasificacion = document.querySelector(".tabla-clasificacion");
    const filasTabla = document.querySelectorAll(".tabla-clasificacion tbody tr");
    const btnCalcular = document.querySelectorAll(".botones input[type=button]")[1];
    const btnReset = document.querySelectorAll(".botones input[type=button]")[2];
    pintarTabla();
    reseteoMarcador();

    let puntos;
    let victorias;
    let empates;
    let derrotas;
    let pJugados;
    let golesFavor;
    let golesContra;
    let difGoles;


    //Limitar el input del marcador a solo numeros
    for (let i = 0; i < marcador.length; i++) {
        marcador[i].addEventListener("keydown", function (e) {
            const teclasPermitidas = [
                "Backspace",
                "Tab",
                "ArrowLeft",
                "ArrowRight",
                "Delete",
            ];

            if (!teclasPermitidas.includes(e.key)) {
                if ((e.key >= "a" && e.key <= "z") || (e.key >= "A" && e.key <= "Z")) {
                    e.preventDefault();
                }
            }
        });
    }

    //Capturar los marcadores
    btnCalcular.addEventListener("click", function () {
        //Poner resultados a 0 para que no se acumulen los puntos ni los goles
        reseteoTabla();

        let filasPartidos = document.querySelectorAll(".calendario tbody tr");
        for (let i = 0; i < filasPartidos.length; i++) {

            //Guardar fila y datos de los equipos
            let filaActual = filasPartidos[i];
            let equipoLocal = filaActual.querySelector(".local").textContent;
            let equipoVisitante = filaActual.querySelector(".visitante").textContent;
            let mLocal = filaActual.querySelectorAll("input[name='score'")[0].value;
            let mVisitante = filaActual.querySelectorAll("input[name='score'")[1].value;

            //Comprobar que el partido ha "terminado"
            if (mLocal !== "" && mVisitante !== "") {
                mLocal = parseInt(mLocal);
                mVisitante = parseInt(mVisitante);

                //Comprobar en que fila de la clasificacion está el equipo
                for (let j = 0; j < filasTabla.length; j++) {
                    equipoTabla = filasTabla[j].querySelector("td[class=equipo]");

                    //Condiciones equipo local
                    if (equipoTabla.textContent == equipoLocal) {
                        let txtPuntos = filasTabla[j].querySelector("td[class=ptos]");
                        puntos = parseInt(txtPuntos.textContent);
                        let txtVictorias = filasTabla[j].querySelector("td[class=v]");
                        victorias = parseInt(txtVictorias.textContent);
                        let txtEmpates = filasTabla[j].querySelector("td[class=e]");
                        empates = parseInt(txtEmpates.textContent);
                        let txtDerrotas = filasTabla[j].querySelector("td[class=d]");
                        derrotas = parseInt(txtDerrotas.textContent);
                        let txtGolesFavor = filasTabla[j].querySelector("td[class=gf]");
                        golesFavor = parseInt(txtGolesFavor.textContent);
                        let txtGolesContra = filasTabla[j].querySelector("td[class=gc]");
                        golesContra = parseInt(txtGolesContra.textContent);
                        let txtDifGoles = filasTabla[j].querySelector("td[class=dg]");
                        difGoles = parseInt(txtDifGoles.textContent);
                        let txtJugados = filasTabla[j].querySelector("td[class=p_jugados]");
                        pJugados = parseInt(txtJugados.textContent);

                        //Suma de partidos jugados
                        pJugados++;
                        txtJugados.textContent = pJugados;

                        //Suma de puntos, victorias, empates y derrotas
                        if (mLocal > mVisitante) {
                            victorias++;
                            puntos += 3;
                        }
                        else if (mLocal < mVisitante) {
                            derrotas++;
                        }
                        else {
                            empates++;
                            puntos++;
                        }

                        //Suma y diferencia de goles
                        golesFavor += mLocal;
                        golesContra += mVisitante;

                        difGoles = golesFavor - golesContra;

                        //Reescribir en html
                        txtJugados.textContent = pJugados;
                        txtVictorias.textContent = victorias;
                        txtEmpates.textContent = empates;
                        txtDerrotas.textContent = derrotas;
                        txtGolesFavor.textContent = golesFavor;
                        txtGolesContra.textContent = golesContra;
                        txtDifGoles.textContent = difGoles;
                        txtPuntos.textContent = puntos;



                    }

                    //Condiciones equipo visitante
                    if (equipoTabla.textContent == equipoVisitante) {
                        let txtPuntos = filasTabla[j].querySelector("td[class=ptos]");
                        puntos = parseInt(txtPuntos.textContent);
                        let txtVictorias = filasTabla[j].querySelector("td[class=v]");
                        victorias = parseInt(txtVictorias.textContent);
                        let txtEmpates = filasTabla[j].querySelector("td[class=e]");
                        empates = parseInt(txtEmpates.textContent);
                        let txtDerrotas = filasTabla[j].querySelector("td[class=d]");
                        derrotas = parseInt(txtDerrotas.textContent);
                        let txtGolesFavor = filasTabla[j].querySelector("td[class=gf]");
                        golesFavor = parseInt(txtGolesFavor.textContent);
                        let txtGolesContra = filasTabla[j].querySelector("td[class=gc]");
                        golesContra = parseInt(txtGolesContra.textContent);
                        let txtDifGoles = filasTabla[j].querySelector("td[class=dg]");
                        difGoles = parseInt(txtDifGoles.textContent);
                        let txtJugados = filasTabla[j].querySelector("td[class=p_jugados]");
                        pJugados = parseInt(txtJugados.textContent);


                        //Partidos jugados
                        pJugados++;
                        txtJugados.textContent = pJugados;

                        //Puntos, V, E, D
                        if (mVisitante > mLocal) {
                            victorias++;
                            puntos += 3;
                        }
                        else if (mVisitante < mLocal) {
                            derrotas++;
                        }
                        else {
                            empates++;
                            puntos++;
                        }


                        //Suma y diferencia de goles
                        golesFavor += mVisitante;
                        golesContra += mLocal;

                        difGoles = golesFavor - golesContra;

                        //Reescribir en html
                        txtJugados.textContent = pJugados;
                        txtVictorias.textContent = victorias;
                        txtEmpates.textContent = empates;
                        txtDerrotas.textContent = derrotas;
                        txtGolesFavor.textContent = golesFavor;
                        txtGolesContra.textContent = golesContra;
                        txtDifGoles.textContent = difGoles;
                        txtPuntos.textContent = puntos;


                    }
                }
            }
        }
        //Cambiar posiciones en la clasificacion
        let filasArray = Array.from(filasTabla);
        console.log(filasArray);

        //Sort es como un arbitro que determina quien es el ganador, solo se declara una vez, no se anida
        filasArray.sort(function (filaA, filaB) {
            let ptosA = parseInt(filaA.querySelector(".ptos").textContent);
            let ptosB = parseInt(filaB.querySelector(".ptos").textContent);
            let dgA = parseInt(filaA.querySelector(".dg").textContent);
            let dgB = parseInt(filaB.querySelector(".dg").textContent);
            let gfA = parseInt(filaA.querySelector(".gf").textContent);
            let gfB = parseInt(filaB.querySelector(".gf").textContent);
            let nombreA = filaA.querySelector(".equipo").textContent;
            let nombreB = filaB.querySelector(".equipo").textContent;
            let golesDirectosA = 0;
            let golesDirectosB = 0;

            console.log(ptosA);
            console.log(ptosB);

            if (ptosB > ptosA) {
                return 1; //equipo b tiene mas puntos
            }
            else if (ptosA > ptosB) {
                return -1; //Equipo a tiene mas puntos
            }

            /**
             * ELSE DEL CRITERIO DEL DESEMPATE
             * 
             * CRITERIOS ACTUALES DE LA LIGA ESPAÑOLA
             *  1. Goal Average particular (entre los dos rivales)
             *  2. Goal Average General
             *  3. Goles a favor
             * 
             */

            else {
                //Primero - Decidir desempate por diferencia de goles particular
                for (let i = 0; i < filasPartidos.length; i++) {
                    let equipoLocalPartido = filasPartidos[i].querySelector(".local").textContent;
                    let equipoVisitantePartido = filasPartidos[i].querySelector(".visitante").textContent;
                    let golesLocal = filasPartidos[i].querySelectorAll("input[name='score'")[0].value;
                    let golesVisitante = filasPartidos[i].querySelectorAll("input[name='score'")[1].value;

                    if (golesLocal !== "" && golesVisitante !== "") {
                        golesLocal = parseInt(golesLocal);
                        golesVisitante = parseInt(golesVisitante);

                        //Caso 1 - A (local) vs B (visitante)
                        if (equipoLocalPartido == nombreA && equipoVisitantePartido == nombreB) {
                            golesDirectosA += golesLocal;
                            golesDirectosB += golesVisitante;
                        }
                        //Caso 2 - B (local) vs A (visitante)
                        else if (equipoLocalPartido == nombreB && equipoVisitantePartido == nombreA) {
                            golesDirectosB += golesLocal;
                            golesDirectosA += golesVisitante;
                        }


                    }
                }

                if (golesDirectosB > golesDirectosA) {
                    return 1;
                }
                else if (golesDirectosA > golesDirectosB) {
                    return -1;
                }

                else {
                    //Segundo - Decidir desempate por diferencia de goles general
                    if (dgB > dgA) {
                        return 1;
                    }
                    else if (dgA > dgB) {
                        return -1;
                    }
                    else {
                        //Tercero - Decidir desempate por goles a favor
                        if (gfB > gfA) {
                            return 1;
                        }
                        else if (gfA > gfB) {
                            return -1;
                        }
                        else {
                            return 0; //empate total y absoluto
                        }
                    }
                }


            }


        });

        let tablaClasificacion = document.querySelector(".tabla-clasificacion tbody");
        for (let i = 0; i < filasArray.length; i++) {
            let celdaPos = filasArray[i].querySelector(".pos");
            celdaPos.textContent = (i + 1) + ".";

            // Solo pegamos la fila
            tablaClasificacion.appendChild(filasArray[i]);
        }

        pintarTabla();

    });

    //Boton para resetear todo
    btnReset.addEventListener("click", function () {
        reseteoMarcador();
        reseteoTabla();
    });

    function reseteoTabla() {
        for (let i = 0; i < filasTabla.length; i++) {
            filasTabla[i].querySelector("td[class=p_jugados]").textContent = "0";
            filasTabla[i].querySelector("td[class=v]").textContent = "0";
            filasTabla[i].querySelector("td[class=e]").textContent = "0";
            filasTabla[i].querySelector("td[class=d]").textContent = "0";
            filasTabla[i].querySelector("td[class=gf]").textContent = "0";
            filasTabla[i].querySelector("td[class=gc]").textContent = "0";
            filasTabla[i].querySelector("td[class=dg]").textContent = "0";
            filasTabla[i].querySelector("td[class=ptos]").textContent = "0";
        }


    }

    function reseteoMarcador() {
        for (let i = 0; i < marcador.length; i++) {
            marcador[i].value = "";
        }
    }

    function pintarTabla() {
        //Reordenar tabla de clasificacion
        let filasActuales = document.querySelectorAll(".tabla-clasificacion tbody tr");

        for (let i = 0; i < filasActuales.length; i++) {
            // Limpiar clases
            filasActuales[i].className = "border-b border-slate-700 text-center";

            if (i < 4) {
                filasActuales[i].classList.add("bg-blue-900");
            }
            else if (i === 4) {
                filasActuales[i].classList.add("bg-orange-600");
            }
            else if (i === 5) {
                filasActuales[i].classList.add("bg-green-600");
            }
            else if (i >= 17) {
                filasActuales[i].classList.add("bg-red-700");
            }
            else {
                filasActuales[i].classList.add("bg-slate-800");
            }
        }
    }

});
