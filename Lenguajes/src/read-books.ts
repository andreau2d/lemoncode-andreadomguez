class book  {
    title: string;
    isRead: boolean;
    constructor(title: string, isRead: boolean){
        this.title = title;
        this.isRead = isRead;
    }
};

function isBookRead(books : Array<book>, titleToSearch : string) {
    const book = books.find(book => book.title === titleToSearch);
    return book ? book.isRead : false;
}


const booksObject = [
    new book("Harry Potter y la piedra filosofal", true),
    new book("Canción de hielo y fuego", false),
    new book("Devastación", true)
];

const booksArray = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];


console.log(isBookRead(booksArray, "Devastación")); //expected: true
console.log(isBookRead(booksArray, "Canción de hielo y fuego")); //expected:  false
console.log(isBookRead(booksArray, "Los Pilares de la Tierra")); //expected:  false

console.log(isBookRead(booksObject, "Devastación")); //expected: true
console.log(isBookRead(booksObject, "Canción de hielo y fuego")); //expected:  false
console.log(isBookRead(booksObject, "Los Pilares de la Tierra")); //expected:  false
