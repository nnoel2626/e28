let app = new Vue({
    el: '#app',
    data: {
        'isHidden': true,
        'playerName': null,
        'guess': null,
        'guesses': [],
        'results': null,
        'settings': {
            'max': 200,
            'type': 'numeric',
            'guessLimit': 15
        },
        wordList: [{
                id: 0,
                text: 'Vegetables'
            },
            {
                id: 1,
                text: 'Cheese'
            },
            {
                id: 2,
                text: 'Whatever'
            }
        ],

        'answer': 55,
        'guessesDetailed': [{
                guess: 15,
                result: 'low'
            },
            {
                guess: 60,
                result: 'high'
            },
            {
                guess: 50,
                result: 'low'
            }
        ]

    },

    methods: {
        greet: function (event) {
            // `this` inside methods points to the Vue instance
            alert('Welcome ' + this.playerName + '!')
            // `event` is the native DOM event
            if (event) {
                alert(event.target.tagName)
            }
        },
        methods: {
            submitGuess: function () {
                this.guesses.push(this.guess);
            }

        }
    }



});











//  const app = new Vue({
//      el: '#app',
//      data() {
//          return {
//              name: 'Luna the Destroyer of Dogs',
//              cats: [{
//                      name: 'Simba',
//                      age: 11
//                  },
//                  {
//                      name: 'Robin',
//                      age: 5
//                  }, {
//                      name: 'Luna',
//                      age: 9
//                  },
//                  {
//                      name: 'Cracker',
//                      age: 6
//                  },
//                  {
//                      name: 'Pig',
//                      age: 3
//                  }
//              ]
//          }
//      },
//      computed: {
//          oldcats() {
//              return this.cats.filter(c => {
//                  return c.age > 10;
//              });
//          }
//      }

//  });