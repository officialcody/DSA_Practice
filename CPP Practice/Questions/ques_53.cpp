// Print factorial of a number using a function

#include<iostream>
using namespace std;

void calculateFactorial(int number){
  int factorial = 1;
  for(int i=number;i>0;i--){
    factorial *= i;
  }
  cout << "Factorial of " << number << " is " << factorial;
}

int main(){
  int number;
  cout << "Enter a number: ";
  cin >> number;

  calculateFactorial(number);
}