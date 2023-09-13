export async function createAccount(username: string, email: string, password: string, confirmPassword: string) {
    try {
        const res = await fetch("http://localhost:3000/api/auth/createAccount", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            })
        });

        return res as Response;
    } catch (error) {
        return error as Response;
    }
}

export async function login(username: string, password: string) {
    try {
        const res = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
            }),
        });

        return res as Response;
    } catch (error) {
        return error as Response;
    }
}