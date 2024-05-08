const quizDB = [
    {
        question: "What is the time complexity of inserting an element at the end of a dynamic array (assuming no resizing is required)?",

        a: "O(1)",
        b: "O(log n)",
        c: "O(n)",
        d: "O(n log n)",
        ans: "ans1"

    },
    {
        question: "Which data structure is typically used to implement a queue?",

        a: "Array",
        b: "Linked List",
        c: "Stack",
        d: "Binary Tree",
        ans: "ans2"

    },
    {
        question: "What does BFS stand for in the context of graph traversal?",

        a: "Breadth-First Search",
        b: "Best-First Search",
        c: "Binary-First Search",
        d: "Backward-First Search",
        ans: "ans1"

    },
    {
        question: "Which sorting algorithm has the best average-case time complexity?",

        a: "Bubble Sort",
        b: "Merge Sort",
        c: "Insertion Sort",
        d: "Selection Sort",
        ans: "ans2"

    },
    {
        question: "What data structure is used in recursion to keep track of function calls?",

        a: "Queue",
        b: "Stack",
        c: "Tree",
        d: "Heap",
        ans: "ans2"

    },
    {
        question: "What is the space complexity of a binary search algorithm?",

        a: "O(1)",
        b: "O(log n)",
        c: "O(n)",
        d: "O(n log n)",
        ans: "ans1"

    },
    {
        question: "Which of the following is not a type of graph?",

        a: "Directed Graph",
        b: "Weighted Graph",
        c: "Cyclic Graph",
        d: "Undirected Graph",
        ans: "ans3"

    },
    {
        question: "What is the worst-case time complexity of quicksort?",

        a: "O(n)",
        b: "O(n log n)",
        c: "O(n^2)",
        d: "O(log n)",
        ans: "ans3"

    },
    {
        question: "What data structure does a priority queue internally use to maintain elements?",

        a: "Linked List",
        b: "Array",
        c: "Heap",
        d: "Binary Search Tree",
        ans: "ans3"

    },
    {
        question: "Which of the following is not a type of tree?",

        a: "Binary Tree",
        b: "Trie",
        c: "Linked List",
        d: "AVL Tree",
        ans: "ans3"

    }
];


const quiz = document.querySelector('.quiz');
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')

const submit = document.querySelector('#submit')
const answers = document.querySelectorAll('.ans_class')
const showScore = document.querySelector('#showScor')
// const scoreArea =document.querySelectorAll('.scoreArea')


let quizCount = 0;
let score = 0;

const loadQuiz = () => {
    const quizList = quizDB[quizCount]
    quiz.innerHTML = quizList.question

    option1.innerHTML = quizList.a
    option2.innerHTML = quizList.b
    option3.innerHTML = quizList.c
    option4.innerHTML = quizList.d
}

loadQuiz();


const getCheckAns = () => {
    let answer;
    answers.forEach((currAnsElem) => {

        if (currAnsElem.checked) {
            answer = currAnsElem.id
        }

    })
    return answer
}

const deSelect = ()=>{
    answers.forEach((currAnsElem) => currAnsElem.checked =false)

}



submit.addEventListener('click', () => {

    const checkAns = getCheckAns()
    console.log(checkAns)


    if (checkAns === quizDB[quizCount].ans) {

        score++
    }
    quizCount++;
    
    deSelect();

    if (quizCount < quizDB.length) {
        loadQuiz()
    } else {
        showScore.innerHTML = `
            <h3> You scored ${score} / ${quizDB.length}</h3>
            <button class="btn" onclick="location.reload()">Retry</button>
        `;
        showScore.classList.remove('scoreArea');
    }
})