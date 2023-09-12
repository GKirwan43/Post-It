export async function getPosts() {
    try {
        const res = await fetch("http://localhost:3000/api/posts/getPosts", {
            method: "GET",
        }).then((res) => res.json());

        return res;
    } catch (error) {
      return {"error": error};
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

        return res as Response;
    } catch (error) {
      return error as Response;
    }
}