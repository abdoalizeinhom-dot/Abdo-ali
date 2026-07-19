def add(x, y):
    """جمع عددين"""
    return x + y

def subtract(x, y):
    """طرح عددين"""
    return x - y

def calculator():
    """حاسبة بسيطة للجمع والطرح"""
    print("===== حاسبة بسيطة =====")
    print("1. جمع")
    print("2. طرح")
    print("3. خروج")
    
    while True:
        choice = input("\nاختر العملية (1/2/3): ")
        
        if choice == '3':
            print("شكراً لاستخدامك الحاسبة!")
            break
        
        if choice in ('1', '2'):
            try:
                num1 = float(input("أدخل العدد الأول: "))
                num2 = float(input("أدخل العدد الثاني: "))
                
                if choice == '1':
                    result = add(num1, num2)
                    print(f"النتيجة: {num1} + {num2} = {result}")
                
                elif choice == '2':
                    result = subtract(num1, num2)
                    print(f"النتيجة: {num1} - {num2} = {result}")
            
            except ValueError:
                print("خطأ: أدخل أرقام صحيحة!")
        else:
            print("اختيار غير صحيح. حاول مرة أخرى.")

# تشغيل الحاسبة
if __name__ == "__main__":
    calculator()
