import post from "./data.json"

function Main() {
    // console.log(post)

    const firstsEl = post.slice(0, 8)
    return (
        <main className="mainContainer">
            <div className="data">
                {firstsEl.map((item) => (
                    <div key={item.id} className="post">
                        <h2>{item.title}</h2>
                        <p>{item.body}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}


export { Main }