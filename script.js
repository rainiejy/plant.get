/* LIST OF VARIABLES */	

var questionState = 0;	//Keeps track of users place in quiz
var quizActive = true;	//True until last question is answered

var userStats =	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var tempStats = userStats; //Holds stat increases relating to user selection

/* QUIZ BUILDING VARIABLES */

//The following array contains all question text elements

var questionText =	[															
            "How interested are you in raising a plant?",
            "How much access to light do you have?", 
            "What’s your likelihood of forgetting to water it?",
            "What’s your budget?", 
            "Where do you want your plant to go?", 
            "Any preferences on how the plant should look?" 
          ];

//The following array contains all answer text elements for each question

var answerText =	[		//question 1 answers													
            [	"It’s my life’s dream.", 				
              "I’m pretty interested.", 
              "Ehh… ",
			 "I lost a bet."],							

              //question 2 answers
            [	"Little.", 							
              "A decent amount.",
              "So much. Definitely not a problem."],

              //question 3 answers
            [	"Tbh I’d def be guilty of forgetting.", 
              "I’ll probably forget, but it’ll be rare.",
              "Could not be me."],

              //question 4 answers
            [	"$1-$15", 
              "$16-$30",
              "$30+"],

              //question 5 answers
            [	"On my desk.",
              "On my dining table.", 
              "Windowsill.",
              "In a pot on the ground."],		

              //question 6 answers								
            [	"Flowers please!", 
              "I want it to be spikey.",
              "Just green.",
              "I'm open to anything!"]
          ]

//The following array contains all personality stat increments for each answer of every question

