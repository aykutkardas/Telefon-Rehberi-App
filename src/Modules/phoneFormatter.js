// input phone -> 05554443322
// output phone -> 0555 444 33 22
const phoneFormatter = (number) => {
    let phone = number.split('');
    if(phone.length === 11) {
      phone.splice(4, 0, ' ');
      phone.splice(8, 0, ' ');
      phone.splice(11, 0, ' ');
    }
    phone = phone.join('');

    return phone;
}

export default phoneFormatter;