//no. 1
function discount(jumlahMakanan, hargaMakanan) {
  let jumlah = jumlahMakanan * hargaMakanan;
  if (jumlah >= 60000) {
    potongHarga = (jumlah * 35) / 100;
    if (potongHarga > 50000) {
      subTotal = jumlah - 50000;
      console.log(
        "Total Harga : " +
          jumlah +
          "\n" +
          "Potongan : 50000 " +
          "\n" +
          "Sub Total : " +
          subTotal
      );
    } else if (potongHarga < 50000) {
      subTotal = jumlah - potongHarga;
      console.log(
        "Total Harga : " +
          jumlah +
          "\n" +
          "Potongan : " +
          potongHarga +
          "\n" +
          "Sub Total : " +
          subTotal
      );
    }
  } else if (jumlah < 60000) {
    potongHarga = 0;
    subTotal = jumlah;
    console.log(
      "Total Harga : " +
        jumlah +
        "\n" +
        "Potongan : " +
        potongHarga +
        "\n" +
        "Sub Total : " +
        subTotal
    );
  }
}
discount(4, 60000);