var answerValues =	[		//question 1 answer values
            [	
              // [1, 1, 1, 0], // 0
              
              // [1, 1, 1, 0],
              // [1, 1, 0, 0],
              // [1, 1, 0, 0],
              // [1, 1, 0, 0],
              // [1, 1, 0, 0], // 5
              
              // [0, 0, 0, 1],
              // [1, 1, 0, 0],
              // [1, 1, 0, 0],
              // [1, 1, 0, 0],
              // [1, 1, 0, 0], // 10
              
              // [1, 1, 0, 0],
              // [1, 1, 0, 0],
              // [1, 1, 0, 0],
              // [1, 1, 0, 0],
              // [1, 1, 1, 0], // 15
              
              // [1, 1, 1, 0],
              // [1, 1, 0, 0],
              // [1, 1, 0, 0]
              
              [1, 1, 1, 1, 1,
               1, 0, 1, 1, 1,
               1, 1, 1, 1, 1,
               1, 1, 1, 1], 
             
              [1, 1, 1, 1, 1,
               1, 0, 1, 1, 1,
               1, 1, 1, 1, 1,
               1, 1, 1, 1],
             
              [1, 1, 0, 0, 0,
               0, 0, 0, 0, 0,
               0, 0, 0, 0, 0,
               1, 1, 0, 0],
             
              [0, 0, 0, 0, 0,
               0, 1, 0, 0, 0,
               0, 0, 0, 0, 0,
               0, 0, 0, 0]  
              
            ],	

              //question 2 answer values
            [	
              // [0, 1, 1],
              
              // [1, 1, 1],
              // [0, 1, 1],
              // [1, 1, 1],
              // [0, 1, 1],
              // [0, 1, 1], // 5

              // [1, 0, 0],
              // [0, 1, 1],
              // [0, 1, 1],
              // [0, 1, 1],
              // [0, 1, 1], // 10

              // [0, 1, 1],
              // [1, 1, 1],
              // [0, 1, 1],
              // [0, 1, 1],
              // [0, 1, 1], // 15

              // [0, 1, 1],
              // [0, 1, 1],
              // [1, 1, 1]
              [0, 2, 0, 2, 0,
               0, 2, 0, 0, 2,
               0, 0, 2, 0, 0,
               0, 0, 0, 2], 
             
              [1, 1, 1, 1, 1,
               1, 0, 1, 1, 1,
               1, 1, 1, 1, 1,
               1, 1, 1, 1],
             
              [1, 1, 1, 1, 1,
               1, 0, 1, 1, 1,
               1, 1, 1, 1, 1,
               1, 1, 1, 1]
            ],

              //question 3 answer values
            [	
              // [0, 3, 3], // 0

              // [0, 3, 3],
              // [3, 3, 3],
              // [3, 3, 3],
              // [3, 3, 3],
              // [3, 3, 3], // 5


              // [3, 0, 0],
              // [3, 3, 3],
              // [3, 3, 3],
              // [0, 0, 3],
              // [0, 0, 3], // 10
              
              // [3, 3, 3],
              // [3, 3, 3],
              // [0, 0, 3],
              // [0, 0, 3],
              // [3, 3, 3], // 15

              // [3, 3, 3],
              // [3, 3, 3],
              // [3, 3, 3]
              
              
              [0, 0, 3, 3, 3,
               3, 3, 3, 3, 0,
               0, 3, 3, 0, 0,
               3, 3, 3, 3],
             
              [3, 3, 3, 3, 3,
               0, 3, 3, 3, 0,
               0, 3, 3, 0, 0,
               3, 3, 3, 3],
             
              [3, 3, 3, 3, 3,
               0, 3, 3, 3, 3,
               3, 3, 3, 3, 3,
               3, 3, 3, 3]
            ],

              //question 4 answer values
            [	
              // [0, 3, 0], // 0
              
              // [3, 0, 0],
              // [0, 0, 0],
              // [0, 3, 0],
              // [0, 3, 0],
              // [0, 3, 0], // 5

              // [3, 3, 0],
              // [0, 0, 0],
              // [3, 3, 0],
              // [0, 0, 0]
              // [0, 3, 0], // 10

              // [0, 0, 0],
              // [0, 0, 0],
              // [0, 0, 0],
              // [0, 3, 0],
              // [0, 3, 0], // 15

              // [0, 3, 0],
              // [0, 3, 0],
              // [0, 0, 0]
              [0, 3, 0, 0, 0,
               2, 0, 0, 3, 0,
               0, 0, 0, 0, 0,
               0, 0, 0, 0],
             
              [3, 0, 0, 3, 3,
               3, 3, 0, 3, 0,
               3, 0, 0, 0, 3,
               3, 3, 3, 0],
             
              [0, 0, 0, 0, 0,
               0, 0, 0, 0, 0,
               0, 0, 0, 0, 0,
               0, 0, 0, 0]
            ],

              //question 5 answer values
            [	
              // [0, 0, 2, 0], // 0

              // [2, 2, 0, 2],
              // [0, 0, 0, 0],
              // [2, 2, 0, 0],
              // [0, 0, 2, 0],
              // [0, 0, 2, 0], // 5

              // [2, 0, 0, 0],
              // [0, 0, 0, 2],
              // [2, 0, 0, 0],
              // [2, 0, 0, 0],
              // [0, 0, 0, 2], // 10

              // [2, 0, 0, 0],
              // [0, 0, 2, 0],
              // [2, 2, 0, 0],
              // [2, 0, 2, 0],
              // [2, 0, 0, 0], //15

              // [2, 0, 2, 0],
              // [0, 0, 0, 2],
              // [0, 0, 0, 2]
              [0, 2, 0, 2, 0,
               2, 0, 0, 2, 2,
               0, 2, 0, 2, 2,
               2, 2, 0, 0], 
             
              [0, 2, 0, 2, 0,
               0, 0, 0, 0, 0,
               0, 2, 0, 2, 0,
               0, 0, 0, 0],

              [2, 0, 0, 0, 2,
               2, 0, 0, 0, 0,
               0, 0, 2, 0, 2,
               0, 2, 0, 0],
              
              [0, 2, 0, 0, 0,
               0, 0, 2, 0, 0,
               2, 0, 0, 0, 0,
               0, 0, 2, 2]
            ],

              //question 6 answer values
            [	
              // [0, 5, 0, 0],

              // [0, 0, 0, 0],
              // [0, 0, 0, 0],
              // [0, 0, 0, 0],
              // [5, 0, 0, 0],
              // [5, 0, 0, 0], // 5

              // [5, 0, 0, 0],
              // [0, 0, 0, 0],
              // [0, 5, 0, 0],
              // [0, 0, 0, 0],
              // [0, 0, 0, 0], // 10

              // [5, 0, 0, 0],
              // [5, 0, 0, 0],
              // [0, 0, 0, 0],
              // [0, 0, 0, 0],
              // [0, 0, 0, 0], // 15

              // [0, 0, 0, 0],
              // [0, 0, 0, 0],
              // [0, 5, 0, 0]
              
              [0, 0, 0, 0, 5,
               5, 5, 0, 0, 0,
               0, 5, 5, 0, 0,
               0, 0, 0, 0], 
             
              [5, 0, 0, 0, 0,
               0, 0, 0, 5, 0,
               0, 0, 0, 0, 0,
               0, 0, 0, 5],
             
              [4, 4, 4, 4, -3,
               4, 0, 4, 4, 4,
               4, 0, 0, 4, 4,
               4, 4, 4, 4],

              [0, 0, 0, 0, 0,
               0, 0, 0, 0, 0,
               0, 0, 0, 0, 0,
               0, 0, 0, 0]
            ]
          ]

