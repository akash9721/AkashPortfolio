const myQuestions = [
    {
      question: "Q1: Where does he live?",        //array of objects
        a: "Utter Pradesh",
        b: "Bihar",
        c: "Delhi",
        d:"Asam",
        Answer: "ans1"
    },
    {
      question: "Q2: When is Akash kumar's birthday month?",
        a: "Janruary",
        b: "August",
        c: "March",
        d:"April",
      Answer: "ans3"
    },
    {
      question: "Q3: Which app does Akash use Most?",
        a: "Whatsapp",
        b: "Facebook",
        c: "Youtube",
        d: "Instagram",
       Answer: "ans3"
    },
    {
      question: "Q4: Is Akash kumar a Tea person or a coffee person?",
        a: "Tea",
        b: "Coffe",
        c: "Both",
        d: "None of these",
       Answer: "ans3"
    },
    {
      question: "Q5: What kind of person is Akas kumar ?",
        a: "Vegetarian",
        b: "Non vegetarian",
        c: "Eggterian",
        d: "NOT",
       Answer: "ans3"
    },
    {
      question: "Q6: Which fast food Akash prefer most?",
        a: "Dominos",
        b: "Burger king",
        c: "KFC",
        d: "Subway",
       Answer: "ans2"
    },
    {
      question: "Q7: What does Akash kumar prefer?",
        a: "Love Marriage",
        b: "Arrange Marriage",
        c: "other",
        d: "none of these",
       Answer: "ans2"
    },
     {
      question: "Q8: What is more important to Akash kumar?",
        a: "Money",
        b: "Love",
        c: "Friend & Family",
        d: "Carrier",
       Answer: "ans3"
    },
    {
      question: "Q9: What is favourite game of Akash?",
        a: "Football",
        b: "Cricket",
        c: "Batminton",
        d: "Bollybol",
       Answer: "ans2"
    },
    {
      question: "Q10: What does he like in free time ?",
        a: "Lisiting Song",
        b: "Watching Movie",
        c: "Wandering",
        d: "Sleeping",
       Answer: "ans1"
    }
  ];
  let len=myQuestions.length;
  console.log(`length is ${len}`);
  const question=document.querySelector('.question');
  const option1=document.querySelector('#option1');
  const option2=document.querySelector('#option2');
  const option3=document.querySelector('#option3');
  const option4=document.querySelector('#option4');
  const sub=document.querySelector('#submit');
  const output=document.querySelector('#output');

  const ansis=document.querySelectorAll('.ans');

  let score=0;
  let qcnt=0;
  const questionshow=()=>{
      const qlist=myQuestions[qcnt];
      question.innerHTML=qlist.question;

      option1.innerHTML=qlist.a;
      option2.innerHTML=qlist.b;
      option3.innerHTML=qlist.c;
      option4.innerHTML=qlist.d;
  }
  questionshow();

  function getcheckedans() {
      let answer;
      
      ansis.forEach((currele)=>{
          if(currele.checked)
          {
              answer=currele.id;
          }
      });
      return answer;
  };

  const deselectall=()=>{
      ansis.forEach((curele)=>curele.checked=false);
  }

  sub.addEventListener('click',()=>{
     const getans=getcheckedans();
     console.log(getans);
     if(getans==myQuestions[qcnt].Answer){
         score++;
     }
     
     qcnt++; //for counting the questions

     deselectall(); //deselect option so we we restart again 

     if(qcnt<myQuestions.length)
     {
         questionshow(); //show next question
     }else{
         output.innerHTML=`
         <h3> you Scored ${score}/${len} ✌ </h3>
         <button class="btn" onclick="location.reload()">Play Again</button>
         `;
         output.classList.remove('scorearea');
     }
      

  });


