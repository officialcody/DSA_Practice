// Print all factors of a number

#include<iostream>
using namespace std;

int main(){
  int number;
  cout << "Enter a number: ";
  cin >> number;
  cout << "Factors are: ";
  for(int i=1;i<=number;i++){
    if(number%i==0){
      cout << i << " ";
    }
  }
  return 0;
}