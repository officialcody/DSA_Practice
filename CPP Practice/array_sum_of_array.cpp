#include<iostream>
using namespace std;

class Solution{
public:
	int sum(int arr[], int n) {
	    int sum = arr[0];
	    for(int i=1;i<n;i++){
	        sum += arr[i];
	    }
	    return sum;
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
    int a[n];
    cout << "Enter each element of Array(seperated with space): " << endl;
    for(int i=0;i<n;i++) cin >> a[i];
    Solution ob;
    cout << ob.sum(a, n) << endl;
  }
}