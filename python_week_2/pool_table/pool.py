tables = []

class PoolTable:
    def __init__(self, table_number):
        self.table_number = table_number
        self.start_time = None
        self.end_time = None
        self.is_occupied = False

    def check_out(self):
        self.is_occupied = True

    def check_in(self):
        self.is_occupied = False

for i in range(1, 13):
    pool_table = PoolTable(i)
    tables.append(pool_table)

def display_tables():
    for index in range(0, len(tables)):
        pool_table = tables[index]
        print(f"Table Number: {pool_table.table_number} -- Occupation: {pool_table.is_occupied}")


def display_menu():
    print('************************************************')
    print("""
        Welcome to Charlie's Pool Hall!
        1. Display Tables
        2. Check out Table
        3. Check in Table
        """)
    print('************************************************')

while True:
    display_menu()
    choice = input('What would you like to do: ')
    if choice == '1':
        display_tables()
    elif choice == '2':
        display_tables()
        table_checkout_index = int(input('Which table would you like to check out?'))
        table = tables[table_checkout_index - 1]
        table.check_out()
    elif choice == '3':
        display_tables()
        table_checkin_index = int(input('Which table would you like to check in?'))
        table = tables[table_checkin_index - 1]
        table.check_in()


        
