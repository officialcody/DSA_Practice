// Print n terms of fibonacci series

#include<iostream>
using namespace std;

void printFibonacciSeries(int number){
  int a=0;
  int b=1;
  int current_factor = 0;
  cout << a << " " << b << " ";
  for(int i=3;i<=number;i++){
    current_factor = a + b;
    cout << current_factor << " ";
    a = b;
    b = current_factor;
  }
}

int main(){
  int number;
  cout << "Enter a number: ";
  cin >> number;

  printFibonacciSeries(number);
}