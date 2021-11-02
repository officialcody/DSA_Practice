// Prime numbers till n

#include<bits/stdc++.h>
using namespace std;

bool isPrime(int number);

int main() {
  int number;
  cin >> number;
  for(int i=2;i<=number;i++){
    if(isPrime(i)){
      cout << i << " ";
    }
  }
}

bool isPrime(int number){
  if(number <= 1){
    return false;
  }

  for(int i=2;i<number;i++){
    if(number%i==0){
      return false;
    }
  }
  return true;
}