// Check if a person is eligible to vote or not

#include<iostream>
using namespace std;

bool validateAge(int age){
  return age>=18?true:false;
}

int main(){
  int age;
  cout << "Enter the age of the person: ";
  cin >> age;
  if(validateAge(age)){
    cout << "Person is eligible to vote.";
  } else {
    cout << "Person is not eligible to vote.";
  }
}