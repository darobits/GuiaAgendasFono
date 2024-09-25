// Función para crear gráficos de barras usando Chart.js
function crearGrafico(idCanvas, etiquetas, datosConsulta, datosTratamiento, titulo) {
    const ctx = document.getElementById(idCanvas).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: etiquetas,
            datasets: [
                {
                    label: 'Consulta',
                    data: datosConsulta,
                    backgroundColor: 'rgba(54, 162, 235, 0.7)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Tratamiento/Prácticas',
                    data: datosTratamiento,
                    backgroundColor: 'rgba(75, 192, 192, 0.7)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: titulo
                },
                tooltip: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    position: 'top',
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Horas Semanales'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Subespecialidades'
                    }
                }
            }
        }
    });
}

// Gráfico de Distribución General de Carga Horaria
const etiquetasGeneral = ['Consulta (30%)', 'Tratamiento y Prácticas (70%)'];
const datosConsultaGeneral = [5.4, 3.6]; // Ejemplos para 18h y 12h
const datosTratamientoGeneral = [12.6, 8.4];
crearGrafico('graficoGeneral', etiquetasGeneral, datosConsultaGeneral, datosTratamientoGeneral, 'Distribución General de Carga Horaria');

// Gráfico para Fonoestomatología
const etiquetasFono = ['18 horas', '12 horas'];
const datosConsultaFono = [5.4, 3.6];
const datosTratamientoFono = [12.6, 8.4];
crearGrafico('graficoFonoestomatologia', etiquetasFono, datosConsultaFono, datosTratamientoFono, 'Fonoestomatología');

// Gráfico para Áreas de la Voz
const etiquetasVoz = ['18 horas', '12 horas'];
const datosConsultaVoz = [4.32, 2.88];
const datosTratamientoVoz = [10.08, 6.72];
const datosPracticasVoz = [3.6, 2.4];
const ctxVoz = document.getElementById('graficoAreasVoz').getContext('2d');
new Chart(ctxVoz, {
    type: 'bar',
    data: {
        labels: etiquetasVoz,
        datasets: [
            {
                label: 'Prácticas (20%)',
                data: datosPracticasVoz,
                backgroundColor: 'rgba(153, 102, 255, 0.7)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            },
            {
                label: 'Consulta (30%)',
                data: datosConsultaVoz,
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Tratamiento (70%)',
                data: datosTratamientoVoz,
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Áreas de la Voz'
            },
            tooltip: {
                mode: 'index',
                intersect: false
            },
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Horas Semanales'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Horas Semanales'
                }
            }
        }
    }
});

// Gráfico para Audiología
const etiquetasAudiologia = ['18 horas - Solo Prácticas', '18 horas - Con Asistencial', '12 horas - Solo Prácticas', '12 horas - Con Asistencial'];
const datosAudiologia = [18, 10.8, 12, 7.2];
const datosAsistencial = [0, 7.2, 0, 4.8];
const ctxAudiologia = document.getElementById('graficoAudiologia').getContext('2d');
new Chart(ctxAudiologia, {
    type: 'bar',
    data: {
        labels: etiquetasAudiologia,
        datasets: [
            {
                label: 'Prácticas',
                data: datosAudiologia,
                backgroundColor: 'rgba(255, 159, 64, 0.7)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            },
            {
                label: 'Asistencial',
                data: datosAsistencial,
                backgroundColor: 'rgba(255, 205, 86, 0.7)',
                borderColor: 'rgba(255, 205, 86, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Audiología'
            },
            tooltip: {
                mode: 'index',
                intersect: false
            },
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Horas Semanales'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Tipos de Horas'
                }
            }
        }
    }
});

// Gráfico para Vestibular
const etiquetasVestibular = ['18 horas', '12 horas'];
const datosVestibular = [9, 6];
const datosConsultaTratamientoVestibular = [9, 6];
crearGrafico('graficoVestibular', etiquetasVestibular, datosVestibular, datosConsultaTratamientoVestibular, 'Vestibular');

// Gráfico para Lenguaje y Comunicación
const etiquetasLenguaje = ['18 horas', '12 horas'];
const datosConsultaLenguaje = [5.4, 3.6];
const datosTratamientoLenguaje = [12.6, 8.4];
crearGrafico('graficoLenguaje', etiquetasLenguaje, datosConsultaLenguaje, datosTratamientoLenguaje, 'Lenguaje y Comunicación');