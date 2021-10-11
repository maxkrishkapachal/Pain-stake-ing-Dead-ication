var playerName = "";

function load(){
    document.getElementById("start-the-game").style.visibility = "hidden";
    document.addEventListener('DOMContentLoaded', function(){
        var input = document.querySelector('#name-input')
        var content = document.querySelector('#content')
        document.querySelector('#name-button').addEventListener('click', function () {
            console.log(input.value);
            playerName = input.value;
            document.getElementById('vampire-hunter-name').innerText = "Boom: " + input.value + " the vampire hunter.";
            document.getElementById("start-the-game").style.visibility = "visible";
        })
        document.querySelector('#start-the-game').addEventListener('click', function(){
            content.innerHTML = `
                <h1>So, What's The Plan?</h1>
                <h2>Let's go through the details.</h2>
                <label>They're vampires. You know it. You also know how it sounds, but you can prove it. You just have to get the evidence so you don't sound so crazy.</label>
                <h2>What You Know:</h2>
                <label>Out of the blue, this couple moves into town and opens a flower shop. It's called The Crimson Rose. Already a little out there. One of them has an 'allergy' to the sun. Suspicious. They never want to talk about where they came from, or why they moved to such a small town. The weirdest part, however, is that they don't seem to exist. You never see them anywhere outside the flower shop. Never.</label>
                <h2>About The Florists:</h2>
                <h3>Isidro Cruorem</h3>
                <label>Date of Birth: Probably the 1700's<br>Nationality: Cuban<br>Height: 5'11<br>Build: Lanky<br>Hair: Short, Brown<br>Eyes: Brown<br>Notable Characteristics: Scar on his neck<br>Vampire: Yes.</label>
                <h3>Alastair Cruorem</h3>
                <label>Date of Birth: Definitely the 1300's<br>Nationality: Russian, I think. Maybe Italian?<br>Height: 5'8<br>Build: Muscular<br>Hair: Very Long, Black<br>Eyes: Grey<br>Notable Characteristics: Allergic to the sun<br>Vampire: Without a doubt.</label>
                <h2>Gathering Proof</h2>
                <label>All you have to do is prove to your younger sister, Sawyer, that there are vampires running the flower shop next door. Dad is making her babysit you since you're so dedicated to this vampire endeavour, so she has to be there when you get proof anyway! It's perfect!</label>
                <p>
                <button id="next"><u>Next -></u></button>
                </p>
                ` 
            document.querySelector('#next').addEventListener('click', renderScene);
        })        
    })
}

function renderScene(){
    document.querySelector('#content').innerHTML = `
        <h1>${story[story.currentScene].title}</h1>
        <label>${story[story.currentScene].story}</label>
        ${getChoices()}
        <div>
        <button id="next"><u>Next -></u></button>
        </div>
        `
    var button = document.querySelector("#next");
    button.addEventListener('click', function(){
        getChoicesValues();
    })
}

