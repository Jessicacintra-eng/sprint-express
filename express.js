import readline from 'readline';
let resp = [];

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
leitor.question("Escreva sua lista de propriedades em css?\n", (ans)=> {
  resp.push(ans)
  leitor.on('line',(line)=>{
    if(line.toUpperCase()=="SAIR"){
      leitor.close()
      resp.sort((a, b) => a.localeCompare(b))  
      console.log(`\nSua lista de itens é :`) 
      resp.forEach(resp => console.log("-> "+resp))
      console.log(`\n----Fim\n`)
    } 
    resp.push(line)
  })
     
})

  
 