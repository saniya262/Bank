function loginuser(){
    window.location='./login.html';
}

function registeruser(){
    window.location='./reg.html';
}

function register(event) {
    event.preventDefault();  

    let accno = document.getElementById('accno').value;
    let username = document.getElementById('username').value;
    let pass = document.getElementById('pass').value;
    let balance=0;

    let regobj = {
        user: username,
        accountno: accno,
        password: pass,
        balance:balance
    };

    if (localStorage.getItem(regobj.accountno)) {
        alert("User Already Registered");
    } else if (regobj.user === "" || regobj.accountno === "" || regobj.password === "") {
        alert("Please fill all the fields");
    } else {
        localStorage.setItem(regobj.accountno, JSON.stringify(regobj));
        alert("Registration Successful");
        window.location = './login.html'; 
    }
}

function login(event){
    event.preventDefault();  

    let Accntno = document.getElementById('Accno').value;
    let Pass = document.getElementById('Passwrd').value;

    if (Accntno in localStorage) {
        let out = JSON.parse(localStorage.getItem(Accntno));

        if (Accntno === '' || Pass === '') {
            alert("Please fill the fields");
        } else if (Accntno === out.accountno && Pass === out.password) {
            alert("Login Successful");
            window.location='./deposit.html';
        } else {
            alert("Please fill the correct account number and password");
        }
    } else {
        alert("User not Registered");
    }
}

function deposite() {

     let Accno = document.getElementById('dacno').value
    let amount = document.getElementById('damnt').value

   

    if (Accno in localStorage) {
        let Accountdetails = JSON.parse(localStorage.getItem(Accno))
        let balanceAmount = parseInt(Accountdetails.balance)
        let depositeAmount = parseInt(amount);

       

        if (depositeAmount<=0) {
            alert("Value cannot be empty or negative")
        } else {
            balanceAmount = balanceAmount + depositeAmount
            Accountdetails.balance = balanceAmount
            localStorage.setItem(Accno, JSON.stringify(Accountdetails))
            
            

           
            alert(`You have deposited ${depositeAmount}. Your current balance is ${balanceAmount}.`);
        }
    } else {
        alert("Incorrect Account number");
    }
}






function withdraw(){

    let withdrawAmount = document.getElementById('withamt').value
    let withdrawAccno = document.getElementById('withacc').value

    if (withdrawAccno in localStorage) {
        let Account = JSON.parse(localStorage.getItem(withdrawAccno))
        if (withdrawAmount <= Account.balance) {
            
            alert(`bank balance before withdrawal ${Account.balance}`)
            alert(`Withdraw amount ${withdrawAmount}`)
            Account.balance -= withdrawAmount
        
            localStorage.setItem(withdrawAccno, JSON.stringify(Account))

            
            alert("your amount  is successfully withdrawn")
            alert(`After withdrawal your account balance is ${Account.balance}`)
        }
        else{
            alert("insufficient balance")
        }
    }
    else{
        alert("incorrect account number")

        
    }
}


function logout(){

    localStorage.clear()
    window.location='./index.html'
}