/* SHORTCUT VARIABLES */
//so I don't have to keep typing

var results = document.getElementById("results");
var quiz = document.getElementById("quiz");
var body = document.body.style;
var printResult = document.getElementById("topScore");
var buttonElement = document.getElementById("button");

/* QUIZ FUNCTIONALITY */

buttonElement.addEventListener("click", changeState);	//Add click event listener to main button

/* This function progresses the user through the quiz */

function changeState() {								

  updatePersonality(); 	//Adds the values of the tempStats to the userStats										

  if (quizActive) {	

    /*True while the user has not reached the end of the quiz */

    initText(questionState);	//sets up next question based on user's progress through quiz
    questionState++;			//advances progress through quiz

    buttonElement.disabled = true; //disables button until user chooses next answer
    buttonElement.innerHTML = "";	
    buttonElement.style.opacity = 0;

  } else {

    /*All questions answered*/

    setCustomPage(); //runs set up for result page
  }
}

/* This function determines the question and answer content based on user progress through the quiz */

function initText(question) {							

  var answerSelection = ""; //text varialbe containting HTML code for the radio buttons' content

  /* Creates radio buttons based on user progress through the quiz - current 'id' generation is not w3c compliant*/

  for (var i = 0; i < answerText[question].length; i++) {		

    answerSelection += "<li><input type='radio' name='question" +
    (question+1) + "' onClick='setAnswer("+i+")' id='" + answerText[question][i] + "'><label for='" + answerText[question][i] + "'>" + answerText[question][i] + "</label></li>";
  }

  document.getElementById("questions").innerHTML = questionText[question];	//set question text
  document.getElementById("answers").innerHTML = answerSelection;				//set answer text
}

/* This function is called when a user selects an answer, NOT when answer is submitted */

function setAnswer(input) {

  clearTempStats();									//clear tempStats in case user reselects their answer

  tempStats = answerValues[questionState-1][input];	//selects personality values based on user selection 

  if (questionState < questionText.length) {

    /*True while the user has not reached the end of the quiz */

    buttonElement.innerHTML = "Continue";
    buttonElement.disabled = false;
    buttonElement.style.opacity = 1;

  } else {

    /*All questions answered - QUESTION TIME IS OVER!*/

    quizActive = false;
    buttonElement.innerHTML = "Find your match"
    buttonElement.disabled = false;
    buttonElement.style.opacity = 1;
  }
}

/* This function sets tempStats to 0 */

function clearTempStats() {

  tempStats= [0, 0, 0, 0, 0,
              0, 0, 0, 0, 0,
              0, 0, 0, 0, 0,
              0, 0, 0, 0];	
}

/*This function adds the values of the tempStats to the userStats based on user selection */

function updatePersonality() {

  for (var i = 0; i < userStats.length ; i++) {
    userStats[i] += tempStats[i];
  }
}

/* This function determines the highest personality value */

