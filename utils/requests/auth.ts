export async function createAccount(username: string, email: string, password: string, confirmPassword: string) {
    try {
        const data = await fetch("http://localhost:3000/api/auth/createAccount", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            })
        }).then((res) => res.json());

        return { ok: data.errors === undefined, errors: data.errors }
    } catch (error) {
        return { error: "Error creating account" }
    }
}

export async function login(username: string, password: string) {
    try {
        const data = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
            }),
        }).then((res) => res.json());

        return { ok: data.errors === undefined, errors: data.errors }
    } catch (error) {
        return { error: "Error logging in" }
    }
}

export async function auth() {
    try {
        const res = await fetch("http://localhost:3000/api/auth", {
            method: "GET",
        })
        const data = await res.json();

        if (res.ok) {
            return data;
        } else {
            return { error: res.statusText }
        }
    } catch (error) {
        return { error: "Error authenticating" }
    }
}

export async function logout() {
    try {
        const res = await fetch("http://localhost:3000/api/auth", {
            method: "POST",
        })

        if (res.ok) {
            return;
        } else {
            return { error: res.statusText }
        }
    } catch (error) {
        return { error: "Error authenticating" }
    }
}