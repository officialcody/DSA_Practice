// Print first n terms of fibonacci series starting with 0 , 1

#include<iostream>
using namespace std;

int main(){
  int number;
  cout << "Enter a number: ";
  cin >> number;

  if(number == 1){
    cout << "0";
  } else if(number == 2){
    cout << "0 1";
  } else {
    int current_factor=0, a=0,b=1;
    cout << a << " " << b << " ";
    for(int i=3;i<=number;i++){
      current_factor = a+b;
      cout << current_factor << " ";
      a = b;
      b = current_factor;
    }
    // while(i <= number){
    //   current_factor = a+b;
    //   cout << current_factor << " ";
    //   a = b;
    //   b = current_factor;
    //   i++;
    // }
  }
}