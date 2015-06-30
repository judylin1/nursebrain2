// module.exports = {
//
// weightBased: function(wtordered, weight) {
//   var answer = "";
//   if (weight === "kg") {
//     answer = wtordered * weight;
//   }
//   else if (weight === "lbs") {
//     answer = wtordered * weight * 0.453592;
//   }
// }
//
// //   if(form.wtunit.selectedIndex==0) {
// //   var answer = (form.ordered.value) * (form.weight.value);
// //   form.answer.value = Math.round(answer);
// //   }
// //   if(form.wtunit.selectedIndex==1) {
// //   var answer = (form.ordered.value) * (form.weight.value * 0.453592);
// //   form.answer.value = Math.round(answer);
// //   }
// // }
//
// // doseLiquid: function(form) {
// //   var answer = (form.ordered.value / form.available.value) * form.volume.value;
// //   form.answer.value = Math.round(100*answer)/100;
// //
// //   //if statements--
// //   if((form.ordered.value==null)||(form.ordered.value=="")||(isNaN(form.ordered.value))){
// //   alert('Please enter a dosage with numbers and or periods only. All other characters are not allowed');
// //   form.ordered.focus();
// //   form.ordered.select();
// //   return false;
// //   }
// //   if((form.available.value==null)||(form.available.value=="")||(isNaN(form.available.value))){
// //   alert('Please enter a dosage with numbers and or periods only. All other characters are not allowed');
// //   form.available.focus();
// //   form.available.select();
// //   return false;
// //   }
// //   if((form.volume.value==null)||(form.volume.value=="")||(isNaN(form.volume.value))){
// //   alert('Please enter a volume with numbers and or periods only. All other characters are not allowed');
// //   form.volume.focus();
// //   form.volume.select();
// //   return false;
// //   }
// // }
// //
// // doseSolid: function(form) {
// //   var answer = (form.ordered.value / form.available.value);
// //   if(form.route.selectedIndex==0){
// //   var message="tablet";
// //   }
// //   if(form.route.selectedIndex==1) {
// //   var message="capsule";
// //   }
// //   if(form.route.selectedIndex==2) {
// //   var message="patch";
// //   }
// //   if(form.route.selectedIndex==3) {
// //   var message="suppository";
// //   }
// //
// //   //alerts--
// //   if((form.ordered.value==null)||(form.ordered.value=="")||(isNaN(form.ordered.value))){
// //   alert('Please enter a dosage with numbers and or period only. All other characters are not allowed');
// //   form.ordered.focus();
// //   form.ordered.select();
// //   return false;
// //   }
// //   if((form.available.value==null)||(form.available.value=="")||(isNaN(form.available.value))){
// //   alert('Please enter a dosage with numbers and or period only. All other characters are not allowed');
// //   form.available.focus();
// //   form.available.select();
// //   return false;
// //   }
// //
// //   form.answer.value = ("Give " + Math.round(100*answer)/100
// //   	+ " " + message);
// //   }
// // }
// //
// // //IV CALC//
// // IVrate: function(form) {
// // if (form.charge[0].checked) {
// //
// // //calculate time as hours
// // var answer = form.volume.value / form.time.value;
// // }
// //
// // //calculate time in minutes
// // else {
// // var answer = form.volume.value / (form.time.value / 60);
// // }
// // form.answer.value = Math.round(10*answer)/10;
// //
// // //alert
// // if((form.time.value==null)||(form.time.value=="")||(isNaN(form.time.value))){
// // alert('Please enter time with numbers only');
// // form.time.focus();
// // form.time.select();
// // return false;
// // }
// //
// // //alert
// // if((form.volume.value==null)||(form.volume.value=="")||(isNaN(form.volume.value))){
// // alert('Please enter volume with numbers only. Use a period for decimal place.');
// // form.volume.focus();
// // form.volume.select();
// // return false;
// // }
// // }
// //
// infuseTime: function(form) {
// var volume = form.volume.value;
// var rate = form.rate.value;
// var modulus = volume % rate;
// var minutes = modulus/rate*60;
// var hours = volume/rate;
// form.hours.value  = Math.floor(hours);
// form.minutes.value = Math.round(minutes);
//
// //alerts
// if((form.volume.value==null)||(form.volume.value=="")||(isNaN(form.volume.value))){
// alert('Please enter mL. Enter only numbers or period for decimal points');
// form.volume.focus();
// form.volume.select();
// return false;
// }
// if((form.rate.value==null)&&(form.option[0].checked==true)||(form.rate.value=="")&&(form.option[0].checked==true)||(isNaN(form.rate.value)&&(form.option[0].checked==true))){
// alert('Please enter a rate. Enter only numbers or period for decimal points');
// form.rate.focus();
// form.rate.select();
// return false;
// // }
// }
