document.addEventListener('DOMContentLoaded', function(){
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');
    const questionTitle = document.querySelector('#question');
    const formAnswers = document.querySelector('#formAnswers');
    const nextButton = document.querySelector('#next');
    const prevButton = document.querySelector('#prev');

    const questions = [
      {
          question: "Якого кольору бургер?",
          answers: [
              {
                  title: 'Стандарт',
                  url: './image/burger.png'
              },
              {
                  title: 'Чорний',
                  url: './image/burgerBlack.png'
              }
          ],
          type: 'radio'
      },
      {
          question: "З якого м'яса котлета?",
          answers: [
              {
                  title: 'Курка',
                  url: './image/chickenMeat.png'
              },
              {
                  title: 'Яловичина',
                  url: './image/beefMeat.png'
              },
              {
                  title: 'Свинина',
                  url: './image/porkMeat.png'
              }
          ],
          type: 'radio'
      },
      {
          question: "Додаткові інгредієнти ?",
          answers: [
              {
                  title: 'Помідор',
                  url: './image/tomato.png'
              },
              {
                  title: 'Огірок',
                  url: './image/cucumber.png'
              },
              {
                  title: 'Салат',
                  url: './image/salad.png'
              },
              {
                  title: 'Цибуля',
                  url: './image/onion.png'
              }
          ],
          type: 'checkbox'
      },
      {
          question: "Додати соус?",
          answers: [
              {
                  title: 'Часниковий',
                  url: './image/sauce1.png'
              },
              {
                  title: 'Томатний',
                  url: './image/sauce2.png'
              },
              {
                  title: 'Гірчичний',
                  url: './image/sauce3.png'
              }
          ],
          type: 'radio'
      }
  ];

    btnOpenModal.addEventListener('click', function(){
        modalBlock.classList.add('d-block');
        playTest();
    });

    closeModal.addEventListener('click', function(){
        modalBlock.classList.remove('d-block');
    });

    const playTest = function(){
    let numberQuestion = 0;

    const updateButtonVisibility = function(){
      prevButton.style.display = numberQuestion > 0 ? 'inline-block' : 'none';
      nextButton.style.display = numberQuestion < questions.length - 1 ? 'inline-block' : 'none';
    };

    const readerAnswers = function(index){
        
        questions[index].answers.forEach((answer) =>{
          const AnswerItem = document.createElement("div");
          AnswerItem.classList.add("answers-item", "d-flex", "flex-column");
          AnswerItem.innerHTML = `
              <input type="${questions[index].type}" id="${answer.title}" name="answer" class="d-none">
              <label for="${answer.title}" class="d-flex flex-column justify-content-between">
              <img class="answerImg" src="${answer.url}" alt="burger">
              <span>${answer.title}</span>
              </label>           
          `;
          formAnswers.appendChild(AnswerItem);
        })
      }
        const renderQuestions = function(indexQuestions){
            formAnswers.innerHTML = '';
            questionTitle.textContent = `${questions[indexQuestions].question}`;
            readerAnswers(indexQuestions);
            updateButtonVisibility();
        };
        renderQuestions(numberQuestion);
        
        nextButton.onclick = function(){
          if(numberQuestion < questions.length-1){
            numberQuestion++;
            renderQuestions(numberQuestion);
          }
        }
        prevButton.onclick = function(){
          if(numberQuestion >= 1){
            numberQuestion--;
            renderQuestions(numberQuestion);
          }
        }
    }
});