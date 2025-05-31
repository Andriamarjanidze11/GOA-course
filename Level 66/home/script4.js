class User {
    constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    }

    changePassword(newPassword) {
        this.password = newPassword;
        console.log("Password successfully updated.");
    }

    getDetails() {
        return {
            username: this.username,
            email: this.email
    };
    }
}

const user1 = new User("Andria", "andria@example.com", "securePass123");

user1.changePassword("newSecurePass456");

console.log(user1.getDetails());