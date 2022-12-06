//no.2
function biayaOngkir(jarak) {
  if (jarak > 2) {
    ongkir = (jarak - 2) * 3000 + 5000;
  } else if (jarak < 2) {
    ongkir = 5000;
  }
}

function ArkFood(harga, voucher, jarak, pajak) {
  if (pajak == true) {
    totalPajak = (harga * 5) / 100;
  } else if (pajak == false) {
    totalPajak = 0;
  }
  if (voucher == "ARKFOOD5" && harga >= 50000) {
    diskon = (harga * 50) / 100;
    if (diskon >= 50000) {
      subTotal = harga - 50000 + ongkir + totalPajak;
      console.log(
        "Harga : " +
          harga +
          "\n" +
          "Potongan : 50000" +
          "\n" +
          "Biaya Antar : " +
          ongkir +
          "Pajak : " +
          totalPajak +
          "\n" +
          "Sub Total : " +
          subTotal
      );
    } else if (diskon < 50000) {
      subTotal = harga - diskon + ongkir + totalPajak;
      console.log("Harga : " + harga);
      console.log("Potongan : " + diskon);
      console.log("Biaya Antar : " + ongkir);
      console.log("Pajak : " + totalPajak);
      console.log("Sub Total : " + subTotal);
    }
  } else if (voucher == "DITRAKTIIRDEMY" && harga >= 25000) {
    diskon = (harga * 60) / 100;
    if (diskon >= 30000) {
      subTotal = harga - 30000 + ongkir + totalPajak;
      console.log("Harga : " + harga);
      console.log("Potongan : 30000 ");
      console.log("Biaya Antar : " + ongkir);
      console.log("Pajak : " + totalPajak);
      console.log("Sub Total : " + subTotal);
    } else if (diskon < 30000) {
      subTotal = harga - diskon + ongkir + totalPajak;
      console.log("Harga : " + harga);
      console.log("Potongan : " + diskon);
      console.log("Biaya Antar : " + ongkir);
      console.log("Pajak : " + totalPajak);
      console.log("Sub Total : " + subTotal);
    }
  } else {
    subTotal = harga - ongkir - totalPajak;
    console.log("Harga : " + harga);
    console.log("Biaya Antar : " + ongkir);
    console.log("Pajak : " + totalPajak);
    console.log("Sub Total : " + subTotal);
  }
}

ArkFood(75000, "ARKFOOD5", biayaOngkir(5), true);
