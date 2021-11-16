// Check if a number is prime

#include<iostream>
using namespace std;

int main() {
  int number;
  cout << "Enter a number: ";
  cin >> number;
  
  bool is_prime = true;
  for(int i=2;i<number;i++){
    if(number%i==0){
      is_prime = false;
      break;
    }
  }
  if(is_prime){
    cout << "It is a prime number";
  } else {
    cout << "It is not a prime number";
  }
}