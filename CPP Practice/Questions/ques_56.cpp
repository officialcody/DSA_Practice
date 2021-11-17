// Find if a number is odd or even using a function

#include<iostream>
using namespace std;

bool is_even(int number){
  return number%2==0?true:false;
}

int main(){
  int number;
  cout << "Enter a number: ";
  cin >> number;
  if(number == 0){
    cout << "Its neither even nor odd";
  } else if(is_even(number)){
    cout << "It is an even number";
  } else {
    cout << "It is an odd number";
  }
  return 0;
}