    // User Data (Demo)
    const user = {
      accountNumber: "123456789",
      name: "Nisha",
      balance: 5000,
      pin: "1234",
      phone: "9876543210",
      kyc: { aadhaar: "", pan: "", address: "" }
    };

    // Display User Info
    document.getElementById('userInfo').innerText =` Welcome, ${user.name} (Acc no: ${user.accountNumber}`;

    function showBalance() {
      document.getElementById('outputArea').innerHTML = `<p class="text-green-700 font-semibold">Your balance is ₹${user.balance.toFixed(2)}</p>`;
    }

    function showCredit() {
      document.getElementById('outputArea').innerHTML = `
        <input id="creditAmount" type="number" placeholder="Amount to credit" class="border rounded px-3 py-2 w-full mb-2" />
        <button onclick="creditMoney()" class="bg-green-600 text-white py-2 rounded w-full">Credit</button>
      `;
    }

    function creditMoney() {
      const amt = parseFloat(document.getElementById('creditAmount').value);
      if (isNaN(amt) || amt <= 0) {
        alert("Please enter a valid amount");
        return;
      }
      user.balance += amt;
      showBalance();
    }


    function showDebit() {
      document.getElementById('outputArea').innerHTML = `
        <input id="debitAmount" type="number" placeholder="Amount to debit" class="border rounded px-3 py-2 w-full mb-2" />
        <button onclick="debitMoney()" class="bg-red-600 text-white py-2 rounded w-full">Debit</button>
      `;
    }
    showDebit();

    function debitMoney() {
      const amt = parseFloat(document.getElementById('debitAmount').value);
      if (isNaN(amt) || amt <= 0) {
        alert("Please enter a valid amount");
        return;
      }
      if (amt > user.balance) {
        alert("Insufficient balance");
        return;
      }
      user.balance -= amt;
      showBalance();
    }

    function showPinUpdate() {
      document.getElementById('outputArea').innerHTML = `
        <input id="newPin" type="password" maxlength="4" placeholder="Enter new 4-digit PIN" class="border rounded px-3 py-2 w-full mb-2" />
        <button onclick="updatePin()" class="bg-yellow-600 text-white py-2 rounded w-full">Update PIN</button>
      `;
    }

    function updatePin() {
      const newPin = document.getElementById('newPin').value;
      if (!/^d{4}$/.test(newPin)) {
        alert("PIN must be exactly 4 digits");
        return;
      }
      user.pin = newPin;
      alert("PIN updated successfully");
      document.getElementById('outputArea').innerHTML = "";
    }

    function showPhoneUpdate() {
      document.getElementById('outputArea').innerHTML = `
        <input id="newPhone" type="tel" maxlength="10" placeholder="Enter new 10-digit phone number" class="border rounded px-3 py-2 w-full mb-2" />
        <button onclick="updatePhone()" class="bg-gray-600 text-white py-2 rounded w-full">Update Phone</button>
      `;
    }

    function updatePhone() {
      const phone = document.getElementById('newPhone').value;
      if (!/^d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number");
        return;
      }
      user.phone = phone;
      alert("Phone number updated");
      document.getElementById('outputArea').innerHTML = "";
    }

    function showKYC() {
      document.getElementById('outputArea').innerHTML = `
        <input id="aadhaar" type="text" maxlength="12" placeholder="Aadhaar Number (12 digits)" class="border rounded px-3 py-2 w-full mb-2" />
        <input id="pan" type="text" maxlength="10" placeholder="PAN Number (10 chars)" class="border rounded px-3 py-2 w-full mb-2" />
        <textarea id="address" placeholder="Address" class="border rounded px-3 py-2 w-full mb-2"></textarea>
        <button onclick="updateKYC()" class="bg-indigo-700 text-white py-2 rounded w-full">Submit KYC</button>
      `;
    }

    function updateKYC() {
      const aadhaar = document.getElementById('aadhaar').value.trim();
      const pan = document.getElementById('pan').value.trim();
      const address = document.getElementById('address').value.trim();

      if (aadhaar.length !== 12 || pan.length !== 10 || address.length === 0) {
        alert("Please enter valid KYC details");
        return;
      }

      user.kyc = { aadhaar, pan, address };
      alert("KYC updated successfully");
      document.getElementById('outputArea').innerHTML = "";
    }


