import catJump from "../../assets/images/png/cat-jump.png";
import catCatch from "../../assets/images/png/cat-catch-dot.png";
import dotMachine from "../../assets/images/png/dot-machine.png";
import poolCat from "../../assets/images/png/pool-cat.png";
import machineCat from "../../assets/images/png/machine-cat.png";
import catchCat from "../../assets/images/png/catch-cat.png";
import winMachine from "../../assets/images/png/win-machine.png";

export const NAVBAR_DATA_LIST = [
    { title: "WHITEPAPER", url: "#" },
    { title: "ACCOUNT LOGIN", url: "#" },
]
export const SOCIAL_MEDIA_DATA_LIST = [
    { icon: "twitter", url: "https://x.com/i/flow/login" },
    { icon: "telegram", url: "https://core.telegram.org/blackberry/login" },
]
export const HERO_DATA_LIST = [
    { image: catJump, title: "Be Part", subTitle: "of the Red Dot Chase", description: "Purrticipate now and we’ll catch da red dot and unlock cheezburgerz for all!" },
    { image: catCatch, title: "Win Big", subTitle: "Catch the Red Dot,", description: "Every week we will use the pool to catch da red dot. When the timer hits zero, the red dot is caught and we get the jackpot" },
    { image: dotMachine, title: "Fund", subTitle: "the Red Dot Machine", description: "To catch da red dot, we need the ultimate Red Dot Mashien! By pooling our moneys, we can build this incredible contraption that will finally catch the red dot and reveal its delicious secrets" },
]
export const MASSIVE_BURGER_DATA_LIST = [
    { title: "Buy", subTitle: "Join da chase", description: "Pool ur moneys with hoomins and catfrens" },
    { title: "Hold", subTitle: "Watch da pool grow", description: "See da moneys increase as moar join" },
    { title: "EARN", subTitle: "Catch da jackpot", description: "Win da ultimate prize when da red dot is caught!" },
]
export const WHAT_CAT_MONEY_DATA_LIST = ["It’s where the community, both cats and their hoomins, pool their resources—catnip, fish bones, and crypto—to fund the ultimate mission: building the Red Dot Catching Machine. Each week, the cats build a new machine to catch the elusive red dot, leading to big jackpots and growing rewards", "Drawing inspiration from the fascinating behavior of our feline friends and the latest advancements in blockchain technology, CatMoney Catch brings a unique twist to DeFi", "The brilliance of CatMoney Catch lies in its cyclical jackpot system", ", participants pool their resources to fund the Red Dot Catching Machine", "When the machine is built and the red dot is caught, one or two lucky winners claim a majority of the jackpot, while the rest are distributed to token holders", "The pool then resets, and the chase begins again, ensuring continuous engagement and opportunities to win", "And each month, a special bonus machine is constructed with an even bigger jackpot", "This grand monthly event offers participants the chance to win massive rewards"]
export const HOW_IT_WORKS_DATA_LIST = [
    [
        [
            { image: poolCat, number: "1", title: "Join the pool", description: "Cats gather their catnip and fish bones, while hoomins contribute their crypto to the weekly pool" },
            { image: machineCat, number: "2", title: "Build the Machine", description: "Watch as the community’s contributions fund the construction of the Red Dot Catching Machine" },
        ]
    ],
    [
        [
            { image: catchCat, number: "3", title: "Catch the Red Dot", description: "When the machine is complete, the red dot is caught, and the jackpot is awarded to one or two lucky winners" },
            { image: winMachine, number: "4", title: "Repeat and Win More", description: "The pool resets, and a new machine is built the following week. Every month, a special bonus machine with a larger jackpot is also constructed." },
        ]
    ],
]