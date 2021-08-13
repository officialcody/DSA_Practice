/***
 * QUESTION: Create a reminder function, which returns a reminder text from the message passed to it.
 * 
 * Note:
 *  Go through the test cases, to get an idea of expected keywords.
 * 
 * INPUT:
 *  const message = 'Remind me when I get home to check the mail';
 * 
 * OUTPUT:
 *  Check the mail
 */

/**
 * Returns extracted reminder text.
 *
 * @param {string} message message text
 * @return {string} result
 */
function extractReminderText(message) {
    const arrayOfWords = message.split(' ');
    const reminderKeywords = ['reminder', 'remind', 'reminders'];
    const connectionWords = ['me', 'about', 'to'];
    let reminderKeywordFound = false;
    let reminder = arrayOfWords.reduce((accumulator, currentValue, index) => {
      const value = currentValue.toLowerCase();
      if(reminderKeywordFound) {
        return connectionWords.includes(value) ? '' : `${accumulator} ${arrayOfWords[index]}`;
      }
      if(reminderKeywords.includes(value)){
        reminderKeywordFound = true;
      }
      return "";
    }, "");
    reminder = reminder.trim();
    return (reminder.charAt(0).toUpperCase() + reminder.slice(1));
}

function checkTestCase(num, message){
    const result = extractReminderText(message);
    console.log(`Test Case - ${num}`);
    console.log(`${result}`);
}

checkTestCase(1, 'Remind me when I get home to check the mail');
checkTestCase(2, 'I will call you back bye Hey remind me to call John back');
checkTestCase(3, 'Hey AI can you remind me to buy groceries');
checkTestCase(4, 'Remind office party');
checkTestCase(5, `Set Remind Game Night at Joe's place`);
checkTestCase(6, 'Hi there remind me about the meeting with Raj');
checkTestCase(7, `Reminders sent thank you card`);
checkTestCase(8, `Do one thing remind me about the assignment`);