let dataTraducida=[
  'Inicio de la transcripción. Saltar al final.',
  'Subtítulo en inglés por Junhui DENG, deng@tsinghua.edu.cn',
  'Con un poco de ayuda de Analytic Geometry, no es difícil implementar la prueba ToLeft().',
  'Sí, como sabemos, cada línea en el espacio (planar) se puede describir como una ecuación.',
  'Y la distancia desde cualquier punto a la línea se puede determinar directamente mediante la ecuación.',
  'Y además, puede decidir si el punto se encuentra a la izquierda/derecha de la línea por el (signo de la) distancia.',
  'Sin embargo, tengo que decir que no es la mejor manera.',
  'Probemos otro método a continuación.',
  'Como veremos pronto, es más simple, seguro y eficiente.',
  'El nuevo enfoque se basa en Determinante.',
  'Si no está tan familiarizado con Determinante, use la fórmula de Heron aprendida en su escuela secundaria.',
  'Para cualesquiera tres puntos dados en el plano, esta fórmula dará directamente el área del triángulo abarcado.',
  'Tal determinante es equivalente al área del triángulo.',
  'Específicamente, el determinante simplemente duplica el área.',
  'Tenga en cuenta que el área aquí es direccional.',
  'Por ejemplo, considere un triángulo definido en el sentido contrario a las agujas del reloj, es decir, cuando el punto s está a la izquierda del segmento dirigido pq, y otro definido en el sentido de las agujas del reloj, es decir, cuando s está a la derecha.',
  'Pueden compartir una misma área, pero con signos diferentes.',
  'Sí, es la señal de área lo que es esencial aquí.',
  'Nuestra prueba a la izquierda solo se basa en este signo.',
  'No es difícil verificar que dicho determinante es positivo si el punto s está a la izquierda de pq.',
  'Además, el cálculo de dicho determinante es sencillo y, por lo tanto, es fácil de implementar como una pequeña pieza de código.',
  'Como podemos ver, es más conciso implementar pruebas a la izquierda usando determinante que resolviendo un sistema de ecuaciones.',
  'Un método tan simple es fácil de entender y, por lo tanto, da como resultado un código con menos errores y una mayor legibilidad.',
  'Además, este método tiene una ventaja más sobre otros. ¿Pudiste verlo?',
  'Sí, los codificadores experimentados verían en unos segundos que así se evitan las divisiones y los cálculos más complicados, como las funciones trigonométricas.',
  'Un cálculo tan complejo genera no solo costos adicionales sino también errores numéricos.',
  'Debe saber que este tipo de errores pueden ser fatales para los algoritmos.',
  'Entonces, una vez que se excluyen tales cálculos, todos estos problemas se eliminan.',
  'Fin de la transcripción. Saltar al inicio.'
]


let hijos = document.getElementsByClassName("subtitles-menu")[0].childNodes

for(let i=0;i<hijos.length;i++){
    hijos[i].childNodes[0].textContent=dataTraducida[i]
}