function setCustomPage() {

  var highestStatPosition = 0;	//highest stat defaults as 'cute'

  /* This statement loops through all personality stats and updates highestStatPosition based on a highest stat */

  for (var i = 0 ; i < userStats.length; i++) {
    if (userStats[i] > userStats[highestStatPosition]) {
      highestStatPosition = i;
    }
  }

  console.log(highestStatPosition);

  displayCustomPage(highestStatPosition); //passes the index value of the highest stat discovered

  /* Hides the quiz content, shows results content */
  quiz.style.display = "none";		
}

/* BUILDS WEB PAGE AS PER RESULTS OF THE QUIZ */

/* The following code manipulates the CSS based on the personality results */

// Function to add an image dynamically
function addImage(imageUrl, title, text) {
    const container = document.getElementById('container');

    container.innerHTML = '';

    const contentContainer = document.createElement('div');
  
    contentContainer.classList.add('content');
  
    // Create image element
    const heading = document.createElement('h2');
    heading.textContent = title;
    const image = document.createElement('img');
    image.src = imageUrl;
  
    const paragraph = document.createElement('p');
    paragraph.textContent = text;

    // Append image to the container
    contentContainer.appendChild(image);
    contentContainer.appendChild(paragraph);

    container.appendChild(heading);
    container.appendChild(contentContainer);
  }

