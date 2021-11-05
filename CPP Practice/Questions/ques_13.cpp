// Program to input only positive integers
#include<iostream>
using namespace std;

int main() {
  int number;
  cin >> number;
  int sum = 0;
  while(number >=0){
    sum += number;
    cout << "Sum is: " << sum << endl;
    cin >> number;
  }
  cout << "Final Sum is: " << sum << endl;
  return 0;
}