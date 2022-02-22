function convertDateTime(datetime) {
  return datetime.toLocaleString("id-ID", { timeZone: "Asia/Jakarta", dateStyle: "long", timeStyle: "long" });
}

module.exports = convertDateTime;
