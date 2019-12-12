// In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
  
 //try {
   $('select').select2({
     tags: true,
     placeholder: "علاقه مندی مورد نظر",
   });
   
   $('select').select2({
     tags: true,
     placeholder: "گروه مورد نظر",
   });
// }
 //catch (err) {
//   console.log(err)
// }
 
});

console.log('Hello World!');