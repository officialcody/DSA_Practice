// Print all the prime numbers between 2 given numbers

#include<iostream>
using namespace std;

void print(int number){
  cout << number << " "; 
}

bool is_prime(int number){
  for(int i=2;i<number;i++){
    if(number%i == 0){
      return false;
    }
  }
  return true;
}

void findPrimeNumbers(int number1, int number2){
  for(int i=number1;i<=number2;i++){
    if(is_prime(i)){
      print(i);
    }
  }
}

int main(){
  int number1, number2;
  cout << "Enter 2 numbers: ";
  cin >> number1 >> number2;
  findPrimeNumbers(number1, number2);
}