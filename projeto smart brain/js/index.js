let radio = document.getElementsByName('radio')

let text = document.getElementById('itext');

let saida = document.getElementById('saida');

let name = "FAIZ";
let name2 = "KAIXA";
let name3 = "DELTA";
let name4 = "PSYGA";
let name5 = "ORGA";

function clicou() {
  
  if (radio[0].checked && text.value == '555') {
    
    saida.innerHTML = `<p> COMPLETE! ${name} IS NOW LOG IN! </p>`;
  }

  if (radio[1].checked && text.value == '913') {

    saida.innerHTML = `<p> COMPLETE! ${name2} IS NOW LOG IN! </p>`;
    
  }

  if (radio[2].checked && text.value === 'Delta') {
    
    saida.innerHTML = `<p> COMPLETE! ${name3} IS NOW LOG IN! </p>`;
  }

  if (radio[3].checked && text.value == '315') {

    saida.innerHTML = `<p> COMPLETE! ${name4} IS NOW LOG IN! </p>`;
    
  }

  if (radio[4].checked && text.value == '000') {

    saida.innerHTML = `<p> COMPLETE! ${name5} IS NOW LOG IN! </p>`;
    
  }

  if (radio[0].checked && text.value != '555' || radio[1].checked && text.value != '913' || radio[2].checked && text.value != 'Delta' ||  radio[3].checked && text.value != '315' ||  radio[4].checked && text.value != '000') {
    
    saida.innerHTML = `<p> ERROR! </p>`;

  }

  else if (radio[0].checked != true && text.value == '' || radio[1].checked != true && text.value == '' || radio[2].checked != true && text.value == '' ||  radio[3].checked != true && text.value == '' ||  radio[4].checked != true && text.value == '') {

    saida.innerHTML = `<p> ERROR! EMPTY CHECK!</p>`;

  }
 
 
}

function reset() {
   document.location.reload();

}