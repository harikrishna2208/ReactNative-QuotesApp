import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Quotes = ({ value }) => {
  var StringData = [
    {
      Author: " --Helen Keller",
      Quote:
        '"I long to accomplish a great and noble task, but it is my chief\nduty to accomplish small tasks as if they were great and noble."',
      index: 0,
    },
    {
      Author: " --Sandra Swinney",
      Quote:
        '"It is amazing how much people can get done if they do not worry\nabout who gets the credit."',
      index: 1,
    },
    {
      Author: " --Lucille Ball",
      Quote:
        "\"I don't know anything about luck.  I've never banked on it, and\nI'm afraid of people who do.  Luck to me is something else:  hard\nwork and realizing what it opportunity and what isn't.\"",
      index: 2,
    },
    {
      Author: " --Nancy Hanks",
      Quote:
        '"My parents always told me that people will never know how long\nit takes you to do something.  They will only know how well it is\ndone."',
      index: 3,
    },
    { Author: "", Quote: '"He who angers you enslaves you."', index: 4 },
    {
      Author: " --Robert Frost",
      Quote:
        '"In three words, I can sum up everything I know about life: it\ngoes on."',
      index: 5,
    },
    {
      Author: " --Anaős",
      Quote: '"Shame is the lie someone told you about yourself."',
      index: 6,
    },
    {
      Author: " --Faith Whittlesey",
      Quote:
        '"Remember, Ginger Rogers did everything that Fred Astaire did,\nbut she did it backwards and in high heels."',
      index: 7,
    },
    {
      Author: " --Mogdiliani",
      Quote: '"Your real duty is to save your dream."',
      index: 8,
    },
    { Author: "", Quote: '"If there is no wind, row."', index: 9 },
    {
      Author: " --William Shakespeare",
      Quote:
        '"One good deed dying tongueless slaughters a thousand waiting\nupon that."',
      index: 10,
    },
    {
      Author: " --Henry George",
      Quote:
        '"There is danger in reckless change; but greater danger in blind\nconservatism."',
      index: 11,
    },
    {
      Author: " --Agnes de",
      Quote:
        '"Living is a form of not being sure, not knowing what next or\nhow.  The moment you know how, you begin to die a little.  The\nartist never entirely known.  We guess.  We may be wrong, but we\ntake leap after leap in the dark."',
      index: 12,
    },
    {
      Author: "",
      Quote:
        '"The known is finite, the unknown infinite; intellectually we\nstand on an islet in the midst of an illimitable ocean of\ninexplicability.  Our business in every generation is to reclaim\na little more land."',
      index: 13,
    },
    {
      Author: " --Carl Sagan",
      Quote:
        "\"The fact that someone says something doesn't mean it's true. \nDoesn't mean they're lying, but it doesn't mean it's true.\"",
      index: 14,
    },
    {
      Author: " --Francoise Sagan",
      Quote:
        '"I shall live badly if I do not write, and I shall write badly if\nI do not live."',
      index: 15,
    },
    {
      Author: " --Friedrich Nietzsche",
      Quote:
        '"I tell you:  one must have chaos in one to give birth to a\ndancing star.  I tell you:  you still have chaos in you."',
      index: 16,
    },
    {
      Author: " --Vittorio Alfieri",
      Quote: '"Often the real test of courage is not to die, but to live."',
      index: 17,
    },
    {
      Author: " --Erich Fromm",
      Quote:
        '"The right to express our thoughts means something only if we are\nable to have thoughts of our own."',
      index: 18,
    },
    {
      Author: " --Socrates",
      Quote: '"The unexamined life is not worth living."',
      index: 19,
    },
    {
      Author: " --Karla Jameson",
      Quote:
        '"There are no words that can be spoken to shatter the darkness. \nWhat is left is silence, and the dawn must creep at its own pace\nas we wait.  There are no words for how we feel.  The silence of\nthe night is the only thing that captures it, and dawn the only\nthing to set it free.  So we wait..."',
      index: 20,
    },
    {
      Author: " --Earl Nightengale",
      Quote:
        '"A great attitude does much more than turn on the lights in our\nworlds; it seems to magically connect us to all sorts of\nserendipitous opportunities that were somehow absent before the\nchange."',
      index: 21,
    },
    {
      Author: " --Earl Nightengale",
      Quote:
        "\"People are where they are because that's exactly where they\nreally want to be...whether they'll admit that or not.\"",
      index: 22,
    },
    {
      Author: " --Earl Nightengale",
      Quote:
        '"We can let circumstances rule us, or we can take charge and rule\nour lives from within."',
      index: 23,
    },
    {
      Author: " --Earl Nightengale",
      Quote:
        '"Your world is a living expression of how you are using and have\nused your mind."',
      index: 24,
    },
    {
      Author: " --Earl Nightengale",
      Quote:
        '"Am I motivated by what I really want out of life - or am I mass-\nmotivated?"',
      index: 25,
    },
    {
      Author: " --Earl Nightengale",
      Quote:
        '"All you need is the plan, the road map, and the courage to press\non to your destination."',
      index: 26,
    },
    {
      Author: " --Earl Nightengale",
      Quote:
        '"Success is the progressive realization of a worthy goal or\nideal."',
      index: 27,
    },
    {
      Author: " --Earl Nightengale",
      Quote:
        '"Whatever we plant in our subconscious mind and nourish with\nrepetition and emotion will one day become a reality."',
      index: 28,
    },
    {
      Author: " --Vince Lombardi",
      Quote:
        '"The price of success is hard work, dedication to the job at\nhand, and the determination that whether we win or lose, we have\napplied the best of ourselves to the task at hand."',
      index: 29,
    },
    {
      Author: " --Alexander Graham",
      Quote:
        '"What this power is I cannot say; all I know is that it exists\nand it becomes available only when a man is in that state of mind\nin which he knows exactly what he wants and is fully determined\nnot to quit until he finds it."',
      index: 30,
    },
    {
      Author: " --Muhammad Ali",
      Quote:
        '"Only a man who knows what it is like to be defeated can reach\ndown to the bottom of his soul and come up with the extra  ounce\nof power it takes to win when the match is even."',
      index: 31,
    },
    {
      Author: " --Ric Ocasek",
      Quote:
        '"This environment [New York] is heaven.  I love walking down the\nstreet and seeing faces and drama and happiness and sadness and\ndirt and cleanliness.  I could never be a country person, sitting\naround trees trying to write a song.  I would rather be in the\nmiddle of society, whether it\'s growing or crumbling."',
      index: 32,
    },
    {
      Author: " --Will Rogers",
      Quote:
        "\"Diplomacy is the art of saying 'nice doggie' until you can find\na rock.\"",
      index: 33,
    },
    {
      Author: " --Barry Switzer",
      Quote:
        '"Some people are born on third base and go through life thinking\nthey hit a triple."',
      index: 34,
    },
    {
      Author: " --Dan Barker",
      Quote:
        '"Faith is a cop-out.  It is intellectual bankruptcy.  If the only\nway you can accept an assertion is by faith, then you are\nconceding that it can\'t be taken on its own merits."',
      index: 35,
    },
    {
      Author: " --Derek Bok",
      Quote: '"If you think education is expensive, try ignorance."',
      index: 36,
    },
    {
      Author: " --Albert Einstein",
      Quote:
        '"A man\'s ethical behaviour should be based effectually on\nsympathy, education, and social ties; no religious basis is\nnecessary.  Man would indeed be in a poor way if he had to be\nrestrained by fear of punishment and hope of reward after death."',
      index: 37,
    },
    {
      Author: " --Eleanor Roosevelt",
      Quote:
        '"Every time you meet a situation, though you think at the moment\nit is an impossibility and you go through the tortures of the\ndamned, once you have met it and lived through it you find that\nforever after you are freer than you were before."',
      index: 38,
    },
    {
      Author: " --Victor Hugo",
      Quote:
        '"An invasion of armies can be resisted.  But not an idea whose\ntime has come."',
      index: 39,
    },
    {
      Author: " --from My",
      Quote:
        "\"Sometimes it seems like we're all living in some kind of prison,\nand the crime is how much we all hate ourselves.  It's good to\nget really dressed up once in a while and admit the truth -- that\nwhen you really look closely, people are so strange and so\ncomplicated that they're actually beautiful.  Possibly even me.\"",
      index: 40,
    },
    {
      Author: " --Richard Bach",
      Quote:
        "\"She didn't mean to be sexy that moment, but even a winter\nnightgown couldn't hide that lovely outline.  When will I outgrow\nmy simple-minded fascination with the form she had happened to\nchoose for her body?  Never, I thought.\"",
      index: 41,
    },
    {
      Author: " --Richard Bach",
      Quote:
        "\"That's what learning is, after all:  not whether we lose the\ngame, but how we lose and how we've changed because of it and\nwhat we take away from it that we never had before, to apply to\nother games.  Losing, in a curious way, is winning.\"",
      index: 42,
    },
    {
      Author: " --Richard Bach",
      Quote:
        "\"Two things I do value a lot, intimacy and the capacity for joy,\ndidn't seem to be on anyone else's list.  I felt like the\nstranger in a strange land, and decided I'd better not marry the\nnatives.\"",
      index: 43,
    },
    {
      Author: " --Richard Bach",
      Quote:
        "\"There are no mistakes.  The events we bring upon ourselves, no\nmatter how unpleasant, are necessary in order to learn what we\nneed to learn; whatever steps we take, they're necessary to reach\nthe places we've chosen to go.\"",
      index: 44,
    },
    {
      Author: " --Richard Bach",
      Quote:
        '"Part of us is always the observer, and no matter what, it\nobserves.  It watches us.  It does not care if we are happy or\nunhappy, if we are sick or well, if we live or die.  Its only job\nis to sit there on our shoulder and pass judgment on whether we\nare worthwhile human beings."',
      index: 45,
    },
    {
      Author: " --Jeanette Winterson",
      Quote:
        '"We fear passion and laugh at too much love and those who love\ntoo much. And still we long to feel."',
      index: 46,
    },
    {
      Author: " --Neil Gaiman",
      Quote:
        '"You say I have no power?  Perhaps you speak truly... but you say\nthat dreams have no power here?  Tell me, Lucifer Morningstar...\nask yourselves, all of you... what power would hell have if those\nhere imprisoned were not able to dream of heaven?"',
      index: 47,
    },
    {
      Author: " --Ralph Waldo",
      Quote: '"A friend is one before whom I may think aloud."',
      index: 48,
    },
    {
      Author: " --Friedrich Nietzsche",
      Quote:
        '"He who fights with monsters might take care lest he thereby\nbecome a monster.  And if you gaze for long into an abyss, the\nabyss gazes also into you."',
      index: 49,
    },
    {
      Author: " --Stephen Covey",
      Quote:
        "\"If we keep doing what we're doing, we're going to keep getting\nwhat we're getting.\"",
      index: 50,
    },
    {
      Author: " --Sally Kempton",
      Quote: '"It\'s hard to fight an enemy who has outposts in your head."',
      index: 51,
    },
    {
      Author: " --Bertrand Russell",
      Quote:
        '"We are faced with the paradoxical fact that education has become\none of the chief obstacles to intelligence and freedom of\nthought."',
      index: 52,
    },
    {
      Author: " --John B",
      Quote:
        '"Happiness is not in our circumstance but in ourselves.  It is\nnot something we see, like a rainbow, or feel, like the heat of a\nfire.  Happiness is something we are."',
      index: 53,
    },
    {
      Author: " --Thomas Szasz",
      Quote:
        '"The self is not something that one finds, it is something that\none creates."',
      index: 54,
    },
    {
      Author: " --Marilyn Moats",
      Quote:
        '"It\'s better to be boldly decisive and risk being wrong than to\nagonize at length and be right too late."',
      index: 55,
    },
    {
      Author: " --Carolyn Meroniuk",
      Quote:
        "\"You'll never know if you can win until you know you've tried\nyour best... and then it doesn't matter if you've won or not\nbecause you will have improved, and that is winning for\nyourself.\"",
      index: 56,
    },
    {
      Author: " --Herbert Sebastian",
      Quote:
        '"The truth that makes men free is for the most part the truth\nwhich men prefer not to hear."',
      index: 57,
    },
    {
      Author: " --Filipe Alou",
      Quote:
        "\"There's only one opinion that counts.  It's your opinion.  It\nmay be wrong, but it's yours and that's the one that counts.\"",
      index: 58,
    },
    {
      Author: " --Richard Bach",
      Quote:
        '"Good and evil are not what our parents told us, not what our\nchurch tells us, or our country, not what anybody else tells us! \nAll of us decide good and evil for ourselves, automatically, by\nchoosing what we want to do!"',
      index: 59,
    },
    {
      Author: " --Richard Bach",
      Quote:
        '"If we must lose wife or husband when we live to our highest\nright, we lose an unhappy marriage as well, and we gain\nourselves.  But if a marriage is born between two already self-\ndiscovered, what a lovely adventure begins, hurricanes and all!"',
      index: 60,
    },
    {
      Author: " --Jeanette Winterson",
      Quote:
        '"When I dream of a future in her arms no dark days appear, not\neven a head cold, and though I know it\'s nonsense I really\nbelieve we would always be happy and that our children would\nchange the world."',
      index: 61,
    },
    {
      Author: " --Poppy Z",
      Quote:
        '"They discovered that even in the face of pain that seems\nunbearable, even in the face of pain that wrings the last drop \nof blood out of your heart and leaves its scrimshaw tracery on\nthe inside of your skull, life goes on.  And pain grows dull, and\nbegins to fade."',
      index: 62,
    },
    {
      Author: " --Poppy Z",
      Quote:
        "\"I can't heal your pain but I can see it.  And you don't have to\nbe lost.  Not forever.\"",
      index: 63,
    },
    {
      Author: " --Ayn Rand",
      Quote: '"Nobody stays here by faking reality in any manner whatever."',
      index: 64,
    },
    {
      Author: " --Pablo Pedro",
      Quote:
        '"The opening and middle game are vital but a player up two pieces\nmight have a heart attack and have to forfeit.  The end game is\nwhat counts."',
      index: 65,
    },
    {
      Author: " --Greg Hawkes",
      Quote: '"Traditions exist so we can go beyond them."',
      index: 66,
    },
    {
      Author: " --Michael Franti",
      Quote:
        '"Through music I either tame my demons or unleash them and allow\nthem to be what they are.  I don\'t want the music to be about\nprovocation, I want the music to bring you to a place where you\nfeel at home."',
      index: 67,
    },
    {
      Author: " --Mike Myers",
      Quote:
        "\"You can't think of risks.  I have nothing to lose.  You either\nmake something that you like, or you don't, and you throw it to\nthe universe.\"",
      index: 68,
    },
    {
      Author: " --Helen Keller",
      Quote:
        '"Literature is my Utopia.  Here I am not disenfranchised.  No\nbarrier of the senses shuts me out from the sweet, gracious\ndiscourses of my book friends.  They talk to me without\nembarrassment or awkwardness."',
      index: 69,
    },
    {
      Author: " --Helen Keller",
      Quote: '"Not the senses I have but what I do with them is my kingdom."',
      index: 70,
    },
    {
      Author: " --Helen Keller",
      Quote:
        '"Security is mostly a superstition.  It does not exist in nature,\nnor do the children of men as a while experience it.  Avoiding\ndanger is no safer in the long run than outright exposure.  Life\nis either a daring adventure, or nothing."',
      index: 71,
    },
    {
      Author: " --from Beetlejuice",
      Quote:
        '"People ignore the strange and unusual... I myself am strange and\nunusual."',
      index: 72,
    },
    {
      Author: " --Hugh Prather",
      Quote:
        "\"Do I avoid looking a stranger in the eyes because I don't want\nto make him uncomfortable, or do I turn my eyes so he can't look\ninto me?  What is in there that I don't want him to see?\"",
      index: 73,
    },
    {
      Author: " --Hugh Prather",
      Quote:
        "\"Sometimes when I generalize I am saying, 'Let's pretend I am\nGod,' and of course the other person argues that point endlessly. \nBut I notice that if the other person takes a stand for himself\nand states his thoughts as his thoughts, I pay more attention to\nwhat he is saying and look deeper in myself.\"",
      index: 74,
    },
    {
      Author: " --Hugh Prather",
      Quote:
        '"Perfectionism is a slow death.  If everything were to just like\nI would want it to, just like I would plan for it to, then I\nwould never experience anything new; my life would be an endless\nrepetition of stale successes.  When I make a mistake I\nexperience something unexpected."',
      index: 75,
    },
    {
      Author: " --Greg Hawkes",
      Quote:
        "\"For some reason, when we're on tour all our dressing rooms have\nblackboards.  So we chalk up New Laws of the Universe like, 'What\nis not there, will be,' and 'All roads lead to other roads.'\"",
      index: 76,
    },
    {
      Author: " --John Wooden",
      Quote:
        '"Be more concerned with your character than your reputation,\nbecause your character is what you really are, while your\nreputation is merely what others think you are."',
      index: 77,
    },
    {
      Author: "",
      Quote:
        '"Men of genius are admired, men of wealth are envied, men of\npower are feared; but only men of character are trusted."',
      index: 78,
    },
    {
      Author: " --Aristotle",
      Quote:
        '"Dignity does not consist in possessing honours, but in deserving\nthem."',
      index: 79,
    },
    {
      Author: " --from Press",
      Quote: '"You\'re all very quiet for people running for their lives."',
      index: 80,
    },
    {
      Author: " --Miranda Padgett",
      Quote:
        '"I laugh, my voice spiralling into Forever\n for I have found perfection\n and it has always been right here\n in the temple of Self"',
      index: 81,
    },
    {
      Author: " --Glenn Beck",
      Quote:
        '"Remember, beneath every cynic there lies a romantic, and\nprobably an injured one."',
      index: 82,
    },
    {
      Author: " --Ralph Waldo",
      Quote:
        '"Every great and commanding movement in the annals of the world\nis the triumph of enthusiasm.  Nothing great was ever achieved\nwithout it."',
      index: 83,
    },
    {
      Author: " --Lois Duncan",
      Quote:
        '"If there were a mile high mountain of granite, and once every\nten-thousand years a bird flew past and brushed it with a\nfeather, by the time that mountain was worn away, a fraction of a\nsecond would have passed in the context of eternity."',
      index: 84,
    },
    {
      Author: " --Emo Phillips",
      Quote:
        '"Some mornings, it\'s just not worth chewing through the leather\nstraps."',
      index: 85,
    },
    {
      Author: " --Timothy Dwight",
      Quote:
        '"The happiest person is the person who thinks the most\ninteresting thoughts."',
      index: 86,
    },
    {
      Author: " --Colette",
      Quote: '"Be happy.  It is a way of being wise."',
      index: 87,
    },
    {
      Author: "",
      Quote:
        '"Happiness is not a state to arrive at, but a manner of\ntravelling."',
      index: 88,
    },
    {
      Author: "",
      Quote:
        '"It is better to aim at perfection and miss, than to aim at\nimperfection and hit it."',
      index: 89,
    },
    {
      Author: " --Lord Alfred",
      Quote: '"Knowledge comes, but wisdom lingers."',
      index: 90,
    },
    {
      Author: " --The Masao",
      Quote: '"You are what you do when it counts."',
      index: 91,
    },
    {
      Author: " --Margo Kaufmann",
      Quote:
        "\"I once complained to my father that I didn't seem to be able to\ndo things the same way other people did.  Dad's advice?  'Margo,\ndon't be a sheep.  People hate sheep.  They eat sheep.'\"",
      index: 92,
    },
    {
      Author: " --Julia Soorel",
      Quote:
        '"If you\'re never scared or embarrassed or hurt, it means you\nnever take any chances."',
      index: 93,
    },
    {
      Author: " --Ben Sweetland",
      Quote: '"Success is a journey, not a destination."',
      index: 94,
    },
    {
      Author: " --Stephen King",
      Quote:
        '"There is zero, and there is eternity, and there is mortality,\nbut there is no ultimate."',
      index: 95,
    },
    {
      Author: "",
      Quote: '"You are what you are -- and not what people think you are."',
      index: 96,
    },
    {
      Author: " --Arthur Freed",
      Quote:
        '"Don\'t try to be different.  Just be good.  To be good is\ndifferent enough."',
      index: 97,
    },
    {
      Author: " --from Star",
      Quote:
        "\"If we're going to be damned, let's be damned for who we really\nare!\"",
      index: 98,
    },
    {
      Author: " --Rita Mae",
      Quote:
        '"About all you can do in life is be who you are.  Some people\nwill love you for you.  Most will love you for what you can do\nfor them, and some won\'t like you at all."',
      index: 99,
    },
    {
      Author: " --Mandie Ellingson",
      Quote:
        '"The difficulties of life are intended to make us better, not\nbitter."',
      index: 100,
    },
    {
      Author: " --Augustine Birrell",
      Quote:
        '"An ordinary man can... surround himself with two thousand\nbooks... and thenceforward have at least one place in the world\nin which it is possible to be happy."',
      index: 101,
    },
    {
      Author: " --Tallyrand",
      Quote: '"Language exists to conceal true thought."',
      index: 102,
    },
    {
      Author: " --Thomas Carruthers",
      Quote: '"A teacher is one who makes himself progressively unnecessary."',
      index: 103,
    },
    {
      Author: " --Johann Wolfgang",
      Quote:
        '"People who think honestly and deeply have a hostile attitude\ntowards the public."',
      index: 104,
    },
    {
      Author: " --Niels Bohr",
      Quote:
        '"The opposite of a correct statement is a false statement.  But\nthe opposite of a profound truth may well be another profound\ntruth."',
      index: 105,
    },
    {
      Author: " --Albert Schweitzer",
      Quote:
        '"Truth has no special time of its own.  Its hour is now --\nalways."',
      index: 106,
    },
    {
      Author: " --Johann Wolfgang",
      Quote: '"I can promise to be frank, I cannot promise to be impartial."',
      index: 107,
    },
    {
      Author: "",
      Quote:
        "\"If you make people think they're thinking, they'll love you; but\nif you make them really think, they'll hate you.\"",
      index: 108,
    },
    {
      Author: " --Immanuel Kant",
      Quote:
        '"Two things fill my mind with ever-increasing wonder and awe: \nthe starry skies above me and the moral law within me."',
      index: 109,
    },
    {
      Author: " --Lilly Tomlin",
      Quote:
        '"The trouble with the rat race is that even if you win you\'re\nstill a rat."',
      index: 110,
    },
    {
      Author: " --Loriel",
      Quote:
        '"All art must come from experience, or it is as fake as the soul\nof the one who writes it."',
      index: 111,
    },
    {
      Author: " --Roger Bannister",
      Quote:
        '"The man who can drive himself further once the effort gets\npainful is the man who will win."',
      index: 112,
    },
    {
      Author: "",
      Quote:
        '"Imagine a life without uncertainty...  Imagine how dull life\nwould be if variables assessed for admission to a professional\nschool, graduate program, or executive training program really\ndid predict with great accuracy who would succeed and who would\nfall.  Life would be intolerable -- no hope, no challenge."',
      index: 113,
    },
    {
      Author: " --Rosie Dimanno",
      Quote:
        "\"Go your own way.  Question everything.  Accept nothing.  Accept\nno dogma, no can't.  There are too many people walking around\nthinking they're sacred cows, and they're only half right.\"",
      index: 114,
    },
    {
      Author: " --Mark Twain",
      Quote:
        '"The man who does not read good books has no advantage over the\nman who can\'t read them."',
      index: 115,
    },
    {
      Author: " --Michael Van",
      Quote:
        '"Again, we must ask ourselves why the people that brought war,\nplane crashes, political corruption, lap dancing and serial\nkillers to our breakfast tables and into our living rooms are\ntrying to sooth us with futuristic Web browsers, all buttons and\nspinning logos."',
      index: 116,
    },
    {
      Author: " --Gina Gillespie",
      Quote:
        "\"I wish that people would take the time to show people that they\nare important in their lives, either at work, or at home.  Too\nmany times people take others for granted, and I think that needs\nto change.  People are so much nicer and willing to help you if\nyou use those two little words that mean so much... 'Thank You!'\"",
      index: 117,
    },
    {
      Author: " --from The",
      Quote:
        '"I guess some people never change.  Or, they quickly change and\nthen quickly change back."',
      index: 118,
    },
    {
      Author: " --Don DeLillo",
      Quote:
        "\"Because friends have to be brutally honest with each other.  I'd\nfeel terrible if I didn't tell you what I was thinking,\nespecially at a time like this.\"",
      index: 119,
    },
    {
      Author: " --Don DeLillo",
      Quote:
        "\"Just because it's on the radio doesn't mean we have to suspend\nbelief in the evidence of our senses.\"",
      index: 120,
    },
    {
      Author: " --Julio Cort",
      Quote:
        '"Where are the beginnings, the endings, and most important, the\nmiddles?"',
      index: 121,
    },
    {
      Author: " --Elliot Easton",
      Quote:
        "\"The highest form of guitar soloing is saying something in 16\nbars and not wasting a note.  You can't aspire to anything finer\nin a pop record.  I've never gone for gratuitous soloing.  The\nmost predictable thing in the world is to wank on guitar for days\non end.  It's like weight lifting.  I'm not impressed by it.\"",
      index: 122,
    },
    {
      Author: " --Tom Zimmerman",
      Quote: '"Little problems are big problems for little minds"',
      index: 123,
    },
    {
      Author: " --Hugh Prather",
      Quote:
        '"I want you to be able to say anything. Even what you don\'t\nmean."',
      index: 124,
    },
    {
      Author: " --General George",
      Quote: '"Lead me, follow me, or get out of my way."',
      index: 125,
    },
    {
      Author: "",
      Quote:
        "\"Be willing to make decisions.  That's the most important quality\nin a good leader.  Don't fall victim to what I call the Ready-\nAim-Aim-Aim Syndrome.  You must be willing to fire.\"",
      index: 126,
    },
    {
      Author: " --Margo Kaufman",
      Quote:
        "\"Whenever someone annoys me, I create a file with his or her name\non it and drag it to my Mac's trash icon.  If I'm really angry, I\nempty the trash, and whoever was bugging me disappears into the\nvoid.\"",
      index: 127,
    },
    {
      Author: " --Lewis Carroll",
      Quote:
        "\"'When I use a word,' Humpty Dumpty said in a rather scornful\ntone, 'it means just what I choose it to mean; neither more nor\nless.'\"",
      index: 128,
    },
    {
      Author: " --John Keats",
      Quote:
        '"I am certain of nothing but the holiness of the heart\'s\naffections, and the truth of imagination."',
      index: 129,
    },
    {
      Author: " --John Steakley",
      Quote: '"You are what you do when it counts"',
      index: 130,
    },
    {
      Author: " --Robert Fulghum",
      Quote:
        '"I once listed all the good things I did over the past year, and\nthen turned them into resolution form and backdated them.That\nwas a good feeling."',
      index: 131,
    },
    {
      Author: " --Vince Lombardi",
      Quote:
        '"The quality of a person\'s life is in direct proportion to their\ncommitment to excellence, regardless of their chosen\nfield of endeavour."',
      index: 132,
    },
    {
      Author: " --Anthony Robbins",
      Quote:
        '"Create a vision and never let the environment, other people\'s\nbeliefs, or the limits of what has been done in the past shape\nyour decisions.Ignore conventional wisdom."',
      index: 133,
    },
    {
      Author: " --Bunker Hunt",
      Quote:
        '"Determine what you want, then resolve to pay the price to get\nit."',
      index: 134,
    },
    {
      Author: "",
      Quote:
        '"For a long time it had seemed to me that life was about to begin\n-- real life.  But there was always some obstacle in the way,\nsomething to be got through first, some unfinished business, time\nstill to be served, a debt to be paid.  Then life would begin. \nAt last it dawned on me that these obstacles were my life."',
      index: 135,
    },
    {
      Author: " --The Refreshments",
      Quote:
        "\"And who ever said there's nothing new under the sun\n Never thought much about individuals\n But he's dead anyways.\"",
      index: 136,
    },
    {
      Author: " --George Bernard",
      Quote: '"All great truths begin as blasphemies."',
      index: 137,
    },
    {
      Author: " --George Bernard",
      Quote:
        "\"You see things and say, 'Why?', but I dream things and say, 'Why\nnot?'\"",
      index: 138,
    },
    {
      Author: " --Doug Gwyn",
      Quote: '"Truth is not determined by majority vote."',
      index: 139,
    },
    {
      Author: " --Bertrand Russel",
      Quote:
        '"The world is full of magical things patiently waiting for our\nwits to grow sharper."',
      index: 140,
    },
    {
      Author: " --Hubert Humphrey",
      Quote:
        '"It is not what they take away from you that counts.  It\'s what\nyou do with what you have left."',
      index: 141,
    },
    {
      Author: " --Unkn",
      Quote:
        '"If you can find a path with no obstacles, it probably doesn\'t\nlead anywhere."',
      index: 142,
    },
    {
      Author: " --Jean de",
      Quote: '"This great misfortune -- to be incapable of solitude."',
      index: 143,
    },
    {
      Author: " --George Matthew",
      Quote:
        "\"There is no such thing as a 'self-made' man.  We are made up of\nthousands of others.  Everyone who has ever done a kind deed for\nus, or spoken one word of encouragement to us, has entered into\nthe make-up of our character and of our thoughts, as well as our\nsuccess.\"",
      index: 144,
    },
    {
      Author: " --Walter Anderson",
      Quote:
        '"Our lives improve only when we take chances -- and the first and\nmost difficult risk we can take is to be honest with ourselves."',
      index: 145,
    },
    {
      Author: " --Frederick L",
      Quote:
        "\"There are two types of people -- those who come into a room and\nsay, 'Well, here I am!' and those who come in and say, 'Ah, there\nyou are.'\"",
      index: 146,
    },
    {
      Author: " --Bill Cosby",
      Quote:
        '"I don\'t know the key to success, but the key to failure is to\ntry to please everyone."',
      index: 147,
    },
    {
      Author: " --Aldous Huxley",
      Quote:
        "\"There's only one corner of the universe you can be certain of\nimproving, and that's your own self.\"",
      index: 148,
    },
    {
      Author: " --Sir Laurence",
      Quote:
        '"I take a simple view of life:  keep your eyes open and get on\nwith it."',
      index: 149,
    },
    {
      Author: " --from Doctor",
      Quote:
        '"The very powerful and the very stupid have one thing in common. \nInstead of altering their views to fit the facts, they alter the\nfacts to fit their views... which can be very uncomfortable if\nyou happen to be one of the facts that needs altering."',
      index: 150,
    },
    {
      Author: " --Edward J",
      Quote:
        "\"I'm old old enough to play baseball or football.  I'm not eight\nyet.  My Mom told me when you start baseball, you aren't going to\nbe able to run that fast because you had an operation.  I told\nMom I wouldn't need to run fast.  When I play baseball, I'll just\nhit them out of the park.  Then I'll be able to walk.\"",
      index: 151,
    },
    {
      Author: "",
      Quote:
        "\"It's possible to fight intolerance, stupidity and fanaticism\nwhen they come separately.  When you get all three together it's\nprobably wiser to get out, if only to preserve your sanity.\"",
      index: 152,
    },
    {
      Author: " --Stan Ridgway",
      Quote:
        '"Is there a home, a home for me?\n Where the people stay until eternity?\n Is there a road that winds up, underneath the big green tree?\n Is there a home, a home for me?"',
      index: 153,
    },
    {
      Author: " --Stan Ridgway",
      Quote:
        '"I wanna float with you on a cumulus cloud\n I wanna take you far away from this maddening crowd\n You can scratch up my back with your long fingernails\n We\'ll drink some weird wine and eat psychedelic snails."',
      index: 154,
    },
    {
      Author: " --General",
      Quote:
        "\"All right, they're on our left, they're on our right, they're in\nfront of us, they're behind us.  They can't get away this time!\",\"Chesty\"",
      index: 155,
    },
    {
      Author: " --Mohandas Gandhi",
      Quote: '"An eye for an eye will make the whole world blind."',
      index: 156,
    },
    {
      Author: " --Mohandas Gandhi",
      Quote:
        '"True morality consists, not in following the beaten track, but\nin finding out the true path for ourselves and in fearlessly\nfollowing it."',
      index: 157,
    },
    {
      Author: " --from Homicide",
      Quote:
        "\"You have no warning when your life's about to change.  No clap\nof thunder.  No sign.  Maybe a premonition, a fear,  but we're\nscared most of the time, aren't we?  So how do you know when it\nmeans something?  How do you know when you're just not being\nparanoid?\"",
      index: 158,
    },
    {
      Author: " --Joseph Heller",
      Quote:
        '"Well, maybe it is true, maybe a long life does have to be filled\nwith many unpleasant conditions if it\'s to seem long.  But in\nthat event, who wants one?"',
      index: 159,
    },
    {
      Author: " --Professor Zen",
      Quote:
        '"Practice random acts of independence and senseless acts of\nfreedom."',
      index: 160,
    },
    {
      Author: " --Professor Zen",
      Quote: '"Stand up for yourself.  If you don\'t then why should I?"',
      index: 161,
    },
    {
      Author: " --Jeanette Winterson",
      Quote:
        '"Poor me.  There\'s nothing so sweet as wallowing in it is there? \nWallowing is sex for depressives."',
      index: 162,
    },
    {
      Author: " --Jeanette Winterson",
      Quote:
        '"Make three wishes and they shall all come true.  Make three\nhundred and I will honour every one."',
      index: 163,
    },
    {
      Author: " --Charles Buxton",
      Quote:
        '"You will never find time for anything.  If you want time you\nmust make it."',
      index: 164,
    },
    {
      Author: " --Jessamyn West",
      Quote:
        '"We want the facts to fit the preconceptions.  When they don\'t,\nit is easier to ignore the facts than to change the\npreconceptions."',
      index: 165,
    },
    {
      Author: "",
      Quote:
        "\"Telling us to obey instinct is like telling us to obey 'people.' \nPeople say different things:  so do instincts.  Our instincts are\nat war....Each instinct, if you listen to it, will claim to be\ngratified at the expense of the rest.\"",
      index: 166,
    },
    {
      Author: "",
      Quote:
        '"My riches consist not in the extent of my possessions, but in\nthe fewness of my wants."',
      index: 167,
    },
    {
      Author: " --Malcom Forbes",
      Quote:
        '"The purpose of education is to replace an empty mind with an\nopen one."',
      index: 168,
    },
    {
      Author: " --Stewart B",
      Quote:
        '"Our business in life is not to get ahead of others, but to get\nahead of ourselves - to break our own records, to outstrip our\nyesterday by our today."',
      index: 169,
    },
    {
      Author: " --Richard Bach",
      Quote: '"Argue for your limitations, and sure enough, they\'re yours."',
      index: 170,
    },
    {
      Author: " --Theodore Rubin",
      Quote:
        '"There are two ways to slide easily through life:  to believe\neverything or to doubt everything; both ways save us from\nthinking."',
      index: 171,
    },
    {
      Author: " --Virginia Satir",
      Quote:
        '"We must not allow other people\'s limited perceptions to define\nus."',
      index: 172,
    },
    {
      Author: "",
      Quote:
        '"The future is green and low tech.  We\'ll watch aquariums, not\nTVs."',
      index: 173,
    },
    {
      Author: " --from What",
      Quote: '"We all are where we are because we want to be there."',
      index: 174,
    },
    {
      Author: " --from Sleepers",
      Quote:
        '"The future lay sparkling ahead of us and we thought that we\'d\nknow each other forever."',
      index: 175,
    },
    {
      Author: " --Hugh Stevenson",
      Quote:
        '"The most important thing about a man is what he believes in the\ndepth of his being.  This is the thing that makes him what he is,\nthe thing that organizes him and feeds him; the thing that keeps\nhim going in the face of untoward circumstances; the thing that\ngives him resistance and drive."',
      index: 176,
    },
    {
      Author: " --Alfred A",
      Quote:
        '"If you don\'t have solid beliefs you cannot build a stable life. \nBeliefs are like the foundation of a building, and they are the\nfoundation to build your life upon."',
      index: 177,
    },
    {
      Author: " --from a",
      Quote:
        '"What orbit of the planets has put you and me in this place, at\nthis moment?  Where time takes a breath, and we dance on the edge\nof our dreams?"',
      index: 178,
    },
    {
      Author: " --from Strange",
      Quote:
        "\"You know one of the ways that movies are still better than\nplayback?  Because the music comes up, there's credits, and you\nalways know when it's over.\"",
      index: 179,
    },
    {
      Author: " --Ric Ocasek",
      Quote: '"There\'s more to light than the opposite of dark."',
      index: 180,
    },
    {
      Author: " --Jules Marshall",
      Quote:
        '"There\'s a new and virulent cultural virus ripping through the\nworld...  The symptoms of those infected include attacks of\noptimism, strong feelings of community, lower stress levels and\noutbreaks of pronoia -- the sneaking feeling that someone is\nconspiring behind their backs to help them."',
      index: 181,
    },
    {
      Author: " --Régis",
      Quote:
        '"Machines will never be able to give the thinking process a model\nof thought itself, since machines are not mortal.  What gives\nhumans access to the symbolic domain of value and meaning is the\nfact that we die."',
      index: 182,
    },
    {
      Author: " --Gary Wolf",
      Quote:
        '"The task of thinking is based upon selection and weeding out;\nremembering everything is weirdly similar to forgetting\neverything.  Most things that people do shouldn\'t be remembered. \nMaybe forgetting is good."',
      index: 183,
    },
    {
      Author: " --from The",
      Quote: '"May the best from your past be the worst of your future."',
      index: 184,
    },
    {
      Author: " --Benjamin Hoff",
      Quote:
        '"When you discard arrogance, complexity, and a few other things\nthat get in the way, sooner or later you will discover that\nsimple, childlike, and mysterious secret known to those of the\nUncarved Block:  Life is Fun."',
      index: 185,
    },
    {
      Author: " --Fred Wilcox",
      Quote:
        '"Progress involves risks.  You can\'t steal second with your foot\non first."',
      index: 186,
    },
    {
      Author: " --Leo Durocher",
      Quote: '"Don\'t save a pitcher for tomorrow.  Tomorrow it may rain."',
      index: 187,
    },
    {
      Author: " --Tony La",
      Quote:
        "\"It's like most anything.  If you want to be a loser, there's\nalways a way to dwell on the negative.  If you want to win,\nthere's always a way to think positively.\"",
      index: 188,
    },
    {
      Author: " --Greg Maddux",
      Quote:
        '"If you are content with yourself, you\'ll stop taking those\nlittle steps forward and begin taking big steps backward."',
      index: 189,
    },
    {
      Author: " --Garbage",
      Quote:
        '"Bury me above the clouds, all the way from here\n Take away the things I need, take away my fear\n Hide me in a hollow sound, happy ever more\n Everything I had to give, gave them long before."',
      index: 190,
    },
    {
      Author: " --Garbage",
      Quote:
        '"Crashing silent, broken down, falling into night\n Who gave up and who gave in, I\'ll go without a fight\n Cut me down or cut me dead, cut me in or out\n Kiss me blind time after time, take away my doubt."',
      index: 191,
    },
    {
      Author: " --Garbage",
      Quote:
        '"I bit my tongue and stood in line\n With not much to believe in\n I bought into what I was sold\n And ended up with nothing."',
      index: 192,
    },
    {
      Author: " --Garbage",
      Quote:
        "\"I only smile in the dark\n My only comfort is the night gone black\n I didn't accidentally tell you that\n I'm only happy when it rains.\"",
      index: 193,
    },
    {
      Author: " --Greg Webster",
      Quote:
        "\"A couple months ago I noticed that I hadn't really laughed for a\nlong time...  That's come back quite well, I'm enjoying more\nthings...  I'd say that I've almost completely recovered from the\npast few years, still cynical, but not really bitter.\"",
      index: 194,
    },
    {
      Author: " --Dante Alighieri",
      Quote:
        '"The hottest places in hell are reserved for those, who in times\nof great moral crisis, maintain their neutrality."',
      index: 195,
    },
    {
      Author: " --George Santayana",
      Quote:
        '"People are usually more firmly convinced that their opinions are\nprecious than that they are true."',
      index: 196,
    },
    {
      Author: " --Ayn Rand",
      Quote:
        '"I would step in the way of a bullet if it were aimed at my\nhusband.  It is not self-sacrifice to die protecting that which\nyou value:  If the value is great enough, you do not care to\nexist without it.  This applies to any alleged sacrifice for\nthose one loves."',
      index: 197,
    },
    {
      Author: "",
      Quote:
        '"Baseball breaks your heart.  It is designed to break your heart. \nThe game begins in the spring when everything else begins again,\nand it blossoms in the summer, filling the afternoons and\nevenings, and then as soon as the chill rains come, it stops and\nleaves you to face fall alone."',
      index: 198,
    },
    {
      Author: " --Jean Baudrillard",
      Quote:
        '"It is always the same:  once you are liberated, you are forced\nto ask who you are."',
      index: 199,
    },
    {
      Author: " --Kirby Puckett",
      Quote: '"Tomorrow isn\'t promised to any of us."',
      index: 200,
    },
    {
      Author: " --Greg Webster",
      Quote:
        "\"Happiness isn't a static thing; it's the quest for happiness\nthat allows us to think we're happy, while we continue to search\nfor more.\"",
      index: 201,
    },
    {
      Author: " --Judith Stone",
      Quote:
        "\"We can't all be Einstein (because we don't all play the violin). \nAt the very least, we need a sort of street-smart science:  the\nability to recognize evidence, gather it, assess it, and act on\nit.\"",
      index: 202,
    },
    {
      Author: " --Type O",
      Quote: '"Functionless art is simply tolerated vandalism."',
      index: 203,
    },
    {
      Author: " --Daniel Goldman",
      Quote:
        "\"That, of course, is the devil's bargain of addiction:  a short-\nterm good feeling in exchange for the steady meltdown of one's\nlife.\"",
      index: 204,
    },
    {
      Author: " --Jewel Kilcher",
      Quote: '"What we call human nature in actuality is human habit."',
      index: 205,
    },
    {
      Author: " --Jaymi Wiley",
      Quote: '"Change is the only thing that you can expect."',
      index: 206,
    },
    {
      Author: " --Ric Ocasek",
      Quote:
        "\"They're caught where there's no way out or where you can't see\nout.  What are you going to do about it?  I don't have the\nanswer.  If I did there would be no insane asylums.  But I see a\nlot of people, a lot of my friends in the same predicament.  Many\ntimes in my life, I was there myself.\"",
      index: 207,
    },
    {
      Author: " --Robert Fulghum",
      Quote:
        "\"Making a living and having a life are not the same thing. \nMaking a living and making a life that's worthwhile are not the\nsame thing.  Living the good life and living a good life are not\nthe same thing.  A job title doesn't even come close to answering\nthe question 'What do you do?'\"",
      index: 208,
    },
    {
      Author: " --Orson Scott",
      Quote:
        '"I have too many secrets.  For all these years I\'ve been a\nspeaker for the dead, uncovering secrets and helping people to\nlive in the light of truth.  Now I no longer tell anyone half of\nwhat I know, because if I told the whole truth there would be\nfear, hatred, brutality, murder, war."',
      index: 209,
    },
    {
      Author: " --Orson Scott",
      Quote:
        '"How clever of me.  I have found such a pathway into hell that I\ncan never get back out."',
      index: 210,
    },
    {
      Author: " --Professor Zen",
      Quote:
        "\"Remember, you can think for yourself, or just surrender your\nmind.  It's your call, but don't expect me to pay your bills if\nyou decide to surrender.\"",
      index: 211,
    },
    {
      Author: " --Dave Sim",
      Quote:
        '"I think the more rational explanation is that the excision of a\nfive-to-six-foot leech from the surface of a human body means\nthat that body is going to have more of its own blood in its own\nveins.  Unless the leech finds another body, it is going to go\nhungry."',
      index: 212,
    },
    {
      Author: " --Dave Sim",
      Quote:
        '"These are ideas.  I could say that they just came to me, but it\nwould be more accurate to say that I went to them.  Ideas -- and\nnew connections between ideas -- lead you away from commonly held\nperceptions of reality.  Ideas lead you out here.  Ideas lead you\ninto the darkness."',
      index: 213,
    },
    {
      Author: " --Dave Sim",
      Quote:
        "\"Once a profound truth has been seen, it cannot be 'unseen'. \nThere's no 'going back' to the person you were.  Even if such a\npossibility did exist... why would you want to?\"",
      index: 214,
    },
    {
      Author: " --Dave Sim",
      Quote:
        '"For the first time in your conscious memory; for the first time\nin fact, since your were a baby; a single tear, full and warm,\nrolled down your right cheek and you fell into a very deep and\nentirely dreamless slumber..."',
      index: 215,
    },
    {
      Author: " --Sydney Smith",
      Quote:
        '"A great deal of talent is lost to the world for want of a little\ncourage.  Every day sends to their graves obscure men whom\ntimidity prevented from making a first effort."',
      index: 216,
    },
    {
      Author: " --Cormac McCarthy",
      Quote:
        '"All courage is a form of constancy.  It is always himself that a\ncoward abandons first.  After this all other betrayals come."',
      index: 217,
    },
    {
      Author: " --Allan Bloom",
      Quote:
        '"Reason transformed into prejudice is the worst form of\nprejudice, because reason is the only instrument for liberation\nfrom prejudice."',
      index: 218,
    },
    {
      Author: " --Sebastien-Roch",
      Quote:
        '"People are governed with the head; kindness of heart is little\nuse in chess."',
      index: 219,
    },
    {
      Author: " --Oscar Wilde",
      Quote:
        '"I can stand brute force, but brute reason is quite unbearable.\nThere is something unfair about its use. It is hitting below the\nintellect."',
      index: 220,
    },
    {
      Author: " --Aldous Huxley",
      Quote:
        "\"I'm thinking of a queer feeling I sometimes get, a feeling that\nI've got something important to say and the power to say it --\nonly I don't know what it is, and I can't make any use of the\npower.\"",
      index: 221,
    },
    {
      Author: "",
      Quote:
        '"[They] like to pretend they live in a universe where there are\nno facts, everything is a matter of opinion, and all opinions are\nequally valid.  And, of course, they do live in just such a\nuniverse.  Unfortunately, it exists entirely inside their own\npoorly-stocked minds."',
      index: 222,
    },
    {
      Author: " --Bernice Johnson",
      Quote:
        '"Welcome to prekindergarten!  You will not die if you discover\nthat there are more lines out there than just your own.  In fact,\nyou\'ll discover that you will have an advantage if you know more\nof them!"',
      index: 223,
    },
    {
      Author: " --Aldous Huxley",
      Quote:
        '"Chronic remorse, as all the moralists are agreed, is a most\nundesirable sentiment.  If you have behaved badly, repent, make\nwhat amends you can and address yourself to the task of behaving\nbetter next time.  On no account brood over your wrongdoing. \nRolling in the muck is not the best way of getting clean."',
      index: 224,
    },
    {
      Author: " --William Blake",
      Quote:
        '"When I tell any truth it is not for the sake of convincing those\nwho do not know it, but for the sake of defending those who do."',
      index: 225,
    },
    {
      Author: " --Jean Cocteau",
      Quote:
        '"There are truths which one can only say after having won the\nright to say them."',
      index: 226,
    },
    {
      Author: " --Gabriel Heatter",
      Quote:
        '"Mere longevity is a good thing for those who watch life from the\nsidelines.  For those who play the game, an hour may be a year, a\nsingle day\'s work, an achievement for eternity."',
      index: 227,
    },
    {
      Author: " --William Blake",
      Quote:
        '"To see a world in a grain of sand\n And a heaven in a wild flower,\n Hold infinity in the palm of your hand\n And eternity in an hour."',
      index: 228,
    },
    {
      Author: " --Bono",
      Quote: '"Mock the devil, and he will flee from thee."',
      index: 229,
    },
    {
      Author: " --Francesco Pfauth",
      Quote:
        '"If you follow me, I may lead you straight to hell, but if you\ntrust me, I will lead you back out again."',
      index: 230,
    },
    {
      Author: " --Jan L",
      Quote: '"No one beneath you can offend you.  No one your equal would."',
      index: 231,
    },
    {
      Author: " --Alexander Jablokov",
      Quote:
        '"The road to truth is long, and lined the entire way with\nannoying bastards."',
      index: 232,
    },
    {
      Author: " --Trooper",
      Quote:
        "\"We're here for a good time, not a long time\n So have a good time, the sun can't rise everyday.\"",
      index: 233,
    },
    {
      Author: " --George Santayana",
      Quote: '"Knowledge of what is possible is the beginning of happiness."',
      index: 234,
    },
    {
      Author: " --Philip Wylie",
      Quote: '"Ignorance is not bliss -- it is oblivion."',
      index: 235,
    },
    {
      Author: " --Victor Hugo",
      Quote: '"An intelligent hell would be better than a stupid paradise."',
      index: 236,
    },
    {
      Author: " --William James",
      Quote:
        '"Be not afraid of life.  Believe that life is worth living, and\nyour belief will help you create the fact."',
      index: 237,
    },
    {
      Author: " --Sinead O",
      Quote:
        '"Maybe it was mean, but I really don\'t think so.\n You asked for the truth and I told you."',
      index: 238,
    },
    {
      Author: " --from Perfect",
      Quote:
        "\"What a wonderful day we've had.  You have learned something and,\nI have learned something.  Too bad we didn't learn it sooner.  We\ncould have gone to the movies instead.\"",
      index: 239,
    },
    {
      Author: " --Madman Murdoch",
      Quote: '"Minds are for people who think."',
      index: 240,
    },
    {
      Author: " --Ayn Rand",
      Quote:
        "\"Many words have been granted me, and some are wise and some are\nfalse, but only three are holy:  'I will it!'\"",
      index: 241,
    },
    {
      Author: " --Ayn Rand",
      Quote:
        '"I know not if this earth on which I stand is the core of the\nuniverse or if it is but a speck of dust lost in eternity.  I\nknow not and I care not.  For I know what happiness is possible\nto me on earth.  And my happiness is not the means to any end. \nIt is the end.  It is its own goal.  It is its own purpose."',
      index: 242,
    },
    {
      Author: " --Ayn Rand",
      Quote:
        '"Neither am I the means to any end others may wish to accomplish. \nI am not a tool for their use.  I am not a servant of their\nneeds.  I am not a bandage for their wounds.  I am not a\nsacrifice on their altars."',
      index: 243,
    },
    {
      Author: " --Elliot Easton",
      Quote:
        "\"I think one thing we went through was common to a lot of people: \nYou work your whole life to achieve something, then you achieve\nit and find out that you still have good days and bad days.  So\nyou start thinking, 'Is that all there is?'  After a while you\ncalm down and get back to work.\"",
      index: 244,
    },
    {
      Author: " --Martin Luther",
      Quote:
        "\"If a man hasn't discovered something that he will die for, he\nisn't fit to live.\"",
      index: 245,
    },
    {
      Author: " --Alan Lightman",
      Quote:
        '"Who would fare better in this world of fitful time?  Those who\nhave seen the future and live only one life?  Or those who have\nnot seen the future and wait to live life?  Or those who deny the\nfuture and live two lives?"',
      index: 246,
    },
    {
      Author: " --Richard Bach",
      Quote:
        '"The mark of your ignorance is the depth of your belief in\ninjustice and tragedy."',
      index: 247,
    },
    {
      Author: " --Richard Bach",
      Quote:
        '"The bond that links your true family is not one of blood, but of\nrespect and joy in each other\'s life.  Rarely do members of one\nfamily grow up under the same roof."',
      index: 248,
    },
    {
      Author: " --Jayne Loader",
      Quote:
        "\"We believed -- and I personally still believe -- that the so\ncalled Voice of God narration, ubiquitous in documentaries\ndestined for PBS, is insulting to the audience.  If you believe\nin the intelligence of your audience, you don't need to tell them\nwhat to think and how to process the material they're seeing.\"",
      index: 249,
    },
    {
      Author: " --Lord Byron",
      Quote:
        '"I was accused of every monstrous vice by public rumour and\nprivate rancour; my name, which had been a knightly or noble one,\nwas tainted.  I felt that, if what was whispered, and muttered,\nand murmured, was true, I was unfit for England; if false,\nEngland was unfit for me."',
      index: 250,
    },
    {
      Author: " --Shannon Wheeler",
      Quote:
        '"You sit around watching all this stuff happen on TV... and the\nTV sits and watches us do nothing!  The TV must think we\'re all\npretty lame."',
      index: 251,
    },
    {
      Author: " --Lord Byron",
      Quote:
        '"I can never get people to understand that poetry is the\nexpression of excited passion, and that there is no such thing as\na life of passion any more than a continuous earthquake, or and\neternal fever.  Besides, who would ever shave themselves in such\na state?"',
      index: 252,
    },
    {
      Author: " --Lady Blessington",
      Quote:
        '"[His mind] was like a volcano, full of fire and wealth,\nsometimes calm, often dazzling and playful, but ever threatening. \nIt ran swift as the lightning from one subject to another, and\noccasionally burst forth in passionate throes of intellect,\nnearly allied to madness."',
      index: 253,
    },
    {
      Author: " --Edgar Allan",
      Quote:
        '"They who dream by day are cognizant of many things which escape\nthose who dream only by night.  In their grey visions they obtain\nglimpses of eternity..."',
      index: 254,
    },
    {
      Author: " --Randall Jarrell",
      Quote:
        '"I see at last that all the knowledge\n I wrung from the darkness -- that darkness flung me --\n Is worthless as ignorance:  nothing comes from nothing\n The darkness from the darkness.  Pain comes from the darkness\n And we call it wisdom.  It is pain."',
      index: 255,
    },
    {
      Author: "",
      Quote: '"Is getting well ever an art, or art a way to get well?"',
      index: 256,
    },
    {
      Author: " --Graham Greene",
      Quote:
        '"Writing is a form of therapy.  Sometimes I wonder how all those\nwho do not write, compose or paint can manage to escape the\nmadness, the melancholia, the panic fear which is inherent in the\nhuman situation."',
      index: 257,
    },
    {
      Author: " --Lord Byron",
      Quote:
        "\"... You don't like my 'restless' doctrines -- I should be very\nsorry if you did -- but I can't stagnate nevertheless -- if I\nmust said let it be on the ocean no matter how stormy -- anything\nbut a dull cruise on a level lake without ever losing sight of\nthe same insipid shores by which it is surrounded.\"",
      index: 258,
    },
    {
      Author: " --Peter Steele",
      Quote:
        '"I had hit a critical period in my life, where I changed very\nmuch as a person.  I consider the person I used to be, dead, and\nI\'m glad that he is.  Insecure, frightened, confused, much like a\nlot of people I know today."',
      index: 259,
    },
    {
      Author: " --Andrew Juric",
      Quote:
        '"Opinion is a denial of truth.  For if each man is entitled to\nhis own opinion then there can be nothing which is false,\nconsequently there can be nothing which is true."',
      index: 260,
    },
    {
      Author: " --Archibald MacLeish",
      Quote:
        '"The dissenter is every human being at those moments of his life\nwhen he resigns momentarily from the herd and thinks for\nhimself."',
      index: 261,
    },
    {
      Author: " --Ayn Rand",
      Quote:
        "\"It's not that I don't suffer, it's that I know the unimportance\nof suffering, I know that pain is to be fought and thrown aside,\nnot to be accepted as part of one's soul and as a permanent scar\nacross one's view of existence.  Don't feel sorry for me.  It was\ngone right then.\"",
      index: 262,
    },
    {
      Author: " --Ayn Rand",
      Quote:
        "\"Whenever anyone accuses some person of being 'unfeeling,' he\nmeans that that person is just.  He means that that person has no\ncauseless emotions and will not grant him a feeling which he does\nnot deserve.  He means that 'to feel' is to go against reason,\nagainst moral values, against reality.\"",
      index: 263,
    },
    {
      Author: " --Ayn Rand",
      Quote:
        '"My pride and my power of vision were all that I owned when I\nstarted -- and whatever I achieved, was achieved by means of\nthem.  Both are greater now.  Now I have the knowledge of the\nsuperlative value I had missed:  of my right to be proud of my\nvision.  The rest is mine to reach."',
      index: 264,
    },
    { Author: " --from S", Quote: '"Everything matters!"', index: 265 },
    {
      Author: " --Ayn Rand",
      Quote:
        '"Don\'t consider our interests or desires.  You have no duty to\nanyone but yourself."',
      index: 266,
    },
    {
      Author: " --Ayn Rand",
      Quote:
        "\"Don't rely on our knowledge of what's best for your future.  We\ndo know, but it can't be best until you know it.\"",
      index: 267,
    },
    {
      Author: " --Ayn Rand",
      Quote:
        '"Consider the reasons which make us certain that we are right,\nbut not the fact that we are certain.  If you are not convinced,\nignore our certainty.  Don\'t be tempted to substitute our\njudgement for your own."',
      index: 268,
    },
    {
      Author: " --Ayn Rand",
      Quote:
        '"If any part of your uncertainty, is a conflict between your\nheart and your mind -- follow your mind."',
      index: 269,
    },
    {
      Author: " --Ayn Rand",
      Quote:
        '"Every man builds his world in his own image.  He has the power\nto choose, but no power to escape the necessity of choice.  If he\nabdicates his power, he abdicates the status of man, and the\ngrinding chaos of the irrational is what he achieves as his\nsphere of existence -- by his own choice."',
      index: 270,
    },
    {
      Author: " --Paul Gardner",
      Quote:
        '"A painting is never finished -- it simply stops in interesting\nplaces."',
      index: 271,
    },
    {
      Author: " --Julia Cameron",
      Quote:
        '"Growth is a spiral process, doubling back on itself, reassessing\nand regrouping."',
      index: 272,
    },
    {
      Author: " --Andr",
      Quote:
        '"One does not discover new lands without consenting to lose sight\nof the shore for a very long time."',
      index: 273,
    },
    {
      Author: " --Julia Cameron",
      Quote:
        "\"The clock is ticking and you're hearing the beat.  You stop by a\nmuseum shop, sign your name on a scuba-diving sheet, and commit\nyourself to Saturday mornings in the deep end.  You're either\nlosing your mind -- or gaining your soul.  Life is meant to be an\nartist date.  That's why we were created.\"",
      index: 274,
    },
    {
      Author: " --Ayn Rand",
      Quote:
        '"John Galt is Prometheus who changed his mind.  After centuries\nof being torn by vultures in payment for having brought to men\nthe fire of the gods, he broke his chains and he withdrew his\nfire -- until the day when men withdraw their vultures."',
      index: 275,
    },
    {
      Author: " --Roger Bannister",
      Quote:
        '"No longer conscious of my movement, I discovered a new unity\nwith nature.  I had found a new source of power and beauty, a\nsource I never dreamt existed."',
      index: 276,
    },
    {
      Author: " --EugŐne",
      Quote:
        '"What moves men of genius, or rather what inspires their work, is\nnot new ideas, but their obsession with the idea that what has\nalready been said is still not enough."',
      index: 277,
    },
    {
      Author: "",
      Quote:
        '"It\'s a funny thing about life; if you refuse to accept anything\nbut the best, you very often get it."',
      index: 278,
    },
    {
      Author: " --Lao-tzu",
      Quote:
        '"He who knows others is wise; he who knows himself is\nenlightened."',
      index: 279,
    },
    {
      Author: " --Edgar Degas",
      Quote:
        '"Only when he no longer knows what he is doing does the painter\ndo good things."',
      index: 280,
    },
    {
      Author: " --Adrienne Rich",
      Quote:
        '"The unconscious wants truth.  It ceases to speak to those who\nwant something else more than truth."',
      index: 281,
    },
    {
      Author: " --Meister Eckhart",
      Quote:
        '"Truly, it is in the darkness that one finds the light, so when\nwe are in sorrow, then this light is nearest of all to us."',
      index: 282,
    },
    {
      Author: " --Jalal ud",
      Quote: '"Sell your cleverness and buy bewilderment."',
      index: 283,
    },
    {
      Author: " --Cesar Chavez",
      Quote:
        '"When we are really honest with ourselves we must admit our lives\nare all that really belong to us.  So it is how we use our lives\nthat determines the kind of men we are."',
      index: 284,
    },
    {
      Author: " --Albert Einstein",
      Quote: '"In the middle of difficulty lies opportunity."',
      index: 285,
    },
    {
      Author: " --Ayn Rand",
      Quote:
        '"Who was it that said he needed a fulcrum?  Give me an\nunobstructed right-of-way and I\'ll show them how to move the\nearth!"',
      index: 286,
    },
    {
      Author: " --Ayn Rand",
      Quote:
        "\"The men of the press, who despised their own profession, did not\nknow why they were enjoying it today.  One of them, a young man\nwith years of notorious success behind him and a cynical look of\ntwice his age, said suddenly, 'I know what I'd like to be:  I\nwish I could be a man who covers news!'\"",
      index: 287,
    },
    {
      Author: " --Agnes de",
      Quote:
        '"No trumpets sound when the important decisions of our life are\nmade.  Destiny is made known silently."',
      index: 288,
    },
    {
      Author: " --Jean-Jacques",
      Quote:
        '"The world of reality has its limits; the world of imagination is\nboundless."',
      index: 289,
    },
    {
      Author: " --Frances Wickes",
      Quote:
        '"To the rationally minded the mental processes of the intuitive\nappear to work backwards."',
      index: 290,
    },
    {
      Author: " --Fyodor Dostoyevski",
      Quote:
        '"Taking a new step, uttering a new word is what people fear\nmost."',
      index: 291,
    },
    {
      Author: " --Julian Barton",
      Quote:
        "\"The problem with keeping up with the Jones' is that it creates a\nworld full of Jones'.\"",
      index: 292,
    },
    {
      Author: " --Cal Ripken",
      Quote:
        "\"... whether your name is Gehrig, or Ripken, DiMaggio, or\nRobinson, or that of some youngster who picks up his bat or puts\non his glove, you are challenged by the game of baseball to do\nyour very best, day in and day out, and that's all I've ever\ntried to do.\"",
      index: 293,
    },
    {
      Author: " --Claudia Black",
      Quote:
        '"Trust in yourself.  Your perceptions are often far more accurate\nthan you are willing to believe."',
      index: 294,
    },
    {
      Author: " --Les Brown",
      Quote:
        '"Shoot for the moon.  Even if you miss it you will land among the\nstars."',
      index: 295,
    },
    {
      Author: " --Agnes de",
      Quote:
        '"Living is a form of not being sure, not knowing what next or\nhow.  The moment you know how, you begin to die a little.  The\nartist never entirely knows.  We guess.  We may be wrong, but we\ntake leap after leap in the dark."',
      index: 296,
    },
    {
      Author: " --from Red",
      Quote:
        "\"So let me get this straight.  You want to fly on a magic carpet\nto see the King of the Potato People and plead with him for your\nfreedom, and you're telling me you're completely sane?\"",
      index: 297,
    },
    {
      Author: " --Julia Cameron",
      Quote:
        '"Perfectionism is not a quest for the best.  It is a pursuit of\nthe worst in ourselves, the part that tells us that nothing we do\nwill ever be good enough -- that we should try harder."',
      index: 298,
    },
    {
      Author: " --Ursula K",
      Quote:
        '"Happiness is based on a just discrimination of what is\nnecessary, what is neither necessary nor destructive, and what is\ndestructive.  In the middle category, however -- that of the\nunnecessary but undestructive, that of comfort, luxury,\nexuberance, etc."',
      index: 299,
    },
    {
      Author: " --Julia Cameron",
      Quote: '"Leap, and the net will appear."',
      index: 300,
    },
    {
      Author: " --Paul Hawken",
      Quote:
        '"Always leave enough time in your life to do something that makes\nyou happy, satisfied, even joyous.  That has more of an effect on\neconomic well-being than any other single factor."',
      index: 301,
    },
    {
      Author: " --Margaret Young",
      Quote:
        '"Often people attempt to live their lives backwards:  they try to\nhave more things, or more money, in order to do more of what they\nwant so that they will be happier.  The way it actually works is\nthe reverse.  You must first be who you really are, then, do what\nyou need to do, in order to have what you want."',
      index: 302,
    },
    {
      Author: " --Seneca",
      Quote:
        '"It is not because things are difficult that we do not dare; it\nis because we do not dare that they are difficult."',
      index: 303,
    },
    {
      Author: " --Piero Ferrucci",
      Quote:
        '"Eliminate something superfluous from your life.  Break a habit. \nDo something that makes you feel insecure."',
      index: 304,
    },
    {
      Author: " --William Baziotes",
      Quote:
        '"Each painting has its own way of evolving... When the painting\nis finished, the subject reveals itself."',
      index: 305,
    },
    {
      Author: " --Erica Jong",
      Quote:
        '"Take your life in your own hands and what happens?  A terrible\nthing:  no one to blame."',
      index: 306,
    },
    {
      Author: " --Louise Nevelson",
      Quote:
        '"I have made my world and it is a much better world than I ever\nsaw outside."',
      index: 307,
    },
    {
      Author: " --Shakti Gawain",
      Quote:
        '"We will discover the nature of our particular genius when we\nstop trying to conform to our own or to other people\'s models,\nlearn to be ourselves, and allow our natural channel to open."',
      index: 308,
    },
    {
      Author: " --Albert Szent",
      Quote: '"A discovery is said to be an accident meeting a prepared mind."',
      index: 309,
    },
    {
      Author: " --Shakti Gawain",
      Quote: '"The universe will reward you for taking risks on its behalf."',
      index: 310,
    },
    {
      Author: " --Elisabeth K",
      Quote:
        '"Learn to get in touch with the silence within yourself and know\nthat everything in this life has a purpose."',
      index: 311,
    },
    {
      Author: " --Doris Lessing",
      Quote:
        '"All sanity depends on this:  that it should be a delight to feel\nheat strike the skin, a delight to stand upright, knowing the\nbones are moving easily under the flesh."',
      index: 312,
    },
    {
      Author: " --The Talmud",
      Quote:
        "\"Every blade of grass has its angel that bends over it and\nwhispers, 'grow, grow.'\"",
      index: 313,
    },
    {
      Author: "",
      Quote:
        '"I am often mad, but I would hate to be nothing but mad: and I\nthink I would lose what little value I may have as a writer if I\nwere to refuse, as a matter of principle, to accept the warming\nrays of the sun, and to report them, whenever, and if ever, they\nhappen to strike me."',
      index: 314,
    },
    {
      Author: " --Mickey Rivers",
      Quote:
        "\"I don't get upset over things I can control, because if I can\ncontrol them there's no sense in getting upset.  And I don't get\nupset over things I can't control, because if I can't control\nthem there's no sense in getting upset.\"",
      index: 315,
    },
    {
      Author: " --Peter Steele",
      Quote:
        '"Whether left or right, when views get that extreme then they\nbecome warped and open to the sickness of the person holding\nthem."',
      index: 316,
    },
    {
      Author: " --Dave Sim",
      Quote:
        "\"I know what you're going to say!  'They are men, and men should\nbe free.'  A free man is dangerous to himself and everyone else. \nFreedom should be left to those who can put it to good use...\"",
      index: 317,
    },
    {
      Author: " --from Homicide",
      Quote:
        "\"You just gotta keep going on.  Get up, and do your job.  Go to\nwork, get through each day, one day at a time, like that.  And\nyou hope that one day, you'll get up and it'll hurt a little\nless.  You just gotta just get through it.  You just go on.  It's\nthat simple.\"",
      index: 318,
    },
    {
      Author: " --from The",
      Quote:
        '"All I want is to be back where things make sense.  Where I won\'t\nhave to be afraid all the time.  Only one thing stops me.  A\npromise I made..."',
      index: 319,
    },
    {
      Author: " --from The",
      Quote:
        '"I\'ve had some long nights in the stir.  Alone in the dark, with\nnothing but your thoughts, time can draw out like a blade.  That\nwas the longest night of my life."',
      index: 320,
    },
    {
      Author: " --from The",
      Quote:
        "\"It floats around, it's got to land on somebody.  It was my turn,\nthat's all.  I was in the path of the tornado.  I didn't expect\nthe storm would last as long as it has.\"",
      index: 321,
    },
    {
      Author: " --Dave Sim",
      Quote:
        '"Gone is the blinding glow in his hands -- gone, too, is the\nillusion of purity and beauty!  In it\'s place all that remains is\nmind-numbing, spine-chilling reality!"',
      index: 322,
    },
    {
      Author: " --from Ferris",
      Quote:
        '"Life moves pretty fast, if you don\'t stop and look around once\nin a while, you could miss it."',
      index: 323,
    },
    {
      Author: " --Voltaire",
      Quote:
        '"I may not agree with what you say, but I will defend to the\ndeath, your right to say it."',
      index: 324,
    },
    {
      Author: " --William Shakespeare",
      Quote:
        '"All the world\'s a stage, and the men and women merely players. \nThey have their exits and their entrances, and one man in his\ntime plays many parts."',
      index: 325,
    },
    {
      Author: " --John F",
      Quote: '"Forgive you enemies, but never forget their names."',
      index: 326,
    },
    {
      Author: "",
      Quote: '"Only those who attempt the absurd can achieve the impossible."',
      index: 327,
    },
    {
      Author: " --Umberto Eco",
      Quote: '"The truth is an anagram of an anagram."',
      index: 328,
    },
    {
      Author: " --from The",
      Quote:
        '"Floating, falling, sweet intoxication\n Touch me, trust me, savour each sensation.\n Let the dream begin, let you darker side give in."',
      index: 329,
    },
    {
      Author: "",
      Quote:
        '"It may be that your sole purpose in life is simply to serve as a\nwarning to others."',
      index: 330,
    },
    {
      Author: " --Sharda Tarachandra",
      Quote:
        '"Writing will be your companion through the darkest and brightest\ndays of your life -- if that is what you want.  It exposes pain\nand guilt and the greatest joy.  It is your own assessment of who\nyou are.  You should write as much as you can and as much as you\nwant to.  It will be something to turn to."',
      index: 331,
    },
    {
      Author: " --Robert Louis",
      Quote:
        '"You can never run away from a weakness.  You must sometime fight\nit or perish, and if that be so, why not now, and where you\nstand?"',
      index: 332,
    },
    {
      Author: " --Orson Scott",
      Quote:
        "\"Well, I'm your man.  I'm the bloody bastard you wanted when you\nhad me spawned.  I'm your tool, and what difference does it make\nif I hate the part of me that you most need?  What difference\ndoes it make that when the little serpents killed me in the game,\nI agreed with them, and was glad.\"",
      index: 333,
    },
    {
      Author: " --Orson Scott",
      Quote:
        "\"I'll put it bluntly.  Human beings are free except when humanity\nneeds them.  Maybe humanity needs you.  To do something.  Maybe\nhumanity needs me -- to find out what you're good for.  We might\nboth do despicable things, but if humankind survives, then we\nwere good tools.\"",
      index: 334,
    },
    {
      Author: " --Orson Scott",
      Quote:
        '"... All these readers have placed themselves inside this story,\nnot as spectators, but as participants, and so have looked at the\nworld, not with my eyes only, but also with their own."',
      index: 335,
    },
    {
      Author: " --Morrissey",
      Quote:
        "\"Singers attract fans with aspects to their own personality. \nPeople feel I'm passionate and obsessive.  They know this isn't a\nprofession for me, it's a vocation.  It's not an egotistical\nthing, but something else.  I'm in a dialogue with my audience,\nand that's something I need.\"",
      index: 336,
    },
    {
      Author: " --from Law",
      Quote:
        '"Passivity is the culprit.  Think of yourself as the victim, you\nbecome the victim."',
      index: 337,
    },
    {
      Author: " --Lisa Neve",
      Quote:
        "\"I don't want to hope anymore, I almost died from this in the\nfirst place, and I don't want to get that down again.\"",
      index: 338,
    },
    {
      Author: " --Jill Sobule",
      Quote:
        '"And we laughed, at the world.\n They can have their diamonds,\n And we\'ll have our pearls."',
      index: 339,
    },
    {
      Author: " --from Terminator",
      Quote: '"In an insane world, it was the sanest choice."',
      index: 340,
    },
    {
      Author: " --Richard Marcinko",
      Quote:
        '"For the past weeks I\'d been reacting.  That was no way to win. \nTo win, you take the initiative.  You instigate the action.  You\nmake the opponent react to you."',
      index: 341,
    },
    {
      Author: " --from The",
      Quote:
        "\"Your politics are your's.  You've never thrown in.  The minute\nyou do that, their doctrines become your's.  You can be held\nresponsible.\"",
      index: 342,
    },
    {
      Author: " --from E",
      Quote:
        '"I just want to be happy, and I\'m so afraid that I never will\nbe."',
      index: 343,
    },
    {
      Author: " --James Baldwin",
      Quote:
        '"Not everything that is faced can be changed; but nothing can be\nchanged until it is faced."',
      index: 344,
    },
    {
      Author: " --Margaret Mead",
      Quote:
        '"Never doubt that a small group of thoughtful citizens can change\nthe world.  Indeed, it is the only thing that ever has."',
      index: 345,
    },
    {
      Author: " --Mohandas Gandhi",
      Quote: '"You must be the change you wish to see in the world."',
      index: 346,
    },
    {
      Author: " --Donald DeMarco",
      Quote:
        '"Science is a body of truths which offers clear and certain\nknowledge about the real world and is therefore superior to\ntradition, philosophy, religion, dogma, and superstition which\noffer shadowy knowledge about an ideal world."',
      index: 347,
    },
    {
      Author: " --from Back",
      Quote:
        '"You know what it is that makes a leader?  Sacrifice.  Sacrifice\nyourself and men will follow you anywhere."',
      index: 348,
    },
    {
      Author: " --Grant Morrison",
      Quote:
        '"Why did you make it so hard for me?  I\'d rather empty the ocean\nwith a sieve.  I do it for you.  Or count the grains of sand on\nevery beach.  All for you.  There are so many people, so many\ncountries.  But I have time.  All the time in the world. \nEternity."',
      index: 349,
    },
    {
      Author: " --Grant Morrison",
      Quote:
        "\"And when it's all done, when there's no one left you'll come\nback for me.  And tell me who I am and why I have to do what I\ndo.  And explain 'Eternity.'  You'll come back.\"",
      index: 350,
    },
    {
      Author: " --Grant Morrison",
      Quote:
        '"Why am I in Hell?  It hurts.  It hurts all the time.  Why am I\nin Hell?  I just want to go home and lie on the bed the way I\nused to.  Please take me home."',
      index: 351,
    },
    {
      Author: " --Kate Sawford",
      Quote:
        "\"Days of my life I'd like to forget:  The day the doctors told me\nI was sick.  The day I had to tell my friends I was ill.  The day\nmy hair fell out.  The first day after my surgery.  They're also\nthe days I'll always remember.\"",
      index: 352,
    },
    {
      Author: " --Thomas Merton",
      Quote:
        '"Do not look for rest in any pleasure, because you were not\ncreated for pleasure:  you were created for Joy.  And if you do\nnot know the difference between pleasure and joy you have not yet\nbegun to live."',
      index: 353,
    },
    {
      Author: " --Woody Allen",
      Quote:
        '"More than any other time in history, humanity faces a\ncrossroads.  One path leads to despair and utter hopelessness. \nThe other, to total extinction.  Let us pray we have the wisdom\nto choose correctly."',
      index: 354,
    },
    {
      Author: " --Sanjay Singh",
      Quote:
        "\"People are brave enough to spit into an open wound, the problem\nis that they're so afraid, that they'll only do it after the\nbeast is dead.\"",
      index: 355,
    },
    {
      Author: " --James J",
      Quote: '"Keep staring at the stars and someday they will collapse."',
      index: 356,
    },
    {
      Author: " --from The",
      Quote: '"I was born to fight your brand of order!"',
      index: 357,
    },
    {
      Author: " --from The",
      Quote:
        '"You actually care about those creatures, you\'re just as crazy as\nthey are."',
      index: 358,
    },
    {
      Author: " --from The",
      Quote:
        '"I\'ve seen how you treat your prisoners.  Forgotten and scared\nwithout hope or compassion."',
      index: 359,
    },
    {
      Author: " --from The",
      Quote:
        "\"The morning sun rises to greet him, and in its low, warm light\nhe stands like some sort of pagan god, or deposed tyrant, staring\nout over the city he's sworn to... stare out over.  And it's\nevident, just by looking at him that he's got some pretty heavy\nthings on his mind.\"",
      index: 360,
    },
    {
      Author: " --Lemuel K",
      Quote: '"We cannot go ahead without leaving something behind."',
      index: 361,
    },
    {
      Author: " --Lemuel K",
      Quote: '"It is harder to live when those we love are dead."',
      index: 362,
    },
    {
      Author: " --Lemuel K",
      Quote:
        '"There is no sadder grief than that which lies at the bottom of a\nlife that has been wrecked through deception."',
      index: 363,
    },
    {
      Author: " --Lemuel K",
      Quote:
        '"Have a good time, make life cheerful and bright, dance if you\nwant to, sing if you can, play as long as you live and leave the\nworld with a smile."',
      index: 364,
    },
    {
      Author: " --Lemuel K",
      Quote:
        '"To correct in ourselves what we condemn in others would remove\nmost of the evils of life."',
      index: 365,
    },
    {
      Author: " --Lemuel K",
      Quote:
        '"History shows that there is nothing so easy to enslave and\nnothing so hard to emancipate as ignorance, hence it becomes the\ndouble enemy of civilization.  By its servility it is the prey of\ntyranny, and by its credulity it is the foe of enlightenment."',
      index: 366,
    },
    {
      Author: " --Lemuel K",
      Quote:
        '"The statue of liberty that will endure on this continent is not\nthe one made of granite or bronze, but the one made of love of\nfreedom."',
      index: 367,
    },
    {
      Author: " --Melissa Etheridge",
      Quote:
        "\"Go on and close your eyes, go on imagine me there\n She's got similar features with longer hair\n And if that's what it takes to get you through\n Go on and close your eyes it shouldn't bother you.\"",
      index: 368,
    },
    {
      Author: " --from Forever",
      Quote:
        "\"It's very hard to let someone in when you've caused so much\npain.  To risk the emotion.\"",
      index: 369,
    },
    {
      Author: " --Neil Gaiman",
      Quote:
        '"You see with your eyes.  This means you can be misled by charm,\nby outward appearance.  By webs of glamour, by surface pretences. \nI do not see with my eyes.  I see good and I see evil.  Nothing\nelse."',
      index: 370,
    },
    {
      Author: " --Neil Gaiman",
      Quote:
        '"I do not permit affection, or lack thereof, to influence my\nactions.  There is good, and there is evil.  The good must be\nprotected; the evil eradicated.  I have shown you the triumph of\nevil, as a caution."',
      index: 371,
    },
    {
      Author: " --Neil Gaiman",
      Quote:
        "\"There aren't any good guys, and there aren't any bad guys. \nThere's just us.  People.  Doing our best to get by.\"",
      index: 372,
    },
    {
      Author: " --Neil Gaiman",
      Quote:
        '"People kill what they fear.  They burned, and drowned, and\nhanged those they saw as witches, the devil\'s servants:  the wise\nwomen and the cunning men, the unfortunate, the lost and the\nstrange."',
      index: 373,
    },
    {
      Author: " --The Beatles",
      Quote:
        "\"Living is easy with eyes closed\n Misunderstand all you see\n It's getting hard to be someone but it all works out\n It doesn't matter much to me.\"",
      index: 374,
    },
    {
      Author: " --Greta",
      Quote:
        "\"Pain.  I started cuttings on myself when I was quite young.  The\nbacks of my arms.  I did it with a knife.  I didn't learn it from\nanyone. It was the way I knew I was alive and human.  At the time\nI hadn't developed enough to understand why I was doing it.\"",
      index: 375,
    },
    {
      Author: " --Greta",
      Quote:
        "\"There were times in my life when I couldn't feel anything any\nmore.  Everything became too much.  I felt numb all the time.  I\ncouldn't feel happy or sad.\"",
      index: 376,
    },
    {
      Author: " --Peter Steele",
      Quote:
        "\"Girls ask to suck my blood.  They aren't too shy about asking\nme.  I can easily show you scars all over me where I've taken\nrazor blades and opened myself up and let them stick their\ntongues into me.\"",
      index: 377,
    },
    {
      Author: " --Peter Steele",
      Quote:
        "\"I think I'm a blue-collar worker from Brooklyn.  This thing just\nfell into my lap and it is an opportunity to escape urban blight. \nI'm a social retard, and I have a hard time dealing with people. \nI don't like crowds, I don't like noise, I don't like people, I\ndon't like being questioned.  I just want to be left alone.\"",
      index: 378,
    },
    {
      Author: " --Scott",
      Quote:
        '"To start blindly with a statement is a sign of arrogance and\nnarrow-mindedness, and will lead to conflict.  To start blindly\nwith a question is a sign of uncertainty and honesty, and will\nlead to wisdom.","Jesus"',
      index: 379,
    },
    {
      Author: " --Dirk John",
      Quote:
        '"You\'ve seen [angst] (you know you have) late at night, in a\nmirror.  It has deep, hollow eyes -- too exhausted to close --\nand looks like someone you thought you knew."',
      index: 380,
    },
    {
      Author: " --Oscar Wilde",
      Quote:
        '"Education is an admirable thing, but it is well to remember from\ntime to time that nothing that is worth knowing can be taught."',
      index: 381,
    },
    {
      Author: " --Felix E",
      Quote:
        '"True education makes for inequality; the inequality of\nindividuality, the inequality of success, the glorious inequality\nof talent, of genius; for inequality, not mediocrity, individual\nsuperiority, not standardization, is the measure of the progress\nof the world."',
      index: 382,
    },
    {
      Author: "",
      Quote:
        '"Spoon feeding in the long run teaches us nothing but the shape\nof the spoon."',
      index: 383,
    },
    {
      Author: " --James Baldwin",
      Quote:
        '"The paradox of education is precisely this -- that as one begins\nto become conscious one begins to examine the society in which he\nis being educated."',
      index: 384,
    },
    {
      Author: " --James Baldwin",
      Quote:
        '"It is very nearly impossible... to become an educated person in\na country so distrustful of the independent mind."',
      index: 385,
    },
    {
      Author: " --Henry Miller",
      Quote:
        '"The real leader has no need to lead -- he is content to point\nthe way."',
      index: 386,
    },
    {
      Author: " --Adolf Hitler",
      Quote:
        '"The art of leadership... consists in consolidating the attention\nof the people against a single adversary and taking care that\nnothing will split up that attention... The leader of genius must\nhave the ability to make different opponents appear as if they\nbelonged to one category."',
      index: 387,
    },
    {
      Author: " --from The",
      Quote:
        "\"Fear, it's the oldest tool of power.  If you're distracted by\nfear of those around you, it keeps you from seeing the actions of\nthose above.\"",
      index: 388,
    },
    {
      Author: " --Tom Waits",
      Quote:
        '"There was thunder\n There was lightning\n Then the stars went out\n And the moon fell from the sky..."',
      index: 389,
    },
    {
      Author: " --Sanjay Singh",
      Quote:
        '"I\'m just hoping that one day the sheep will realize that the\nshepherd is really a wolf in disguise."',
      index: 390,
    },
    {
      Author: " --from Wraith",
      Quote: '"The world is his canvas, and he wants to take up sculpting."',
      index: 391,
    },
    {
      Author: " --from Wraith",
      Quote:
        '"You are inspired.  Anything you say is brilliant, especially if\nit contradicts what other people normally believe.  Create! \nDestroy!  Live!"',
      index: 392,
    },
    {
      Author: " --from Wraith",
      Quote:
        "\"[He] does not belong; reality itself does not accept his surreal\nvisions.  Why hold back?  Why shouldn't he reshape the world into\nsomething that will accept him?  He's been shut out long enough.\"",
      index: 393,
    },
    {
      Author: " --from Wraith",
      Quote:
        "\"The true artist must be open to anything!  Expand your mind,\nman; stretch it like a big red balloon!  You think that's crazy! \nLook at all the unhappy people, look at all the conformity, and\nI'll tell you what's really crazy.  Whee!  Ants!\"",
      index: 394,
    },
    {
      Author: " --from Wraith",
      Quote:
        '"One must follow what interests one, yes?  Life is an exploration\nof the mind, an exploration of reality.  Care for some brie?"',
      index: 395,
    },
    {
      Author: " --Greek epitaph",
      Quote:
        '"This thing is a man.  Look at what you are, and what awaits you. \nGaze on this image and learn what your own end will be."',
      index: 396,
    },
    {
      Author: "",
      Quote:
        '"Learn the true topography; the monstrous and wonderful\narchetypes are not inside you, not inside your consciousness; you\nare inside them, trapped and howling to get out."',
      index: 397,
    },
    {
      Author: " --Christian Death",
      Quote:
        '"Like you, I am broken and fragile\n Like you, I am tasting my heart for the first time\n Like you, I am feeding on slumber\n Like you, I\'ve left my eyes far behind me\n Down for the count and still drowning..."',
      index: 398,
    },
    {
      Author: " --Billy Joel",
      Quote:
        '"You may never understand\n How the stranger is inspired\n For he is always evil,\n And he is not always wrong..."',
      index: 399,
    },
    {
      Author: " --from Wraith",
      Quote:
        '"Come with me on wings of dream.  I can take you anywhere you\nwant to go -- would you like to have dinner with [her]?  Sip\ncappuccino on the canals of Mars?  Walk with me though the\nElysian Fields?  I promise to have you back before you wake."',
      index: 400,
    },
    {
      Author: " --from Wraith",
      Quote:
        '"All around you reverberate the songs of the dead.  You hear them\nechoing in high cathedrals, in darkened auditoriums, in your own\nsleep.  All around you wail the songs of the dead:  dare you not\nlisten?  Listen to what has been sung.  Since their death!"',
      index: 401,
    },
    {
      Author: " --from Wraith",
      Quote:
        "\"'Do you trust me?'  I asked her.  I held out my hand.  'Do you\nwant to see beyond the darkness?'  She nodded slowly, and took my\nhand...\"",
      index: 402,
    },
    {
      Author: " --Mary Shelly",
      Quote:
        "\"Swift as light and as cheers was the idea that broke in upon me. \n'I have found it!  What terrified me will terrify others; I need\nonly describe the spectre which had haunted my midnight pillow.'\"",
      index: 403,
    },
    {
      Author: "",
      Quote:
        '"Oh children don\'t you weep and moan\n Children save your breath\n You\'ll draw a pretty pension\n When your daddy meets his death.","Hard Times"',
      index: 404,
    },
    {
      Author: " --Alan Moore",
      Quote:
        '"It was the best of times and the worst of times, and it was all\nof them at once."',
      index: 405,
    },
    {
      Author: " --from Rosencrantz",
      Quote:
        '"Death followed by eternity... the worst of both worlds.  It is a\nterrible thought."',
      index: 406,
    },
    {
      Author: " --Jean-Paul",
      Quote:
        "\"There were the days when you peered into your self, into the\nsecret places of your heard, and what you saw there made you fair\nwith horror.  And then, next day, you didn't know what to make of\nit, you couldn't interpret the horror you had glimpsed the day\nbefore.  Yes, you know what evil costs.\"",
      index: 407,
    },
    {
      Author: " --H.P",
      Quote:
        '"The darkness always teemed with unexplained sound -- and yet he\nsometimes shook with fear lest the noises he heard subside and\nallow him to hear certain other fainter noises which he suspected\nwere lurking behind them."',
      index: 408,
    },
    {
      Author: " --The Youngbloods",
      Quote:
        '"Darkness, darkness\n Be my blanket\n Cover me with the endless night\n Take away the pain of knowing."',
      index: 409,
    },
    {
      Author: " --Sarah McLaughlin",
      Quote: '"The night is my companion, and solitude my guide."',
      index: 410,
    },
    {
      Author: " --Jean-Jacques",
      Quote: '"He who pretends to look upon death without fear, lies."',
      index: 411,
    },
    {
      Author: " --Scott",
      Quote:
        '"Someone stole my heart.  I haven\'t gotten it back, because I\nhaven\'t found anyone to steal it back for me.","Jesus"',
      index: 412,
    },
    {
      Author: " --Bruce Springsteen",
      Quote:
        '"The great challenge of adulthood is holding on to your idealism\nafter you lose your innocence."',
      index: 413,
    },
    {
      Author: " --Jackie Robinson",
      Quote:
        '"A life is not important, except in the impact it has on other\nlives."',
      index: 414,
    },
    {
      Author: " --Type O",
      Quote:
        "\"I see your face in every flame\n With no answers I have only myself to blame\n Of all the women I have known -- they're not you\n I'd rather be alone.\"",
      index: 415,
    },
    {
      Author: " --Seals",
      Quote:
        "\"See the smile awaitin' in the kitchen\n Food cookin' and the plates for two\n Feel the arms that reach out to hold me\n In the evening when the day is through.\"",
      index: 416,
    },
    {
      Author: " --Seals",
      Quote:
        "\"See the curtains hangin' in the window\n In the evening on a Friday night\n A little light-a-shinin' through the window\n Let's me know everything's all right.\"",
      index: 417,
    },
    {
      Author: " --Sanjay Singh",
      Quote:
        "\"It's not that I don't have a conscience, it's just that why\nshould I feel guilty for my present crimes, when my past ones are\nso much worse?\"",
      index: 418,
    },
    {
      Author: " --Robert Louis",
      Quote:
        "\"Gentleness and cheerfulness, these come before all morality: \nthey are the perfect duties.  If your morals make you dreary,\ndepend on it they are wrong.  I do not say, 'give them up,' for\nthey may be all you have; but conceal them like a vice, lest they\nshould spoil the lives of better men.\"",
      index: 419,
    },
    {
      Author: " --Philip K",
      Quote:
        '"Reality is that which, when you stop believing in it, doesn\'t go\naway."',
      index: 420,
    },
    {
      Author: " --Kersti Kahar",
      Quote:
        '"I suppose people in general can be cruel to one another because\nit\'s easier to do the wrong thing; kindness takes an effort most\nare not willing to exert."',
      index: 421,
    },
    {
      Author: " --Henry Rollins",
      Quote:
        "\"I feel pain everyday of my life.  When you see me perform, it's\nthat pain you're seeing coming out.  I put all my emotions, all\nmy feelings, and my body on the line.  People hurt me, I hurt\nmyself -- mentally, physically.\"",
      index: 422,
    },
    {
      Author: " --Sanjay Singh",
      Quote:
        "\"The game's not over.  It's on until either I win or I die and I\ndon't plan on dying anytime soon.\"",
      index: 423,
    },
    {
      Author: " --Howard Jones",
      Quote:
        '"Oh the pain of life is sweet\n Is it wrong to long for death?\n Must I cling to the thrills of life\n Ash to ash and dust to dust."',
      index: 424,
    },
    {
      Author: " --Howard Jones",
      Quote:
        '"Who wants to compare\n As if this was a competition\n Leave that to teachers at school\n Must preserve their tradition."',
      index: 425,
    },
    {
      Author: " --Sanjay Singh",
      Quote:
        '"Sleep well tonight my prince of darkness, for tomorrow you will\nhave a big day."',
      index: 426,
    },
    {
      Author: " --Matt Spinks",
      Quote:
        "\"These people are so worthless it makes me want to puke blood.  I\nwould gladly open fire on them, but if given a choice I'd rather\nsubject them to a slower form of death.  They fear me because I'm\nintelligent and creative.  I have something better to do with my\ntime.  They are insecure.\"",
      index: 427,
    },
    {
      Author: " --Jason Farnon",
      Quote:
        '"It would be quite enjoyable actually, laughing at them all. \nRemember this is the future of our country.  Laugh boys and\ngirls, because if you do not laugh, you are going to have to\ncry."',
      index: 428,
    },
    {
      Author: " --Matt Spinks",
      Quote:
        '"Most of all we hate collective identity:  every day of your\npathetic life you are being put into a little box by society by\nthe way you look or the bands you listen to.  Collective identity\nsucks.  Be an individual, don\'t make it easy to be dismissed in a\nsentence."',
      index: 429,
    },
    {
      Author: " --Matt Biershbach",
      Quote: '"Life is a terminal disease."',
      index: 430,
    },
    {
      Author: " --Matt Biershbach",
      Quote:
        '"People that think logically are a nice contrast to the real\nworld."',
      index: 431,
    },
    {
      Author: " --Matt Biershbach",
      Quote: '"When you finally make the ends meet, they move the ends."',
      index: 432,
    },
    {
      Author: " --Ric Ocasek",
      Quote:
        '"Telephone again, want to pick it up\n Could be a friend, but I can\'t pick it up..."',
      index: 433,
    },
    {
      Author: " --Emily Dickinson",
      Quote:
        '"I cannot live with You -\n It would be Life -\n And Life is over there -\n Behind the Shelf."',
      index: 434,
    },
    {
      Author: " --Emily Dickinson",
      Quote:
        '"Pain - has an element of Blank -\n It cannot recollect\n When it begun - or if there were\n A time when it was not..."',
      index: 435,
    },
    {
      Author: " --Sanjay Singh",
      Quote:
        '"Every time you get up you get kicked in the head,\n Sooner or later you learn to play dead."',
      index: 436,
    },
    {
      Author: " --Jerry Dammers",
      Quote:
        '"It said what a terrible world this was -- with a smile on its\nface."',
      index: 437,
    },
    {
      Author: " --Velvet Underground",
      Quote:
        '"I am tired\n I am weary\n I could sleep for thousand years\n A thousand dreams that would awake me\n Different colours made of tears."',
      index: 438,
    },
    {
      Author: " --Velvet Underground",
      Quote:
        '"Severen, severen speaks so slightly\n Severen down on your bended knee\n Taste the whip in love not given lightly\n Taste the whip now bend for me."',
      index: 439,
    },
    {
      Author: " --Peter Steele",
      Quote:
        '"This entire opus is respectfully dedicated to all those who have\nloved unconditionally only to have their hearts unanaesthetically\nripped out:  base not your joy upon the deeds of others, for what\nis given can be taken away.  NO HOPE = NO FEAR."',
      index: 440,
    },
    {
      Author: " --from Law",
      Quote:
        "\"...so the system's crazier than the people that it's trying to\nhelp?\"",
      index: 441,
    },
    {
      Author: " --Ric Ocasek",
      Quote:
        "\"If you want to talk about it, I got the time\n When you're looking so enchanted, you cover my mind\n If you think I'll wait forever, maybe you're right\n There's no such thing as now or never, there's only twilight.\"",
      index: 442,
    },
    {
      Author: " --Lemmy Kilmister",
      Quote:
        "\"Don't look to me.  Don't ask for help.  Don't ask for anything\nthat you can do yourself.\"",
      index: 443,
    },
    {
      Author: " --Eric Dransfeldt",
      Quote:
        "\"Life is but an unfair circle, intertwined among the ruins of my\nsalvation as a soul of this universe.  My humble despair deserves\nno such fate; perhaps sometime in the near distant future I may\nlive to say 'this really sucks!'\"",
      index: 444,
    },
    {
      Author: " --from Twin",
      Quote:
        "\"Every day, once a day, give yourself a present.  Don't plan it,\ndon't wait for it, just let it happen.  It could be a new shirt\nat the men's store, a cat-nap in your office chair, or two cups\nof good, hot, black coffee.\"",
      index: 445,
    },
    {
      Author: " --Ralph Waldo",
      Quote:
        '"Universities are of course hostile to geniuses, which, seeing\nand using ways of their own, discredit the routine:  as churches\nand monasteries persecute youthful saints."',
      index: 446,
    },
    {
      Author: " --Ursula K",
      Quote: '"What sane person could live in this world and not be crazy?"',
      index: 447,
    },
    {
      Author: " --Brian Fox",
      Quote:
        '"If people are allowed to love life, then they should also be\nallowed to hate it."',
      index: 448,
    },
    {
      Author: " --Alan Ashley",
      Quote:
        '"The man who follows the crowd will usually get no further than\nthe crowd.  The man who walks alone is likely to find himself in\nplaces no one has ever been."',
      index: 449,
    },
    {
      Author: " --Mark Twain",
      Quote:
        '"Don\'t go around saying the world owes you a living.  The world\nowes you nothing.  It was here first."',
      index: 450,
    },
    {
      Author: " --Lazarus Long",
      Quote:
        "\"Never appeal to a man's 'better nature,' he may not have one. \nInvoking his self-interest gives you more leverage.\"",
      index: 451,
    },
    {
      Author: " --Lazarus Long",
      Quote:
        '"Beware of altruism.  It is based on self-deception, the root of\nall evil."',
      index: 452,
    },
    {
      Author: " --Neil Peart",
      Quote:
        "\"Waiting for the winds of change to sweep the clouds away. \nWaiting for the rainbow's end to cast its gold your way... You\ndon't get something for nothing.  You can't have freedom for\nfree.\"",
      index: 453,
    },
    {
      Author: " --Jimi Hendrix",
      Quote: '"... and so castles made of sand slip into the sea eventually."',
      index: 454,
    },
    {
      Author: " --Steven Stills",
      Quote: '"Speak out.  You\'ve got to speak out against the madness."',
      index: 455,
    },
    {
      Author: " --from Tombstone",
      Quote:
        '"I want your blood.  And I want your soul.  And I want them both\nright now!"',
      index: 456,
    },
    {
      Author: " --from Tombstone",
      Quote: "\"You tell him I'm coming!  And hell's coming with me!\"",
      index: 457,
    },
    {
      Author: " --from Heathers",
      Quote:
        "\"If you were happy every day of your life, you wouldn't be a\nhuman being.  You'd be a game show host.\"",
      index: 458,
    },
    {
      Author: " --from Deep",
      Quote: '"This is not a perfect world.  In a perfect world, evil loses."',
      index: 459,
    },
    {
      Author: " --from Dead",
      Quote:
        '"[It] was the kind of town where they spell trouble T-R-U-B-I-L,\nand if you try to correct them, they kill you."',
      index: 460,
    },
    {
      Author: " --from Butch",
      Quote:
        "\"If he'd just pay me what he's paying them to stop me robbing\nhim, I'd stop robbing him.\"",
      index: 461,
    },
    {
      Author: " --from Butch",
      Quote: '"I have vision, and the rest of the world wears bifocals."',
      index: 462,
    },
    {
      Author: " --from Blade",
      Quote:
        '"The light that burns twice as bright, burns half as long -- and\nyou have burned so very, very brightly."',
      index: 463,
    },
    {
      Author: " --from The",
      Quote:
        "\"He's got a client who shot his wife in the head six times.  Six\ntimes, can you imagine it?  I mean, even twice would be overdoing\nit, don't you think?\"",
      index: 464,
    },
    {
      Author: " --from Aliens",
      Quote:
        "\"You still don't know what you're dealing with do you?  Perfect\norganism.  Its structural perfection is matched only by its\nhostility... I admire its purity, a survivor, unclouded by\nconscience, remorse or delusions of morality.\"",
      index: 465,
    },
    {
      Author: " --from The",
      Quote:
        "\"He's acting alone.  He's cut off from his chain of command. \nHe's exhibiting symptoms of pressure-induced psychosis, and he\nhas a nuclear weapon.  So as a personal favour to me, would you\nlay off him?\"",
      index: 466,
    },
    {
      Author: " --from The",
      Quote: '"Every life, every day, is in danger.  That\'s just life."',
      index: 467,
    },
    {
      Author: " --from The",
      Quote:
        '"Anything worth anything has a price.  When I\'m standing next to\nyour deathbed, looking as young as I look right now, and I see\nthat fear in your eyes at the moment of death, then tell me the\nprice is too stiff."',
      index: 468,
    },
    {
      Author: " --from In",
      Quote: '"Something was dead in each of us, and what was dead was hope."',
      index: 469,
    },
    {
      Author: " --James O",
      Quote: '"This isn\'t hell, but you can see it from here."',
      index: 470,
    },
    {
      Author: " --Woody Allen",
      Quote: '"The only way to be happy is to love to suffer."',
      index: 471,
    },
    {
      Author: " --Randall Jarrell",
      Quote:
        '"The climate of our culture is changing.  Under these new rains,\nnew suns, small things grow great, and what was great grows\nsmall; whole species disappear and are replaced."',
      index: 472,
    },
    {
      Author: "",
      Quote:
        '"Why does everything have to be so significant?  Finding\nsignificance in your life doesn\'t necessarily make you happy."',
      index: 473,
    },
    {
      Author: " --Wilhelmina Baird",
      Quote: "\"Avoid the question 'why me?'.  It saves a lot of grief.\"",
      index: 474,
    },
    {
      Author: " --Wilhelmina Baird",
      Quote:
        "\"They're getting crazier every day, the whole world's going\ncrazy.  And you got to take your mind out to keep your smile in\nplace.\"",
      index: 475,
    },
    {
      Author: " --Wilhelmina Baird",
      Quote:
        "\"We're all racing against time.  We know it.  Either we get\nenough together to get off this Christ-forgotten planet while\nwe're still young or we're going to end up under it before we've\na chance to get old.\"",
      index: 476,
    },
    {
      Author: " --Steve Perry",
      Quote: '"There\'s always a price for what you want."',
      index: 477,
    },
    {
      Author: " --Steve Perry",
      Quote:
        '"The injury that we do to a man must be such that we need not\nfear his vengeance."',
      index: 478,
    },
    {
      Author: " --Albert Einstein",
      Quote: '"I want to know God\'s thoughts, the rest are details."',
      index: 479,
    },
    {
      Author: " --Niccolo Machiavelli",
      Quote:
        '"There are three kinds of brains:  the one understands things\nunassisted, the other understands things when shown by others,\nthe third understands neither alone nor with the explanations of\nothers."',
      index: 480,
    },
    {
      Author: " --Niccolo Machiavelli",
      Quote:
        '"There are three kinds of intelligence: one kind understands\nthings for itself, the other appreciates what others can\nunderstand, the third understands neither for itself nor through\nothers. This first kind is excellent, the second good, and the\nthird kind useless."',
      index: 481,
    },
    {
      Author: " --Steve Perry",
      Quote:
        '"There may or may not be a God or gods; the Siblings do not\nconcern themselves with proving or disproving such a thing.  By\ndefinition, gods are more powerful than men, and thus quite able\nto fend for themselves without help."',
      index: 482,
    },
    {
      Author: " --Steve Perry",
      Quote:
        '"Soon another test would come.  He must be ready for it.  So he\nsat, but it was not mindless meditation but mindful scheming that\nfilled him.  In a contest like this, there could be no second-\nplace winner.  To be second was to be last and to be last here\nwas to be dead."',
      index: 483,
    },
    {
      Author: " --Lois Tilton",
      Quote:
        '"Time seemed to suspend itself, or cease altogether.  Place faded\naway.  There was only her self, the centre that endured through\nall times, all events, from the world, from its pain.  Timeless,\neternal..."',
      index: 484,
    },
    {
      Author: " --Tom Stoppard",
      Quote:
        '"All mystical experience is coincidence; and vice versa, of\ncourse."',
      index: 485,
    },
    {
      Author: " --Joseph De",
      Quote:
        '"The whole earth, perpetually steeped in blood, is nothing but an\nimmense altar on which every living thing must be sacrificed\nwithout end, without restraint, without respite until the\nconsummation of the world, the extinction of evil, the death of\ndeath."',
      index: 486,
    },
    {
      Author: " --Joseph De",
      Quote:
        '"Man is insatiable for power; he is infantile in his desires and,\nalways discontented with what he has, loves only what he has not.\nPeople complain of the despotism of princes; they ought to\ncomplain of the despotism of man."',
      index: 487,
    },
    {
      Author: " --Joseph De",
      Quote:
        '"All grandeur, all power, all subordination to authority rests on\nthe executioner: he is the horror and the bond of human\nassociation.  Remove this incomprehensible agent from the world\nand at that very moment order gives way to chaos, thrones topple\nand society disappears."',
      index: 488,
    },
    {
      Author: " --Marquis De",
      Quote:
        '"Evil is... a moral entity and not a created one, an eternal and\nnot a perishable entity: it existed before the world; it\nconstituted the monstrous, the execrable being who was also to\nfashion such a hideous world. It will hence exist after the\ncreatures which people this world."',
      index: 489,
    },
    {
      Author: " --Patrick McGoohan",
      Quote:
        '"But what is the greatest evil?  If you are going to epitomize\nevil, what is it?  Is it the bomb?  The greatest evil that one\nhas to fight constantly, every minute of the day until one dies,\nis the worst part of oneself."',
      index: 490,
    },
    {
      Author: "",
      Quote:
        '"There is no explanation for evil. It must be looked upon as a\nnecessary part of the order of the universe.  To ignore it is\nchildish, to bewail it senseless."',
      index: 491,
    },
    {
      Author: " --Joseph De",
      Quote:
        '"We are tainted by modern philosophy which has taught us that all\nis good, whereas evil has polluted everything and in a very real\nsense all is evil, since nothing is in its proper place."',
      index: 492,
    },
    {
      Author: " --Joseph Conrad",
      Quote:
        '"The belief in a supernatural source of evil is not necessary;\nmen alone are quite capable of every wickedness."',
      index: 493,
    },
    {
      Author: " --Arthur Rimbaud",
      Quote: "\"L'eternité.\n C'est la mer młlée\n Au soleil.\"",
      index: 494,
    },
    {
      Author: " --Ludwig Wittgenstein",
      Quote:
        '"Death is not an event in life:  we do not live to experience\ndeath. If we take eternity to mean not infinite temporal duration\nbut timelessness, then eternal life belongs to those who live in\nthe present."',
      index: 495,
    },
    {
      Author: " --Tom Wolfe",
      Quote:
        "\"It is very comforting to believe that leaders who do terrible\nthings are, in fact, mad. That way, all we have to do is make\nsure we don't put psychotics in high places and we've got the\nproblem solved.\"",
      index: 496,
    },
    {
      Author: " --Ngo Dinh",
      Quote:
        '"Follow me if I advance!  Kill me if I retreat!  Revenge me if I\ndie!"',
      index: 497,
    },
    {
      Author: " --Carl Jung",
      Quote:
        '"The wise man who is not heeded is counted a fool, and the fool\nwho proclaims the general folly first and loudest passes for a\nprophet and Führer, and sometimes it is luckily the other way\nround as well, or else mankind would long since have perished of\nstupidity."',
      index: 498,
    },
    {
      Author: " --Lord Acton",
      Quote:
        '"Power tends to corrupt, and absolute power corrupts absolutely.\nGreat men are almost always bad men."',
      index: 499,
    },
    {
      Author: " --Cyril Connolly",
      Quote:
        '"We must select the illusion which appeals to our temperament and\nembrace it with passion, if we want to be happy."',
      index: 500,
    },
    {
      Author: " --Miguel De",
      Quote: '"He is mad past recovery, but yet he has lucid intervals."',
      index: 501,
    },
    {
      Author: " --Miguel De",
      Quote:
        '"Our greatest foes, and whom we must chiefly combat, are within."',
      index: 502,
    },
    {
      Author: " --the other, --Colette",
      Quote:
        '"On this narrow planet, we have only the choice between two\nunknown worlds.  One of them tempts us --ah! what a dream, to\nlive in that! --the other stifles us at the first breath."',
      index: 503,
    },
    {
      Author: " --Jean Cocteau",
      Quote:
        '"Mystery has its own mysteries, and there are gods above gods. \nWe have ours, they have theirs.  That is what\'s known as\ninfinity."',
      index: 504,
    },
    {
      Author: "",
      Quote:
        "\"Part of every misery is, so to speak, the misery's shadow or\nreflection:  the fact that you don't merely suffer but have to\nkeep on thinking about the fact that you suffer. I not only live\neach endless day in grief, but live each day thinking about\nliving each day in grief.\"",
      index: 505,
    },
    {
      Author: " --Maya Angelou",
      Quote:
        '"A bizarre sensation pervades a relationship of pretence. No\ntruth seems true. A simple morning\'s greeting and response appear\nloaded with innuendo and fraught with implications...  Each\nnicety becomes more sterile and each withdrawal more permanent."',
      index: 506,
    },
    {
      Author: " --Stendhal",
      Quote:
        '"In love, unlike most other passions, the recollection of what\nyou have had and lost is always better than what you can hope for\nin the future."',
      index: 507,
    },
    {
      Author: " --Henry B",
      Quote: '"Chaos often breeds life, when order breeds habit."',
      index: 508,
    },
    {
      Author: "",
      Quote:
        '"The fact that logic cannot satisfy us awakens an almost\ninsatiable hunger for the irrational."',
      index: 509,
    },
    {
      Author: " --Samuel Butler",
      Quote:
        '"Logic is like the sword -- those who appeal to it, shall perish\nby it."',
      index: 510,
    },
    {
      Author: " --Jean Rostand",
      Quote:
        '"Kill a man one is a murderer; kill a million, a conqueror; kill\nthem all, a God."',
      index: 511,
    },
    {
      Author: " --Ludwig Wittgenstein",
      Quote:
        '"You must always be puzzled by mental illness. The thing I would\ndread most, if I became mentally ill, would be your adopting a\ncommon sense attitude; that you could take it for granted that I\nwas deluded."',
      index: 512,
    },
    {
      Author: " --Antonin Artaud",
      Quote:
        '"There is in every madman a misunderstood genius whose idea,\nshining in his head, frightened people, and for whom delirium was\nthe only solution to the strangulation that life had prepared for\nhim."',
      index: 513,
    },
    {
      Author: " --Isak Dinesen",
      Quote:
        '"I don\'t believe in evil, I believe only in horror. In nature\nthere is no evil, only an abundance of horror:  the plagues and\nthe blights and the ants and the maggots."',
      index: 514,
    },
    {
      Author: " --Margaret Mead",
      Quote:
        '"It is an open question whether any behaviour based on fear of\neternal punishment can be regarded as ethical or should be\nregarded as merely cowardly."',
      index: 515,
    },
    {
      Author: " --William Burroughs",
      Quote:
        '"Intelligence and war are games, perhaps the only meaningful\ngames left.  If any player becomes too proficient, the game is\nthreatened with termination."',
      index: 516,
    },
    {
      Author: " --Mark Twain",
      Quote:
        '"He is useless on top of the ground; he ought to be under it,\ninspiring the cabbages."',
      index: 517,
    },
    {
      Author: " --Jean Baudrillard",
      Quote:
        "\"Terror is as much a part of the concept of truth as runniness is\nof the concept of jam. We wouldn't like jam if it didn't, by its\nvery nature, ooze. We wouldn't like truth if it wasn't sticky,\nif, from time to time, it didn't ooze blood.\"",
      index: 518,
    },
    {
      Author: " --Lord Byron",
      Quote:
        '"The mind can make\n Substance, and people planets of its own\n With beings brighter than have been, and give\n A breath to forms which can outlive all flesh."',
      index: 519,
    },
    {
      Author: " --Charles Baudelaire",
      Quote:
        '"I consider it useless and tedious to represent what exists,\nbecause nothing that exists satisfies me.  Nature is ugly, and I\nprefer the monsters of my fancy to what is positively trivial."',
      index: 520,
    },
    {
      Author: " --Rose Chronicles",
      Quote:
        '"Soul -- bound in my body\n My eyes are broken windows\n Go inside of me\n Awaiting Eternity."',
      index: 521,
    },
    {
      Author: " --Rose Chronicles",
      Quote:
        '"Did you know your body\'s just a cavern for your soul?\n Souls will drift, the aimlessly adrift dwell on shores of unrest\n Where ocean rage will make its nest\n I feel strange."',
      index: 522,
    },
    {
      Author: " --Father X",
      Quote:
        "\"If you believe in the light, it's because of obscurity, if you\nbelieve in happiness it's because of unhappiness, if you believe\nin God, then you have to believe in the devil.\"",
      index: 523,
    },
    {
      Author: "",
      Quote: '"The path of excess leads to the tower of wisdom."',
      index: 524,
    },
    {
      Author: " --Frank Herbert",
      Quote:
        '"I must not fear.  Fear is the mind-killer.  Fear is the little\ndeath that brings total obliteration.  I will face my fear.  I\nwill permit it to pass over me and through me.  And when it has\ngone past I will turn the inner eye to see its path.  Where the\nfear has gone there will be nothing.  Only I will remain."',
      index: 525,
    },
    {
      Author: " --from Broken",
      Quote:
        "\"The game is never over, and the prize is never won.  Broken\ndoors, broken dreams, it's all the same thing.  A door's purpose\nis to conceal the contents of a room, and dreams are the doors of\nthe mind.\"",
      index: 526,
    },
    {
      Author: " --Joe R",
      Quote: '"The logic of a madman is a sane man\'s confusion."',
      index: 527,
    },
    {
      Author: "",
      Quote:
        '"She used to love jokes, painful ones.  She loved hurting people. \nShe thought it would lessen the hurt and loneliness she felt, but\nit never did."',
      index: 528,
    },
    {
      Author: "",
      Quote:
        '"My father always spoke that way.  In the third person.  He and\nshe, as though we were characters in a drama, playing parts that\nhad been written for us.  Not as though we were real ourselves."',
      index: 529,
    },
    {
      Author: " --George Orwell",
      Quote:
        '"I am afraid of death.  You are young, so presumably you\'re more\nafraid of it than I am.  Obviously we shall put if off as long as\nwe can.  But it makes very little difference.  So long as human\nbeings stay human, death and life are the same thing."',
      index: 530,
    },
    {
      Author: " --George Orwell",
      Quote:
        "\"In this game that we're playing, we can't win.  Some kinds of\nfailure are better than other kinds, that's all.\"",
      index: 531,
    },
    {
      Author: " --George Orwell",
      Quote:
        '"Freedom is the freedom to say that two plus two make four.  If\nthat is granted, all else follows."',
      index: 532,
    },
    {
      Author: " --George Orwell",
      Quote:
        '"Until they become conscious they will never rebel, and until\nafter they have rebelled they cannot become conscious."',
      index: 533,
    },
    {
      Author: " --from Pump",
      Quote:
        '"Feeling screwed up at a screwed up time in a screwed up place\ndoes not necessarily make you screwed up."',
      index: 534,
    },
    {
      Author: " --from Pump",
      Quote:
        '"Surviving [life] is the whole point.  Quitting it will not make\nyou strong.  Surviving it will!"',
      index: 535,
    },
    {
      Author: " --from Pump",
      Quote:
        "\"We're all worried, we're all in pain.  That comes with having\neyes, having ears.\"",
      index: 536,
    },
    {
      Author: " --from Pump",
      Quote:
        "\"There's nothing to do anymore.  Everything decent has been done. \nAll the great themes have been used up, turned into theme parks. \nSo I don't really find it exactly cheerful to be living in the\nmiddle of a totally exhausted decade where there's nothing to\nlook forward to and no one to look up to.\"",
      index: 537,
    },
    {
      Author: " --Peter Sintic",
      Quote: '"The night is too dark, to walk with your eyes closed."',
      index: 538,
    },
    {
      Author: "",
      Quote:
        '"Health is merely the slowest possible rate at which one can\ndie."',
      index: 539,
    },
    {
      Author: " --Erich Fromm",
      Quote: '"If I am what I have and what I have is lost, who then am I?"',
      index: 540,
    },
    {
      Author: " --Donald DeMarco",
      Quote:
        '"Our own reality may be difficult for us to face with honesty,\nbut it is the only reliable and reasonable place to begin."',
      index: 541,
    },
    {
      Author: " --Susan Ertz",
      Quote:
        '"Millions long for immortality who do not know what to do with\nthemselves on a rainy Sunday afternoon."',
      index: 542,
    },
    {
      Author: " --from Twin",
      Quote:
        '"Of all the people in the world, the best and the worst are drawn\nto a dead dog.  Most turn away.  Only the pure of heart can feel\nits pain.  And somewhere in between the rest of us struggle."',
      index: 543,
    },
    {
      Author: " --from Seinfeld",
      Quote:
        '"Am I?  Or am I so sane that you just blew your mind? ... Is it? \nOr is it so possible that your head is spinning like a top? ...\nCan it?  Or is your entire world crumbling down all around you?"',
      index: 544,
    },
    {
      Author: " --Queen",
      Quote:
        '"Do you feel like suicide?\n Is your conscience all right\n Does it plague you at night\n Do you feel good, feel good?"',
      index: 545,
    },
    {
      Author: " --Seneca",
      Quote: '"Chance makes a plaything of a man\'s life."',
      index: 546,
    },
    {
      Author: " --O'Shaughnessy",
      Quote:
        '"One man with a dream, at pleasure,\nShall go forth and conquer a crown;\nAnd three with a new song\'s measure\nCan trample an empire down."',
      index: 547,
    },
    {
      Author: " --Ric Ocasek",
      Quote:
        "\"People are strange.\n We're all morticians.\n Hey, what's on TV?\"",
      index: 548,
    },
    {
      Author: " --Ric Ocasek",
      Quote:
        '"The distance drew near, like a speck on a ball\n Where circular imprints stepped from the light\n And whispered a slogan invented by anyone.\n So they all went along and yelled to the heavens\n Or some place as good."',
      index: 549,
    },
    {
      Author: " --from Talk",
      Quote:
        "\"I know the argument friend.  It's the great theory of history. \nI've heard it before.  It says when things ain't good, instead of\ngetting down and doing something about it, instead of changing\nyour life, it's a hell of a lot easier to blame somebody else. \nAnd it just don't wash in my book.\"",
      index: 550,
    },
    {
      Author: " --James Jones",
      Quote:
        '"Colour makes a difference.  Gender makes a difference. \nEthnicity makes a difference.  Acting as if they don\'t will\ncreate more problems than it will solve."',
      index: 551,
    },
    {
      Author: " --David G",
      Quote:
        '"Between normality and abnormality there is not a gulf, but a\nfine and somewhat arbitrary line.  Where we draw the line depends\non how atypical, disturbing, maladaptive, and unjustifiable a\nperson\'s behaviour is."',
      index: 552,
    },
    {
      Author: " --Leo Tolstoy",
      Quote:
        '"My life had come to a sudden stop.  I was able to breathe, to\neat, to drink, to sleep.  I could not, indeed help doing so; but\nthere was no real life in me."',
      index: 553,
    },
    {
      Author: " --Krishnamurti",
      Quote:
        '"It is no measure of health to be well adjusted to a profoundly\nsick society."',
      index: 554,
    },
    {
      Author: " --Oliver Wendell",
      Quote: '"If a man is in a minority of one, we lock him up."',
      index: 555,
    },
    {
      Author: " --Battista Mantuanus",
      Quote: '"We are all mad at some time or another."',
      index: 556,
    },
    {
      Author: " --C.S",
      Quote:
        '"If there were an invisible cat in that chair, the chair would\nlook empty; but the chair does look empty, therefore there is an\ninvisible cat in it."',
      index: 557,
    },
    {
      Author: " --from Young",
      Quote:
        '"You rode a fifteen year old boy straight into his grave, and the\nrest of us, straight to hell."',
      index: 558,
    },
    {
      Author: " --from Star",
      Quote:
        "\"I don't want to heal.  I opened a wound, right here.  It hurts\nlike hell.  I don't want it to get better and I don't want to\npretend that everything's all right.\"",
      index: 559,
    },
    {
      Author: " --from Malice",
      Quote:
        '"Who do you think they\'re praying to?  You ask me if I have a God\ncomplex?  I am God!"',
      index: 560,
    },
    {
      Author: " --Albert Einstein",
      Quote:
        '"Generations to come it may be will scarce believe that such a\none as this ever in flesh and blood walked upon this earth."',
      index: 561,
    },
    {
      Author: " --Scott",
      Quote:
        '"If life is a role-playing game, I have a bone to pick with the\nGame Master.","Jesus"',
      index: 562,
    },
    {
      Author: " --Scott",
      Quote:
        '"What is shape without form;\n What is chaos without order;\n What is life without death;\n What is friendship without love;\n What isn\'t?","Jesus"',
      index: 563,
    },
    {
      Author: "",
      Quote:
        '"I managed to take a beautiful soul, a blooming flower, and with\nsome terrible power that I didn\'t know I possessed... I withered\nthe blossom and have perhaps destroyed one of the most precious\nthings on the planet."',
      index: 564,
    },
    {
      Author: " --Stephen King",
      Quote:
        '"There\'s a Mr. Hyde for every happy Jekyll face, a dark face on\nthe other side of the mirror.  The brain behind that face never\nheard of razors, prayers, or the logic of the universe.  You turn\nthe mirror sideways and see your face reflected with a sinister\nleft-hand twist, half mad and half sane."',
      index: 565,
    },
    {
      Author: " --Brian May",
      Quote:
        '"If we ever knew exactly where the light was coming from, getting\nthere would be easy."',
      index: 566,
    },
    {
      Author: " --from Rapid",
      Quote: '"Don\'t fear the weapon, fear the man."',
      index: 567,
    },
    {
      Author: " --from Rapid",
      Quote: '"Never ask for something you can\'t take away."',
      index: 568,
    },
    {
      Author: " --Living Colour",
      Quote:
        "\"I exploit you\n You exploit me\n I tell you one and one make three\n I'm every person you need to be\n I'm the cult of personality.\"",
      index: 569,
    },
    {
      Author: " --from Cliffhanger",
      Quote:
        '"Kill a few people and you\'re a murderer.  Kill a million and you\nbecome a conqueror."',
      index: 570,
    },
    {
      Author: "",
      Quote:
        '"If you pick a truth and follow it blindly.  It becomes a\nfalsehood, and you a fanatic."',
      index: 571,
    },
    {
      Author: " --from Flying",
      Quote:
        "\"There's nothing wrong with that girl that 50,000 volts wouldn't\nfix.\"",
      index: 572,
    },
    {
      Author: " --Stephen King",
      Quote: '"Isn\'t it too bad that the great truths are all such lies?"',
      index: 573,
    },
    {
      Author: " --Stephen King",
      Quote:
        "\"Just go on dancing with me like this forever, and I'll never\ntire.  We'll scrape our shoes on the stars and hang upside down\nfrom the moon.\"",
      index: 574,
    },
    {
      Author: " --Gerard Jones",
      Quote:
        "\"I used a lot of quotes when I was young.  To make me sound\nmature, to make me feel like I wasn't the second-class entity\nthat I'd always thought I was.\"",
      index: 575,
    },
    {
      Author: " --Carl Sagan",
      Quote:
        '"Each of us is a tiny being, permitted to ride on the outermost\nskin of one of the smaller planets for a few dozen trips around\nthe local star."',
      index: 576,
    },
    {
      Author: " --Sanjay Singh",
      Quote:
        '"Time doesn\'t heal any wounds, it just gives us more chances to\nmake the same mistakes"',
      index: 577,
    },
    {
      Author: " --from Red",
      Quote:
        '"Now, weary traveller,\n Rest your head,\n For, just like me,\n You\'ll soon be dead."',
      index: 578,
    },
    {
      Author: " --Freddie Mercury",
      Quote:
        '"I\'m very vulnerable, but only when I really let people get near\nme.  I build up a big defence.  It happens automatically.  I can\nbe very over-emotional and that can be a very destructive trait\nin me."',
      index: 579,
    },
    {
      Author: " --from Cheers",
      Quote:
        "\"I've taken your little wise cracks for a few years now, you\nhideous gargoyle, and if you ever open that gateway to hell you\ncall a mouth in my direction again, I'll snap of your extremities\nlike dead branches and feel them to you at gunpoint.\"",
      index: 580,
    },
    {
      Author: " --Sanjay Singh",
      Quote:
        '"Winter, summer, spring and fall \n It doesn\'t matter, death loves them all."',
      index: 581,
    },
    {
      Author: " --Dennis O",
      Quote:
        '"A man like me should carry his burdens alone.  If he doesn\'t\npeople get hurt."',
      index: 582,
    },
    {
      Author: " --Sanjay Singh",
      Quote:
        '"Hallowe\'en is just an excuse for people that pretend that they\ncan cope with reality to let their true chaotic nature shine\nthrough."',
      index: 583,
    },
    {
      Author: " --John Byrne",
      Quote:
        '"I feel not unlike a small boy, waking from a bad dream to find\nreality not much of an improvement."',
      index: 584,
    },
    {
      Author: " --Jessica Conner",
      Quote: '"Too bad eternity has to last forever."',
      index: 585,
    },
    {
      Author: " --from Covington",
      Quote: '"Life was not meant to be observed, it was meant to be stolen."',
      index: 586,
    },
    {
      Author: " --Gerard Jones",
      Quote:
        '"There are no ultimate ends.  Only games and more games.  The\nwinner this round is the loser the next round.  Only the game is\neternal.  And the game is always the same, if you never change\nthe rules."',
      index: 587,
    },
    {
      Author: " --Sanjay Singh",
      Quote:
        '"...and so it was written that the pain and suffering will end. \nThe only problem was that we weren\'t allowed to see the book."',
      index: 588,
    },
    {
      Author: " --from Deadlock",
      Quote:
        '"I may not be smart, but then again, I\'m not the one that blew\nup."',
      index: 589,
    },
    {
      Author: " --from Deadlock",
      Quote: '"You non-conformists are all alike."',
      index: 590,
    },
    {
      Author: " --Frozen Ghost",
      Quote:
        '"My eyes can only see and my ears can only hear\n Only my mind can conceive all that which I think I fear\n Imagination charms me but often leads me astray\n And like a labyrinth sometimes it\'s hard to see the right way."',
      index: 591,
    },
    {
      Author: " --Frozen Ghost",
      Quote:
        "\"I don't need to know your secret\n I don't need to know your vices\n I don't need to know your past\n All I need is to be needed.\"",
      index: 592,
    },
    {
      Author: " --Mark",
      Quote:
        '"Connect the dots are hard to play when one has no eyeballs.","MEB"',
      index: 593,
    },
    {
      Author: " --Mark",
      Quote:
        '"Modern art sucks, and if you think it takes talent, or has a\n\'deep meaning\' which only select few can understand then you\'re\nan idiot.","MEB"',
      index: 594,
    },
    {
      Author: " --Mark",
      Quote: '"They\'re not twinkies, they\'re Satan cakes.","MEB"',
      index: 595,
    },
    {
      Author: " --Mark",
      Quote:
        '"I partially blame the modern day downfall of man and society on\ntwinkies.","MEB"',
      index: 596,
    },
    {
      Author: " --Mark",
      Quote:
        '"Ah, the sweetness of youth\n Grow old, yes\n But age with love\n And youth is yours forever.","MEB"',
      index: 597,
    },
    {
      Author: " --Mark",
      Quote:
        '"Throughout all of the minutes, hours, days, weeks, months, and\nyears of your entire life, you can never get even one second\nback... live life well.  This life will end, and you only get one\nshot at it.  Keep in mind the possibility of the afterlife when\nchoosing your moral pathways.","MEB"',
      index: 598,
    },
    {
      Author: " --Mark",
      Quote:
        '"Everyone, without exception, in their own special little way, is\na complete moron.","MEB"',
      index: 599,
    },
    {
      Author: " --Mark",
      Quote:
        '"An alternate reality might be fun to visit sometime, but I\nwouldn\'t want a summer home there or anything.","MEB"',
      index: 600,
    },
    {
      Author: " --Brother Bob",
      Quote: '"Who\'s going to bake a cake for the lord?"',
      index: 601,
    },
    {
      Author: " --Bruce Springsteen",
      Quote:
        '"Blind faith in your leaders or in anything will get you killed."',
      index: 602,
    },
    {
      Author: " --Airplay",
      Quote:
        '"Stranger than fiction\n Life is a mystery\n Nothing is turning, turning out\n The way that I planned it to be."',
      index: 603,
    },
    {
      Author: " --Sanjay Singh",
      Quote:
        '"Humans to ashes\n People to dust\n It\'s all because\n In God we trust."',
      index: 604,
    },
    {
      Author: " --from The",
      Quote:
        '"... and crawling on the planet\'s face,\n some insects called the human race.\n Lost in time,\n lost in space,\n and meaning."',
      index: 605,
    },
    {
      Author: " --Todd McFarlane",
      Quote:
        '"I remember there was someone.  Someone to love.  Someone to\nhate.  And I was something.  Something special.  And proud of it. \nFor a time.  Then they turned on me.  He turned on me.  I\nremember... dying."',
      index: 606,
    },
    {
      Author: " --Todd McFarlane",
      Quote:
        "\"I don't belong.  Not here.  Not now.  I have to get back there. \nThe bet was rigged, he made me believe.  Now there's darkness in\nmy soul.  I want to die... again.  But I choose to come back,\nwhy?\"",
      index: 607,
    },
    {
      Author: " --2nu",
      Quote: '"There is no such thing as dusk, in the city."',
      index: 608,
    },
    {
      Author: " --2nu",
      Quote:
        '"Love is a rare opportunity and when that love is somehow parted\nit\'s something deep down inside that wants just a reminder, a\nslice of memory, a possession."',
      index: 609,
    },
    {
      Author: " --One Bad",
      Quote:
        '"The world is like an ice cream sundae,\n The world is like an ice cream sundae,\n The world is like an ice cream sundae,\n It\'s all going to melt someday."',
      index: 610,
    },
    {
      Author: " --from Star",
      Quote: '"We have fired!  They will be destroyed!"',
      index: 611,
    },
    {
      Author: " --Pink Floyd",
      Quote:
        '"The flames are all long gone\n But the pain lingers on\n Goodbye blue sky\n Goodbye blue sky\n Goodbye."',
      index: 612,
    },
    {
      Author: " --Pink Floyd",
      Quote:
        "\"Hush now baby and don't you cry\n Mama's gonna make all of your\n Nightmares come true\n Mama's gonna put all of her fears into you.\"",
      index: 613,
    },
    {
      Author: " --Pink Floyd",
      Quote:
        "\"If you'd like to find out what's behind these cold eyes?\n You'll just have to claw your way through this disguise.\"",
      index: 614,
    },
    {
      Author: " --The Pet",
      Quote:
        "\"Some times you're better off dead\n There's a gun in you hand and it's pointed at your head.\"",
      index: 615,
    },
    {
      Author: " --Sanjay Singh",
      Quote:
        '"It\'s incredible how one insignificant human life can get in the\nway of even the simplest plans."',
      index: 616,
    },
    {
      Author: " --from The",
      Quote: '"Oh cruel fate... why do you mock me?"',
      index: 617,
    },
    {
      Author: " --Neil Young",
      Quote: '"A lot of people saying we\'d be better off dead."',
      index: 618,
    },
    {
      Author: " --Alan Grant",
      Quote:
        '"It hurts!  It throbs with pain, the like of which I never felt\nthe half!  Mortal flesh would scream again... yet demon spirit\nbids to laugh."',
      index: 619,
    },
    {
      Author: " --Chapter XIII",
      Quote:
        '"There be one place from which none may ever return--be he King,\nor Demon-Spawn, or the Lord of Hell himself.  For lack of virtue\nhas exiled them here... and only that virtue they lack can save\nthem."',
      index: 620,
    },
    {
      Author: " --Peter David",
      Quote:
        "\"I hear it's a good way to die, freezing to death.  It's supposed\nto be very comfortable.  You get all numb, and then you start to\nfeel warm.  This nice, relaxed feeling, and then you just go to\nsleep and you don't wake up.  Very peaceful.\"",
      index: 621,
    },
    {
      Author: " --Peter David",
      Quote:
        '"Opposites can attract, as in magnetism.  Or explode, as in\nmatter and antimatter."',
      index: 622,
    },
    {
      Author: " --Peter David",
      Quote:
        "\"I'll kill you.  You think I won't?  You think I give a damn\nwhether you live or die?\"",
      index: 623,
    },
    {
      Author: " --Peter David",
      Quote:
        '"It was only a few centuries ago that if there was something\nunknown humans would automatically deal with it in one of three\nways:  kill it, pollute it, or try to make money from it.  We\'ve\nprogressed far beyond that, but no matter how far we come, it\nonly seems to indicate how much farther we have to go."',
      index: 624,
    },
    {
      Author: " --2nu",
      Quote:
        '"After you spend a day in a society who\'s prevailing philosophy\nis why make small problems when you can create a holocaust, then\nyou must navigate your way home with a society who maintains the\nsame philosophy in their driving."',
      index: 625,
    },
    {
      Author: " --Gowan",
      Quote:
        "\"If you can't afford the price\n Of a fatal slip\n You better learn to dance\n To the master's whip.\"",
      index: 626,
    },
    {
      Author: " --Gowan",
      Quote:
        '"I stand accused before you\n I have no tears to cry\n And you will never break me\n Until the day I die."',
      index: 627,
    },
    {
      Author: " --Aerosmith",
      Quote: '"Give it all you got until you\'re put out of your misery."',
      index: 628,
    },
    {
      Author: " --Frozen Ghost",
      Quote:
        '"And the blind will lead the blind and all\n Those to scared to see\n I am afraid beware the masque\n And the truth it conceals."',
      index: 629,
    },
    {
      Author: " --Frozen Ghost",
      Quote:
        '"How can you censor my thoughts?\n What is right, what is not?\n How is it you decide,\n What I should feel inside?"',
      index: 630,
    },
    {
      Author: " --Steven Tyler",
      Quote:
        '"And the things that come to those that wait may be the things\nleft by those that got there first."',
      index: 631,
    },
    {
      Author: " --from The",
      Quote:
        "\"You still don't get it, do you?  He'll find her.  That's what he\ndoes.  All he does... You can't stop him.  He'll wade through\nyou, reach down her throat and pull her heart out.\"",
      index: 632,
    },
    {
      Author: " --Mark",
      Quote:
        '"I don\'t care how long it takes just give me something squishy.","MEB"',
      index: 633,
    },
    {
      Author: " --from Robin",
      Quote: '"Fear not, dear cousin.  In madness there is great power."',
      index: 634,
    },
    {
      Author: " --William Branshaw",
      Quote: '"Hunting people is exciting."',
      index: 635,
    },
    {
      Author: " --James Thomson",
      Quote:
        "\"Once in a stately passion\n I cried with desperate grief,\n 'O Lord, my heart is black with guile,\n Of sinners I am chief.'\"",
      index: 636,
    },
    {
      Author: " --The Who",
      Quote: '"Hope I die before I get old."',
      index: 637,
    },
    {
      Author: " --from Flatliners",
      Quote: '"It\'s a good day to die."',
      index: 638,
    },
    {
      Author: " --Peter David",
      Quote:
        "\"I know everything you fools can do.  You can't push me into\ngiving you the cure if I don't want to, and if you try, I'll give\nyou a second smile just under your chin...\"",
      index: 639,
    },
    {
      Author: " --Saeed Al",
      Quote:
        '"I always look forward to the opportunity to chop off more heads\nso that I can earn more money."',
      index: 640,
    },
    {
      Author: " --Marion Barry",
      Quote:
        '"Outside of the killings, we have one of the lowest crime rates\nin the country."',
      index: 641,
    },
    {
      Author: " --Richard Nixon",
      Quote:
        '"I\'d like to see people, instead of spending so much time on the\nethical problem, get after the problems that really affect the\npeople of this country."',
      index: 642,
    },
    {
      Author: " --Michael Brunner",
      Quote:
        '"I never got into fights with kids about whose dad is bigger and\nwho can beat up who.  What am I going to say?  My dad can kill\nyour dad when he\'s asleep?"',
      index: 643,
    },
    {
      Author: " --from WKRP",
      Quote: '"Modern society as we know it is doomed to a painful death."',
      index: 644,
    },
    {
      Author: " --from Dragnet",
      Quote: '"It wasn\'t murder... it was a civic improvement."',
      index: 645,
    },
    {
      Author: " --Peter David",
      Quote: "\"We're all of us dying... from the moment we're born.\"",
      index: 646,
    },
    {
      Author: " --from V",
      Quote: '"Vulnerabilities, my dear priest, are exploitable weaknesses."',
      index: 647,
    },
    {
      Author: " --from V",
      Quote:
        "\"You're just as free as the leash you're on.  You tug it too\nhard, and they'll hang you by it.\"",
      index: 648,
    },
    {
      Author: " --Jeph Loeb",
      Quote:
        '"The struggle for life is the only struggle.  If this is what you\nget for livin\' on borrowed time... what good is living?"',
      index: 649,
    },
    {
      Author: " --Nostradamus",
      Quote:
        '"After there is great trouble among mankind, a greater one is\nprepared.  The great mover of the universe will renew time, rain,\nblood, thirst, famine, steel weapons and disease.  In the\nheavens, a fire seen."',
      index: 650,
    },
    {
      Author: " --Matt Wagner",
      Quote:
        '"Despair kinda smells like burnt hair.  Sounds great, but smells\nlousy.  Now fear... fear you can taste!  Let\'s see, fear kinda\ntastes like... like peaches, peaches covered with fresh bone\nmarrow."',
      index: 651,
    },
    {
      Author: " --from Star",
      Quote: '"If winning isn\'t important, why keep score?"',
      index: 652,
    },
    {
      Author: " --Friedrich Nietzsche",
      Quote: '"That which does not kill us makes us stronger."',
      index: 653,
    },
    {
      Author: " --from Marked",
      Quote:
        '"Hey Chico... the one thing no one\'s ever accused me of is being\nsane."',
      index: 654,
    },
    {
      Author: " --from Marked",
      Quote:
        '"One thought he was invincible, the other thought he could fly. \nThey were both wrong."',
      index: 655,
    },
    {
      Author: " --from Dragnet",
      Quote:
        '"I wouldn\'t be too surprised if the man gave into temptation,\ngrabbed her cash, did her in, and put her remains through the\nsausage grinder in the meat department."',
      index: 656,
    },
    {
      Author: " --from a",
      Quote: '"It\'s the right thing to do and the tasty way to do it."',
      index: 657,
    },
    {
      Author: " --Sanjay Singh",
      Quote:
        "\"Sometimes I lay awake at night and hear voices\n Voices making me listen and obey\n 'I shall do as you command great spirits'\n Madness is just a day away.\"",
      index: 658,
    },
    {
      Author: " --from Batman",
      Quote:
        "\"I'm only laughing on the outside\n My smile is only skin deep\n If you could see inside I'm only crying\n You might join me for a weep.\"",
      index: 659,
    },
    {
      Author: " --from Batman",
      Quote: '"You want to get nuts?  Come on... let\'s get nuts."',
      index: 660,
    },
    {
      Author: " --Spike Jones",
      Quote: "\"I can't stand it... It's driving me sane.\"",
      index: 661,
    },
    {
      Author: " --from Airplane",
      Quote:
        "\"Maybe in this mixed up, topsy turvy world of ours they should\ntake all the 'sane' people off the streets and lock them up and\nlet all the psychopaths out of the asylums to run the world.\"",
      index: 662,
    },
    {
      Author: " --from Evil",
      Quote: '"Someone\'s in my fruit cellar..."',
      index: 663,
    },
    {
      Author: " --The Box",
      Quote:
        '"Walking, walking on the tight-rope of insanity\nWalking, walking on the verge of losing your mind."',
      index: 664,
    },
    {
      Author: " --Sanjay Singh",
      Quote:
        '"If gods are supposed to be immortal and all knowing, and one who\nis immortal is one who never dies... how can they know it all and\nstill choose to live?"',
      index: 665,
    },
    {
      Author: " --Tony",
      Quote:
        '"Kind of get\'s you thinking, doesn\'t it?","The Real Estate Man"',
      index: 666,
    },
    {
      Author: " --Alan Grant",
      Quote:
        "\"I don't know where hell is... another dimension, perhaps, or\nanother plane of reality.  As for getting there... it's a choice\nbetween sinning and being tricked by demons!  It's a plane of\nevil... despair... and magic of the foulest kind.\"",
      index: 667,
    },
    {
      Author: " --Alan Grant",
      Quote:
        '"Demons don\'t play by the rules.  They lie and they cheat and\nthey stab in the back."',
      index: 668,
    },
    {
      Author: " --Alan Grant",
      Quote: '"I only want to sleep... and never wake."',
      index: 669,
    },
    {
      Author: " --Alan Grant",
      Quote:
        '"Blood is drawn!  I am impressed--though my hell-spawned powers\nwill heal it!  Besides... next to giving pain my favourite\nsport\'s to feel it."',
      index: 670,
    },
    {
      Author: " --Grant Morrison",
      Quote:
        "\"All I know is that you won't come back until they're all dead. \n'Eternity.'  Every last one of them.  Every man.  Every woman. \nEvery child.  Global massacre.  I dream about that day.  A planet\nof corpses.\"",
      index: 671,
    },
    {
      Author: " --Grant Morrison",
      Quote:
        '"Hell changes constantly but there are certain consistent\nlandmarks which always stay in the same relation to one another."',
      index: 672,
    },
    {
      Author: " --Grant Morrison",
      Quote:
        "\"I won't tell you again!  Don't look back!  In hell you never\nlook back!\"",
      index: 673,
    },
    {
      Author: "",
      Quote: '"Anyone who hates dogs and kids can\'t be all bad."',
      index: 674,
    },
    {
      Author: " --Edgar A",
      Quote: '"Immortality -- a fate worse than death."',
      index: 675,
    },
    {
      Author: " --Woody Allen",
      Quote: '"What if everything is an illusion and nothing exists?"',
      index: 676,
    },
    {
      Author: " --Isaiah",
      Quote:
        '"Woe unto them that call evil good, and good evil; that put\ndarkness for light, and light for darkness; who substitute bitter\nfor sweet, and sweet for bitter."',
      index: 677,
    },
    {
      Author: " --from The",
      Quote:
        '"Life is pain, anyone who tells you differently is selling\nsomething."',
      index: 678,
    },
    {
      Author: " --Oscar Wilde",
      Quote:
        '"Relations are simply a tedious pack of people, who haven\'t got\nthe remotest knowledge of how to live, nor the smallest instinct\nabout when to die."',
      index: 679,
    },
    {
      Author: " --Sanjay Singh",
      Quote: '"Sanity is an illness and rationality a disease."',
      index: 680,
    },
    {
      Author: " --from Spartacus",
      Quote: '"We who are about to die salute you!"',
      index: 681,
    },
    {
      Author: " --Sanjay Singh",
      Quote:
        '"Existence is within a single plane.  Reality on another.  When\nthe two intersect chaos starts and the repercussions can reap\nhavoc on what was once a peaceful society."',
      index: 682,
    },
    {
      Author: "",
      Quote:
        "\"It doesn't go out of style!  And you know why?  Because it will\nalways irritate parents!  It's a completely fool-proof\nexpression.\"",
      index: 683,
    },
    {
      Author: " --Arthur Byron",
      Quote:
        '"Knowing the whims and wisdoms of Fate enables one to know so\nmuch more, but in the main, all one must do to understand mortals\nis to observe them from a distance for a few millennia.  They\'re\nalmost always the same, everywhere."',
      index: 684,
    },
    {
      Author: " --Mark",
      Quote:
        '"The wet fish flies over the multi-mooned purple haze skies of\nthe cerebral vortex in every young boy\'s left hemispheric side of\na pig\'s brain.  (unless of course you place a slice of processed\ncheese on the wet brain of a young fish, in which case you would\nend up with a rather tasty water omelette.)","MEB"',
      index: 685,
    },
    {
      Author: "",
      Quote:
        '"If everything seems to be going well...\n You obviously don\'t know what the hell is going on!"',
      index: 686,
    },
    {
      Author: " --Grant Morrison",
      Quote:
        "\"He felt the hot impact of bullets.\n He heard the sound of chopping meat.\n He thought 'is that me?'\n ...and then he opened his eyes.\"",
      index: 687,
    },
    {
      Author: " --Howard Weinstein",
      Quote:
        '"It took hundreds of years and thousands of lives, but the\nUniverse finally taught me it\'s one and only lesson.  Existence\nis worthless."',
      index: 688,
    },
    {
      Author: " --Howard Weinstein",
      Quote:
        '"Death is a part of life, each individual should be permitted the\ntime to deal with it in his own chosen way."',
      index: 689,
    },
    {
      Author: " --Peter Milligan",
      Quote:
        '"The American Scream is the personification of the plague of\nmadness sweeping the states.  Only he\'s real."',
      index: 690,
    },
    {
      Author: " --Peter Milligan",
      Quote:
        '"Once I kept my mind occupied by hallucinating.  Now I can no\nlonger do even this... Rain and time have washed away my\nimagination.  The mud is caking my soul... And I come to realize\nit never existed.  Have no memory.  Am nothing... A blind and\nmindless mouth in the mud."',
      index: 691,
    },
    {
      Author: " --Peter Milligan",
      Quote:
        "\"Wizor told me I'd be sent to the area of madness, from where I'd\ntake over a human body.\"",
      index: 692,
    },
    {
      Author: " --Len Wein",
      Quote:
        '"There is an ancient legend which warns that, should we ever\nlearn our true origin, our universe will instantly be destroyed."',
      index: 693,
    },
    {
      Author: " --Douglas Adams",
      Quote:
        '"There is a theory which states that if ever for any reason\nanyone discovers what exactly the Universe is for and why it is\nhere it will instantly disappear and be replaced by something\neven more bizarre and inexplicable."',
      index: 694,
    },
    {
      Author: " --Keith Sharee",
      Quote:
        '"Be not afeard; the isle is full of noises,\n Sounds and sweet airs that give delight and hurt not.\n Sometimes a thousand twanging instruments\n Will hum about mine ears..."',
      index: 695,
    },
    {
      Author: " --Alan Moore",
      Quote:
        '"When you find yourself locked onto an unpleasant train of\nthought, heading for the places in your past where the screaming\nis unbearable, remember there\'s always madness.  Madness is the\nemergency exit."',
      index: 696,
    },
    {
      Author: "",
      Quote:
        "\"I don't know why.  You don't know why.  Most likely God don't\nknow why, either.  It's just Government business, that's all.\"",
      index: 697,
    },
    {
      Author: "",
      Quote:
        '"The world is full of Kings and Queens,\n Who blind your eyes and steal your dreams."',
      index: 698,
    },
  ];

  const Quotes = StringData[value].Quote.replace(/\r?\n|\r/g, " ");
  const author = StringData[value].Author;

  return (
    <View>
      <Text>{Quotes}</Text>
      {/* <Text>{}</Text> */}
      <Text style={styles.authorStyles}>{author}</Text>
    </View>
  );
};

export default Quotes;
const styles = StyleSheet.create({
  authorStyles: {
    textAlign: "center",
  },
});

//stringWithLineBreaks.replace(/(\r\n|\n|\r)/gm, "");//remove those line breaks
//replace(/\r?\n|\r/g, " "); /* replace all newlines with a space */
