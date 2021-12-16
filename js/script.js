
let answers =  ['It is surely', 'It is unquestionably', 'Most probably', 'Yes - definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes, Signs point to yes', 'Reply hazy', 'try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Dont count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];


window.onload = function() {
    // script completly loaded it will be run the webpage 
let eight = document.getElementById("eight");
let answer = document.getElementById("answer");
let ask = document.getElementById("Ask");
let question = document.getElementById("question");


ask.addEventListener("click", ()=> {
    if (question.value.length == 0) {
         // question.value.length equvalent to zero
    alert('Enter a question!');
        }
    else {
        eight.innerText = "";
        
        let num = Math.floor(Math.random() * Math.floor(answers.length));
        answer.innerText = answers[num];
        
        }
    });
}





















