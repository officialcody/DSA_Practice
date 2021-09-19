'''
###
### QUESTION: Write a program that uses input to prompt a user for hours and rate per hour to compute gross pay.
###
'''

hours = input("Enter hours: ")
rate = input("Enter rate: ")
gross_pay = float(hours) * float(rate)
print('Gross Pay:', gross_pay)