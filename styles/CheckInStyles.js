export const CheckIn = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  checkInButton: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#28a745",
    borderRadius: 5,
    alignItems: "center",
  },
  checkOutButton: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#dc3545",
    borderRadius: 5,
    alignItems: "center",
  },
  trackCheckInsButton: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
});
