// Print minimum and maximum among 3 numbers

#include<iostream>
#include <bits/stdc++.h>
using namespace std;

void printMinimum(int number1, int number2, int number3){
  if(number1 < number2){
    if(number1 < number3){
      cout << "Minimum number is: " << number1 << endl;
    } else {
      cout << "Minimum number is: " << number3 << endl;
    }
  } else if(number2 < number3){
    if(number2 < number1){
      cout << "Minimum number is: " << number2 << endl;
    } else {
      cout << "Minimum number is: " << number3 << endl;
    }
  }
}

void printMaximum(int number1, int number2, int number3){
  if(number1 > number2){
    if(number1 > number3){
      cout << "Maximum number is: " << number1 << endl;
    } else {
      cout << "Maximum number is: " << number3 << endl;
    }
  } else if(number2 > number3){
    if(number2 > number1){
      cout << "Maximum number is: " << number2 << endl;
    } else {
      cout << "Maximum number is: " << number3 << endl;
    }
  }
}

int main(){
  int number1, number2, number3;
  cout << "Enter 3 numbers: ";
  cin >> number1 >> number2 >> number3;
  printMaximum(number1, number2, number3);
  printMinimum(number1, number2, number3);
}