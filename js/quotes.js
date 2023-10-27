const quotes = [
    {
        quote: 'It\'s about time. Time to shine.',
        author: 'NCT Mark',
    },
    {
        quote: 'Dreams are not about giving up, but about changing.',
        author: 'NCT Jisung',
    },
    {
        quote: 'Instead of looking for the meaning of life, let\'s give meaning to life to others.',
        author: 'NCT Jisung',
    },
    {
        quote: 'You might as well enjoy the pain that you cannot avoid. or Enjoy it if it\'s unavoidable',
        author: 'Robert S. Eliet',
    },
    {
        quote: 'As for me, all I know is that I know nothing.',
        author: 'Socrates',
    },
    {
        quote: 'The greatest weakness of all weaknesses is to fear too much to appear weak.',
        author: 'Jacques-Bénigne Bossuet',
    },
    {
        quote: 'It is not the strong one that wins, the one that wins is strong.',
        author: 'Franz Anton Beckenbauer',
    },
    {
        quote: 'Killing the dog does not cure the bite.',
        author: 'Abraham Lincoln',
    },
    {
        quote: 'Experience is the best of school masters, only the school fees are heavy.',
        author: 'Thomas Carlyle',
    },
    {
        quote: 'It ain\'t over till it\'s over.',
        author: 'Lawrence Peter Yogi Berra',
    },
    {
        quote: 'Je pense, donc je suis.',
        author: 'René Descartes',
    },
    {
        quote: 'I can calculate the movement of the stars, but not the madness of men.',
        author: 'Isaac Newton',
    },
]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author