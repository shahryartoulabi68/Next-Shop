
function PersianNumber(num) {
    if (typeof num !== "number") return "";

    // تبدیل به رشته و اضافه کردن کاما بین هر سه رقم
    let formattedNumber = num.toLocaleString("en-US");

    // تبدیل اعداد لاتین به فارسی
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    formattedNumber = formattedNumber.replace(/[0-9]/g, (digit) => persianDigits[digit]);

    return formattedNumber;
}

export default PersianNumber