var story = {
    currentScene: "vampirePlans",
    vampirePlans: {
        title: "What Vampire Hunting Technique are you going to go for now?",
        story: "You look down at your list.",
        choices: [
            {choice: "Draw them out into the sun.",
            destination: 'sun'},
            {choice: "Catch their lack of reflection in a mirror.",
            destination: 'mirror'},
            {choice: "Approach them with crosses.",
            destination: 'cross'},
            {choice: "Trick them into slipping up.",
            destination: 'death'},
            {choice: "Old reliable: garlic.",
            destination: 'garlic'},
            {choice: "Check for a shadow.",
            destination: 'shadow'},
            {choice: "Catch them drinking blood.",
            destination: 'bloodwine'},
            {choice: "Attempt to burn them with silver.",
            destination: 'silver'},
            {choice: "Get proof of their bite marks",
            destination: 'bites'}
        ]
    },
    sun: {
        title: "Draw Them Into The Sun",
        story: `You drag your sister, Sawyer, down the street toward the new flower shop, beaming the 
                entire way, because you are a genius with a genius plan. The sun is beating down on you 
                and Sawyer's wrist is leaking sweat into your hand, but you're not deterred. In fact, 
                this is a blessing! What is one thing that vampires cannot handle? That's right. The sun.
                All you have to do is lure one of the two out into the blazing heat and voila.
                <br>Once you
                arrive at the store, you turn to Sawyer, who is slowly melting into the sidewalk, and you
                say, "Watch this, because I'm about catch a vampire."
                <br>"Make it fast," Sawyer replies with no enthusiasm.
                <br>You turn back to the open door of the flower shop and you yell inside, "Hey, Isidro!"
                <br>He had been pruning one of the flower pots near the window, but now he is wandering over
                to meet you with a large smile on his face. He stops short of the store entrance and cheerily
                says, "Hey, guys. What's up?" 
                <br>You suddenly realize you didn't think this far ahead. Quick, what should you say to get
                him to come outside?
                `,
        choices: [
            {choice: '"Race you to the other side of the street!"'},
            {choice: '"What plant is this out front?"'},
            {choice: '"Can you believe this weather? Come feel how hot it is! No really, come feel it. I am serious. Isidro, come outside and feel the sun, Isidro."'}
        ]
    },
    mirror: {
        title: "Catch Their Lack of Reflection",
        story: `This is it; the perfect plan. It is subtle. It is simple. It is genius. Sawyer can make 
        fun of you all she wants, but this time you're going to get proof. Then she'll have to believe you.
        <br>You're standing in the flower shop, scouting the place out, getting a feel for the layout. All
        great hunters know how, of course. This is an operation in stealth, after all.
        <br>"What's this stupid plan again?" Sawyer asks you. She's hardly paying attention.
        <br>"First off," you mutter to her, "it's not stupid. Second, I'm trying to figure out the perfect
        vantage point to place a mirror. Then, we can watch Isidro and Alastair walk by it, and when they
        don't have reflections, you'll have your proof." You puff out your chect a little as you recount
        your ingenious idea.
        <br>Where is the perfect vantage point then?
        `,
        choices: [
            {choice: 'Amongst the plant shelves.'},
            {choice: 'On the door to the back.'},
            {choice: 'In your hand so you can subtly check as you walk by.'}
        ]
    },
    cross: {
        title: 'Approach Them With Crosses',
        story: `"${playerName}, please," Sawyer begged.
        <br>"This will work!" you argue back.
        <br>She looks at you with pain in her eyes. "No. It won't."
        <br>But you're going to do it anyway! "Trust me on this," you say proudly, and then without another
        word, you march right into the flower shop, leaving your poor, embarrassed sister standing on the 
        street. You step right up to Alastair, who is watering a couple of plants on a shelf, minding his
        own business entirely. He turns to greet you with a small smile, still watering the plant as he nods.
        He is a man of few words, so you understand he's waiting for you to speak first. 
        <br>You don't speak though. You just stand there. And he stands there. And you stare at him. 
        And he stares at you. Nothing is happening. Alastair's smile is straining more and more the longer 
        you just stand there, looking like an idiot.
        <br>The thing is, before making your way over to the shop, you decided to deck yourself out in as
        many crosses as you could get your hands on. You bought a shirt covered in cross designs. Each pocket
        on your jeans holds a large metal cross that you borrowed from the local church. There are paper
        crosses taped to the toes of both your shoes. Your mother's cross earrings are looped around your ears
        since your ears aren't pierced. You've also borrowed hers and Sawyer's cross necklaces. You've taped
        another paper cross to your wide-brimmed bucket hat. You're carrying a Bible, also borrowed from the 
        church.
        <br>And it's the craziest thing because Alastair has not moved a muscle. He hasn't flinched, or hissed,
        or anything! He's just standing there!
        <br>"Do you require assistance?" Alastair eventually asks in his whispery voice, looking slightly
        uncomfortable.
        <br>In response, you say:
        `,
        choice: [
            {choice: '"No,", and you walk away.'},
            {choice: '"Yes," and you stare at him harder.'},
            {choice: 'Nothing, you just sprint out of the shop.'}
        ]
    }
}

function getChoices(){
    var input = ""
    if(!story[story.currentScene].choices){
        return "";
    }
    for(var i = 0; i < story[story.currentScene].choices.length; i++){
        input += `
        <br>
            <input data-destination=${story[story.currentScene].choices[i].destination} id="radio${i}" type="radio" name="choices"/>
            <label for "radio${i}">${story[story.currentScene].choices[i].choice}</label>
        `
    }
    return input;
}

function getChoicesValues(){
    var inputs = document.querySelectorAll('input[type="radio"]');
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].checked){
            story.currentScene = inputs[i].getAttribute('data-destination');
            renderScene();
        }
    }
}

//main character's name will be their actual name
//sibling will be Sawyer
//vampire 1 is gonna be Isidro Cruorem
//vampire 2 is gonne be Alastair Cruorem (they're married)


load();