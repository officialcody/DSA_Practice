// Check if a given character is alphabet or not

#include<iostream>
using namespace std;

bool checkAlphabet(char character){
  int ascii_value = (int) toupper(character);
  return ascii_value >= 65 && ascii_value <= 90 ? true : false;
}

int main(){
  char character;
  cout << "Enter a character: ";
  cin >> character;
  // if(isalpha(character)){
  if(checkAlphabet(character)) {
    cout << "It is an alphabet.";
  } else {
    cout << "It is not an alphabet.";
  }
  return 0;
}