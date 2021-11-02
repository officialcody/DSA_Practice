// Temperature Conversion from Fahrenheit to Celsius

#include<bits/stdc++.h>
using namespace std;

int main() {
  int fahrenheit;
  cin >> fahrenheit;
  int celsius = (fahrenheit - 32) * 5 / 9;
  cout <<  celsius << endl;
}