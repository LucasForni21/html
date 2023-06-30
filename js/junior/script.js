// let cantidad = prompt("Cantidad de alumnos: ");
// let alumnosTotales = [];

// for ( i = 0; i < cantidad; i++) {
//  alumnosTotales[i] = [prompt("Nombre del alumno: " + (1+i)),0]; 
// }

// function tomarAsistencia(nombre, p){
// let asistencia = prompt(nombre);
// if (asistencia == "p" || asistencia =="P") {
//   alumnosTotales[p][1]++;
// }
// };


// for(i = 0 ; i < 5; i++){
// for(alumno in alumnosTotales){

// tomarAsistencia(alumnosTotales[alumno][0], [alumno]);
// }
// };


// for(alumno in alumnosTotales){
//    let resultado;

//   if(alumnosTotales[alumno][1] < 3){
//     resultado = `${alumnosTotales[alumno][0]} <br> 
//     Presentes: ${alumnosTotales[alumno][1]} <br> 
//     Ausentes: ${ 5 - alumnosTotales[alumno][1]} <b style = "color:red">"Reprobado por inasistencia"</b> <br> `;
  
//     document.write(resultado);

//   } else{
//     resultado = `${alumnosTotales[alumno][0]} <br>
//     Presentes: ${alumnosTotales[alumno][1]} <b style="color:green">"Asistencia correcta"</b> <br>
//     Ausentes: ${ 5 - alumnosTotales[alumno][1]}   <br>`;
     
//     document.write(resultado);
   
//   }

// }