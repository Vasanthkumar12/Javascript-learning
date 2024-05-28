let user = {
    name: 'Vasanthkumar',
    address: {
        door_no: '3/47',
        village: 'Keel Endappatti',
        post: 'padi',
        taluk: 'palacode',
        district: 'dharmapuri'
    },
    email: 'vasanth23402@gmail.com',
    password: 'JS@vasanth11',

    family_members: ['Munusamy', 'Muthuvedi', 'Bharathi', 'Ranjithkumar', 'Vasanthkumar'],
    
    login: function(){
        console.log("Login Completed => your email: 'vasanth23402@gmail.com', password: 'JS@vasanth11'")
    },
    
    sign_up() {
        console.log("Signup Completed => your email: 'vasanth23402@gmail.com', password: 'JS@vasanth11'")
    }
}

console.log("User Name = " + user.name)
console.log("Password = " + user.password)
console.log("Address = " + user.address.village)
user.login()
user.sign_up()

user.height = '150cm',
user.weight = '50kg'