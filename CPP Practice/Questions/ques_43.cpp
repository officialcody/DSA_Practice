// Calculate the factorial of a number

#include<iostream>
using namespace std;

int main(){
  int number;
  cout << "Enter a number: ";
  cin >> number;

  int factorial = 1;
  for(int i=1;i<=number;i++){
    factorial *=i;
  }
  cout << "Factorial is: " << factorial;
}