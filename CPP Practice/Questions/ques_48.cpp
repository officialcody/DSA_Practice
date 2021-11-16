// Check whether a character is a vowel or a consonant

#include<iostream>
using namespace std;

int main(){
  char character;
  cout << "Enter an alphabet: ";
  cin >> character;
  if(tolower(character) == 'a' || tolower(character) == 'e' || tolower(character) == 'i' || tolower(character) == 'u' || tolower(character) == 'u'){
    cout << "It is a vowel";
  } else {
    cout << "It is a consonant";
  }
  return 0;
}