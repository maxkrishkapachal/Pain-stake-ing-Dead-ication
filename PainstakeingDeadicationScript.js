
function load(){
    document.getElementById("start-the-game").style.visibility = "hidden";
    document.addEventListener('DOMContentLoaded', function(){
        var content = document.querySelector('#content')
        document.querySelector('#name-button').addEventListener('click', function () {
            story = getStory(document.querySelector('#name-input').value)
            document.getElementById('vampire-hunter-name').innerText = "Boom: " + story.playerName + " the vampire hunter.";
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
                <label>Date of Birth: Probably the 1900's<br>Nationality: Cuban<br>Height: 5'11<br>Build: Lanky<br>Hair: Short, Brown<br>Eyes: Brown<br>Notable Characteristics: Scar on his neck<br>Vampire: Yes.</label>
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

var story; 
function getStory(playerName){
    return{
        playerName: `${playerName}`,
        currentScene: "vampirePlans",
        vampirePlans: {
            title: "What Vampire Hunting Technique are you going to go for now?",
            story: "You look down at your list.<br>",
            choices: [
                {choice: "Draw them out into the sun.",
                destination: 'sun'},
                {choice: "Catch their lack of reflection in a mirror.",
                destination: 'mirror'},
                {choice: "Approach them with crosses.",
                destination: 'cross'},
                {choice: "Trick them into revealing their immortality.",
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
            ],
            branch: 'branch',
            read: "unread"
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
                    <br>
                    `,
            choices: [
                {choice: '"Race you to the other side of the street!"',
                destination: 'race'},
                {choice: '"What plant is this out front?"',
                destination: 'whatPlant'},
                {choice: '"Can you believe this weather? Come feel how hot it is! No really, come feel it. I am serious. Isidro, come outside and feel the sun, Isidro."',
                destination: 'comeOutside'}
            ],
            branch: 'branch',
            read: 'unread'
        },
        race: {
            title: `"Race you to the other side of the street!"`,
            story: `you yell out franticallly while pointing. Isidro stares at you like you're crazy and he shuffles his
            flip-flopped foot against the doorframe. This plan is rapidly falling apart and you need to do something to 
            get him outside. So, before he can even answer, you start sprinting. You race out halfway across the street 
            and glance back to see if he's following. Sure enough, he has also started running! This is fantastic! Is he 
            burning up? Is his vampire skin reacting to the sun? Why does he look so afraid?
            <br><br>These questions remain answerless because suddenly, a fire hydrant jumps out at you and you're
            tumbling head first over the damn thing. Your hands break the fall and you gracelessly careen into the leg of
            a nearby bench, smacking your elbow on it. You writhe in pain on the cement, your elbow and knee are throbbing,
            and you blearily stare up at Isidro as he skids to a halt next to you.
            <br><br>"There's a hydrant," he says, somewhat out of breath.
            <br><br>"Thanks," you mumble.
            <br><br>"Maybe we shouldn't race across the street," he suggests, attempting to help you up.
            <br><br>You wave his hands away and continue laying on the sidewalk. You're not ready to get up, but on the
            bright side, you can clearly see that Isidro is standing in the sun with his skin exposed and he is fine. 
            He's fine. He's the same shade, he's the same complexion, he's just as moisturized as he always is. Nothing 
            is different. He is not burning in the sun.
            <br><br>You can see Sawyer in the distance with her arms crossed and her eyebrows raised. You don't even need
            her to say anything for you to know she's mocking you about Isidro's lack of vampire behavious. We'll see.
            <br>`,
            branch: 'end',
            read: 'unread'
        },
        whatPlant:{
            title: '"What plant is this out front?"',
            story: `you ask, flinging your hand out to a random plant.
            <br><br>Isidro pokes his head around the doorframe, furrows his eyebrows, and then hums. He says "I'm actually,
            not sure what that one is. Alastair would know." He steps cleanly out of the building and into the blistering
            sun.His flipflops splat against the pavement as he meanders along to the pot and crouches down. After squinting
            at the plant tag in the dirt, he announces, "This baby is a California Lilac!" and stands again.
            <br><br>You cannot beleive this. He is just standing there in the sun! He's not even wearing a hat! You watch
            as he wanders back inside and out of the sun, and as he passes by, you scrutinize his skin. It's normal! It's 
            just as moisturized as it always is and completely unburned! Nothing is different. Unbelievable.
            <br><br>"Is that all you needed?" Isidro asks once he's back in the shop.
            <br><br>"Yeah, I think that's it. Thank you," Sawyer interrupts. She's staring at you though.
            <br><br>Isidro nods and smiles. "Stay cool out there then!" he says. Then he is gone.
            <br><br>"Wow. Yup. You really proved me wrong. That was a vampire if I ever saw one," Sawyer sarcastically 
            drawls once he's out of earshot.
            <br><br>"This means nothing. I'll still prove they're vampires, just you wait." You hurry quickly down the
            sidewalk in the direction of your house once again to retrieve your list.
            <br>
            `,
            branch: 'end',
            read: 'unread'
        },
        comeOutside: {
            title: '"Can you believe this weather? Come feel how hot it is! No really, come feel it. I am serious. Isidro, come outside and feel the sun, Isidro."',
            story: `you say, trying not to sound too frantic.
            <br><br>"Uh..." Isidro says, confused. "Yeah... it is..." He steps outside cautiously, as though you're a wild
            animal that might pounce at any time. "It is hot out... Did you... want water...? Is that what this is about?" 
            Isidro hesitantly asks.
            <br><br>You're not paying attention to him though. Well, you are, but not what he's saying, rather his skin!
            It's not burning! You can hardly believe it, but Isidro is merely standing there, in the blazing heat, and
            not a thing is wrong with his skin. Not a thing. Aren't vampires supposed to burn in the sun? What kind of trick
            is this?
            <br><br>"No, thank you, Isidro. The problem isn't dehydration, it's idiocy," Sawyer sweetly says to Isidro since
            you've been standing there without speaking for quite awhile now.
            <br><br>Isidro nods like he understands what is happening, and then gives an awkward smile, says "Right. Well,
            good chat. Stay cool out there!" and then he's back into the shop.
            <br><br>"Wow. Yup. You really proved me wrong. That was a vampire if I ever saw one," Sawyer sarcastically 
            drawls once he's out of earshot.
            <br><br>"This means nothing. I'll still prove they're vampires, just you wait." You hurry quickly down the
            sidewalk in the direction of your house once again to retrieve your list.
            <br>`,
            branch: 'end',
            read: 'unread'
        },
        mirror: {
            title: "Catch Their Lack of Reflection",
            story: `This is it; the perfect plan. It is subtle. It is simple. It is genius. Sawyer can make 
            fun of you all she wants, but this time you're going to get proof. Then she'll have to believe you.
            <br><br>You're standing in the flower shop, scouting the place out, getting a feel for the layout. All
            great hunters know how, of course. This is an operation in stealth, after all.
            <br><br>"What's this stupid plan again?" Sawyer asks you. She's hardly paying attention.
            <br><br>"First off," you mutter to her, "it's not stupid. Second, I'm trying to figure out the perfect
            vantage point to place a mirror. Then, we can watch Isidro and Alastair walk by it, and when they
            don't have reflections, you'll have your proof." You puff out your chect a little as you recount
            your ingenious idea.
            <br><br>Where is the perfect vantage point then?
            <br>
            `,
            choices: [
                {choice: 'Amongst the plant shelves.',
                destination: 'plantShelves'},
                {choice: 'On the door to the back.',
                destination: 'onTheDoor'},
                {choice: 'In your hand so you can subtly check as you walk by.',
                destination: 'inYourHand'}
            ],
            branch: 'branch',
            read: 'unread'
        },
        plantShelves: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        onTheDoor: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        inYourHand: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        cross: {
            title: 'Approach Them With Crosses',
            story: `"${playerName}, please," Sawyer begged.
            <br><br>"This will work!" you argue back.
            <br><br>She looks at you with pain in her eyes. "No. It won't."
            <br><br>But you're going to do it anyway! "Trust me on this," you say proudly, and then without another
            word, you march right into the flower shop, leaving your poor, embarrassed sister standing on the 
            street. You step right up to Alastair, who is watering a couple of plants on a shelf, minding his
            own business entirely. He turns to greet you with a small smile, still watering the plant as he nods.
            He is a man of few words, so you understand he's waiting for you to speak first. 
            <br><br>You don't speak though. You just stand there. And he stands there. And you stare at him. 
            And he stares at you. Nothing is happening. Alastair's smile is straining more and more the longer 
            you just stand there, looking like an idiot.
            <br><br>The thing is, before making your way over to the shop, you decided to deck yourself out in as
            many crosses as you could get your hands on. You bought a shirt covered in cross designs. Each pocket
            on your jeans holds a large metal cross that you borrowed from the local church. There are paper
            crosses taped to the toes of both your shoes. Your mother's cross earrings are looped around your ears
            since your ears aren't pierced. You've also borrowed hers and Sawyer's cross necklaces. You've taped
            another paper cross to your wide-brimmed bucket hat. You're carrying a Bible, also borrowed from the 
            church.
            <br><br>And it's the craziest thing because Alastair has not moved a muscle. He hasn't flinched, or hissed,
            or anything! He's just standing there!
            <br><br>"Do you require assistance?" Alastair eventually asks in his whispery voice, looking slightly
            uncomfortable.
            <br><br>In response, you say:
            <br>
            `,
            choices: [
                {choice: '"No,", and you walk away.',
                destination: 'noCross'},
                {choice: '"Yes," and you stare at him harder.',
                destination: 'yesCross'},
                {choice: 'Nothing, you just sprint out of the shop.',
                destination: 'nothingCross'}
            ],
            branch: 'branch',
            read: 'unread'
        },
        noCross: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        yesCross: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        nothingCross: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        death: {
            title: "Trick Them Into Revealing Their Immortality.",
            story: `"Why do I have to wear sunglasses indoors?" Sawyer asks, lifting the sunglasses above her
            nose so she can glare at you, unimpressed.
            <br><br>You reach through the shelf of plants, nearly smacking over several pots, and tap the
            sunglasses back onto her face. "It's a disguise!" you remind her in a rushed whisper. "And keep
            your voice down!"
            <br><br>She rolls her eyes at you. "They know who I am," she says.
            <br><br>"Uh, yeah. That's why you have the glasses; so they don't recognize you."
            <br><br>She doesn't say anything, instead turning around to have a moment away from you.
            <br><br>You're about to say something to her, but the tapping of old-timey shined shoes make their
            way around the corner, and you quickly press your back into the shelf behind you in an effort to
            seem casual. Alastair stops short, his worried eyes peering at you through his long hair and the
            watering can he's carrying halfway lifting to sprinkle a nearby plant. His shoulders seem to hike
            up cautiously. 
            <br><br>"Good morning. Can I assist you with anything?" he asks hesitantly.
            <br><br>"Yes, actually!" you smile way too wide. "What do you know about death?"
            <br><br>Alastair blinks at you. "I beg your pardon...?" he mutters.
            <br><br>You can hear your sister's exhale of, "Oh, why, God?"
            <br><br>"You must know a lot about death, right?" you continue.
            <br><br>"Are you meaning for a funeral...?" Alastair prods, his eyebrows slowly narrowing.
            <br><br>You gesture your hands, hoping to fumble your way into an explanation of what you're
            trying to say. 
            <br>
            `,
            choices: [
                {choice: '"You must know a lot about life and death, huh, Alastair?"',
                destination: 'lifeAndDeath'},
                {choice: `"What I'm saying is that you've been around the block a couple times. A couple
                too many blocks a couple to many times, if you catch my drift." Then you wink, but you don't
                know how to wink, so it just looks like there's something stuck in your eye.`,
                destination: 'aroundTheBlock'},
                {choice: `"You're like a fine wine that only gets better with age, aren't you? Except you
                don't age, and the wine is blood of the living, isn't it?`,
                destination: 'betterWithAge'},
                {choice: `"Want to play a fun game? We both have to guess how many times the other one has
                died! No cheating!" You waggle your finger at him.`,
                destination: 'funGame'}
            ],
            branch: 'branch',
            read: 'unread'
        },
        lifeAndDeath: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        aroundTheBlock: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        betterWithAge: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        funGame: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        garlic: {
            title: "Old Reliable: Garlic.",
            story: `Alright, not to toot your own horn, but this has to be your most genius idea yet. You can't even
            believe you didn't think of it sooner. Garlic! What were vampires most known for being repelled by? Garlic.
            So smart.
            <br><br>Unfortunately, Sawyer hadn't been around when you crafted this idea up, so you have to lead the
            expedition without her. It'll be disappointing when you prove they're vampires and Sawyer isn't around to see
            it, but that'll be nothing compared to the triumph you'll feel when you win. Okay, off you go!
            <br><br>The original idea was that you would wear a necklace made of garlic, but you couldn't figure out how
            to string the garlic together like that, and food isn't allowed in the flower shop anyway. Luckily, you're a
            genius. You just ate a bunch of garlic and rubbed garlic cloves all over your wet hands so the stench would
            stick. 
            <br><br>Isidro and Alastair are, conveniently, both standing at the desk near the back of the shop, chatting
            about whatever it is two vampires chat about. Blood, probably. You stride right on over to the counter, 
            alerting the pair as soon as you're close enough.
            <br><br>"Hey, ${playerName}!" Isidro grins at you. "What can we help you with?"
            <br><br>You slam your elbows on the counter and lean in as close as possible. They both startle back, but you
            are completely unbothered. "Yes, I was wondering where you keep the chrysanthemums," you breathily state,
            purposely blowing the words in their faces.
            <br><br>Alastair shrinks back, his nose scrunching up in disgust.
            <br><br>Isidro does a better job hiding his revulsion, but he's still visibily biting his lip to keep from
            gagging. "Yeah," he forces out. "They're near the front of the shop." He points, using his arm to hide his
            face as politely as possible. There are tears in his eyes.
            <br><br>"You don't want to come show me where?" you ask, smirking. You've caught them this time.
            <br><br>Isidro stumbles back and shakes his head.
            <br><br>Alastair tells you again, more hastily this time, "They're at the front."
            <br><br>You cannot stop grinning. "Thank you!" And with that, you valiantly saunter out of the shop without 
            a second thought about the chrysanthemums. Hahaha...Only vampires would react that strongly.
            <br><br>Just then, someone comes running up behind you, shouting your name. "${playerName}!" You squint up
            the road at the figure jogging towards you. Lo and behold, it's Sawyer! Just in time. "Dad told me you were 
            at the flower shop again and I wanted to make sure Alastair and Isidro were okay," she tells you through her
            panting.
            <br><br>You beam with pride. "Don't worry about any of that because I just proved they're vampires!" you
            announce.
            <br><br>She recoils, a look of utter nauesea crossing her face. "Holy shit," she coughs. "Did something die
            in your mouth?"
            <br><br>You glare at her. "No! I just a lot of garlic!"
            <br><br>"I can tell." She's backing away from you and pressing her nose to her elbow. "Please tell me you
            did not go breathe on Isidro and Alastair smelling like that."
            <br><br>Your gleaming grin returns and it tells her all she needs to know.
            <br><br>"Are they still alive?" she raises an eyebrow.
            <br><br>"Yup!" you say. "And it worked! I knew they were vampires. This is all just proof on top of proof,
            and one of these days, it's going to add up to two vampires just like I said it would. Just you wait."
            <br>
            `,
            branch: 'end',
            read: 'unread'
        },
        shadow: {
            title: "Check For A Shadow",
            story: `One of the lesser known facts about vampires is that they don't have shadows. It sort of goes along
            with the mirror reflection and sun burning things. You never notice their lack of a shadow because they dwell
            in the dark. The shop, despite having such a sinister sounding name, was constantly brightly lit, so it was
            nearly impossible to determine if either of the florists had shadows or not. That is why you have devised this
            fool-proof plan. Your eyes follow Alastair's every move as he glides around the shop floor.
            <br><br>Sawyer is standing over by the shelf of cacti, completely not listening to a word of your plan as you
            mutter it under your breath at her. If she were listening, she would know about the little secret you have up
            your sleeve. Literally! That's right, you stole a metal LED flashlight from your dad's toolkit for this plan!
            <br><br>"What're you waiting for him to do?" she asks without looking away from the cactus she's poking.
            <br><br>"Go near the wall..." you offhandedly mutter.
            <br><br>She pauses and glances up at Alastair. "Why?"
            <br><br>You were about to explain the plan to her all over again, but before you get the chance, Alastair is
            on the move again. He sets his watering can down by the end of the aisle and floats over to the wall by the
            back where there isn't as much light.
            <br><br>You dart out from around the cactus shelf and race towards him. Just as you're about to reach him, you:
            <br>
            `,
            choices: [
                {choice: `Whip the flashlight you brought out of your sleeve and shine it directly in Alastair's eyes.`,
                destination: 'shineFlashlight'},
                {choice: `Attempt to reveal the flashlight but accidentally fling it into the ceiling light above you.`,
                destination: 'flingFlashlight'},
                {choice: `Trip and fall.`,
                destination: 'tripAndFall'}
            ],
            branch: 'branch',
            read: 'unread'
        },
        shineFlashlight: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        flingFlashlight: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        tripAndFall: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        bloodwine: {
            title: "Catch Them Drinking Blood",
            story: `You have crafted a very delicate and precise plan, and right now, you're on your way to enact this plan
            at the flower shop. You told Sawyer all about this plan, and the entire time, she stared at you with a pleading
            sort of look in her eyes. She doesn't want you to catch these vampires, it seems.
            <br><br>You step through the door of the empty shop, the plan swirling in your mind. Inside, at the counter near 
            the back of the store, is Isidro. He's standing there with a glass in his hand. You stop short. The glass is full
            of blood. It's glimmering a deep red under the warm lights overhead. Your eyes are wide and your heart is beating
            rapidly. This is it! You've found your proof!
            <br><br>Isidro lifts the glass to his lips, about to take a sip. You have to stop him! With the original plan 
            completely forgotten, you react! You:
            <br>
            `,
            choices: [
                {choice: 'Throw the only thing in your hand! Quick!',
                destination: 'throwPhone'},
                {choice: 'Scream at the top of your lungs!',
                destination: 'scream'},
                {choice: 'Sprint towards the desk at top speed!',
                destination: 'sprint'}
            ],
            branch: 'branch',
            read: 'unread'
        },
        throwPhone: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        scream: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        sprint: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        silver: {
            title: "Attempt To Burn Them With Silver.",
            story: `Silver! Usually it' silver bullets that kill vampires, but according to your research, it can be any
            silver thing. Besides, you're not trying to kill anyone here, you're just trying to prove vampiric status.
            So, silver, but no bullets. Luckily, your mother has silver! She never lets you touch it, and it's always kept
            locked up in a little cabinet by the kitchen, but locks have never been a problem for you, and they're not
            going to start being a problem now.
            <br><br>You're currently peering around the corner of the shop's doorframe to see who's around. Sawyer is at
            your back, perplexed. Aha! You spot Isidro's fluffy, brown hair as the man shuffles around with a pot on the 
            other side of a shelf. Alastair is nowhere to be seen. This is perfect! You were hoping to get Isidro anyway
            since this required skin contact with a spoon and Alastair was always wearing gloves.
            <br><br>As you swiftly approach Isidro, you realize the cards really aren't in your favour today, because
            he's wearing gardening gloves. The only exposed parts of Isidro's skin are his neck and face. What should you 
            do?
            <br>
            `,
            choices: [
                {choice: 'Touch the spoon to his neck.',
                destination: 'spoonNeck'},
                {choice: 'Touch the spoon to his cheek.',
                destination: 'spoonCheek'},
                {choice: 'Touch the spoon to his forehead.',
                destination: 'spoonForehead'},
                {choice: 'Convince him to take off his gloves, then touch the spoon to his hand.',
                destination: 'spoonHand'}
            ],
            branch: 'branch',
            read: 'unread'
        },
        spoonNeck: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        spoonCheek: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        spoonForehead: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        spoonHand: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        bites: {
            title: "Get Proof of Their Bite Marks",
            story: `Sawyer, despite thinking that this is all very foolish, is at least being a good sport on this day,
            because you both have wandered past the front desk where Isidro and Alastair are working at least four times,
            and you've tiptoed amongst the nearby shelves at least five times. The excuse you're going with is that you're
            trying to inspect the wall decorations behind them.
            <br><br>You aren't sneaky though. Both florists have asked if you need any help multiple times, but this has 
            been going on for so long that they've decided to pretend they don't notice you at all. They are, after all, 
            busy. The shop is buzzing with people.
            <br><br>Sawyer has no idea what you're both looking for, but you do! Bite marks! You just have to get a good
            look, and that feels impossible since you can't see either of their necks. Isidro moves around a lot and 
            often wears high-collared sweaters. Alastair just has very long hair that covers his neck quite well.
            <br><br>You're suddenly able to catch a glimpse of Alastair's neck when he runs his hand through his hair,
            but there are no markings that would indicate anything vampire-like, even as you squint uncomfortably while
            passing by them for a fifth time. Alastair glowers at you, causing your rubber-necking to quickly cease.
            <br><br>Your hunt moves on to Isidro. Right as you're about to give up, Isidro moves to write something down,
            and as he does, he reaches up to itch the back of his neck. The collar of his sweater is pulled down. 
            <br><br>And there it is! Clear as day: a bite mark! Before he can pull his collar up, you:
            `,
            choices: [
                {choice: `Yell out, "Aha! There, Sawyer! Bite marks!"`,
                destination: 'biteMarksYell'},
                {choice: `Quietly tell the florists, "Hee hee hee! I know your secret! I saw your bite marks!"`,
                destination: 'biteMarksWhisper'},
                {choice: `Say nothing and instead point vigorously while staring intensely at Sawyer.`,
                destination: 'biteMarksPoint'}
            ],
            branch: 'branch',
            read: 'unread'
        },
        biteMarksYell: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        biteMarksWhisper: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
        biteMarksPoint: {
            title: "",
            story: "",
            branch: 'end',
            read: 'unread'
        },
    }
}

function getChoices(){
    var input = ""
    if(!story[story.currentScene].choices){
        return "";
    }
    for(var i = 0; i < story[story.currentScene].choices.length; i++){
        var tempStory = story[story.currentScene].choices[i].destination;
        if(story[tempStory].read == "unread"){
            input += `
            <br>
                <input data-destination=${story[story.currentScene].choices[i].destination} id="radio${i}" type="radio" name="choices"/>
                <label for "radio${i}">${story[story.currentScene].choices[i].choice}</label>
            `
        }
        else if(story[tempStory].read == "read"){
            console.log("Hello");
            input += `
            <br>
                <label><s>${story[story.currentScene].choices[i].choice}</s></label>
            `
        }
    }
    return input;
}

function getChoicesValues(){
    var inputs = document.querySelectorAll('input[type="radio"]');
    var count = 0;
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].checked){
            count++;
            if(story.currentScene != "vampirePlans") story[story.currentScene].read = "read";
            story.currentScene = inputs[i].getAttribute('data-destination');
            renderScene();
        }
    }
    if(count == 0 && story[story.currentScene].branch == 'end'){
        story.currentScene = "vampirePlans";
        renderScene();
    }
}

//main character's name will be their actual name
//sibling will be Sawyer
//vampire 1 is gonna be Isidro Cruorem
//vampire 2 is gonne be Alastair Cruorem (they're married)


load();