// this is the code which will be injected into a given page...
(function () {

               //background color of page turned to black
               let background = document.querySelector("body");
               background.style['background-color'] = "#000000";
        

        
               //background color of each <section> element turned to black
               let sectionChange = document.querySelectorAll('section');
               sectionChange.forEach(element =>{
                  element.style['background-color'] = "#000000";
              })
  

               // by using querySelectorAll() this selects all elements
                //link blue
              let selectAll = document.querySelectorAll('a');
              selectAll.forEach(element => {
                  element.style['color'] = "#868bf3";
              })
              // paragraph yellow
              let selectp = document.querySelectorAll('p');
              selectp.forEach(element => {
                  element.style['color'] = "#f7ce47";
                  //element.style['border'] = "1px solid white";
                  element.style["font-family"]= "Lato, Arial, sans-serif";
                  
              })
              //heading pink
              let selecth1 = document.querySelectorAll('h1', 'h2', 'h3', 'h4', 'h5', 'h6');
              selecth1.forEach(element => {
                  element.style['color'] = "#DF6CBB";
                  element.style["font-family"]= "Lato, Arial, sans-serif";
              })
              let selectmain = document.querySelectorAll('mw-body');
              selectmain.forEach(element => {
                  element.style['color'] = "#000000";
                  element.style["font-family"]= "Lato, Arial, sans-serif";
              })
              let selectspan = document.querySelectorAll('span');
              selectspan.forEach(element => {
                  element.style['color'] = "#DF6CBB";
                  element.style["font-family"]= "Lato, Arial, sans-serif";
              })
              let selectdd = document.querySelectorAll('dd');
              selectdd.forEach(element => {
                  element.style['color'] = "#f7ce47";
                  element.style["font-family"]= "Lato, Arial, sans-serif";
              })
              let selectth = document.querySelectorAll('th');
              selectth.forEach(element => {
                  element.style['color'] = "#DF6CBB";
                  element.style['background-color'] = "#000000";
                  element.style["font-family"]= "Lato, Arial, sans-serif";
              })
              let selecttd = document.querySelectorAll('td');
              selecttd.forEach(element => {
                  element.style['color'] = "#DF6CBB";
                  element.style['background-color'] = "#000000";
                  element.style["font-family"]= "Lato, Arial, sans-serif";
              })
              let selectlabel = document.querySelectorAll('label');
              selectlabel.forEach(element => {
                  element.style['color'] = "#DF6CBB";
                  element.style["font-family"]= "Lato, Arial, sans-serif";
                  //element.style['background-color'] = "#000000";
              })
              let selectli = document.querySelectorAll('li');
              selectli.forEach(element => {
                  element.style['color'] = "#f7ce47";
                  element.style["font-family"]= "Lato, Arial, sans-serif";
              })
      
  
              const body2=document.getElementsByClassName("mw-body");
              body2[0].style.backgroundColor="#000000";
              const body=document.body;
              body.style.backgroundColor="black";



    }


)();

