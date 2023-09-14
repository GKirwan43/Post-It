export async function getPosts() {
    try {
        const res = await fetch("http://localhost:3000/api/posts/getPosts", {
            method: "GET",
        });
        const data = await res.json();

        const result = res.ok
        ? data
        : { error: data };
      
        return result;
    } catch (error) {
      return { error: "Could not recieve posts."};
    }
}

export async function createPost(title: string, post: string) {
    try {
        const res = await fetch("http://localhost:3000/api/posts/createPost", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                post: post,
            })
        });
        const data = await res.json();

        return { ok: res.ok, error: data };
    } catch (error) {
      return { error: "Error creating post." }
    }
}