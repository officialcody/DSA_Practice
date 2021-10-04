#include<iostream>
using namespace std;

class Solution{
    public:
    string longest(string names[], int n) {
        int maxLength = names[0].length();
        string longestString = names[0];
        for(int i=1; i<n; i++){
            if(names[i].length() > maxLength){
                longestString = names[i];
                maxLength = longestString.length();
            }
        }
        return longestString;
    }
};

int main() {
  int t;
  cout << "Enter number of test cases: " << endl;
  cin >> t;
  while(t--) {
    int n, key;
    cout << "Enter number of elements in array: " << endl;
    cin >> n;
    string a[n];
    cout << "Enter each element of Array(seperated with space): " << endl;
    for(int i=0;i<n;i++) cin >> a[i];
    Solution ob;
    cout << ob.longest(a, n) << endl;
  }
}