function displayCustomPage(personality) {
  switch (personality) {

    case 0:	//Air Plant code
      results.style.display = "inline-block";
      results.classList.add("airplant");
      body.background = "none";
      addImage('assets/Tillandsia-Ionantha.webp', 'Air Plant','Like the name suggests, air plants are plants that can grow primarily with air. They tend to be rather small, making them charming little decorations for home spaces or offices. They can do well without too much light, and they grow better if they are watered around once a week. Watering air plants is a little bit more of an involved process, needing to be held upside down and sprayed at. Air plants are relatively inexpensive, costing from 5-20 dollars.');
      //printResult.innerText = "air plant";
      break;

    case 1:		//Algerian
      results.style.display = "inline-block";
      results.classList.add("algerian");
      body.background = "none";
      addImage('assets/algerian.jpg', 'Algerian', 'The algerian ivy is a gorgeous green guaranteed to wow any guests that you might host. It is a beautiful plant known far and wide for its draping effects. Able to grow up to 40 feet long, it is certainly a force to be reckoned with! Algerian ivy can grow in a variety of different conditions, as it is very adaptable. It does not require too much light, maintenance, or water. Additionally, they can generally be found at low prices in stores and all over the internet.');
      //printResult.innerText = "algerian";
      break;

    case 2:		//alocasia
      results.style.display = "inline-block";
      results.classList.add("alocasia");
      body.background = "none";
      addImage('assets/alocasia.jpg', 'Alocasia', 'Alocasia, more commonly known as elephant’s ear, these plants are renowned for their big, veined leaves that are sure to leave an impression. These plants are best grown in homes because they require warm temperatures and lots of light to thrive. Although rare, they display yellow flowers when they bloom. For best chances of survival, alocasia should be kept in bright but not direct light, and its soil should be kept moist at all times, although not overly wet. Relatively, alocasia tends to be rather expensive, and it is not abnormal for it to be listed as over 50 dollars.');
      //printResult.innerText = "alocasia";
      break;

    case 3:		//bamboo
      results.style.display = "inline-block";
      results.classList.add("bamboo");
      body.background = "none";
      addImage('assets/bamboo.webp', 'Bamboo', 'Although bamboo is most commonly associated with pandas, it actually has a very long history of being regarded as a luck bringer. Bamboo is a perfect plant to decorate an office space or desk, and it is not too difficult to care for. It does not respond well to direct sunlight and does not require much water, so it is a relatively low maintenance plant to own. Additionally, you can even curl or twist your bamboo as it grows to give it a unique shape. It is typically in the price ranges of 20-30 dollars.');
      //printResult.innerText = "bamboo";
      break;

    case 4:		//bromeliad
      results.style.display = "inline-block";
      results.classList.add("bromeliad");
      body.background = "none";
      addImage('assets/bromeliad.jpg', 'Bromeliad','Bromeliads are plants that flower beautifully. Their blooms come in all sorts of different colors, such as pink, orange, and yellow, and they have a very distinct shape. These flowers are high maintenance, requiring direct sunlight to thrive, as well as lots of water and misting to simulate their natural humid environment. Sadly, Bromeliads only flower once in their lifetimes, but when they do bloom, they bloom for a long time. Bromeliads typically cost from 20-35 dollars.');
      //printResult.innerText = "bromeliad";
      break;

    case 5:		//christmas cactus
      results.style.display = "inline-block";
      results.classList.add("cactus");
      body.background = "none";
      addImage('assets/christmas.jpg', 'Christmas Cactus', 'As a very festive succulent, the Christmas cactus is a super popular choice. It only requires watering every 2-3 weeks but likes to be in indirect sunlight. It yields very beautiful buds during the holiday season every year, spreading some extra holiday cheer. Christmas cacti can be found at moderate prices in the $20-30 range.');
      //printResult.innerText = "cactus";
      break;

      case 6:		//fake
      results.style.display = "inline-block";
      results.classList.add("fake");
      body.background = "none";
      addImage('assets/fake.webp','Plastic Plant','Given the answers you provided to the questions, it is possible that you might be paired best with a plastic plant. Plastic plants provide all of the aesthetic benefits of a real plant, but they are a lot less work. Based on your decorational needs, you will surely be able to find any kind of plastic plant you want, whether it be a flower, a cactus, or a huge statement piece. As such, fake plants can come in a diverse range of sizes from as cheap as $5 to as expensive as $800.')
      //printResult.innerText = "fake";
      break;

      case 7:		//fiddle leaf fig
      results.style.display = "inline-block";
      results.classList.add("fiddle");
      body.background = "none";
      addImage('assets/fiddle.webp', 'Fiddle Leaf Fig', 'Fiddle leaf figs are huge plants whose presences will never go unnoticed in a room. They are large, eye catching, and unique. However, they are notoriously high-maintenance and difficult to keep alive, so if you are up for a challenge, the fiddle leaf fig will provide that for you. They are very greedy for sunlight and should be placed in indirect sunlight by a window, and they should be watered twice a week. Additionally, they are quite expensive, often priced between 50 and 100 dollars.');
      //printResult.innerText = "fiddle";
      break;

      case 8:		//haworthia
      results.style.display = "inline-block";
      results.classList.add("haworthia");
      body.background = "none";
      addImage('assets/hawthoria.webp', 'Haworthia', 'Haworthia is also known as a star cactus. It is a very small, slow-growing kind of cactus that would look super cute on an office desk. It is not super greedy for resources, as it doesn’t need too much water to survive. It can tolerate some direct sunlight but doesn’t need too much. They are also very affordable, commonly running from 5-10 dollars.');
      //printResult.innerText = "haworthia";
      break;

      case 9:		//jade plant
      results.style.display = "inline-block";
      results.classList.add("jade");
      body.background = "none";
      addImage('assets/jade.webp', 'Jade Plant', 'The Jade plant is also known as the money plant, and it is a succulent plant that takes the appearance of a miniature tree. It is extremely low maintenance and only requires minimal water. It can survive under most household conditions, so caring for it is a very hands-off process. However, it lands on the pricier side of things, often ranging from 50-100 dollars.');
      //printResult.innerText = "jade";
      break;

      case 10:		//money tree
      results.style.display = "inline-block";
      results.classList.add("money");
      body.background = "none";
      addImage('assets/money.webp', 'Money Tree', 'Like the name suggests, money trees are very popular because they bring lots of good luck for people, so it’s definitely very recommended to have one in your home. It doesn’t take too much care, needing little water and sunlight. However, they are quite expensive, costing around 50-100 dollars at various different stores.');
      //printResult.innerText = "money";
      break;

    case 11:		//orhcid
      results.style.display = "inline-block";
      results.classList.add("orchid");
      body.background = "none";
      addImage('assets/orchid.webp', 'Orchid', 'Orchids are extremely popular plants known for their strikingly beautiful appearances. They have unique petal arrangements and are very commonly gifted, coming in all kinds of different colors. If you buy an orchid, you are bound to find a huge community of orchid lovers. For these flowers, it is better to under water them than overwater them, and they are very light-hungry. Orchids can be found at random grocery stores as well as florists, and they generally range from 15-25 dollars.');
      //printResult.innerText = "orchid";
      break;

      case 12:		//peace lily
      results.style.display = "inline-block";
      results.classList.add("peace");
      body.background = "none";
      addImage('assets/peace.webp', 'Peace Lily', 'Peace lilies are pretty plants with unique white flowers. Although they are not true lilies, they have a very enjoyable appearance nonetheless. They don’t require too much care, preferring bright indirect sunlight and regular watering. Prices for peace lilies tend to be on the higher end, ranging from 40-80 dollars.');
      //printResult.innerText = "peace";
      break;

      case 13:		//peacock plant
      results.style.display = "inline-block";
      results.classList.add("peacock");
      body.background = "none";
      addImage('assets/peacock.webp', 'Peacock Plant', 'Peacock plants, like their namesakes, are very flashy, unique plants. They have striped leaves that come out in a fanned pattern. They come not only in green, but also in red and white hues. They do not enjoy intense sunlight and are better kept in indirect sunlight. The amount of water they require varies, and one should take care not to over or under water their plant. The peacock plant is typically found from 40-80 dollars.');
      //printResult.innerText = "peacock";
      break;

      case 14:		//philodendron
      results.style.display = "inline-block";
      results.classList.add("phil");
      body.background = "none";
      addImage('assets/phil.jpg', 'Philodendron','Philodendrons have a reputation of being a very easy plant to take care of. They are easy to grow under any conditions and come in a variety of shapes and colors. They prefer access to a decent amount of light, but they also thrive under low light conditions as well, and they don’t mind if you forget about watering them every now and again. They cost from 15-30 dollars.');
      //printResult.innerText = "phil";
      break;

      case 15:		//pilea Peperomioides
      results.style.display = "inline-block";
      results.classList.add("pilea");
      body.background = "none";
      addImage('assets/pilea.jpg', 'Pilea Peperomioides', 'The Pilea, colloquially known as the Chinese money plant or the UFO plant, has a very charming appearance with its abundantly round leaves. They are thought to bring wealth into the household. Although they enjoy light, too much of it can cause scarring, so they should be left in indirect sunlight. Additionally, their water needs are low as well, usually indicating with its leaves when it is running low on water. It tends to cost between 25 and 40 dollars.');
      //printResult.innerText = "pilea";
      break;

      case 16:		//pothos
      results.style.display = "inline-block";
      results.classList.add("pothos");
      body.background = "none";
      addImage('assets/pothos.jpg', 'Pothos','The pothos is a plant that doesn’t require much expertise, making it a great choice for beginners to work with. It has a very pretty appearance, resembling ivy with its long strands of leaves. They grow very fast, often even growing 12-14 inches per month. They have equal preference between shade and light, so they are able to thrive both in high and low light conditions. They need water every 1 to 2 weeks, and they will indicate with droopy leaves when they next need it. They cost anywhere from 5-20 dollars.');
      //printResult.innerText = "pothos";
      break;

      case 17:		//snake plant
      results.style.display = "inline-block";
      results.classList.add("snake");
      body.background = "none";
      addImage('assets/snake.webp', 'Snake Plant','Like the name suggests, snake plants have leaves that stick up straight and narrow, just like a snake, and the patterns on the leaves resemble scales on a snake. Funnily enough, they are also called “mother-in-law’s tongue” plants. Their leaves are very long and attractive. They are quite easy to grow, preferring sunlight but doing well in shade, and they don’t need too much water. They cost quite a lot of money, consistently going from 50-100 dollars.');
      //printResult.innerText = "snake";
      break;

      case 18:		//zz plant
      results.style.display = "inline-block";
      results.classList.add("zz");
      body.background = "none";
      addImage('assets/zz.jpg', 'ZZ Plant','ZZ plants, which are officially known as Zanzibar Gem plants, have charming, waxy leaves that resemble gems. They thrive under various lighting conditions and can tolerate not being watered very often because of their native roots in Africa, making them great for beginners. They cost around 50-100 dollars.');
      //printResult.innerText = "zz";
      break;

    default: 
      document.getElementById("error").style.display = "inline-block";

  }
}