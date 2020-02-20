// import FileSaver from 'file-saver';


const text="In the beginning God created the heavens and the earth. Now the earth was formless and empty, darkness was over the surface of the deep, and the Spiritof God was hovering over the waters.And God said, 'Let there be light', and there was light. God saw that the light was good, and he separated the light from the arkness. God called the light 'day', and the darkness he called 'night'. And there was evening, and there was morning - the first day."



function recebeTexto(input,compr){
    const lines = []
    let line =""
   
    const inputArray = input.split(" ") 

    inputArray.forEach((item) =>{
        if(line.length + item.length < compr){
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
    console.log(line) 
  
    // var blob = new Blob(lines, {type: "text/plain;charset=utf-8"})
    // FileSaver.saveAs(blob, "output.txt")
 }

 recebeTexto(text,40)

 
 

