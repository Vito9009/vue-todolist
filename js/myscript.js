/*
Rifare l’esercizio della to do list.

Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all’interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo 
viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, 
il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene 
aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente 
(se done era uguale a false, impostare true e viceversa)
*/
var app = new Vue({
    el: '#myvuecontainer',
    data: {
        newtodotext: "",
        todo: [
          {
            todotext: 'Creare lista To Do',
            tododone: true
          },
          {
            todotext: 'Pulire casa',
            tododone: false
          },
          {
            todotext: 'Fare la spesa',
            tododone: false
          },
          {
            todotext: 'Guardare serie TV',
            tododone: false
          }
      ]
    },

    methods: {
        add: function(){                           // Aggiungi elementi alla to to tist
            if(this.newtodotext != ''){            // Non aggiungere elementi se l'input è vuoto
            this.todo.push(
            {
                todotext: this.newtodotext,
                tododone: false
            }
            );
            this.newtodotext = "";
        }else{
            alert("Non hai scritto nulla. È inutile aggiungere un ToDo vuoto ;)")   // Alert che appare con input vuoto
        }
        },

        remove: function(i){                        // Rimuovi elementi dalla to do list
            this.todo.splice(i, 1);
        },

        crossedoutdone: function(i){                // Aggiungi barra all'elemento con tododone true
            if (this.todo[i].tododone == true){
                return "crossedout";
            }
            return "";
        },

        togglecrossedout: function(i){              // Se il tododone ha true quest'ultimo diventa false
            if (this.todo[i].tododone == true){     // (inserito nel click per barrare i to do svolti e togliere barra
                this.todo[i].tododone = false;      // ad elementi non svolti)
            }else{
                this.todo[i].tododone = true;
            }
        },
    }
  })