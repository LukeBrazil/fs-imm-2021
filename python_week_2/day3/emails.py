with open('email-list.txt') as file:
    content = file.read()
    list = content.split(',')
    unique_emails = []
    dup_emails = []
    for item in list:
        if item not in unique_emails:
            unique_emails.append(item)
        else:
            dup_emails.append(item)

print('********')
print(unique_emails)
print('********')
print(dup_emails)

with open('duplicate-free-emails.txt', 'a') as file:
    for item in unique_emails:
        file.write(item)
        file.write('\n')