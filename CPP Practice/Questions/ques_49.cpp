// Print sum of 2 numbers using a fuction

#include<iostream>
using namespace std;

int add(int number1, int number2) {
  return number1 + number2;
}

int main(){
  int number_1, number_2;
  cout << "Enter two numbers: ";
  cin >> number_1 >> number_2;

  cout << add(number_1, number_2) << endl;
}