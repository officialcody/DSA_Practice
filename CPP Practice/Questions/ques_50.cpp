// Print a given number using a function call

#include<iostream>
using namespace std;

void print_number(int number){
  cout << number << endl;
}

int main(){
  int number;
  cout << "Enter a number: ";
  cin >> number;
  print_number(number);
}