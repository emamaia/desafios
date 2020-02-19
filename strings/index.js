const input="In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spiritof God was hovering over the waters.And God said, 'Let there be light', and there was light. God saw that the light was good, and he separated the light from the arkness. God called the light 'day', and the darkness he called 'night'. And there was evening, and there was morning - the first day."


 const input_array = input.split(" ")

 const lines = []

 let line =""

 console.log(input_array);
 
 

 input_array.forEach((item) =>{
     if(line.length + item.length < 40){
         if(line.length != 0){
           line =  line.concat(" ");
         }       
       line =  line.concat(item);
     } else{
         console.log(line);         
         lines.push(line);
         line=item;
     }
 })

 lines.push(line)

 console.log(line);
 
 

