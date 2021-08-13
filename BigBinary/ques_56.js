/***
 * QUESTION: Create a reminder function, which adds the given reminder to the specific day 
 * the user wants, based on the message passed.
 * 
 * Note:
 * All the inputs sentences will be in lower case.
 * Create a Map object with names of days as keys, and array of reminder strings as values.
 * Convert the Map object to an array, then JSON.stringify and return the output
 * Use the extractReminderText() given as an input to extract the reminder text from the message passed.
 * Remove the day keyword from the message. (tomorrow, today, monday etc)
 * Go through the test cases, to get an idea of expected keywords.
 * Week starts at Sunday.
 * Try out the question on Saturday, and make sure your solution works!
 * 
 * INPUT:
 *  const messageArray = ['hey there can you remind me to buy groceries tomorrow', 'hi, remind to take the medicine everyday'];
 * 
 * OUTPUT:
 *  [["sunday",["Take the medicine "]],["monday",["Take the medicine "]],["tuesday",["Take the medicine "]],["wednesday",["Take the medicine "]],["thursday",["Take the medicine "]],["friday",["Take the medicine "]],["saturday",["Buy groceries ","Take the medicine "]]]
 */

/**
 * Returns a list with days and their corresponding reminders.
 *
 * @param {Array.<string>} list list of reminders.
 * @function [<extractReminderText>] to be used to extract the reminder text
 * @returns {(Array.<{dayName: string, reminders: Array.<string>}>)} result
 */
function setReminder(messageArray, extractReminderText) {
    const reminders = new Map();
    const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    daysOfWeek.map(day => reminders.set(day, []));
    
    function formatAndSet(day, keyword, currentValue, newValue) {
      formattedNewValue = newValue.replace(keyword, "");
      reminders.set(day, [...currentValue, formattedNewValue]);
    }
    
    function handleDayKeywords(keyword, text) {
      const dayKeywords = {
        everyday: (text, keyword) => {
          daysOfWeek.map((day) => {
            formatAndSet(day, keyword, reminders.get(day), text);
          });
        },
        today: (text, keyword) => {
          const number = new Date().getDay();
          const today = daysOfWeek[number];
          formatAndSet(today, keyword, reminders.get(today), text);
        },
        tomorrow: (text, keyword) => {
          const number = new Date().getDay();
          const tomorrow = number === 6 ? daysOfWeek[0] : daysOfWeek[number + 1];
          formatAndSet(tomorrow, keyword, reminders.get(tomorrow), text);
        }
      };
      dayKeywords[keyword](text, keyword);
    }
    
    for(const message of messageArray) {
      const reminderText = extractReminderText(message);
      const arrayOfWords = reminderText.split(' ');
      const dayKeywords = ['everyday', 'today', 'tomorrow'];
      for(const value of arrayOfWords) {
        if(daysOfWeek.includes(value)){
          if(reminders.has(value)){
            formatAndSet(value, value, reminders.get(value), reminderText);
            break;
          }
        } else if(dayKeywords.includes(value)){
          handleDayKeywords(value, reminderText);
          break;
        }
      }
    }
    return JSON.stringify([...reminders]);
}

//NO TEST CASES