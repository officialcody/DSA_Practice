// Check whether a number is armstrong number
// 153 = 1*1*1 + 3*3*3 + 5*5*5 = 1 + 125 + 27 = 153

#include<iostream>
using namespace std;

int main(){
  int number;
  cout << "Enter a number: ";
  cin >> number;
  int sum=0;
  while(number > 0){
    int lastDigit = number%10;
    sum += lastDigit * lastDigit * lastDigit;
    number = number / 10;
  }
  if(sum == number){
    cout << "It is an armstrong number";
  } else {
    cout << "It is not an armstrong number";
  }
}