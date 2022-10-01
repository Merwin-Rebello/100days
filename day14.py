#sfrom fcntl import LOCK_WRITE
import random
lower="abcdefghijklmnopqrstuvwxyz"
upper="ABCDEFGHIJKLMNOPQSTUVWXYZ"
numbers="0123456789"
symbols="!@#$%^&*()."

string= lower + upper + numbers + symbols
length=8
password="".join(random.sample(string,length))
print("Your new password is:"+password)