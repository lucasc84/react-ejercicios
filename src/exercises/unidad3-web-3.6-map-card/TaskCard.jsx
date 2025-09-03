export default function TaskCard({task}) {
    return (
<article style={{border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem'}}>
    <h3>{task.name}</h3>
    </article>
    )
    }