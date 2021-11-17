// Calculate binomial coefficient

#include<iostream>
using namespace std;

int calculateFactorial(int number){
  int factorial = 1;
  for(int i=1;i<=number;i++){
    factorial *= i;
  }
  return factorial;
}

void calculateNCR(int n, int r){
  int n_factorial = calculateFactorial(n);
  int r_factorial = calculateFactorial(r);
  int n_minus_r_factorial = calculateFactorial(n-r);
  cout << "nCr: of n " << n  << " and r " << r << " is: " << (n_factorial / (n_minus_r_factorial*r_factorial));
}

int main(){
  int n, r;
  cout << "Enter n and r to calculate nCr: ";
  cin >> n >> r;

  calculateNCR(n, r);
}