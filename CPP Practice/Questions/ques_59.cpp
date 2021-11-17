// Write a program with a function to swap the values of 2 given integer variables.

#include<iostream>
#include<bits/stdc++.h>
using namespace std;

void swapVariableValues(int &number1, int &number2){
  int temp = number1;
  number1 = number2;
  number2 = temp;
}

int main(){
  int number1, number2;
  cout << "Enter two numbers: ";
  cin >> number1 >> number2;
  cout << "Initial values are a = " << number1 << " and b = " << number2 << endl;
  // swap(number1, number2);
  swapVariableValues(number1, number2);
  cout << "After swapping numbers are a = " << number1 << " and b = " << number2 << endl;
}