#1
#Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
def abbrev_name(name):
    return '.'.join(x[0].upper() for x in name.split())

#2
#You get an array of numbers, return the sum of all of the positives ones
def positive_sum(arr):
    total = 0
    for num in arr:
        if num > 0:
            total += num
    return total

#3
#Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
def get_sum(a,b):
    return sum(range(min(a, b), max(a, b) + 1))

#4
#Given an array of integers, find the one that appears an odd number of times.
def find_it(seq):
    for i in seq:
        if seq.count(i)%2!=0:
            return i
        

#5
#Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized
def to_camel_case(text):
    removed = text.replace('-', ' ').replace('_', ' ').split()
    if len(removed) == 0:
        return ''
    return removed[0]+ ''.join([x.capitalize() for x in removed[1:]])