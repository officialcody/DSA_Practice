// Reverse a number

#include<iostream>
using namespace std;

int main(){
  int number;
  cout << "Enter a number to be reversed: ";
  cin >> number;

  int reverse=0;
  while(number>0){
    int lastDigit = number % 10;
    reverse = reverse*10 + lastDigit;
    number = number/10;
  }
  cout << "Reversed number is: " << reverse;
}