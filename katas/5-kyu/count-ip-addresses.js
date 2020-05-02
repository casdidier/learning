function ipToDecimal(ip) {
  let binary = '';
  // split on periods
  const octets = ip.split('.');
  octets.forEach(octet => {
    // convert each octet into binary 
    const binaryOctet = Number(octet).toString(2);
    // append to binary string
    binary += binaryOctet.padStart(8, '0');
  });

  // convert binary to decimal
  return parseInt(binary, 2);
}

function ipsBetween(start, end) {
  // convert to 32 bit integer
  return ipToDecimal(end) - ipToDecimal(start);
}

console.log(ipsBetween('10.0.0.0', '10.0.0.50') === 50);
console.log(ipsBetween('10.0.0.0', '10.0.1.0') === 256);
console.log(ipsBetween('20.0.0.10', '20.0.1.0') === 246);

}


console.log(ipsBetween('10.0.0.0', '10.0.0.50') === 50);
// console.log(ipsBetween('10.0.0.0', '10.0.1.0') === 256);
// console.log(ipsBetween('20.0.0.10', '20.0.1.0') === 246);
