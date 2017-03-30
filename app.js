
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
    qCount: 0
  },
  // methods: {
  // //   postContact: function () {
	 // //  	axios.post('http://localhost:3001/api/contacts', {
	 // //  		first_name: this.first_name,
	 // //  		last_name: this.last_name,
	 // //  		email: this.email,
	 // //  		website: this.website
	 // //  	})
	 // //  	.then(response => {})
	 // //  	.catch(e => {
	 // //  		this.errors.push(e)
	 // //  	});
  // // },

  // 	getQuestion: function () {
  //     // this.$http.get('http://localhost:3001/api/contacts').then(response => {

	 //  	axios.get('http://localhost:3001/api/questions')
  // 	  	.then(response => {
  //     // JSON responses are automatically parsed.

	 //      this.questions = response.data
  //       this.main = this.questions[this.qCount]
	 //      console.log(this.main);
  //     	})
  //     	.catch(e => {
  //     	  this.errors.push(e)
  //     	  console.log(e);
  //     	});
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
        console.log(this.main);
        console.log(this.qCount);
        })
        .catch(e => {
          this.errors.push(e)
          console.log(e);
        });
    }

  },
  methods: {
    nextQuestion: function() {
      this.qCount = this.qCount + 1
      console.log(this.qCount);
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