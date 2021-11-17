// Pascals Triangle
// where each term denotes nCr

#include<iostream>
using namespace std;

int calculateFatorial(int number){
  int factorial = 1;
  for(int i=1;i<=number;i++){
    factorial *= i;
  }
  return factorial;
}

int calculatenCr(int n, int r){
  int n_factorial = calculateFatorial(n);
  int r_factorial = calculateFatorial(r);
  int n_minus_r_factorial = calculateFatorial(n-r);

  return n_factorial/(n_minus_r_factorial*r_factorial);
}

void printPascalsTriangle(int number){
  for(int i=0;i<number;i++) {
    // for(int j=1;j<number-i;j++){
    //   cout << "  ";
    // }
    for(int j=0;j<=i;j++){
      cout << calculatenCr(i,j) << " ";
    }
    cout << endl;
  }
}

int main(){
  int number;
  cout << "Enter a number: ";
  cin >> number;
  printPascalsTriangle(number);
}