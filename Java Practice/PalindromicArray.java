import java.util.Scanner;

public class PalindromicArray {
  public static void main(String [] args){
    Scanner scan = new Scanner(System.in);
    int T = scan.nextInt();
    while(T-- > 0){
      int n = scan.nextInt();
      int [] a = new int[n];
      for(int i=0;i<n;i++){
        a[i] = scan.nextInt();
      }
      System.out.println(palinArray(a, n));
    }
    scan.close();
  }

  public static int palinArray(int a[], int n){
    for(int i=0;i<n;i++){
      if(isNotPalindrome(a[i])) {
        return 0;
      }
    }
    return 1;
  }

  public static boolean isNotPalindrome(int value){
    char [] values = String.valueOf(value).toCharArray();
    for(int i=0;i<values.length;i++){
      if(values[i] != values[values.length - 1 - i]){
        return true;
      }
    }
    return false;
  }
}
