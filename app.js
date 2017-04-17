
var appRest = new Vue({
  el: '#appRest',
  data: {
    questions: {},
    e: [],
    redAnswer: '',
    blueAnswer: '',
    greenAnswer: '',
    yellowAnswer:'',
    main: {},
    qCount: 0,
    picked:'',
    tally: {
      red: 0,
      blue: 0,
      green: 0,
      yellow: 0,
    },
    yourColor: '',
    lowerColor:'',
    colorArray: [],
    showSum: false
  },
  // methods: {
  // //   postContact: function () {
   // //    axios.post('http://localhost:3001/api/contacts', {
   // //      first_name: this.first_name,
   // //      last_name: this.last_name,
   // //      email: this.email,
   // //      website: this.website
   // //    })
   // //    .then(response => {})
   // //    .catch(e => {
   // //      this.errors.push(e)
   // //    });
  // // },

  //  getQuestion: function () {
  //     // this.$http.get('http://localhost:3001/api/contacts').then(response => {

   //   axios.get('http://localhost:3001/api/questions')
  //      .then(response => {
  //     // JSON responses are automatically parsed.

   //      this.questions = response.data
  //       this.main = this.questions[this.qCount]
   //      console.log(this.main);
  //      })
  //      .catch(e => {
  //        this.errors.push(e)
  //        console.log(e);
  //      });
  //   },

  //   nextQuestion: function() {
  //     this.getQuestion().qCount = this.getQuestion().qCount + 1
  //   }
  // },
  computed: {
    getQuestion: function () {
      // this.$http.get('http://localhost:3001/api/contacts').then(response => {

      axios.get('http://localhost:3001/api/questions')
        .then(response => {
      // JSON responses are automatically parsed.

        this.questions = response.data
        this.main = this.questions[this.qCount]
        })
        .catch(e => {
          this.errors.push(e)
          console.log(e);
        });
    }

  },
  methods: {
    addPoint: function() {
      if (this.picked == 'Red') {
          this.tally.red = this.tally.red + 1
      }
      if (this.picked == 'Blue') {
          this.tally.blue = this.tally.blue + 1
      }
      if (this.picked == 'Green') {
          this.tally.green = this.tally.green + 1
      }
      if (this.picked == 'Yellow') {
          this.tally.yellow = this.tally.yellow + 1
      };

    },
    calcWin: function() {
        this.colorArray.push(this.tally.red);
        this.colorArray.push(this.tally.blue);
        this.colorArray.push(this.tally.green);
        this.colorArray.push(this.tally.yellow);

          var largest = Math.max.apply(Math, this.colorArray);
          if (largest == this.colorArray[0]) {
            this.yourColor = 'Red'
          }
          if (largest == this.colorArray[1]) {
            this.yourColor = 'Blue'
          } 
          if (largest == this.colorArray[2]) {
            this.yourColor = 'Green'
          }
          if (largest == this.colorArray[3]) {
            this.yourColor = 'Yellow'
          };
          this.lowerColor = this.yourColor.toLowerCase();
          return this.yourColor;
    },
    nextQuestion: function() {
      if (this.qCount < (this.questions.length -1)) {
      this.qCount = this.qCount + 1;
      //outsource this shit
      this.addPoint();
      } 
     if (this.qCount == (this.questions.length -1)){
        this.calcWin();
        this.showSum = true;
        console.log(this.yourColor);
        this.qCount = this.qCount + 1;
      }
     if (this.qCount > (this.questions.length -1)){
      console.log("burp");

     };
    },
    prevQuestion: function() {
      if (this.qCount > 0) {
      this.qCount = this.qCount - 1;
      console.log(this.qCount);
    } else {console.log("nothing");}},
    showPicked: function() {
      console.log(this.redAnswer);
    },

    yourAnswer: function() {
      
    }
  },
  watch: {
    // whenever qCount changes, this function will run
    qCount: function (newQuestion) {
      this.main = this.questions[this.qCount]
    }
  },
});


///Figure a way to proc this method with a windows.onload event listener???
// appRest.getQuestion();
// appRest.postContact();