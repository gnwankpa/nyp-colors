
var appRest = new Vue({
  el: '#appRest',
  data: {
    questions: {},
    e: [],
    redAnswer: '',
    blueAnswer: '',
    greenAnswer: '',
    yellowAnswer:'',
    main: {}
  },
  methods: {
  //   postContact: function () {
	 //  	axios.post('http://localhost:3001/api/contacts', {
	 //  		first_name: this.first_name,
	 //  		last_name: this.last_name,
	 //  		email: this.email,
	 //  		website: this.website
	 //  	})
	 //  	.then(response => {})
	 //  	.catch(e => {
	 //  		this.errors.push(e)
	 //  	});
  // },

  	getQuestion: function () {
      // this.$http.get('http://localhost:3001/api/contacts').then(response => {
	  	axios.get('http://localhost:3001/api/questions')
  	  	.then(response => {
      // JSON responses are automatically parsed.
        qCount = 0
	      this.questions = response.data
        this.main = this.questions[qCount]
	      console.log(this.main);
      	})
      	.catch(e => {
      	  this.errors.push(e)
      	  console.log(e);
      	});
    }
}
});


///Figure a way to proc this method with a windows.onload event listener???
appRest.getQuestion();
// appRest.postContact();