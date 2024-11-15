function isNationalIDValid(name, age, zip, password) {
    if (isNaN(name) && age <= 18 ||age >= 65 && zip >= 0 || zip <= 99999 && password.includes("qwerty" || "azerty" || "1234")) {
    } else {
      
    }
    
  }
  console.log(isNationalIDValid("", 18, 69100, "hello")); // Résultat attendu: false
  console.log(isNationalIDValid("John", 18, 69100, "amerty")); // Résultat attendu: true