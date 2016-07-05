$(document).ready(function() {
    //quiz question array
    var questions = [{
        question: "What is Batman's real name?",
        choices: ["Albert Pennyworth", "Penguin", "Bruce Wayne", "Clark Kent"],
        qNum : 0,
        correct : 3,
        },
        {
        question: "Who is Batman's sidekick?",
        choices: ["Robin", "Harley Quinn", "Alfred", "Nightwing"],
        qNum : 1,
        correct : 1,
        },
        {
        question: "What was Barbara Gordon's nickname after she got shot by the Joker?",
        choices: ["The Watcher", "Oracle", "B", "Grayson"],
        qNum : 2,
        correct : 0,
        },
        {
        question: "After leaving his place by Batman's side, Dick Grayson took the name...",
        choices: ["Mini Joker", "Nightwing", "DeadlyNight", "Chris Tucker"],
        qNum : 3,
        correct : 2,
        },
        {
        question: "When was the first Batman movie released?",
        choices: ["1943", "1966", "1968", "2016"],
        qNum : 4,
        correct : 0,
    }];

    //global variables
    var numberCorrect = 0;
    var currentQuestion = 0;
  });
