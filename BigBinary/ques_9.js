/***
 * QUESTION: Extract the name of the book and the date borrowed by the user.
 * Note:
 * Return the book name and date if user has borrowed it from the library.
 * Book details will be given as object of array.
 * Each object will contain a field borrower.
 * Return a string like "Borrower Name" borrowed "book name" on "date".
 * Return No books borrowed if the user haven”t borrowed any book.
 * 
 * INPUT:
 *  const borrowedBooks = [
 *      { book: "Invisible Man", borrower: "oliver_smith", date: "10-May-2021", },
 *      { book: "The Boy Who Harnessed the Wind", borrower: "anna_smith", date: "16-March-2021", },
 *      { book: "The Book Thief", borrower: "sam_smith", date: "21-April-2020", },
 *  ];
 *  const userName = "oliver_smith";
 * 
 * OUTPUT:
 * oliver_smith borrowed "Invisible Man" on 10-May-2021
 */

function getBorrower(booksRecord, borrower){
    const bookDetails = booksRecord.find((book) => book.borrower === borrower);
    if(bookDetails){
        const { book, date } = bookDetails;
        return `${borrower} borrowed "${book}" on ${date}`;
    }
    return 'No books borrowed';
}

function checkTestCase(num,booksRecord, borrower){
    const result = getBorrower(booksRecord, borrower);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, [{
    book: "Invisible Man",
    borrower: "oliver_smith",
    date: "10-May-2021",
  },
  {
    book: "The Boy Who Harnessed the Wind",
    borrower: "anna_smith",
    date: "16-March-2021",
  },
  {
    book: "The Book Thief",
    borrower: "sam_smith",
    date: "21-April-2020",
  },], "oliver_smith");
checkTestCase(2, [{
    book: "Invisible Man",
    borrower: "oliver_smith",
    date: "10-May-2021",
  },
  {
    book: "The Boy Who Harnessed the Wind",
    borrower: "anna_smith",
    date: "16-March-2021",
  },
  {
    book: "The Book Thief",
    borrower: "sam_smith",
    date: "21-April-2020",
  },], "sam");
checkTestCase(3, [
    {
      book: "Invisible Man",
      borrower: "oliver_smith",
      date: "10-May-2021",
    },
    {
      book: "The Boy Who Harnessed the Wind",
      borrower: "anna_smith",
      date: "16-March-2021",
    },
    {
      book: "The Book Thief",
      borrower: "sam_smith",
      date: "21-April-2020",
    },
  ], "anna");
checkTestCase(4, [
    {
      book: "Invisible Man",
      borrower: "oliver_smith",
      date: "10-May-2021",
    },
    {
      book: "The Boy Who Harnessed the Wind",
      borrower: "anna_smith",
      date: "16-March-2021",
    },
    {
      book: "The Book Thief",
      borrower: "sam_smith",
      date: "21-April-2020",
    },
  ], "anna_smith");